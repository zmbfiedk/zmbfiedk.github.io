(function () {
	const EMAILJS_CONFIG = {
		publicKey: 'YOUR_PUBLIC_KEY',
		serviceId: 'YOUR_SERVICE_ID',
		templateId: 'YOUR_TEMPLATE_ID',
		toEmail: 'arthurhgarcia10@gmail.com'
	};

	function getContactForm() {
		return document.querySelector('.contact-content form');
	}

	function getFormValues(form) {
		return {
			name: form.querySelector('input[placeholder="Your Name"]')?.value?.trim() || '',
			email: form.querySelector('input[placeholder="Your Email"]')?.value?.trim() || '',
			message: form.querySelector('textarea[placeholder="Your Message"]')?.value?.trim() || ''
		};
	}

	function initializeEmailJs() {
		if (!window.emailjs) return false;
		if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') return false;
		window.emailjs.init(EMAILJS_CONFIG.publicKey);
		return true;
	}

	function sendContactEmail(payload) {
		if (!window.emailjs) {
			return Promise.reject(new Error('EmailJS is not loaded.'));
		}

		if (
			EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' ||
			EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID'
		) {
			return Promise.reject(new Error('EmailJS service/template is not configured.'));
		}

		return window.emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
			to_email: EMAILJS_CONFIG.toEmail,
			from_name: payload.name,
			from_email: payload.email,
			message: payload.message
		});
	}

	function validate(values) {
		return values.name && values.email && values.message;
	}

	function bindContactForm() {
		const form = getContactForm();
		if (!form) return;

		initializeEmailJs();

		form.addEventListener('submit', function (event) {
			event.preventDefault();
			const values = getFormValues(form);

			if (!validate(values)) {
				window.alert('Please fill in your name, email, and message.');
				return;
			}

			sendContactEmail(values)
				.then(function () {
					window.alert('Message sent successfully!');
					form.reset();
				})
				.catch(function (error) {
					window.alert('Failed to send message. Please try again.');
					console.error('EmailJS error:', error);
				});
		});
	}

	window.initContactForm = bindContactForm;
})();
