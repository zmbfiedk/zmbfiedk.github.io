(function () {
	const STORAGE_KEY = 'siteLanguage';
	const DEFAULT_LANGUAGE = 'en';
	const SUPPORTED_LANGUAGES = ['en', 'nl', 'pt'];

	const TRANSLATIONS = {
		en: {
			docTitleHome: 'Portfolio - Arthur Henriques Garcia',
			docTitleAbout: 'About - Arthur Henriques Garcia',
			docTitleCv: 'CV - Arthur Henriques Garcia',
			docTitleContact: 'Contact - Arthur Henriques Garcia',
			docTitleProject: 'Project Details - Arthur Henriques Garcia',
			language: 'Language',
			toggleMenu: 'Toggle menu',
			backHome: '<- Back to Home',
			home: 'Home',
			about: 'About',
			cv: 'CV',
			contact: 'Contact',
			role: 'Overall Tool developer',
			projects: 'Projects',
			aboutMe: 'About Me',
			loadingAbout: 'Loading About Me...',
			loadingCv: 'Loading CV...',
			loadingContact: 'Loading Contact...',
			sectionPersonalData: 'Personal Information',
			sectionWorkExperience: 'Work Experience',
			sectionEducation: 'Education',
			sectionSkills: 'Skillsets',
			getInTouch: 'Get in Touch',
			contactIntro: 'I am always interested in hearing about new projects and opportunities. Feel free to reach out!',
			contactInformation: 'Contact Information',
			socialLinks: 'Social Links',
			quickMessage: 'Quick Message',
			sendMessage: 'Send Message',
			yourName: 'Your Name',
			yourEmail: 'Your Email',
			yourMessage: 'Your Message',
			backToAboutMe: 'Back to About Me',
			aboutTitle: 'About Me - Gameplay / Tool Developer',
			cvTitle: 'Arthur Garcia - CV',
			tabInfo: 'Info',
			tabGithub: 'GitHub',
			tabBlog: 'Blog',
			projectDetailTabsLabel: 'Project detail tabs',
			projectInformation: 'Project Information',
			githubRepository: 'GitHub Repository',
			blogTitle: 'Blog',
			githubIntro: 'View the full project source code and documentation on GitHub:',
			viewOnGithub: 'View on GitHub',
			moreDetailsAbout: 'More details about',
			statusLabel: 'Status:',
			statusCompleted: 'Completed',
			teamLabel: 'Team:',
			teamSoloDeveloper: 'Solo Developer',
			viewLiveProject: 'View Live Project',
			engineLabel: 'Engine:',
			projectLanguageLabel: 'Language:',
			openProjectHint: 'Press Enter to open project',
			openFullPage: 'Open full page',
			openPage: 'Open page',
			couldNotLoadContent: 'Could not load content from',
			sprint0Gdd: 'Sprint 0 - Game Design Document',
			tdDependencies: 'Dependencies (System Overview)',
			tdClassDiagrams: 'Class Diagrams'
		},
		nl: {
			docTitleHome: 'Portfolio - Arthur Henriques Garcia',
			docTitleAbout: 'Over - Arthur Henriques Garcia',
			docTitleCv: 'CV - Arthur Henriques Garcia',
			docTitleContact: 'Contact - Arthur Henriques Garcia',
			docTitleProject: 'Projectdetails - Arthur Henriques Garcia',
			language: 'Taal',
			toggleMenu: 'Menu openen/sluiten',
			backHome: '<- Terug naar Home',
			home: 'Home',
			about: 'Over',
			cv: 'CV',
			contact: 'Contact',
			role: 'Algemene Tool Ontwikkelaar',
			projects: 'Projecten',
			aboutMe: 'Over Mij',
			loadingAbout: 'Over Mij laden...',
			loadingCv: 'CV laden...',
			loadingContact: 'Contact laden...',
			sectionPersonalData: 'Persoonlijke Gegevens',
			sectionWorkExperience: 'Werkervaring',
			sectionEducation: 'Opleidingen',
			sectionSkills: 'Vaardigheden',
			getInTouch: 'Neem Contact Op',
			contactIntro: 'Ik ben altijd geinteresseerd in nieuwe projecten en kansen. Neem gerust contact op!',
			contactInformation: 'Contactinformatie',
			socialLinks: 'Sociale Links',
			quickMessage: 'Snel Bericht',
			sendMessage: 'Bericht Verzenden',
			yourName: 'Jouw Naam',
			yourEmail: 'Jouw E-mail',
			yourMessage: 'Jouw Bericht',
			backToAboutMe: 'Terug naar Over Mij',
			aboutTitle: 'Over Mij - Gameplay / Tool Ontwikkelaar',
			cvTitle: 'Arthur Garcia - CV',
			tabInfo: 'Info',
			tabGithub: 'GitHub',
			tabBlog: 'Blog',
			projectDetailTabsLabel: 'Projectdetail tabs',
			projectInformation: 'Projectinformatie',
			githubRepository: 'GitHub Repository',
			blogTitle: 'Blog',
			githubIntro: 'Bekijk de volledige projectbroncode en documentatie op GitHub:',
			viewOnGithub: 'Bekijk op GitHub',
			moreDetailsAbout: 'Meer details over',
			statusLabel: 'Status:',
			statusCompleted: 'Voltooid',
			teamLabel: 'Team:',
			teamSoloDeveloper: 'Solo Ontwikkelaar',
			viewLiveProject: 'Bekijk Live Project',
			engineLabel: 'Engine:',
			projectLanguageLabel: 'Taal:',
			openProjectHint: 'Druk op Enter om project te openen',
			openFullPage: 'Open volledige pagina',
			openPage: 'Open pagina',
			couldNotLoadContent: 'Kon inhoud niet laden van',
			sprint0Gdd: 'Sprint 0 - Game Design Document',
			tdDependencies: 'Afhankelijkheden (Systeemoverzicht)',
			tdClassDiagrams: 'Klassendiagrammen'
		},
		pt: {
			docTitleHome: 'Portfolio - Arthur Henriques Garcia',
			docTitleAbout: 'Sobre - Arthur Henriques Garcia',
			docTitleCv: 'CV - Arthur Henriques Garcia',
			docTitleContact: 'Contato - Arthur Henriques Garcia',
			docTitleProject: 'Detalhes do Projeto - Arthur Henriques Garcia',
			language: 'Idioma',
			toggleMenu: 'Alternar menu',
			backHome: '<- Voltar para Inicio',
			home: 'Inicio',
			about: 'Sobre',
			cv: 'CV',
			contact: 'Contato',
			role: 'Desenvolvedor Geral de Ferramentas',
			projects: 'Projetos',
			aboutMe: 'Sobre Mim',
			loadingAbout: 'Carregando Sobre Mim...',
			loadingCv: 'Carregando CV...',
			loadingContact: 'Carregando Contato...',
			sectionPersonalData: 'Dados Pessoais',
			sectionWorkExperience: 'Experiencia Profissional',
			sectionEducation: 'Formacao',
			sectionSkills: 'Competencias',
			getInTouch: 'Entre em Contato',
			contactIntro: 'Estou sempre interessado em novos projetos e oportunidades. Fique a vontade para entrar em contato!',
			contactInformation: 'Informacoes de Contato',
			socialLinks: 'Links Sociais',
			quickMessage: 'Mensagem Rapida',
			sendMessage: 'Enviar Mensagem',
			yourName: 'Seu Nome',
			yourEmail: 'Seu E-mail',
			yourMessage: 'Sua Mensagem',
			backToAboutMe: 'Voltar para Sobre Mim',
			aboutTitle: 'Sobre Mim - Desenvolvedor de Gameplay / Ferramentas',
			cvTitle: 'Arthur Garcia - CV',
			tabInfo: 'Info',
			tabGithub: 'GitHub',
			tabBlog: 'Blog',
			projectDetailTabsLabel: 'Abas de detalhes do projeto',
			projectInformation: 'Informacoes do Projeto',
			githubRepository: 'Repositorio GitHub',
			blogTitle: 'Blog',
			githubIntro: 'Veja o codigo-fonte completo e a documentacao do projeto no GitHub:',
			viewOnGithub: 'Ver no GitHub',
			moreDetailsAbout: 'Mais detalhes sobre',
			statusLabel: 'Status:',
			statusCompleted: 'Concluido',
			teamLabel: 'Equipe:',
			teamSoloDeveloper: 'Desenvolvedor Solo',
			viewLiveProject: 'Ver Projeto Online',
			engineLabel: 'Engine:',
			projectLanguageLabel: 'Linguagem:',
			openProjectHint: 'Pressione Enter para abrir o projeto',
			openFullPage: 'Abrir pagina completa',
			openPage: 'Abrir pagina',
			couldNotLoadContent: 'Nao foi possivel carregar conteudo de',
			sprint0Gdd: 'Sprint 0 - Documento de Design de Jogo',
			tdDependencies: 'Dependencias (Visao do Sistema)',
			tdClassDiagrams: 'Diagramas de Classes'
		}
	};

	const DETAIL_HEADING_MAP = {
		'1. Title and Elevator Pitch': {
			en: '1. Title and Elevator Pitch',
			nl: '1. Titel en Elevator Pitch',
			pt: '1. Titulo e Elevator Pitch'
		},
		'2. What Makes This Game Unique': {
			en: '2. What Makes This Game Unique',
			nl: '2. Wat Maakt Deze Game Uniek',
			pt: '2. O Que Torna Este Jogo Unico'
		},
		'2. What Makes Your Game Unique': {
			en: '2. What Makes Your Game Unique',
			nl: '2. Wat Maakt Jouw Game Uniek',
			pt: '2. O Que Torna Seu Jogo Unico'
		},
		'2. What Makes Your Project Unique': {
			en: '2. What Makes Your Project Unique',
			nl: '2. Wat Maakt Jouw Project Uniek',
			pt: '2. O Que Torna Seu Projeto Unico'
		},
		'3. Scope (Game Jam Focus)': {
			en: '3. Scope (Game Jam Focus)',
			nl: '3. Scope (Gamejam Focus)',
			pt: '3. Escopo (Foco da Game Jam)'
		},
		'3. Scope (Project Focus)': {
			en: '3. Scope (Project Focus)',
			nl: '3. Scope (Project Focus)',
			pt: '3. Escopo (Foco do Projeto)'
		},
		'4. Games & Mechanics': {
			en: '4. Games & Mechanics',
			nl: '4. Games & Mechanics',
			pt: '4. Jogos e Mecanicas'
		},
		'4. Games &amp; Mechanics': {
			en: '4. Games & Mechanics',
			nl: '4. Games & Mechanics',
			pt: '4. Jogos e Mecanicas'
		},
		'4. Mechanics': {
			en: '4. Mechanics',
			nl: '4. Mechanics',
			pt: '4. Mecanicas'
		},
		'5. Levels': {
			en: '5. Levels',
			nl: '5. Levels',
			pt: '5. Niveis'
		},
		'5. Gameplay Loop': {
			en: '5. Gameplay Loop',
			nl: '5. Gameplay Loop',
			pt: '5. Loop de Jogo'
		},
		'6. Progression': {
			en: '6. Progression',
			nl: '6. Progressie',
			pt: '6. Progressao'
		},
		"7. Risks and Solutions": {
			en: '7. Risks and Solutions',
			nl: "7. Risico's en Oplossingen",
			pt: '7. Riscos e Solucoes'
		},
		"7. Risks and Solutions (PIO)": {
			en: '7. Risks and Solutions (PIO)',
			nl: "7. Risico's en Oplossingen (PIO)",
			pt: '7. Riscos e Solucoes (PIO)'
		},
		"8. Risks and Solutions": {
			en: '8. Risks and Solutions',
			nl: "8. Risico's en Oplossingen",
			pt: '8. Riscos e Solucoes'
		},
		'6. Gameplay Loop': {
			en: '6. Gameplay Loop',
			nl: '6. Gameplay Loop',
			pt: '6. Loop de Jogo'
		},
		'7. Progressie': {
			en: '7. Progression',
			nl: '7. Progressie',
			pt: '7. Progressao'
		},
		"8. Risico's en Oplossingen": {
			en: '8. Risks and Solutions',
			nl: "8. Risico's en Oplossingen",
			pt: '8. Riscos e Solucoes'
		},
		"8. Risico's en Oplossingen (PIO)": {
			en: '8. Risks and Solutions (PIO)',
			nl: "8. Risico's en Oplossingen (PIO)",
			pt: '8. Riscos e Solucoes (PIO)'
		},
		'8. Sprint Planning': {
			en: '8. Sprint Planning',
			nl: '8. Sprint Planning',
			pt: '8. Planejamento por Sprint'
		},
		'8. Sprint Planning (Trello Sync)': {
			en: '8. Sprint Planning (Trello Sync)',
			nl: '8. Sprint Planning (Trello Sync)',
			pt: '8. Planejamento de Sprint (Trello Sync)'
		},
		'8. Planning per Sprint': {
			en: '8. Planning per Sprint',
			nl: '8. Planning per Sprint',
			pt: '8. Planejamento por Sprint'
		},
		'9. Planning (Game Jam)': {
			en: '9. Planning (Game Jam)',
			nl: '9. Planning (Gamejam)',
			pt: '9. Planejamento (Game Jam)'
		},
		'9. Planning per Sprint': {
			en: '9. Planning per Sprint',
			nl: '9. Planning per Sprint',
			pt: '9. Planejamento por Sprint'
		},
		'9. Inspiration': {
			en: '9. Inspiration',
			nl: '9. Inspiratie',
			pt: '9. Inspiracao'
		},
		'10. Inspiration': {
			en: '10. Inspiration',
			nl: '10. Inspiratie',
			pt: '10. Inspiracao'
		},
		'10. Technical Design (Mini)': {
			en: '10. Technical Design (Mini)',
			nl: '10. Technisch Ontwerp (Mini)',
			pt: '10. Design Tecnico (Mini)'
		},
		'10. Technical Design Mini': {
			en: '10. Technical Design Mini',
			nl: '10. Technisch Ontwerp Mini',
			pt: '10. Design Tecnico Mini'
		},
		'9. Technical Design (Mini)': {
			en: '9. Technical Design (Mini)',
			nl: '9. Technisch Ontwerp (Mini)',
			pt: '9. Design Tecnico (Mini)'
		},
		'11. Technical Design Mini': {
			en: '11. Technical Design Mini',
			nl: '11. Technisch Ontwerp Mini',
			pt: '11. Design Tecnico Mini'
		},
		'11. Links': {
			en: '11. Links',
			nl: '11. Links',
			pt: '11. Links'
		},
		'12. Dependencies (System Overview)': {
			en: '12. Dependencies (System Overview)',
			nl: '12. Dependencies (Systeemoverzicht)',
			pt: '12. Dependencias (Visao do Sistema)'
		},
		'13. Class Diagrams': {
			en: '13. Class Diagrams',
			nl: '13. Klassendiagrammen',
			pt: '13. Diagramas de Classes'
		},
		'3. Weapons (Starting Values)': {
			en: '3. Weapons (Starting Values)',
			nl: '3. Wapens (Startwaarden)',
			pt: '3. Armas (Valores Iniciais)'
		},
		'4. Enemies': {
			en: '4. Enemies',
			nl: '4. Vijanden',
			pt: '4. Inimigos'
		},
		'2. What Makes This TD Unique': {
			en: '2. What Makes This TD Unique',
			nl: '2. Wat Maakt Deze TD Uniek',
			pt: '2. O Que Torna Este TD Unico'
		},
		'3. Towers (Starting Values)': {
			en: '3. Towers (Starting Values)',
			nl: '3. Torens (Startwaarden)',
			pt: '3. Torres (Valores Iniciais)'
		},
		'Player': {
			en: 'Player',
			nl: 'Player',
			pt: 'Jogador'
		},
		'Towers': {
			en: 'Towers',
			nl: 'Torens',
			pt: 'Torres'
		},
		'Managers/UI': {
			en: 'Managers/UI',
			nl: 'Managers/UI',
			pt: 'Gerenciadores/UI'
		},
		'Enemy/Wave/Scene': {
			en: 'Enemy/Wave/Scene',
			nl: 'Enemy/Wave/Scene',
			pt: 'Inimigo/Onda/Cena'
		}
	};

	const ABOUT_PARAGRAPHS = {
		en: [
			"Hi, I'm Arthur. I was born in Rio de Janeiro, Brazil, and I've been living in the Netherlands for the past six years. Moving countries at a young age taught me how to adapt quickly, and along the way I learned two additional languages: Dutch and English. Because of this, I've become a fast learner who feels comfortable picking up new skills and technologies.",
			"Before fully committing to game development, I followed an International Baccalaureate (IB) level of education. While this gave me a strong theoretical foundation, I realized that I thrive much more in a practical, hands-on learning environment. That realization led me to change my path and focus on creating instead of only studying. Right now, I study Game Development at Media College Amsterdam, where I'm learning how games are built from the ground up. This includes game design, mechanics, prototyping, iteration, and teamwork - everything that goes into making a game come alive.",
			"Alongside my main study, I also explore other technical interests such as computers, cars, and cybersecurity. I've even followed a Red Hat course, which helped me understand systems, security, and problem-solving from a different technical perspective. These interests strengthen my logical thinking and help me approach game development in a more structured way.",
			"Games have always been a big part of my life. From a young age, I was fascinated not just by playing them, but by understanding how they work. My favorite genre is roguelikes, because I love the idea of learning through failure and returning stronger with more knowledge. The way these games reuse mechanics in creative ways really inspires me as a developer. It shows how smart design choices can keep an experience fresh, even when elements repeat.",
			"Within game development, I especially enjoy working on gameplay mechanics and prototyping ideas. I get the most satisfaction from turning a simple concept into something interactive and fun. I'm good at experimenting, iterating, and improving mechanics based on how they feel rather than just how they look on paper. I believe this is because I'm curious, patient, and not afraid to try things that might fail at first.",
			"In the coming period, I want to further develop myself as a Gameplay / Unity Developer. I aim to improve my skills in C# scripting, game feel, combat systems, and player feedback systems. I'm also interested in learning more about optimization, tools development, and how to build scalable systems that can grow with a project.",
			"Outside of development, I enjoy airsoft, writing poetry, and spending time thinking creatively. Poetry helps me express emotions and ideas in a different way, which surprisingly also feeds back into my game design mindset. I'm a calm, thoughtful person, but when I'm passionate about a project, I can be extremely focused and motivated.",
			"Looking ahead, my ambition is to work in the game industry as a gameplay-focused developer, contributing to games that feel rewarding, challenging, and meaningful to play. I want to keep learning, keep experimenting, and most importantly, keep creating experiences that players can connect with."
		],
		nl: [
			"Hoi, ik ben Arthur. Ik ben geboren in Rio de Janeiro, Brazilie, en ik woon nu al zes jaar in Nederland. Op jonge leeftijd verhuizen naar een ander land heeft mij geleerd om snel aan te passen. Daardoor heb ik ook twee extra talen geleerd: Nederlands en Engels.",
			"Voordat ik volledig voor game development koos, volgde ik een International Baccalaureate (IB) niveau opleiding. Dat gaf me een sterke theoretische basis, maar ik merkte dat ik beter leer in een praktische omgeving. Daarom ben ik me gaan focussen op maken in plaats van alleen studeren. Nu studeer ik Game Development op het Media College Amsterdam, waar ik leer hoe games van begin tot eind worden gebouwd.",
			"Naast mijn studie verdiep ik me ook in andere technische interesses zoals computers, autos en cybersecurity. Ik heb ook een Red Hat cursus gevolgd, waardoor ik systemen, security en probleemoplossing beter ben gaan begrijpen.",
			"Games zijn altijd een groot deel van mijn leven geweest. Al vanaf jonge leeftijd wilde ik niet alleen spelen, maar ook begrijpen hoe games werken. Mijn favoriete genre is roguelike, omdat je door fouten leert en steeds sterker terugkomt.",
			"Binnen game development werk ik het liefst aan gameplay mechanics en prototyping. Ik haal veel energie uit het omzetten van een simpel idee naar iets interactiefs en leuks. Ik experimenteer graag en verbeter mechanics op basis van gevoel en spelerervaring.",
			"In de komende periode wil ik mezelf verder ontwikkelen als Gameplay / Unity Developer. Ik wil beter worden in C# scripting, game feel, combat systems en player feedback systems. Ook wil ik meer leren over optimalisatie en tools development.",
			"Buiten development hou ik van airsoft, poezie schrijven en creatief nadenken. Poezie helpt mij om gevoelens en ideeen op een andere manier te uiten, wat ook terugkomt in mijn manier van game designen.",
			"Mijn ambitie is om in de game industrie te werken als gameplay developer. Ik wil blijven leren, experimenteren en vooral ervaringen maken waar spelers echt verbinding mee voelen."
		],
		pt: [
			"Oi, eu sou o Arthur. Nasci no Rio de Janeiro, Brasil, e moro na Holanda ha seis anos. Mudar de pais cedo me ensinou a me adaptar rapido, e nesse processo aprendi duas linguas extras: holandes e ingles.",
			"Antes de me dedicar totalmente ao desenvolvimento de jogos, estudei no nivel International Baccalaureate (IB). Isso me deu uma base teorica forte, mas percebi que evoluo melhor em um ambiente pratico. Por isso mudei meu foco para criar em vez de apenas estudar. Hoje estudo Game Development no Media College Amsterdam.",
			"Junto com meus estudos principais, tambem exploro interesses tecnicos como computadores, carros e ciberseguranca. Tambem fiz um curso de Red Hat, que me ajudou a entender melhor sistemas, seguranca e resolucao de problemas.",
			"Jogos sempre fizeram parte da minha vida. Desde cedo eu nao queria apenas jogar, mas tambem entender como os jogos funcionam. Meu genero favorito e roguelike, porque gosto da ideia de aprender com falhas e voltar mais forte.",
			"No desenvolvimento de jogos, gosto especialmente de trabalhar com mecanicas de gameplay e prototipagem. Tenho satisfacao em transformar uma ideia simples em algo interativo e divertido.",
			"Nos proximos anos, quero evoluir como Gameplay / Unity Developer. Quero melhorar minhas habilidades em C# scripting, game feel, sistemas de combate e feedback para o jogador. Tambem quero aprender mais sobre otimizacao e ferramentas.",
			"Fora do desenvolvimento, gosto de airsoft, escrever poesia e pensar criativamente. A poesia me ajuda a expressar ideias de outra forma, o que tambem melhora minha visao de design de jogos.",
			"Olhando para frente, meu objetivo e trabalhar na industria de jogos como desenvolvedor focado em gameplay. Quero continuar aprendendo, experimentando e criando experiencias com as quais os jogadores se conectem."
		]
	};

	let activeLanguage = DEFAULT_LANGUAGE;
	const textNodeSourceMap = new WeakMap();
	const attrSourceMap = new WeakMap();
	const autoTranslationCache = new Map();
	let translationRunId = 0;

	function getText(language, key) {
		return (TRANSLATIONS[language] && TRANSLATIONS[language][key]) || TRANSLATIONS.en[key] || key;
	}

	function normalizeLanguage(language) {
		const normalized = String(language || '').toLowerCase();
		if (SUPPORTED_LANGUAGES.indexOf(normalized) === -1) return DEFAULT_LANGUAGE;
		return normalized;
	}

	function getStoredLanguage() {
		try {
			return window.localStorage.getItem(STORAGE_KEY);
		} catch (error) {
			return null;
		}
	}

	function setStoredLanguage(language) {
		try {
			window.localStorage.setItem(STORAGE_KEY, language);
		} catch (error) {
			// Ignore localStorage errors.
		}
	}

	function resolveInitialLanguage() {
		const stored = getStoredLanguage();
		if (stored) return normalizeLanguage(stored);
		const browser = (navigator.language || DEFAULT_LANGUAGE).slice(0, 2);
		return normalizeLanguage(browser);
	}

	function setCurrentYear() {
		const yearElement = document.getElementById('year');
		if (!yearElement) return;
		yearElement.textContent = new Date().getFullYear();
	}

	function toggleMenu(navMenu, burgerBtn, expanded) {
		navMenu.classList.toggle('active', expanded);
		burgerBtn.classList.toggle('active', expanded);
		burgerBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
	}

	function initBurgerMenu() {
		const burgerBtn = document.getElementById('burgerBtn');
		const navMenu = document.getElementById('navMenu');
		if (!burgerBtn || !navMenu) return;

		burgerBtn.setAttribute('aria-expanded', 'false');

		if (!burgerBtn.dataset.boundMenu) {
			burgerBtn.dataset.boundMenu = 'true';
			burgerBtn.addEventListener('click', function () {
				const expanded = !burgerBtn.classList.contains('active');
				toggleMenu(navMenu, burgerBtn, expanded);
			});
		}

		navMenu.querySelectorAll('a').forEach(function (link) {
			if (link.dataset.boundMenuClose) return;
			link.dataset.boundMenuClose = 'true';
			link.addEventListener('click', function () {
				toggleMenu(navMenu, burgerBtn, false);
			});
		});
	}

	function normalizePathname() {
		const pathname = window.location.pathname.toLowerCase();
		if (pathname.endsWith('/')) return pathname + 'index.html';
		return pathname;
	}

	function initActiveNavigation() {
		const navMenu = document.getElementById('navMenu');
		if (!navMenu) return;

		const currentPath = normalizePathname();
		const onIndexPage = currentPath.endsWith('/index.html') || currentPath.endsWith('index.html');

		navMenu.querySelectorAll('a').forEach(function (link) {
			link.classList.remove('active');
			const href = (link.getAttribute('href') || '').toLowerCase();
			if (!href || href === '#') return;

			const isHomeLink = href.includes('index.html');
			const matchesCurrent = currentPath.endsWith('/' + href) || currentPath.endsWith(href);

			if ((onIndexPage && isHomeLink) || (!onIndexPage && matchesCurrent)) {
				link.classList.add('active');
			}
		});
	}

	function setText(selector, value) {
		const element = document.querySelector(selector);
		if (!element) return;
		element.textContent = value;
	}

	function getAttrSource(element, attrName) {
		let sourceByAttr = attrSourceMap.get(element);
		if (!sourceByAttr) {
			sourceByAttr = {};
			attrSourceMap.set(element, sourceByAttr);
		}
		if (!Object.prototype.hasOwnProperty.call(sourceByAttr, attrName)) {
			sourceByAttr[attrName] = element.getAttribute(attrName) || '';
		}
		return sourceByAttr[attrName];
	}

	function getTextNodeSource(node) {
		if (!textNodeSourceMap.has(node)) {
			textNodeSourceMap.set(node, node.textContent || '');
		}
		return textNodeSourceMap.get(node) || '';
	}

	function shouldTranslateTextNode(node) {
		if (!node || !node.parentElement) return false;
		const parent = node.parentElement;
		if (parent.closest('.language-switcher')) return false;
		if (parent.closest('script, style, noscript, textarea, pre, code')) return false;
		const content = (node.textContent || '').trim();
		if (!content) return false;
		if (/^[\d\s\-–—_.,:;!?()\[\]{}+*/\\|<>]+$/.test(content)) return false;
		return true;
	}

	function collectTranslatableTextNodes() {
		const nodes = [];
		const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
		while (walker.nextNode()) {
			const node = walker.currentNode;
			if (shouldTranslateTextNode(node)) nodes.push(node);
		}
		return nodes;
	}

	function collectTranslatableAttributes() {
		const attrs = [];
		const selectors = [
			'input[placeholder]',
			'textarea[placeholder]',
			'[title]',
			'[aria-label]'
		];
		document.querySelectorAll(selectors.join(',')).forEach(function (element) {
			if (element.closest('.language-switcher')) return;
			['placeholder', 'title', 'aria-label'].forEach(function (attrName) {
				if (!element.hasAttribute(attrName)) return;
				const value = element.getAttribute(attrName) || '';
				if (!value.trim()) return;
				attrs.push({ element, attrName, value });
			});
		});
		return attrs;
	}

	function buildTranslateUrl(text, targetLanguage) {
		const baseUrl = 'https://translate.googleapis.com/translate_a/single';
		return `${baseUrl}?client=gtx&sl=auto&tl=${encodeURIComponent(targetLanguage)}&dt=t&q=${encodeURIComponent(text)}`;
	}

	function parseTranslatedText(payload, fallback) {
		try {
			if (!Array.isArray(payload) || !Array.isArray(payload[0])) return fallback;
			return payload[0].map(function (part) { return part && part[0] ? part[0] : ''; }).join('') || fallback;
		} catch (error) {
			return fallback;
		}
	}

	async function translateText(text, targetLanguage) {
		if (targetLanguage === 'en') return text;
		const key = `${targetLanguage}::${text}`;
		if (autoTranslationCache.has(key)) return autoTranslationCache.get(key);

		try {
			const response = await fetch(buildTranslateUrl(text, targetLanguage), { method: 'GET' });
			if (!response.ok) throw new Error('Translation request failed');
			const payload = await response.json();
			const translated = parseTranslatedText(payload, text);
			autoTranslationCache.set(key, translated);
			return translated;
		} catch (error) {
			autoTranslationCache.set(key, text);
			return text;
		}
	}

	async function autoTranslateDocument(language, runId) {
		const textNodes = collectTranslatableTextNodes();
		const attrItems = collectTranslatableAttributes();

		if (language === 'en') {
			textNodes.forEach(function (node) {
				node.textContent = getTextNodeSource(node);
			});
			attrItems.forEach(function (item) {
				item.element.setAttribute(item.attrName, getAttrSource(item.element, item.attrName));
			});
			return;
		}

		const uniqueTexts = [];
		const seen = new Set();

		textNodes.forEach(function (node) {
			const source = getTextNodeSource(node).trim();
			if (source && !seen.has(source)) {
				seen.add(source);
				uniqueTexts.push(source);
			}
		});

		attrItems.forEach(function (item) {
			const source = getAttrSource(item.element, item.attrName).trim();
			if (source && !seen.has(source)) {
				seen.add(source);
				uniqueTexts.push(source);
			}
		});

		const translatedMap = new Map();
		const promises = uniqueTexts.map(async function (sourceText) {
			if (runId !== translationRunId) return;
			const translated = await translateText(sourceText, language);
			translatedMap.set(sourceText, translated);
		});
		await Promise.all(promises);

		if (runId !== translationRunId) return;

		textNodes.forEach(function (node) {
			const source = getTextNodeSource(node).trim();
			if (!source) return;
			node.textContent = translatedMap.get(source) || source;
		});

		attrItems.forEach(function (item) {
			const source = getAttrSource(item.element, item.attrName).trim();
			if (!source) return;
			item.element.setAttribute(item.attrName, translatedMap.get(source) || source);
		});
	}

	function createLanguageSwitcher(language) {
		const navContainer = document.querySelector('.nav-container');
		if (!navContainer) return;

		let switcher = navContainer.querySelector('.language-switcher');
		if (!switcher) {
			switcher = document.createElement('div');
			switcher.className = 'language-switcher';

			const label = document.createElement('label');
			label.className = 'language-switcher-label';
			label.setAttribute('for', 'siteLanguageSelect');
			switcher.appendChild(label);

			const select = document.createElement('select');
			select.id = 'siteLanguageSelect';
			select.className = 'language-switcher-select';
			select.setAttribute('aria-label', 'Site language');
			select.innerHTML = '<option value="en">EN</option><option value="nl">NL</option><option value="pt">PT</option>';
			switcher.appendChild(select);

			navContainer.appendChild(switcher);
		}

		const select = switcher.querySelector('.language-switcher-select');
		if (select && !select.dataset.boundChange) {
			select.dataset.boundChange = 'true';
			select.addEventListener('change', function (event) {
				applySiteLanguage(event.target.value);
			});
		}

		if (select) select.value = language;
	}

	function applyNavTranslations(language) {
		const navMenu = document.getElementById('navMenu');
		if (navMenu) {
			navMenu.querySelectorAll('a').forEach(function (link) {
				const href = (link.getAttribute('href') || '').toLowerCase();
				if (href.includes('index.html')) link.textContent = getText(language, 'home');
				if (href.includes('about.html')) link.textContent = getText(language, 'about');
				if (href.includes('cv.html')) link.textContent = getText(language, 'cv');
				if (href.includes('contact.html')) link.textContent = getText(language, 'contact');
			});
		}

		setText('.back-btn', getText(language, 'backHome'));

		const burgerBtn = document.getElementById('burgerBtn');
		if (burgerBtn) burgerBtn.setAttribute('aria-label', getText(language, 'toggleMenu'));

		setText('.language-switcher-label', getText(language, 'language'));
	}

	function applyIndexTranslations(language) {
		setText('.hero .role', getText(language, 'role'));
		setText('#tab-projects .xmb-title', getText(language, 'projects'));
		setText('#tab-about .xmb-title', getText(language, 'aboutMe'));
		setText('#tab-cv .xmb-title', getText(language, 'cv'));
		setText('#tab-contact .xmb-title', getText(language, 'contact'));

		setText('#panel-about .xmb-page-content p', getText(language, 'loadingAbout'));
		setText('#panel-cv .xmb-page-content p', getText(language, 'loadingCv'));
		setText('#panel-contact .xmb-page-content p', getText(language, 'loadingContact'));
	}

	function applyDocumentTitle(language) {
		const currentPath = normalizePathname();
		if (currentPath.endsWith('index.html')) {
			document.title = getText(language, 'docTitleHome');
			return;
		}
		if (currentPath.endsWith('about.html')) {
			document.title = getText(language, 'docTitleAbout');
			return;
		}
		if (currentPath.endsWith('cv.html')) {
			document.title = getText(language, 'docTitleCv');
			return;
		}
		if (currentPath.endsWith('contact.html')) {
			document.title = getText(language, 'docTitleContact');
			return;
		}
		if (currentPath.endsWith('project-detail.html')) {
			document.title = getText(language, 'docTitleProject');
		}
	}

	function applyAboutTranslations(language) {
		setText('.about-section .page-title', getText(language, 'aboutTitle'));
		const paragraphs = ABOUT_PARAGRAPHS[language] || ABOUT_PARAGRAPHS.en;
		const aboutParagraphNodes = document.querySelectorAll('.about-content p');
		if (!aboutParagraphNodes.length) return;
		aboutParagraphNodes.forEach(function (paragraph, index) {
			if (paragraphs[index]) paragraph.textContent = paragraphs[index];
		});
	}

	function applyCvTranslations(language) {
		setText('.cv-section .page-title', getText(language, 'cvTitle'));
		const subtitles = document.querySelectorAll('.cv-section .section-subtitle');
		if (subtitles[0]) subtitles[0].textContent = getText(language, 'sectionPersonalData');
		if (subtitles[1]) subtitles[1].textContent = getText(language, 'sectionWorkExperience');
		if (subtitles[2]) subtitles[2].textContent = getText(language, 'sectionEducation');
		if (subtitles[3]) subtitles[3].textContent = getText(language, 'sectionSkills');
	}

	function applyContactTranslations(language) {
		setText('.contact-section .page-title', getText(language, 'getInTouch'));
		setText('.contact-section .contact-content > p', getText(language, 'contactIntro'));

		const subtitles = document.querySelectorAll('.contact-section .section-subtitle');
		if (subtitles[0]) subtitles[0].textContent = getText(language, 'contactInformation');
		if (subtitles[1]) subtitles[1].textContent = getText(language, 'socialLinks');
		if (subtitles[2]) subtitles[2].textContent = getText(language, 'quickMessage');

		const nameInput = document.querySelector('.contact-form input[type="text"]');
		const emailInput = document.querySelector('.contact-form input[type="email"]');
		const messageInput = document.querySelector('.contact-form textarea');
		const sendButton = document.querySelector('.contact-form button[type="submit"]');
		const backButton = document.querySelector('.section-actions .btn-secondary');

		if (nameInput) nameInput.placeholder = getText(language, 'yourName');
		if (emailInput) emailInput.placeholder = getText(language, 'yourEmail');
		if (messageInput) messageInput.placeholder = getText(language, 'yourMessage');
		if (sendButton) sendButton.textContent = getText(language, 'sendMessage');
		if (backButton) backButton.textContent = getText(language, 'backToAboutMe');
	}

	function applyProjectDetailTranslations(language) {
		setText('.project-tabs .tab-btn[data-tab="info"]', getText(language, 'tabInfo'));
		setText('.project-tabs .tab-btn[data-tab="github"]', getText(language, 'tabGithub'));
		setText('.project-tabs .tab-btn[data-tab="blog"]', getText(language, 'tabBlog'));
		const tabsWrapper = document.querySelector('.project-tabs');
		if (tabsWrapper) tabsWrapper.setAttribute('aria-label', getText(language, 'projectDetailTabsLabel'));
		setText('#info > h3', getText(language, 'projectInformation'));
		setText('#github > h3', getText(language, 'githubRepository'));
		setText('#blog > h3', getText(language, 'blogTitle'));
		setText('#github .i18n-github-intro', getText(language, 'githubIntro'));
		setText('#info .i18n-status-label', getText(language, 'statusLabel'));
		setText('#info .i18n-status-value', getText(language, 'statusCompleted'));
		setText('#info .i18n-team-label', getText(language, 'teamLabel'));
		setText('#info .i18n-team-value', getText(language, 'teamSoloDeveloper'));
		setText('#info .i18n-live-project', getText(language, 'viewLiveProject'));

		const detailsText = document.querySelector('#info .i18n-more-details');
		const projectName = document.querySelector('.project-header h1');
		if (detailsText && projectName) {
			detailsText.textContent = getText(language, 'moreDetailsAbout') + ' ' + projectName.textContent.trim() + '...';
		}

		const githubLink = document.querySelector('#github .i18n-github-link');
		if (githubLink) {
			const href = githubLink.getAttribute('href') || '';
			githubLink.textContent = getText(language, 'viewOnGithub') + ' -> ' + href;
		}

		function resolveDetailHeading(sourceText) {
			if (DETAIL_HEADING_MAP[sourceText] && DETAIL_HEADING_MAP[sourceText][language]) {
				return DETAIL_HEADING_MAP[sourceText][language];
			}
			for (const key in DETAIL_HEADING_MAP) {
				if (!Object.prototype.hasOwnProperty.call(DETAIL_HEADING_MAP, key)) continue;
				const variants = DETAIL_HEADING_MAP[key];
				if (variants.en === sourceText || variants.nl === sourceText || variants.pt === sourceText) {
					return variants[language] || sourceText;
				}
			}
			return sourceText;
		}

		document.querySelectorAll('.td-section h4, .td-section h5').forEach(function (heading) {
			const source = heading.dataset.i18nSource || heading.textContent.trim();
			if (!heading.dataset.i18nSource) heading.dataset.i18nSource = source;
			heading.textContent = resolveDetailHeading(source);
		});

		document.querySelectorAll('.td-gdd > p strong').forEach(function (titleNode) {
			const sourceValue = titleNode.dataset.i18nSource || titleNode.textContent.trim();
			if (!titleNode.dataset.i18nSource) titleNode.dataset.i18nSource = sourceValue;
			if (sourceValue.indexOf('Sprint 0 - Game Design Document') === 0) {
				const suffix = sourceValue.split(':')[1];
				titleNode.textContent = getText(language, 'sprint0Gdd') + (suffix ? ':' + suffix : '');
			}
		});
	}

	function applySiteLanguage(language) {
		const resolvedLanguage = normalizeLanguage(language || activeLanguage || DEFAULT_LANGUAGE);
		activeLanguage = resolvedLanguage;
		translationRunId += 1;
		const currentRunId = translationRunId;
		setStoredLanguage(resolvedLanguage);
		document.documentElement.lang = resolvedLanguage;

		createLanguageSwitcher(resolvedLanguage);
		applyNavTranslations(resolvedLanguage);
		applyIndexTranslations(resolvedLanguage);
		applyAboutTranslations(resolvedLanguage);
		applyCvTranslations(resolvedLanguage);
		applyContactTranslations(resolvedLanguage);
		applyProjectDetailTranslations(resolvedLanguage);
		applyDocumentTitle(resolvedLanguage);
		window.setTimeout(function () {
			autoTranslateDocument(resolvedLanguage, currentRunId);
		}, 0);
		window.dispatchEvent(new CustomEvent('site-language-changed', {
			detail: { language: resolvedLanguage }
		}));
	}

	function initSiteShell() {
		setCurrentYear();
		initBurgerMenu();
		initActiveNavigation();
		applySiteLanguage(resolveInitialLanguage());
	}

	window.applySiteLanguage = applySiteLanguage;
	window.getSiteText = function (key, fallback) {
		const value = getText(activeLanguage, key);
		if (value === key) return fallback || key;
		return value;
	};
	window.getActiveSiteLanguage = function () {
		return activeLanguage;
	};
	window.initSiteShell = initSiteShell;
})();
