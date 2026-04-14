document.addEventListener('DOMContentLoaded', function () {
	if (typeof window.initSiteShell === 'function') {
		window.initSiteShell();
	}

	if (typeof window.initContactForm === 'function') {
		window.initContactForm();
	}
});
