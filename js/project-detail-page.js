document.addEventListener('DOMContentLoaded', function () {
	if (typeof window.initSiteShell === 'function') {
		window.initSiteShell();
	}

	if (typeof window.loadProjectDetailFromQuery === 'function') {
		window.loadProjectDetailFromQuery();
	}

	if (typeof window.applySiteLanguage === 'function') {
		window.applySiteLanguage();
	}
});
