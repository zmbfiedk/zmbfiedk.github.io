(() => {
	const CONFIG = {
		keyRepeatDelay: 150,
		touchThresholdPx: 40,
		touchVelocityThreshold: 0.35,
		wheelSwitchThreshold: 90,
		projectWheelSwitchThreshold: 36,
		scrollStepRatio: 0.88,
		preserveProjectSelectionOnSectionChange: true,
		animationDuration: 360,
		scrollDurationMin: 180,
		scrollDurationMax: 560,
	};

	const state = {
		sectionIndex: 0,
		projectIndex: 0,
		lastKeyTime: 0,
		lastWheelBoundaryAccum: 0,
		lastInputDirection: 0,
		scrollAnimationId: null,
		lastProjectTapTime: 0,
		lastProjectTapIndex: -1,
		ribbonScrollTimeoutId: 0,
		projectScrollTimeoutId: 0,
		projectAutoScrollUntil: 0,
		projectWheelAccum: 0,
	};

	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const dom = {
		body: document.body,
		ribbon: document.getElementById('xmbRibbon'),
		panels: document.getElementById('xmbPanels'),
		live: document.getElementById('xmbLive'),
		displayContent: document.getElementById('displayContent'),
		sectionTabs: Array.from(document.querySelectorAll('.xmb-section-tile[role="tab"]')),
		sectionPanels: Array.from(document.querySelectorAll('.xmb-panel[role="tabpanel"]')),
		projectSelector: document.querySelector('.project-selector'),
		projectList: document.getElementById('selectorGrid'),
		projectDisks: Array.from(document.querySelectorAll('.project-selector-box')),
		pageContentTargets: Array.from(document.querySelectorAll('.xmb-page-content[data-source]')),
	};

	if (!dom.ribbon || !dom.sectionTabs.length || !dom.sectionPanels.length) return;

	if (typeof window.initSiteShell === 'function') {
		window.initSiteShell();
	}

	dom.body.classList.add('js-enabled');

	function clamp(value, min, max) {
		return Math.max(min, Math.min(value, max));
	}

	function wrapIndex(value, length) {
		if (length <= 0) return 0;
		return ((value % length) + length) % length;
	}

	function activeSectionName() {
		return dom.sectionTabs[state.sectionIndex].dataset.section;
	}

	function activePanel() {
		return dom.sectionPanels[state.sectionIndex];
	}

	function isCompactCarousel() {
		return window.matchMedia('(max-width: 399px)').matches;
	}

	function isLoopRibbon() {
		return !window.matchMedia('(max-width: 767px)').matches;
	}

	function setLiveMessage(message) {
		if (!dom.live) return;
		dom.live.textContent = '';
		requestAnimationFrame(() => {
			dom.live.textContent = message;
		});
	}

	function getScrollAnimationDuration(distance) {
		return clamp((Math.abs(distance) * 0.55) + 180, CONFIG.scrollDurationMin, CONFIG.scrollDurationMax);
	}

	function cancelScrollAnimation(element, axis = 'top') {
		if (!element) return;
		const animationKey = axis === 'left' ? '__xmbScrollAnimationLeft' : '__xmbScrollAnimationTop';
		const animationId = element[animationKey] ?? null;
		if (animationId !== null) {
			cancelAnimationFrame(animationId);
			element[animationKey] = null;
		}
		if (state.scrollAnimationId === animationId) {
			state.scrollAnimationId = null;
		}
	}

	function easeOutCubic(t) {
		return 1 - Math.pow(1 - t, 3);
	}

	function animateScrollAlongAxis(element, axis, targetValue, duration = null) {
		if (!element) return;
		const scrollProperty = axis === 'left' ? 'scrollLeft' : 'scrollTop';
		const animationKey = axis === 'left' ? '__xmbScrollAnimationLeft' : '__xmbScrollAnimationTop';
		cancelScrollAnimation(element, axis);
		const startValue = element[scrollProperty];
		const delta = targetValue - startValue;
		if (Math.abs(delta) < 1 || prefersReducedMotion) {
			element[scrollProperty] = targetValue;
			return;
		}

		const resolvedDuration = duration ?? getScrollAnimationDuration(delta);
		const startTime = performance.now();
		const tick = (now) => {
			const progress = clamp((now - startTime) / resolvedDuration, 0, 1);
			element[scrollProperty] = startValue + (delta * easeOutCubic(progress));
			if (progress < 1) {
				element[animationKey] = requestAnimationFrame(tick);
				state.scrollAnimationId = element[animationKey];
			} else {
				element[animationKey] = null;
				state.scrollAnimationId = null;
			}
		};
		element[animationKey] = requestAnimationFrame(tick);
		state.scrollAnimationId = element[animationKey];
	}

	function animateScrollTo(element, targetTop, duration = null) {
		animateScrollAlongAxis(element, 'top', targetTop, duration);
	}

	function animateHorizontalScrollTo(element, targetLeft, duration = null) {
		animateScrollAlongAxis(element, 'left', targetLeft, duration);
	}

	function centerHorizontalItem(container, item) {
		if (!container || !item) return;
		const containerRect = container.getBoundingClientRect();
		const itemRect = item.getBoundingClientRect();
		const delta = (itemRect.left + (itemRect.width / 2)) - (containerRect.left + (containerRect.width / 2));
		const maxScrollLeft = Math.max(0, container.scrollWidth - container.clientWidth);
		const nextLeft = clamp(container.scrollLeft + delta, 0, maxScrollLeft);
		if (isLoopRibbon()) {
			cancelScrollAnimation(container, 'left');
			container.scrollTo({ left: nextLeft, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
			return;
		}
		animateHorizontalScrollTo(container, nextLeft);
	}

	function findCenteredRibbonTabIndex() {
		if (!dom.ribbon || !dom.sectionTabs.length) return state.sectionIndex;
		const ribbonRect = dom.ribbon.getBoundingClientRect();
		const ribbonCenter = ribbonRect.left + (ribbonRect.width / 2);

		let closestIndex = state.sectionIndex;
		let closestDistance = Number.POSITIVE_INFINITY;

		dom.sectionTabs.forEach((tab, index) => {
			const tabRect = tab.getBoundingClientRect();
			const tabCenter = tabRect.left + (tabRect.width / 2);
			const distance = Math.abs(tabCenter - ribbonCenter);
			if (distance < closestDistance) {
				closestDistance = distance;
				closestIndex = index;
			}
		});

		return closestIndex;
	}

	function findCenteredProjectIndex() {
		if (!dom.projectList || !dom.projectDisks.length) return state.projectIndex;
		const listRect = dom.projectList.getBoundingClientRect();
		const listCenterX = listRect.left + (listRect.width / 2);
		const listCenterY = listRect.top + (listRect.height / 2);

		let closestIndex = state.projectIndex;
		let closestDistance = Number.POSITIVE_INFINITY;

		dom.projectDisks.forEach((disk, index) => {
			const diskRect = disk.getBoundingClientRect();
			const diskCenterX = diskRect.left + (diskRect.width / 2);
			const diskCenterY = diskRect.top + (diskRect.height / 2);
			const distance = isCompactCarousel()
				? Math.abs(diskCenterX - listCenterX)
				: Math.abs(diskCenterY - listCenterY);

			if (distance < closestDistance) {
				closestDistance = distance;
				closestIndex = index;
			}
		});

		return closestIndex;
	}

	function updateRibbonEdgePadding() {
		if (!dom.ribbon || !dom.sectionTabs.length) return;
		if (isLoopRibbon()) {
			dom.ribbon.style.removeProperty('--xmb-ribbon-edge');
			return;
		}
		const referenceTab = dom.sectionTabs[state.sectionIndex] || dom.sectionTabs[0];
		if (!referenceTab) return;
		const edgePx = Math.max(0, (dom.ribbon.clientWidth - referenceTab.clientWidth) / 2);
		dom.ribbon.style.setProperty('--xmb-ribbon-edge', `${edgePx}px`);
	}

	function shortestCircularOffset(index, focus, length) {
		if (length <= 0) return 0;
		let offset = index - focus;
		if (offset > length / 2) offset -= length;
		if (offset < -length / 2) offset += length;
		return offset;
	}

	function centerVerticalItem(container, item) {
		if (!container || !item) return;
		const containerRect = container.getBoundingClientRect();
		const itemRect = item.getBoundingClientRect();
		const delta = (itemRect.top + (itemRect.height / 2)) - (containerRect.top + (containerRect.height / 2));
		const maxScrollTop = Math.max(0, container.scrollHeight - container.clientHeight);
		const targetTop = clamp(container.scrollTop + delta, 0, maxScrollTop);
		animateScrollTo(container, targetTop);
	}

	function centerProjectItem(container, item) {
		if (!container || !item) return;
		if (isCompactCarousel()) {
			centerHorizontalItem(container, item);
		} else {
			centerVerticalItem(container, item);
		}
	}

	function keepProjectItemInView(container, item) {
		if (!container || !item) return;
		const visibilityPadding = 28;

		if (isCompactCarousel()) {
			const left = item.offsetLeft;
			const right = left + item.offsetWidth;
			const viewportLeft = container.scrollLeft;
			const viewportRight = viewportLeft + container.clientWidth;

			if (left < viewportLeft + visibilityPadding) {
				animateHorizontalScrollTo(container, Math.max(0, left - visibilityPadding));
				return;
			}

			if (right > viewportRight - visibilityPadding) {
				const maxScrollLeft = Math.max(0, container.scrollWidth - container.clientWidth);
				const nextLeft = clamp(right - container.clientWidth + visibilityPadding, 0, maxScrollLeft);
				animateHorizontalScrollTo(container, nextLeft);
			}
			return;
		}

		const top = item.offsetTop;
		const bottom = top + item.offsetHeight;
		const viewportTop = container.scrollTop;
		const viewportBottom = viewportTop + container.clientHeight;

		if (top < viewportTop + visibilityPadding) {
			animateScrollTo(container, Math.max(0, top - visibilityPadding));
			return;
		}

		if (bottom > viewportBottom - visibilityPadding) {
			const maxScrollTop = Math.max(0, container.scrollHeight - container.clientHeight);
			const nextTop = clamp(bottom - container.clientHeight + visibilityPadding, 0, maxScrollTop);
			animateScrollTo(container, nextTop);
		}
	}

	function updateSectionVisuals() {
		updateRibbonEdgePadding();
		const loopMode = isLoopRibbon();
		const tabCount = dom.sectionTabs.length;
		const step = loopMode ? Math.max(108, Math.min(186, dom.ribbon.clientWidth * 0.24)) : 0;

		dom.sectionTabs.forEach((tab, index) => {
			const selected = index === state.sectionIndex;
			const circularOffset = shortestCircularOffset(index, state.sectionIndex, tabCount);
			const distance = Math.abs(circularOffset);
			const withinVisibleRange = distance <= 1;

			tab.classList.toggle('is-focused', selected);
			tab.classList.toggle('is-near', distance === 1);
			tab.setAttribute('aria-selected', selected ? 'true' : 'false');
			tab.tabIndex = selected ? 0 : -1;

			if (loopMode) {
				const x = circularOffset * step;
				const scale = selected ? 1.12 : Math.max(0.82, 1 - (distance * 0.08));
				const opacity = selected ? 1 : withinVisibleRange ? Math.max(0.4, 0.96 - (distance * 0.16)) : 0;
				const z = selected ? 30 : withinVisibleRange ? Math.max(2, 20 - distance) : 0;

				tab.style.setProperty('--xmb-ribbon-x', `${x.toFixed(2)}px`);
				tab.style.setProperty('--xmb-ribbon-scale', `${scale.toFixed(3)}`);
				tab.style.setProperty('--xmb-ribbon-z', `${z}`);
				tab.style.opacity = `${opacity.toFixed(3)}`;
				tab.style.visibility = (selected || withinVisibleRange) ? 'visible' : 'hidden';
				tab.style.pointerEvents = (selected || withinVisibleRange) ? 'auto' : 'none';
			} else {
				tab.style.removeProperty('--xmb-ribbon-x');
				tab.style.removeProperty('--xmb-ribbon-scale');
				tab.style.removeProperty('--xmb-ribbon-z');
				tab.style.removeProperty('opacity');
				tab.style.removeProperty('visibility');
				tab.style.removeProperty('pointer-events');
			}
		});

		dom.sectionPanels.forEach((panel, index) => {
			const visible = index === state.sectionIndex;
			panel.classList.toggle('is-active', visible);
			panel.setAttribute('aria-hidden', visible ? 'false' : 'true');
		});

		if (!loopMode) {
			centerHorizontalItem(dom.ribbon, dom.sectionTabs[state.sectionIndex]);
			requestAnimationFrame(() => {
				centerHorizontalItem(dom.ribbon, dom.sectionTabs[state.sectionIndex]);
			});
		}
		setLiveMessage(`${dom.sectionTabs[state.sectionIndex].querySelector('.xmb-title')?.textContent || 'Section'} section focused`);
	}

	function updateProjectVisuals(options = {}) {
		if (!dom.projectDisks.length) return;
		const shouldCenterSelected = options.centerSelected !== false;
		const maxIndex = dom.projectDisks.length - 1;
		const atStart = state.projectIndex === 0;
		const atEnd = state.projectIndex === maxIndex;
		if (dom.projectSelector) {
			dom.projectSelector.classList.toggle('at-start', atStart);
			dom.projectSelector.classList.toggle('at-end', atEnd);
		}

		dom.projectDisks.forEach((disk, index) => {
			const focused = index === state.projectIndex;
			const distance = Math.abs(index - state.projectIndex);
			const scale = focused ? 1.2 : Math.max(0.72, 1.02 - (distance * 0.12));
			const brightness = focused ? 1.08 : Math.max(0.74, 0.98 - (distance * 0.1));
			const opacity = focused ? 1 : Math.max(0.35, 0.88 - (distance * 0.2));
			const zIndex = focused ? 30 : Math.max(2, 20 - distance);
			const shiftY = isCompactCarousel() ? 0 : (focused ? 0 : Math.min(22, distance * 7));

			disk.style.setProperty('--xmb-scale', `${scale}`);
			disk.style.setProperty('--xmb-brightness', `${brightness}`);
			disk.style.setProperty('--xmb-shift-y', `${shiftY}px`);
			disk.style.opacity = `${opacity}`;
			disk.style.zIndex = `${zIndex}`;

			disk.classList.toggle('is-focused', focused);
			disk.classList.toggle('is-near', Math.abs(index - state.projectIndex) === 1);
			disk.tabIndex = focused ? 0 : -1;
			disk.setAttribute('aria-current', focused ? 'true' : 'false');
			const name = disk.dataset.name || 'Project';
			let cue = '';
			if (focused) cue = 'selected';
			else if (index === state.projectIndex - 1) cue = 'previous project';
			else if (index === state.projectIndex + 1) cue = 'next project';
			disk.setAttribute('aria-label', cue ? `${name}, ${cue}` : name);
		});
		if (shouldCenterSelected) {
			state.projectAutoScrollUntil = performance.now() + CONFIG.animationDuration + 60;
			centerProjectItem(dom.projectList, dom.projectDisks[state.projectIndex]);
			requestAnimationFrame(() => {
				centerProjectItem(dom.projectList, dom.projectDisks[state.projectIndex]);
			});
		}
		const name = dom.projectDisks[state.projectIndex].dataset.name;
		setLiveMessage(`${name} project focused`);
	}

	function extractPageContent(sourceDoc, rootSelector) {
		const root = sourceDoc.querySelector(rootSelector) || sourceDoc.querySelector('main') || sourceDoc.body;
		if (!root) return '';
		const clone = root.cloneNode(true);
		clone.querySelectorAll('script, style, nav, footer').forEach((node) => node.remove());
		return clone.innerHTML.trim();
	}

	async function loadPanelPageContent() {
		if (!dom.pageContentTargets.length) return;

		await Promise.all(dom.pageContentTargets.map(async (target) => {
			const source = target.dataset.source;
			const rootSelector = target.dataset.sourceRoot || 'main';
			const mainImage = target.dataset.mainImg || '';
			const mainAlt = target.dataset.mainAlt || 'Section image';
			if (!source) return;

			try {
				const response = await fetch(source, { cache: 'no-cache' });
				if (!response.ok) throw new Error(`Failed to load ${source}`);
				const html = await response.text();
				const parsed = new DOMParser().parseFromString(html, 'text/html');
				const contentHtml = extractPageContent(parsed, rootSelector);
				const openFullPageText = typeof window.getSiteText === 'function'
					? window.getSiteText('openFullPage', 'Open full page')
					: 'Open full page';

				const topImageHtml = mainImage ? `<img class="xmb-page-main" src="${mainImage}" alt="${mainAlt}">` : '';
				target.innerHTML = `${topImageHtml}${contentHtml}<p><a class="xmb-action" href="${source}">${openFullPageText}</a></p>`;
				if (typeof window.applySiteLanguage === 'function') {
					window.applySiteLanguage();
				}
			} catch (error) {
				const couldNotLoadText = typeof window.getSiteText === 'function'
					? window.getSiteText('couldNotLoadContent', 'Could not load content from')
					: 'Could not load content from';
				const openPageText = typeof window.getSiteText === 'function'
					? window.getSiteText('openPage', 'Open page')
					: 'Open page';
				target.innerHTML = `<p>${couldNotLoadText} ${source}.</p><p><a class="xmb-action" href="${source}">${openPageText}</a></p>`;
				if (typeof window.applySiteLanguage === 'function') {
					window.applySiteLanguage();
				}
			}
		}));

		if (typeof window.applySiteLanguage === 'function') {
			window.applySiteLanguage();
		}
	}

	function renderProjectPreview(disk) {
		if (!dom.displayContent || !disk) return;
		const name = disk.dataset.name || 'Project';
		const img = disk.dataset.img || '';
		const engine = disk.dataset.engine || 'Unknown';
		const language = disk.dataset.language || 'Unknown';
		const id = Number(disk.dataset.project || 0);
		const engineLabel = typeof window.getSiteText === 'function'
			? window.getSiteText('engineLabel', 'Engine:')
			: 'Engine:';
		const languageLabel = typeof window.getSiteText === 'function'
			? window.getSiteText('projectLanguageLabel', 'Language:')
			: 'Language:';
		const openHintText = typeof window.getSiteText === 'function'
			? window.getSiteText('openProjectHint', 'Press Enter to open project')
			: 'Press Enter to open project';

		dom.displayContent.innerHTML = `
			<div class="cd-container">
				<div class="cd-layout">
					<div class="cd" id="cdDisk" data-project-id="${id}" style="background-image:url('${img}')" aria-label="${name} preview disk"></div>
					<div class="cd-meta">
						<p class="cd-label">${name}</p>
						<p class="cd-detail"><strong>${engineLabel}</strong> ${engine}</p>
						<p class="cd-detail"><strong>${languageLabel}</strong> ${language}</p>
						<p class="cd-hint">${openHintText}</p>
					</div>
				</div>
			</div>
		`;
		dom.displayContent.classList.add('show');
		const cd = document.getElementById('cdDisk');
		if (cd) {
			cd.addEventListener('click', () => {
				window.location.href = `project-detail.html?id=${id}`;
			});
		}
	}

	function setSection(index, options = {}) {
		const next = options.wrap ? wrapIndex(index, dom.sectionTabs.length) : clamp(index, 0, dom.sectionTabs.length - 1);
		if (next === state.sectionIndex && !options.force) return;

		state.sectionIndex = next;
		updateSectionVisuals();

		const panel = activePanel();
		const scrollable = panel?.querySelector('.panel-scroll') || panel;
		if (scrollable) {
			if (prefersReducedMotion) {
				scrollable.scrollTop = 0;
			} else {
				animateScrollTo(scrollable, 0, CONFIG.animationDuration);
			}
		}

		if (activeSectionName() === 'projects') {
			if (!CONFIG.preserveProjectSelectionOnSectionChange) state.projectIndex = 0;
			updateProjectVisuals();
			renderProjectPreview(dom.projectDisks[state.projectIndex]);
		}

		if (options.focusTab !== false) {
			dom.sectionTabs[state.sectionIndex].focus({ preventScroll: true });
		}
	}

	function moveSection(delta, options = {}) {
		setSection(state.sectionIndex + delta, { wrap: true, ...options });
	}

	function setProject(index, options = {}) {
		if (!dom.projectDisks.length) return;
		const next = clamp(index, 0, dom.projectDisks.length - 1);
		if (next === state.projectIndex) return;
		state.projectIndex = next;
		updateProjectVisuals(options);
		renderProjectPreview(dom.projectDisks[state.projectIndex]);
	}

	function moveProject(delta) {
		setProject(state.projectIndex + delta);
	}

	function isAtTop(el) {
		return !el || el.scrollTop <= 1;
	}

	function isAtBottom(el) {
		if (!el) return true;
		return (el.scrollTop + el.clientHeight) >= (el.scrollHeight - 1);
	}

	function scrollCurrentSection(direction) {
		if (activeSectionName() === 'projects') return;
		const panel = activePanel();
		const target = panel?.querySelector('.panel-scroll') || panel;
		if (!target) return;

		if (direction > 0 && isAtBottom(target)) {
			moveSection(1);
			return;
		}
		if (direction < 0 && isAtTop(target)) {
			moveSection(-1);
			return;
		}

		const step = Math.max(160, target.clientHeight * CONFIG.scrollStepRatio);
		const nextTop = clamp(target.scrollTop + (step * direction), 0, target.scrollHeight - target.clientHeight);
		animateScrollTo(target, nextTop, CONFIG.animationDuration);
	}

	function moveSectionByVertical(direction) {
		const section = activeSectionName();
		if (section === 'projects') {
			moveSection(direction);
			return;
		}
		scrollCurrentSection(direction);
	}

	function shouldIgnoreKeyRepeat(event) {
		if (!event.repeat) return false;
		const now = performance.now();
		if (now - state.lastKeyTime < CONFIG.keyRepeatDelay) {
			return true;
		}
		state.lastKeyTime = now;
		return false;
	}

	function handleKeydown(event) {
		const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
		if (!keys.includes(event.key)) return;

		const activeTag = (document.activeElement?.tagName || '').toLowerCase();
		if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') return;

		if (shouldIgnoreKeyRepeat(event)) {
			event.preventDefault();
			return;
		}

		event.preventDefault();
		state.lastKeyTime = performance.now();

		switch (event.key) {
			case 'ArrowRight':
				moveSection(1);
				break;
			case 'ArrowLeft':
				moveSection(-1);
				break;
			case 'ArrowDown':
				if (activeSectionName() === 'projects') moveProject(1);
				break;
			case 'ArrowUp':
				if (activeSectionName() === 'projects') moveProject(-1);
				break;
			case 'Home':
				setSection(0);
				break;
			case 'End':
				setSection(dom.sectionTabs.length - 1);
				break;
		}
	}

	function handleWheel(event) {
		const targetInsideXmb = event.target instanceof Element && !!event.target.closest('#xmbShell');
		if (!targetInsideXmb) return;
		const overProjectSelector = event.target instanceof Element && !!event.target.closest('.project-selector');
		const overInfoScrollCard = event.target instanceof Element && event.target.closest('.panel-scroll');

		if (activeSectionName() !== 'projects' && overInfoScrollCard) {
			state.lastWheelBoundaryAccum = 0;
			state.projectWheelAccum = 0;
			return;
		}

		const absX = Math.abs(event.deltaX);
		const absY = Math.abs(event.deltaY);
		const isHorizontalIntent = absX > absY && absX > CONFIG.wheelSwitchThreshold;

		if (overProjectSelector && activeSectionName() === 'projects') {
			event.preventDefault();
			const primaryDelta = absY >= absX ? event.deltaY : event.deltaX;
			if (primaryDelta === 0) return;
			const unitScale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
			state.projectWheelAccum += (primaryDelta * unitScale);
			if (Math.abs(state.projectWheelAccum) >= CONFIG.projectWheelSwitchThreshold) {
				moveProject(state.projectWheelAccum > 0 ? 1 : -1);
				state.projectWheelAccum = 0;
			}
			state.lastWheelBoundaryAccum = 0;
			return;
		}

		state.projectWheelAccum = 0;

		if (isHorizontalIntent) {
			event.preventDefault();
			moveSection(event.deltaX > 0 ? 1 : -1, { focusTab: false });
			state.lastWheelBoundaryAccum = 0;
			return;
		}

		if (activeSectionName() === 'projects') {
			event.preventDefault();
			if (overProjectSelector && absY < 6 && absX < 6) return;
			moveSectionByVertical(event.deltaY > 0 ? 1 : -1);
			return;
		}

		const panel = activePanel();
		const scrollable = panel?.querySelector('.panel-scroll') || panel;
		if (!scrollable) return;

		event.preventDefault();
		const atTop = isAtTop(scrollable);
		const atBottom = isAtBottom(scrollable);
		const dir = event.deltaY > 0 ? 1 : -1;
		const tryingPastTop = dir < 0 && atTop;
		const tryingPastBottom = dir > 0 && atBottom;

		if (tryingPastTop || tryingPastBottom) {
			state.lastWheelBoundaryAccum += event.deltaY;
			if (Math.abs(state.lastWheelBoundaryAccum) > CONFIG.wheelSwitchThreshold) {
				moveSection(dir);
				state.lastWheelBoundaryAccum = 0;
			}
			return;
		}

		state.lastWheelBoundaryAccum = 0;
		const targetTop = clamp(scrollable.scrollTop + event.deltaY, 0, scrollable.scrollHeight - scrollable.clientHeight);
		animateScrollTo(scrollable, targetTop, CONFIG.animationDuration);
	}

	function handleTouch() {
		let startX = 0;
		let startY = 0;
		let startTime = 0;
		let touchOnProjects = false;
		let touchInsideXmb = false;
		let touchOnRibbon = false;

		function resetTouchFlags() {
			touchOnProjects = false;
			touchInsideXmb = false;
			touchOnRibbon = false;
		}

		function isMobileTouchDevice() {
			return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
		}

		const shell = document.getElementById('xmbShell');
		if (!shell) return;

		shell.addEventListener('touchstart', (event) => {
			if (!event.touches[0]) return;
			startX = event.touches[0].clientX;
			startY = event.touches[0].clientY;
			startTime = performance.now();
			touchOnProjects = !!(event.target instanceof Element && event.target.closest('.project-selector'));
			touchInsideXmb = !!(event.target instanceof Element && event.target.closest('#xmbShell'));
			touchOnRibbon = !!(event.target instanceof Element && event.target.closest('#xmbRibbon'));
		}, { passive: true });

		shell.addEventListener('touchend', (event) => {
			if (!event.changedTouches[0] || !touchInsideXmb) return;
			if (!isMobileTouchDevice()) {
				resetTouchFlags();
				return;
			}

			const dx = event.changedTouches[0].clientX - startX;
			const dy = event.changedTouches[0].clientY - startY;
			const dt = Math.max(1, performance.now() - startTime);
			const vx = Math.abs(dx) / dt;

			const horizontal = Math.abs(dx) > Math.abs(dy);
			if (horizontal) {
				const meetsHorizontalThreshold = Math.abs(dx) >= CONFIG.touchThresholdPx || vx >= CONFIG.touchVelocityThreshold;
				if (!meetsHorizontalThreshold) {
					resetTouchFlags();
					return;
				}

				if (touchOnProjects && activeSectionName() === 'projects') {
					resetTouchFlags();
					moveProject(dx < 0 ? 1 : -1);
					return;
				}

				if (touchOnRibbon && !isLoopRibbon()) {
					resetTouchFlags();
					return;
				}

				resetTouchFlags();
				moveSection(dx < 0 ? 1 : -1, { focusTab: false });
				return;
			}

			resetTouchFlags();
		}, { passive: true });

		shell.addEventListener('touchcancel', () => {
			resetTouchFlags();
		}, { passive: true });
	}

	function bindRibbonScrollSelection() {
		if (!dom.ribbon) return;

		dom.ribbon.addEventListener('scroll', () => {
			if (isLoopRibbon()) return;
			if (state.ribbonScrollTimeoutId) {
				window.clearTimeout(state.ribbonScrollTimeoutId);
			}

			state.ribbonScrollTimeoutId = window.setTimeout(() => {
				state.ribbonScrollTimeoutId = 0;
				const centeredIndex = findCenteredRibbonTabIndex();
				if (centeredIndex !== state.sectionIndex) {
					setSection(centeredIndex, { focusTab: false });
				}
			}, 90);
		}, { passive: true });
	}

	function bindProjectScrollSelection() {
		if (!dom.projectList || !dom.projectDisks.length) return;

		dom.projectList.addEventListener('scroll', () => {
			if (activeSectionName() !== 'projects') return;
			if (performance.now() < state.projectAutoScrollUntil) return;
			if (state.projectScrollTimeoutId) {
				window.clearTimeout(state.projectScrollTimeoutId);
			}

			state.projectScrollTimeoutId = window.setTimeout(() => {
				state.projectScrollTimeoutId = 0;
				const centeredIndex = findCenteredProjectIndex();
				if (centeredIndex !== state.projectIndex) {
					setProject(centeredIndex, { centerSelected: false });
				}
			}, 90);
		}, { passive: true });
	}

	function bindPointerAndClick() {
		dom.sectionTabs.forEach((tab, index) => {
			tab.addEventListener('click', () => setSection(index, { focusTab: false }));
		});

		dom.projectDisks.forEach((disk, index) => {
			disk.addEventListener('click', () => {
				const now = performance.now();
				const tappedSameProject = state.lastProjectTapIndex === index;
				const tappedQuickly = (now - state.lastProjectTapTime) <= 360;

				setProject(index);
				renderProjectPreview(dom.projectDisks[state.projectIndex]);

				if (!isLoopRibbon() && tappedSameProject && tappedQuickly) {
					const projectId = Number(disk.dataset.project || index || 0);
					state.lastProjectTapTime = 0;
					state.lastProjectTapIndex = -1;
					window.location.href = `project-detail.html?id=${projectId}`;
					return;
				}

				state.lastProjectTapTime = now;
				state.lastProjectTapIndex = index;
			});
		});
	}

	function onResize() {
		updateRibbonEdgePadding();
		if (!isLoopRibbon()) {
			centerHorizontalItem(dom.ribbon, dom.sectionTabs[state.sectionIndex]);
		}
		updateSectionVisuals();
		if (activeSectionName() === 'projects' && dom.projectDisks[state.projectIndex]) {
			centerProjectItem(dom.projectList, dom.projectDisks[state.projectIndex]);
		}
	}

	function initialize() {
		if (!dom.projectDisks.length) return;

		bindPointerAndClick();
		bindRibbonScrollSelection();
		handleTouch();
		updateRibbonEdgePadding();
		loadPanelPageContent();

		document.addEventListener('keydown', handleKeydown, { passive: false });
		document.addEventListener('wheel', handleWheel, { passive: false });
		window.addEventListener('resize', onResize);

		setSection(0, { force: true, focusTab: false });
		setProject(0);
		renderProjectPreview(dom.projectDisks[state.projectIndex]);

		window.addEventListener('site-language-changed', () => {
			if (activeSectionName() === 'projects' && dom.projectDisks[state.projectIndex]) {
				renderProjectPreview(dom.projectDisks[state.projectIndex]);
			}
		});
	}

	initialize();
})();
