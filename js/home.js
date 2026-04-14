// Home Page JavaScript - Project Selector and CD Display

document.addEventListener('DOMContentLoaded', function() {
	const xmbRibbon = document.getElementById('xmbRibbon');
	const xmbTiles = Array.from(document.querySelectorAll('.xmb-section-tile'));
	const xmbPanels = Array.from(document.querySelectorAll('.xmb-panel'));
	const projectsPanel = document.querySelector('.xmb-panel[data-panel="projects"]');
	const selectorGrid = document.getElementById('selectorGrid');
	const selectorBoxes = Array.from(document.querySelectorAll('.project-selector-box'));

	let selectedProject = null;
	let sectionIndex = 0;
	let projectIndex = 0;

	function clamp(value, min, max) {
		return Math.max(min, Math.min(value, max));
	}

	function activeSectionName() {
		const tile = xmbTiles[sectionIndex];
		return tile ? tile.getAttribute('data-section') : 'projects';
	}

	function centerElementInRow(container, element, smooth = true) {
		if (!container || !element) return;
		const left = element.offsetLeft - (container.clientWidth / 2) + (element.clientWidth / 2);
		container.scrollTo({ left: Math.max(0, left), behavior: smooth ? 'smooth' : 'auto' });
	}

	function applySectionFocus(index, smooth = true) {
		sectionIndex = clamp(index, 0, xmbTiles.length - 1);
		xmbTiles.forEach((tile, i) => {
			tile.classList.remove('is-focused', 'is-near');
			const distance = Math.abs(i - sectionIndex);
			if (distance === 0) tile.classList.add('is-focused');
			if (distance === 1) tile.classList.add('is-near');
		});

		const section = activeSectionName();
		xmbPanels.forEach(panel => {
			panel.classList.toggle('active', panel.getAttribute('data-panel') === section);
		});

		centerElementInRow(xmbRibbon, xmbTiles[sectionIndex], smooth);
	}

	function scrollCurrentSection(direction) {
		const section = activeSectionName();
		if (section === 'projects') {
			moveProjectFocus(direction);
			return;
		}
		const panel = document.querySelector(`.xmb-panel[data-panel="${section}"]`);
		if (!panel) return;
		const scrollTarget = panel.querySelector('.xmb-info-card') || panel;
		scrollTarget.scrollBy({ top: 220 * direction, behavior: 'smooth' });
	}

	function centerFocusedProject(smooth = true) {
		if (!selectorGrid || !selectorBoxes[projectIndex]) return;
		const focused = selectorBoxes[projectIndex];
		const top = focused.offsetTop - (selectorGrid.clientHeight / 2) + (focused.clientHeight / 2);
		selectorGrid.scrollTo({ top: Math.max(0, top), behavior: smooth ? 'smooth' : 'auto' });
	}

	function applyProjectFocus(index, smooth = true) {
		if (!selectorBoxes.length) return;
		projectIndex = clamp(index, 0, selectorBoxes.length - 1);
		selectorBoxes.forEach((box, i) => {
			box.classList.remove('is-focused', 'is-near');
			const distance = Math.abs(i - projectIndex);
			if (distance === 0) box.classList.add('is-focused');
			if (distance === 1) box.classList.add('is-near');
		});
		centerFocusedProject(smooth);
	}

	function moveProjectFocus(delta) {
		applyProjectFocus(projectIndex + delta, true);
	}

	selectorBoxes.forEach((box, index) => {
		box.addEventListener('click', function() {
			applyProjectFocus(index, true);
			const projectId = parseInt(this.getAttribute('data-project'));
			const projectName = this.getAttribute('data-name');
			const projectImg = this.getAttribute('data-img');
			const projectEngine = this.getAttribute('data-engine') || 'Unknown';
			const projectLanguage = this.getAttribute('data-language') || 'Unknown';
			selectedProject = projectId;
			showSpinningCD(projectName, projectImg, projectId, projectEngine, projectLanguage);
		});
	});

	xmbTiles.forEach((tile, index) => {
		tile.addEventListener('click', function() {
			applySectionFocus(index, true);
		});
	});

	if (xmbRibbon) {
		let ribbonTouchStartX = 0;
		let ribbonTouchEndX = 0;

		xmbRibbon.addEventListener('wheel', function(e) {
			e.preventDefault();
			if (e.deltaY > 0 || e.deltaX > 0) {
				applySectionFocus(sectionIndex + 1, true);
			} else {
				applySectionFocus(sectionIndex - 1, true);
			}
		}, { passive: false });

		xmbRibbon.addEventListener('touchstart', function(e) {
			if (!e.touches[0]) return;
			ribbonTouchStartX = e.touches[0].clientX;
			ribbonTouchEndX = ribbonTouchStartX;
		}, { passive: true });

		xmbRibbon.addEventListener('touchmove', function(e) {
			if (!e.touches[0]) return;
			ribbonTouchEndX = e.touches[0].clientX;
		}, { passive: true });

		xmbRibbon.addEventListener('touchend', function() {
			const delta = ribbonTouchStartX - ribbonTouchEndX;
			if (Math.abs(delta) < 30) return;
			applySectionFocus(sectionIndex + (delta > 0 ? 1 : -1), true);
		});
	}

	if (selectorGrid) {
		let projectTouchStartY = 0;
		let projectTouchEndY = 0;

		selectorGrid.addEventListener('wheel', function(e) {
			e.preventDefault();
			if (e.deltaY > 0 || e.deltaX > 0) {
				moveProjectFocus(1);
			} else {
				moveProjectFocus(-1);
			}
		}, { passive: false });

		selectorGrid.addEventListener('touchstart', function(e) {
			if (!e.touches[0]) return;
			projectTouchStartY = e.touches[0].clientY;
			projectTouchEndY = projectTouchStartY;
		}, { passive: true });

		selectorGrid.addEventListener('touchmove', function(e) {
			if (!e.touches[0]) return;
			projectTouchEndY = e.touches[0].clientY;
		}, { passive: true });

		selectorGrid.addEventListener('touchend', function() {
			if (activeSectionName() !== 'projects') return;
			const delta = projectTouchStartY - projectTouchEndY;
			if (Math.abs(delta) < 30) return;
			moveProjectFocus(delta > 0 ? 1 : -1);
		});
	}

	if (projectsPanel) {
		projectsPanel.addEventListener('wheel', function(e) {
			if (activeSectionName() !== 'projects') return;
			if (xmbRibbon && xmbRibbon.contains(e.target)) return;
			e.preventDefault();
			if (e.deltaY > 0 || e.deltaX > 0) {
				moveProjectFocus(1);
			} else {
				moveProjectFocus(-1);
			}
		}, { passive: false });
	}

	window.addEventListener('resize', function() {
		centerElementInRow(xmbRibbon, xmbTiles[sectionIndex], false);
		centerFocusedProject(false);
	});

	document.addEventListener('keydown', function(e) {
		const tag = (document.activeElement && document.activeElement.tagName) ? document.activeElement.tagName.toLowerCase() : '';
		if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

		if (e.key === 'ArrowRight') {
			e.preventDefault();
			applySectionFocus(sectionIndex + 1, true);
			return;
		}
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			applySectionFocus(sectionIndex - 1, true);
			return;
		}

		const section = activeSectionName();
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			scrollCurrentSection(1);
			return;
		}
		if (e.key === 'ArrowUp') {
			e.preventDefault();
			scrollCurrentSection(-1);
			return;
		}

		if ((e.key === 'Enter' || e.key === ' ') && section === 'projects' && selectorBoxes[projectIndex]) {
			e.preventDefault();
			selectorBoxes[projectIndex].click();
			return;
		}

		if ((e.key === 'Enter' || e.key === ' ') && section !== 'projects') {
			const panel = document.querySelector(`.xmb-panel[data-panel="${section}"]`);
			if (!panel) return;
			const actions = Array.from(panel.querySelectorAll('.xmb-action'));
			if (!actions.length) return;
			e.preventDefault();
			actions[0].click();
		}
	});

	applySectionFocus(0, false);
	applyProjectFocus(0, false);

	// Show Spinning CD in main display - becomes clickable to open project
	function showSpinningCD(name, imgUrl, projectId, engine, language) {
		const displayContent = document.getElementById('displayContent');
		displayContent.innerHTML = `
			<div class="cd-container">
				<div class="cd-layout">
					<div class="cd" id="cdDisk" data-project-id="${projectId}" style="background-image: url('${imgUrl}')"></div>
					<div class="cd-meta">
						<p class="cd-label">${name}</p>
						<p class="cd-detail"><strong>Engine:</strong> ${engine}</p>
						<p class="cd-detail"><strong>Language:</strong> ${language}</p>
						<p class="cd-hint">Click disc to open</p>
					</div>
				</div>
			</div>
		`;
		displayContent.classList.add('show');
		
		// Add click handler to the CD itself
		const cdDisk = document.getElementById('cdDisk');
		cdDisk.addEventListener('click', function(e) {
			e.stopPropagation();
			const projId = parseInt(this.getAttribute('data-project-id'));
			if (window.showProjectDetail) {
				window.showProjectDetail(projId);
			}
		});
	}
});
