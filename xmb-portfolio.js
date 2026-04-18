// Current language
let currentLanguage = 'en';

// Translations
const translations = {
    name: {
        en: 'Arthur Henriques Garcia',
        pt: 'Arthur Henriques Garcia',
        nl: 'Arthur Henriques Garcia'
    },
    backToMenu: {
        en: 'Back to Menu',
        pt: 'Voltar ao Menu',
        nl: 'Terug naar Menu'
    },
    navHintDesktop: {
        en: 'Use arrow keys or click to navigate • Press Enter for details',
        pt: 'Use as setas ou clique para navegar • Pressione Enter para detalhes',
        nl: 'Gebruik pijltjestoetsen of klik om te navigeren • Druk op Enter voor details'
    },
    navHintMobile: {
        en: 'Swipe or tap to navigate • Tap twice for details',
        pt: 'Deslize ou toque para navegar • Toque duas vezes para detalhes',
        nl: 'Veeg of tik om te navigeren • Tik twee keer voor details'
    }
};

// Portfolio data with translations
const menuData = [
    {
        title: { en: 'About', pt: 'Sobre', nl: 'Over' },
        icon: 'user',
        items: [
            {
                title: { en: 'Introduction', pt: 'Introducao', nl: 'Introductie' },
                description: { en: 'Gameplay / Tool Developer', pt: 'Desenvolvedor de Gameplay / Ferramentas', nl: 'Gameplay / Tool Developer' },
                content: { en: 'Hi, I am Arthur from Rio, now based in Amsterdam.', pt: 'Ola, eu sou Arthur do Rio, agora em Amsterdam.', nl: 'Hoi, ik ben Arthur uit Rio, nu in Amsterdam.' },
                detailContent: {
                    en: 'Hi, I am Arthur. I was born in Rio de Janeiro, Brazil, and I have been living in the Netherlands for the past six years. Moving countries at a young age taught me how to adapt quickly, and along the way I learned Dutch and English. Because of this, I became a fast learner who feels comfortable picking up new skills and technologies.',
                    pt: 'Oi, eu sou o Arthur. Nasci no Rio de Janeiro, Brasil, e moro na Holanda ha seis anos. Mudar de pais cedo me ensinou a me adaptar rapidamente, e nesse processo aprendi Holandes e Ingles. Por isso, me tornei alguem que aprende rapido e se adapta bem a novas tecnologias.',
                    nl: 'Hoi, ik ben Arthur. Ik ben geboren in Rio de Janeiro, Brazilie, en woon al zes jaar in Nederland. Op jonge leeftijd verhuizen heeft mij geleerd om snel aan te passen. Onderweg heb ik Nederlands en Engels geleerd, waardoor ik snel nieuwe vaardigheden en technologieen oppak.'
                }
            },
            {
                title: { en: 'Education', pt: 'Educacao', nl: 'Opleiding' },
                description: { en: 'IB + MBO Game Development', pt: 'IB + MBO Desenvolvimento de Jogos', nl: 'IB + MBO Game Development' },
                content: { en: 'Practical game development focus at Media College Amsterdam.', pt: 'Foco pratico em desenvolvimento de jogos no Media College Amsterdam.', nl: 'Praktische focus op game development bij Media College Amsterdam.' },
                detailContent: {
                    en: 'Before fully committing to game development, I followed International Baccalaureate level education. That gave me a strong theoretical base, but I realized I thrive in practical, hands-on environments. I now study Game Development at Media College Amsterdam, where I work on design, mechanics, prototyping, iteration, and teamwork.',
                    pt: 'Antes de focar totalmente em desenvolvimento de jogos, segui o nivel International Baccalaureate. Isso me deu uma base teorica forte, mas percebi que evoluo mais em ambientes praticos. Hoje estudo Game Development no Media College Amsterdam com foco em design, mecanicas, prototipos, iteracao e trabalho em equipe.',
                    nl: 'Voordat ik volledig voor game development koos, volgde ik onderwijs op International Baccalaureate niveau. Dat gaf een sterke theoretische basis, maar ik merkte dat ik beter groei in praktische leeromgevingen. Nu studeer ik Game Development aan het Media College Amsterdam met focus op design, mechanics, prototypes, iteratie en teamwork.'
                }
            },
            {
                title: { en: 'Focus', pt: 'Foco', nl: 'Focus' },
                description: { en: 'Roguelikes, systems, game feel', pt: 'Roguelikes, sistemas, game feel', nl: 'Roguelikes, systemen, game feel' },
                content: { en: 'I enjoy turning ideas into interactive and fun mechanics.', pt: 'Gosto de transformar ideias em mecanicas interativas e divertidas.', nl: 'Ik vind het leuk om ideeen om te zetten in interactieve en leuke mechanics.' },
                detailContent: {
                    en: 'I especially enjoy gameplay mechanics and fast prototyping. My favorite genre is roguelikes because learning through failure and returning stronger is an inspiring design loop. Looking ahead, I want to keep improving in C# scripting, game feel, combat systems, player feedback, optimization, and tools development.',
                    pt: 'Eu gosto especialmente de mecanicas de gameplay e prototipagem rapida. Meu genero favorito e roguelike por causa do ciclo de aprender com falhas e voltar mais forte. No futuro, quero melhorar em C#, game feel, sistemas de combate, feedback ao jogador, otimizacao e desenvolvimento de ferramentas.',
                    nl: 'Ik werk het liefst aan gameplay mechanics en snelle prototyping. Mijn favoriete genre is roguelike, omdat leren door falen en sterker terugkomen een inspirerende ontwerpcyclus is. Ik wil mij verder ontwikkelen in C#, game feel, combatsystemen, player feedback, optimalisatie en tools development.'
                }
            }
        ]
    },
    {
        title: { en: 'Projects', pt: 'Projetos', nl: 'Projecten' },
        icon: 'briefcase',
        items: [
            {
                title: { en: 'Tower of Babell', pt: 'Tower of Babell', nl: 'Tower of Babell' },
                description: { en: 'Unity • C#', pt: 'Unity • C#', nl: 'Unity • C#' },
                content: { en: 'A core project with gameplay iteration and systems design.', pt: 'Projeto central com iteracao de gameplay e design de sistemas.', nl: 'Kernproject met gameplay-iteratie en systems design.' },
                detailContent: {
                    en: 'Tower of Babell is one of my main Unity projects. I focused on balancing mechanics, improving flow, and refining player feedback. The project helped me deepen my understanding of reusable gameplay systems and rapid iteration.',
                    pt: 'Tower of Babell e um dos meus principais projetos em Unity. Foquei em balancear mecanicas, melhorar o fluxo e refinar o feedback ao jogador. O projeto me ajudou a aprofundar sistemas reutilizaveis e iteracao rapida.',
                    nl: 'Tower of Babell is een van mijn belangrijkste Unity-projecten. Ik focuste op balancing, flow en player feedback. Het project hielp mij om herbruikbare gameplay-systemen en snelle iteratie te verdiepen.'
                }
            },
            {
                title: { en: 'Arthurs Playground', pt: 'Arthurs Playground', nl: 'Arthurs Playground' },
                description: { en: 'Unity • C#', pt: 'Unity • C#', nl: 'Unity • C#' },
                content: { en: 'Experimental sandbox for mechanics and prototypes.', pt: 'Sandbox experimental para mecanicas e prototipos.', nl: 'Experimentele sandbox voor mechanics en prototypes.' },
                detailContent: {
                    en: 'Arthurs Playground is my experimentation space. I quickly test movement systems, interaction loops, and small gameplay ideas before integrating them into larger projects.',
                    pt: 'Arthurs Playground e meu espaco de experimentacao. Testo rapidamente sistemas de movimento, loops de interacao e pequenas ideias antes de integrar em projetos maiores.',
                    nl: 'Arthurs Playground is mijn experimenteerruimte. Ik test hier snel movement systems, interaction loops en kleine gameplay-ideeen voordat ze naar grotere projecten gaan.'
                }
            },
            {
                title: { en: 'TowerDefense', pt: 'TowerDefense', nl: 'TowerDefense' },
                description: { en: 'Unity • C#', pt: 'Unity • C#', nl: 'Unity • C#' },
                content: { en: 'Defensive strategy prototype focused on pacing.', pt: 'Protótipo de estrategia defensiva focado em ritmo.', nl: 'Defensive strategy prototype met focus op pacing.' },
                detailContent: {
                    en: 'This project explores wave systems, enemy scaling, and tactical placement. I worked on readability, balancing economy loops, and making decisions feel meaningful each round.',
                    pt: 'Este projeto explora sistemas de ondas, escala de inimigos e posicionamento tatico. Trabalhei em legibilidade, balanceamento da economia e decisoes significativas por rodada.',
                    nl: 'Dit project verkent wave-systemen, enemy scaling en tactische plaatsing. Ik werkte aan leesbaarheid, economische balans en betekenisvolle keuzes per ronde.'
                }
            },
            {
                title: { en: 'Godot Game', pt: 'Jogo em Godot', nl: 'Godot Game' },
                description: { en: 'Godot • GDScript', pt: 'Godot • GDScript', nl: 'Godot • GDScript' },
                content: { en: 'Prototype to expand engine flexibility and workflow.', pt: 'Protótipo para ampliar flexibilidade de engine e fluxo.', nl: 'Prototype om engine-flexibiliteit en workflow te verbreden.' },
                detailContent: {
                    en: 'Built in Godot to gain cross-engine perspective. I explored scene structure, scripting patterns, and rapid gameplay iteration with GDScript.',
                    pt: 'Feito em Godot para ganhar visao entre engines. Explorei estrutura de cenas, padroes de script e iteracao rapida de gameplay com GDScript.',
                    nl: 'Gemaakt in Godot om engine-overstijgend inzicht te krijgen. Ik onderzocht scene-structuur, scripting-patronen en snelle iteratie met GDScript.'
                }
            },
            {
                title: { en: 'Small C++ Games', pt: 'Pequenos Jogos em C++', nl: 'Kleine C++ Games' },
                description: { en: 'C++ • Core systems', pt: 'C++ • Sistemas base', nl: 'C++ • Core systems' },
                content: { en: 'Engine-level logic and fundamentals practice.', pt: 'Pratica de logica em nivel de engine e fundamentos.', nl: 'Oefening in engine-level logica en fundamentals.' },
                detailContent: {
                    en: 'A collection of small C++ game projects where I focused on game loops, input, object-oriented architecture, and performance-aware coding.',
                    pt: 'Colecao de pequenos projetos em C++ com foco em game loop, input, arquitetura orientada a objetos e codigo atento a performance.',
                    nl: 'Een verzameling kleine C++ game-projecten met focus op game loops, input, objectgeorienteerde architectuur en performance-bewuste code.'
                }
            },
            {
                title: { en: 'Fractured', pt: 'Fractured', nl: 'Fractured' },
                description: { en: 'Unity • Combat prototype', pt: 'Unity • Protótipo de combate', nl: 'Unity • Combat prototype' },
                content: { en: 'Action-focused prototype with combat and feedback loops.', pt: 'Protótipo focado em acao com combate e feedback.', nl: 'Action prototype met combat en feedback loops.' },
                detailContent: {
                    en: 'Fractured focuses on combat pacing, enemy behavior, and player feedback. I iterated heavily on hit response and movement feel to make the gameplay rewarding.',
                    pt: 'Fractured foca em ritmo de combate, comportamento de inimigos e feedback ao jogador. Iterei bastante em resposta de impacto e sensacao de movimento.',
                    nl: 'Fractured focust op combat pacing, enemy behavior en player feedback. Ik heb veel geitereerd op hit response en movement feel.'
                }
            },
            {
                title: { en: 'Roguelike Action Platformer', pt: 'Plataforma Roguelike de Acao', nl: 'Roguelike Action Platformer' },
                description: { en: 'Unity • Roguelike systems', pt: 'Unity • Sistemas roguelike', nl: 'Unity • Roguelike systems' },
                content: { en: 'Replay-focused design with progression and challenge.', pt: 'Design focado em replay com progressao e desafio.', nl: 'Replay-gericht ontwerp met progressie en uitdaging.' },
                detailContent: {
                    en: 'This project combines platforming and roguelike progression. I worked on repeatable runs, risk/reward decisions, and pacing to keep sessions engaging.',
                    pt: 'Este projeto combina plataforma com progressao roguelike. Trabalhei em runs repetiveis, decisoes de risco/recompensa e ritmo para manter o jogo envolvente.',
                    nl: 'Dit project combineert platforming met roguelike progressie. Ik werkte aan herhaalbare runs, risk/reward-keuzes en pacing.'
                }
            },
            {
                title: { en: 'Vertical Slice', pt: 'Vertical Slice', nl: 'Vertical Slice' },
                description: { en: 'Unity • Production-ready segment', pt: 'Unity • Segmento pronto para producao', nl: 'Unity • Productieklare segment' },
                content: { en: 'A polished slice representing final game quality.', pt: 'Uma fatia polida representando qualidade final do jogo.', nl: 'Een gepolijste slice die eindkwaliteit representeert.' },
                detailContent: {
                    en: 'I built a vertical slice to validate quality, scope, and pipeline decisions. It served as a benchmark for visuals, mechanics, and production standards.',
                    pt: 'Criei um vertical slice para validar qualidade, escopo e decisoes de pipeline. Serviu como referencia para visual, mecanicas e padroes de producao.',
                    nl: 'Ik bouwde een vertical slice om kwaliteit, scope en pipeline-keuzes te valideren. Het diende als benchmark voor visuals, mechanics en productiestandaarden.'
                }
            }
        ]
    },
    {
        title: { en: 'CV', pt: 'CV', nl: 'CV' },
        icon: 'code',
        items: [
            {
                title: { en: 'Work Experience', pt: 'Experiencia Profissional', nl: 'Werkervaring' },
                description: { en: 'Trainmore, Albert Heijn, Action, Van Haren', pt: 'Trainmore, Albert Heijn, Action, Van Haren', nl: 'Trainmore, Albert Heijn, Action, Van Haren' },
                content: { en: 'Host at Trainmore + retail background with customer service.', pt: 'Host na Trainmore + experiencia em varejo e atendimento.', nl: 'Host bij Trainmore + retailervaring met klantenservice.' },
                detailContent: {
                    en: 'Host - Trainmore (2025-Present): machine checks, gym organization, memberships and day passes.\n\nRetail Associate - Albert Heijn (2019-2025): warehouse and customer service.\n\nRetail Associate - Action (2023-2024): warehouse and customer service.\n\nRetail Associate - Van Haren (2024): store organization and customer support.',
                    pt: 'Host - Trainmore (2025-Atual): verificacao de maquinas, organizacao da academia, vendas de memberships e day passes.\n\nVarejo - Albert Heijn (2019-2025): estoque e atendimento ao cliente.\n\nVarejo - Action (2023-2024): estoque e atendimento ao cliente.\n\nVarejo - Van Haren (2024): organizacao de loja e suporte ao cliente.',
                    nl: 'Host - Trainmore (2025-heden): machine checks, organisatie van de gym, memberships en day passes.\n\nRetail Associate - Albert Heijn (2019-2025): magazijn en klantenservice.\n\nRetail Associate - Action (2023-2024): magazijn en klantenservice.\n\nRetail Associate - Van Haren (2024): winkelorganisatie en klantondersteuning.'
                }
            },
            {
                title: { en: 'Education', pt: 'Educacao', nl: 'Opleiding' },
                description: { en: 'MBO 4 Game Development + IB & VWO', pt: 'MBO 4 Game Development + IB & VWO', nl: 'MBO 4 Game Development + IB & VWO' },
                content: { en: 'Media College Amsterdam (2024-2028), DENISE (2019-2024).', pt: 'Media College Amsterdam (2024-2028), DENISE (2019-2024).', nl: 'Media College Amsterdam (2024-2028), DENISE (2019-2024).' },
                detailContent: {
                    en: 'MBO 4 Game Development - Media College Amsterdam (2024-2028) with focus on gameplay and mechanics.\n\nInternational Baccalaureate (IB) & VWO - DENISE (2019-2024).',
                    pt: 'MBO 4 Game Development - Media College Amsterdam (2024-2028) com foco em gameplay e mecanicas.\n\nInternational Baccalaureate (IB) & VWO - DENISE (2019-2024).',
                    nl: 'MBO 4 Game Development - Media College Amsterdam (2024-2028) met focus op gameplay en mechanics.\n\nInternational Baccalaureate (IB) & VWO - DENISE (2019-2024).'
                }
            },
            {
                title: { en: 'Technical Skills', pt: 'Habilidades Tecnicas', nl: 'Technische Vaardigheden' },
                description: { en: 'C#, C++, Python, Unity, Godot', pt: 'C#, C++, Python, Unity, Godot', nl: 'C#, C++, Python, Unity, Godot' },
                content: { en: 'Hands-on experience in gameplay systems and scripting.', pt: 'Experiencia pratica em sistemas de gameplay e scripts.', nl: 'Praktische ervaring met gameplay-systemen en scripting.' },
                detailContent: {
                    en: 'C#: main scripting language in Unity projects.\nC++: small game development and core programming concepts.\nPython: scripting and workflow problem-solving.\nGodot: gameplay prototyping with GDScript.\nUnity: multiple shipped school and personal projects across genres.',
                    pt: 'C#: linguagem principal de scripts em projetos Unity.\nC++: pequenos jogos e conceitos centrais de programacao.\nPython: scripts e resolucao de problemas de fluxo.\nGodot: prototipagem de gameplay com GDScript.\nUnity: varios projetos escolares e pessoais em diferentes generos.',
                    nl: 'C#: belangrijkste scripttaal in Unity-projecten.\nC++: kleine game-projecten en kernconcepten van programmeren.\nPython: scripting en workflow-probleemoplossing.\nGodot: gameplay-prototyping met GDScript.\nUnity: meerdere school- en persoonlijke projecten in verschillende genres.'
                }
            }
        ]
    },
    {
        title: { en: 'Contact', pt: 'Contato', nl: 'Contact' },
        icon: 'mail',
        items: [
            {
                title: { en: 'Email', pt: 'Email', nl: 'Email' },
                description: { en: 'arthurhgarcia10@gmail.com', pt: 'arthurhgarcia10@gmail.com', nl: 'arthurhgarcia10@gmail.com' },
                content: { en: 'Best for collaborations and opportunities.', pt: 'Melhor canal para colaboracoes e oportunidades.', nl: 'Beste kanaal voor samenwerkingen en kansen.' },
                detailContent: {
                    en: 'Reach out at arthurhgarcia10@gmail.com for project opportunities, collaborations, or technical discussions. I am always open to building meaningful game experiences.',
                    pt: 'Entre em contato por arthurhgarcia10@gmail.com para oportunidades, colaboracoes ou discussoes tecnicas. Estou sempre aberto a criar experiencias de jogo significativas.',
                    nl: 'Neem contact op via arthurhgarcia10@gmail.com voor projecten, samenwerkingen of technische gesprekken. Ik sta altijd open om betekenisvolle game-ervaringen te bouwen.'
                }
            },
            {
                title: { en: 'GitHub', pt: 'GitHub', nl: 'GitHub' },
                description: { en: 'github.com/zmbfiedk', pt: 'github.com/zmbfiedk', nl: 'github.com/zmbfiedk' },
                content: { en: 'Open source code and project repositories.', pt: 'Codigo open source e repositorios de projetos.', nl: 'Open source code en projectrepositories.' },
                detailContent: {
                    en: 'GitHub: https://github.com/zmbfiedk\nExplore my game development and tooling repositories to see coding style, mechanics implementation, and iteration process.',
                    pt: 'GitHub: https://github.com/zmbfiedk\nVeja meus repositorios de desenvolvimento de jogos e ferramentas para acompanhar meu estilo de codigo e iteracao.',
                    nl: 'GitHub: https://github.com/zmbfiedk\nBekijk mijn repositories voor game development en tooling om mijn codestijl en iteratieproces te zien.'
                }
            },
            {
                title: { en: 'LinkedIn / Instagram', pt: 'LinkedIn / Instagram', nl: 'LinkedIn / Instagram' },
                description: { en: 'Professional + creative channels', pt: 'Canais profissionais e criativos', nl: 'Professionele + creatieve kanalen' },
                content: { en: 'linkedin.com/in/arthur-hgarcia-210810385', pt: 'linkedin.com/in/arthur-hgarcia-210810385', nl: 'linkedin.com/in/arthur-hgarcia-210810385' },
                detailContent: {
                    en: 'LinkedIn: https://www.linkedin.com/in/arthur-hgarcia-210810385/\nInstagram: https://www.instagram.com/zmbfiedk_backup_/',
                    pt: 'LinkedIn: https://www.linkedin.com/in/arthur-hgarcia-210810385/\nInstagram: https://www.instagram.com/zmbfiedk_backup_/',
                    nl: 'LinkedIn: https://www.linkedin.com/in/arthur-hgarcia-210810385/\nInstagram: https://www.instagram.com/zmbfiedk_backup_/'
                }
            }
        ]
    }
];

// SVG Icons
const icons = {
    user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/>',
    briefcase: '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'
};

const itemIcons = {
    disk: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    mail: '<rect width="18" height="14" x="3" y="5" rx="2"/><path d="m3 7 9 6 9-6"/>',
    github: '<path d="M12 2C6.48 2 2 6.48 2 12a10 10 0 0 0 6.84 9.49c.5.09.66-.22.66-.48v-1.68c-2.78.6-3.36-1.18-3.36-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.06-.61.06-.61 1 .08 1.52 1.03 1.52 1.03.88 1.5 2.3 1.06 2.85.82.09-.64.34-1.06.62-1.31-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.52 9.52 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.39.2 2.41.1 2.67.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.75c0 .26.17.57.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>',
    social: '<circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16.7 7.4l-5.4 3.2M11.3 13.4l5.4 3.2"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 10v6"/><circle cx="12" cy="7" r="1"/>',
    book: '<path d="M4 6a2 2 0 0 1 2-2h12v16H6a2 2 0 0 1-2-2z"/><path d="M8 4v16"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="2"/>'
};

function getItemIconFor(catIdx, itemTitleEn) {
    if (catIdx === 1) return itemIcons.disk;
    if (catIdx === 2) return itemIcons.folder;

    if (catIdx === 3) {
        if (itemTitleEn === 'Email') return itemIcons.mail;
        if (itemTitleEn === 'GitHub') return itemIcons.github;
        return itemIcons.social;
    }

    if (catIdx === 0) {
        if (itemTitleEn === 'Introduction') return itemIcons.info;
        if (itemTitleEn === 'Education') return itemIcons.book;
        return itemIcons.target;
    }

    return itemIcons.info;
}

// Original detailed project information + GitHub links
const PROJECT_DETAIL_INFO = {
    'Tower of Babell': {
        github: 'https://github.com/zmbfiedk/BO1.4/tree/dev',
        detailed: 'Sprint 0 - Game Design Document : Tower Of Babel\n\nNaam: Rubin\nKlas: GD1B\nDatum: 13/04/2026\n\n1. Titel en elevator pitch\n\nTitel: Tower Of Babel\n\nElevator pitch (maximaal twee zinnen):\nTower Of Babel is a wave-based hack and slash game where players fight increasingly stronger enemies. Every 10 waves both the enemies and the player become stronger, creating a scaling challenge.\n\n2. Wat maakt jouw game uniek\n\nThe game focuses on precise combat mechanics like dodge rolls, sprinting, and a 2-step combat system. Combined with multiple weapons, the player is constantly adapting their playstyle.\n\n3. Scope\nWave-based combat system\n3 weapons\nMultiple enemy types\nBoss at wave 50\nSimple arena level\n4. Mechanics\nCombat system (attack, parry, dodge)\nStamina system\nWeapon switching\nEnemy AI\nWave system\n5. Gameplay loop\nFight enemies\nAvoid damage\nDefeat wave\nGain strength\nRepeat\nDefeat boss\n6. Progressie\nEvery 10 waves:\nPlayer damage increases\nEnemies scale in strength\n7. Risico\'s en oplossingen\nBalancing issues -> playtesting\nCombat too hard -> adjust stamina/damage\nScaling too extreme -> tune values\n8. Planning\nSprint 1: Core combat\nSprint 2: Enemy systems\nSprint 3: Weapons\nSprint 4: Progression\nSprint 5: Boss\nSprint 6: Polish\n9. Inspiratie\nHack and slash games\nWave survival games\n10. Technisch ontwerp mini\nCombat system -> input + cooldowns\nEnemy AI -> state system\nWaves -> spawn system'
    },
    'Arthurs Playground': {
        github: '#',
        detailed: 'Arthurs Playground is my experimental sandbox for rapid gameplay prototyping. I use it to quickly validate mechanics before moving them into larger projects.\n\nProcess focus:\n- Test movement variants and combat feel quickly\n- Build throwaway prototypes to find strong loops\n- Validate player feedback and readability early\n- Reuse successful modules in bigger games'
    },
    'TowerDefense': {
        github: 'https://github.com/zmbfiedk/Tower-Defense',
        detailed: 'Sprint 0 - Game Design Document: Dragon Defense\nName: Arthur | Class: GD1B | Date: 08/09/2025\n\nDragon Defense is a tower defense game designed to avoid repetitive meta play. Every 10 waves the towers must be swapped, forcing strategic adaptation.\n\nFull project info:\n- 6 tower archetypes: Fast, Slow, Long Range, Short Range, Freeze, Flame\n- 5 enemy types + boss waves every 10 rounds\n- Dynamic progression: HP +10% per wave, speed +5% per wave, reward scaling\n- Grid-based placement and waypoint pathing system\n- Economy loop with building, upgrades, and strategic replacement\n\nTechnical process:\n- Sprint 1-5 roadmap from core loop to polish and boss logic\n- Event-driven architecture connecting Player, Tower, Enemy, Wave, UI, and Music managers\n- Dedicated balancing cycles for tower identity, enemy pressure, and fairness'
    },
    'Godot Game': {
        github: '#',
        detailed: 'Godot Game is an engine exploration project focused on transferring design and systems thinking across engines.\n\nProcess focus:\n- Evaluate scene architecture and GDScript workflow\n- Compare scripting and iteration speed vs Unity pipelines\n- Build fast vertical tests to evaluate mechanics and feedback\n- Document reusable patterns for future multi-engine development'
    },
    'Small C++ Games': {
        github: 'https://github.com/zmbfiedk/Shipgame',
        detailed: 'Sprint 0 - Game Design Document : Small C++ Games\n\nNaam: Arthur\nKlas: GD1B\nDatum: 13/04/2026\n\n1. Titel en elevator pitch\n\nTitel: Small C++ Games\n\nElevator pitch (maximaal twee zinnen):\nSmall C++ Games is a collection of small terminal-based games made to improve C++ skills. Each game focuses on a different core mechanic.\n\n2. Wat maakt jouw project uniek\n\nInstead of one large project, this focuses on multiple small games, each targeting specific programming skills using simple terminal visuals.\n\n3. Scope\nShip (done)\nPong (in progress)\nPlatformer (planned)\nRace game (planned)\n4. Mechanics\nMovement systems\nCollision systems\nPhysics basics\nGame loops\n5. Gameplay loop\nInput\nUpdate\nRender\nRepeat\n6. Progressie\nIncreasing complexity per game\nFrom simple movement -> full systems\n7. Risico\'s en oplossingen\nTerminal limits -> simple visuals\nComplexity -> keep systems small\nMessy code -> structure code\n8. Planning\nSprint 1: Ship\nSprint 2: Pong\nSprint 3: Platformer\nSprint 4: Race game\n9. Inspiratie\nRetro games\nPong\n10. Technisch ontwerp mini\nGame loop -> while loop\nInput -> keyboard\nCollision -> coordinate checks'
    },
    'Fractured': {
        github: 'https://github.com/MrRaven55/CheeseHeist',
        detailed: 'Sprint 0 - Game Design Document : Fractured (Gamejam)\n\nNaam: Arthur & Joshua\nKlas: GD1B\nDatum: 13/04/2026\n\n1. Titel en elevator pitch\n\nTitel: Fractured\n\nElevator pitch (maximaal twee zinnen):\nFractured is a top-down ragdoll slingshot game where the player launches a character to break glass and reach the goal. With limited attempts, each shot matters.\n\n2. Wat maakt jouw game uniek\n\nThe game combines ragdoll physics with a top-down slingshot mechanic, creating chaotic but skill-based gameplay.\n\n3. Scope\n2 levels\nSlingshot mechanic\nGlass obstacles\nLimited attempts\nSimple UI\n4. Mechanics\nDrag & release slingshot\nRagdoll physics\nGlass breaking system\nAttempt counter\n5. Gameplay loop\nAim\nLaunch\nBreak obstacles\nRetry if needed\nReach goal\n6. Progressie\nDifficulty increases through level design\nNo complex progression (gamejam scope)\n7. Risico\'s en oplossingen\nPhysics randomness -> tune forces\nToo short -> focus on replayability\nUnclear feedback -> improve visuals\n8. Planning\nDay 1: Core mechanic\nDay 2: Physics\nDay 3: Gameplay systems\nDay 4: Levels\nDay 5: Polish\n9. Inspiratie\nSlingshot games\nPhysics-based games\n10. Technisch ontwerp mini\nSlingshot -> force calculation\nRagdoll -> joints\nGlass -> break threshold'
    },
    'Roguelike Action Platformer': {
        github: 'https://github.com/zmbfiedk/RogueLikeActionPlatformer',
        detailed: 'This project explores a side-scroller roguelike inspired by Hollow Knight and Dead Cells, combining precise action-platformer controls with procedural progression.\n\nTechnical focus:\n- Responsive character controller with deterministic movement\n- Air/ground state handling and dash behavior\n- Enemy AI patterns and scalable challenge\n- Procedural level generation experiments\n- Combat readability, knockback, and game feel refinement'
    },
    'Vertical Slice': {
        github: 'https://github.com/zmbfiedk/Vertical-Slice2.0',
        detailed: 'Vertical Slice centers on transform-based deterministic physics for precise character gameplay without relying on Rigidbody-driven behavior.\n\nImplemented systems:\n- Explicit velocity integration and gravity tuning\n- Capsule cast collision checks with safe movement buffers\n- Ground detection and overlap resolution\n- Force/impulse application and knockback falloff\n- Controller architecture intended for action game responsiveness'
    }
};

function normalizeDetailTextToEnglish(text) {
    if (!text) return text;

    return text
        .replaceAll('Naam:', 'Name:')
        .replaceAll('Klas:', 'Class:')
        .replaceAll('Datum:', 'Date:')
        .replaceAll('1. Titel en elevator pitch', '1. Title and elevator pitch')
        .replaceAll('Titel:', 'Title:')
        .replaceAll('Elevator pitch (maximaal twee zinnen):', 'Elevator pitch (maximum two sentences):')
        .replaceAll('2. Wat maakt jouw game uniek', '2. What makes your game unique')
        .replaceAll('2. Wat maakt jouw project uniek', '2. What makes your project unique')
        .replaceAll('6. Progressie', '6. Progression')
        .replaceAll("7. Risico's en oplossingen", '7. Risks and solutions')
        .replaceAll('9. Inspiratie', '9. Inspiration')
        .replaceAll('10. Technisch ontwerp mini', '10. Mini technical design');
}

function getProjectDetailText(projectInfo) {
    if (!projectInfo) return '';

    const rawDetailed = typeof projectInfo.detailed === 'object'
        ? (projectInfo.detailed[currentLanguage] || projectInfo.detailed.en || '')
        : projectInfo.detailed;

    // Keep project docs consistently in English while preserving language switch for UI labels.
    return normalizeDetailTextToEnglish(rawDetailed || '');
}

// State
let selectedCategory = 0;
let selectedItem = 0;
let touchStart = null;
let touchEnd = null;
const minSwipeDistance = 50;
let lastTapTime = 0;

// Initialize
function init() {
    renderCategories();
    updateTranslations();
    attachEventListeners();
    scheduleUIUpdate();
}

function scheduleUIUpdate() {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            updateUI();
        });
    });
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;

    // Update button states
    document.querySelectorAll('.lang-btn').forEach((btn) => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    updateTranslations();
    renderCategories();
    scheduleUIUpdate();

    if (document.getElementById('detailPage').classList.contains('visible')) {
        refreshOpenDetailPageLanguage();
    }
}

function refreshOpenDetailPageLanguage() {
    const currentItem = menuData[selectedCategory].items[selectedItem];
    if (!currentItem) return;

    const projectInfo = selectedCategory === 1 ? PROJECT_DETAIL_INFO[currentItem.title.en] : null;
    const detailPageTitle = document.getElementById('detailPageTitle');
    const detailPageSubtitle = document.getElementById('detailPageSubtitle');
    const detailPageContent = document.getElementById('detailPageContent');

    detailPageTitle.textContent = currentItem.title[currentLanguage];
    detailPageSubtitle.textContent = currentItem.description[currentLanguage];
    detailPageContent.textContent = (projectInfo && projectInfo.detailed)
        ? getProjectDetailText(projectInfo)
        : (currentItem.detailContent[currentLanguage] || currentItem.content[currentLanguage]);
}

// Update UI translations
function updateTranslations() {
    document.getElementById('headerName').textContent = translations.name[currentLanguage];
    document.getElementById('backButtonText').textContent = translations.backToMenu[currentLanguage];
    document.getElementById('navHintDesktop').textContent = translations.navHintDesktop[currentLanguage];
    document.getElementById('navHintMobile').textContent = translations.navHintMobile[currentLanguage];
}

// Render categories
function renderCategories() {
    const wrapper = document.getElementById('categoriesWrapper');
    wrapper.innerHTML = menuData.map((category, catIdx) => `
        <div class="category-column" data-category="${catIdx}">
            <div class="category-icon-wrapper" onclick="selectCategory(${catIdx})">
                <div class="category-icon" data-icon="${catIdx}">
                    <svg viewBox="0 0 24 24">${icons[category.icon]}</svg>
                </div>
                <p class="category-title" data-title="${catIdx}">${category.title[currentLanguage]}</p>
            </div>
            <div class="items-list ${catIdx === 1 ? 'projects-list' : ''}">
                ${catIdx === 1 ? `<div class="projects-track">` : ''}
                ${category.items.map((item, itemIdx) => `
                    <div class="item-card" data-item="${catIdx}-${itemIdx}" onclick="handleItemClick(${catIdx}, ${itemIdx})">
                        <div class="item-row">
                            <span class="item-inline-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24">${getItemIconFor(catIdx, item.title.en)}</svg>
                            </span>
                            <div class="item-text-block">
                                <h3 class="item-title">${item.title[currentLanguage]}</h3>
                                <p class="item-description">${item.description[currentLanguage]}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
                ${catIdx === 1 ? `
                    <div class="item-card ghost-tab" aria-hidden="true"></div>
                    <div class="item-card ghost-tab" aria-hidden="true"></div>
                    <div class="item-card ghost-tab" aria-hidden="true"></div>
                ` : ''}
                ${catIdx === 1 ? `</div>` : ''}
            </div>
        </div>
    `).join('');
}

// Handle item click (double-click to open detail page)
function handleItemClick(catIdx, itemIdx) {
    const now = Date.now();
    const timeSinceLastTap = now - lastTapTime;

    selectItem(catIdx, itemIdx);

    // If double-click/tap (within 300ms), open detail page
    if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
        openDetailPage();
    }

    lastTapTime = now;
}

// Open detail page
function openDetailPage() {
    const currentItem = menuData[selectedCategory].items[selectedItem];
    const projectInfo = selectedCategory === 1 ? PROJECT_DETAIL_INFO[currentItem.title.en] : null;
    const detailGithubLink = document.getElementById('detailGithubLink');
    const detailPageContent = document.getElementById('detailPageContent');

    document.getElementById('detailPageTitle').textContent = currentItem.title[currentLanguage];
    document.getElementById('detailPageSubtitle').textContent = currentItem.description[currentLanguage];

    detailPageContent.textContent = (projectInfo && projectInfo.detailed)
        ? getProjectDetailText(projectInfo)
        : (currentItem.detailContent[currentLanguage] || currentItem.content[currentLanguage]);

    if (projectInfo && projectInfo.github && projectInfo.github !== '#') {
        detailGithubLink.href = projectInfo.github;
        detailGithubLink.classList.remove('hidden');
    } else {
        detailGithubLink.setAttribute('href', '#');
        detailGithubLink.classList.add('hidden');
    }

    document.getElementById('xmbContainer').classList.add('hidden');
    document.getElementById('detailPage').classList.add('visible');
    document.body.classList.add('detail-view');
}

// Close detail page
function closeDetailPage() {
    document.getElementById('xmbContainer').classList.remove('hidden');
    document.getElementById('detailPage').classList.remove('visible');
    document.body.classList.remove('detail-view');
}

function alignProjectsListToSelected() {
    if (selectedCategory !== 1) return;

    const projectsColumn = document.querySelector('.category-column[data-category="1"]');
    if (!projectsColumn) return;

    const list = projectsColumn.querySelector('.items-list');
    const track = projectsColumn.querySelector('.projects-track');
    const activeCard = projectsColumn.querySelector(`.item-card[data-item="1-${selectedItem}"]`);
    if (!list || !track || !activeCard) return;

    const targetOffset = activeCard.offsetTop - (list.clientHeight - activeCard.clientHeight) / 2;
    const maxOffset = Math.max(0, track.scrollHeight - list.clientHeight);
    const clampedOffset = Math.max(0, Math.min(targetOffset, maxOffset));

    track.style.transform = `translateY(${-clampedOffset}px)`;
}

// Update UI based on state
function updateUI() {
    const wrapper = document.getElementById('categoriesWrapper');

    const xmbContainer = document.getElementById('xmbContainer');
    const selectedColumn = wrapper.querySelector(
        `.category-column[data-category="${selectedCategory}"]`
    );

    if (selectedColumn) {
        const containerRect = xmbContainer.getBoundingClientRect();
        const selectedRect = selectedColumn.getBoundingClientRect();

        const containerCenterX = containerRect.left + containerRect.width / 2;
        const selectedCenterX = selectedRect.left + selectedRect.width / 2;

        const currentTransform = getComputedStyle(wrapper).transform;
        const currentX = currentTransform !== 'none'
            ? new DOMMatrixReadOnly(currentTransform).m41
            : 0;

        const deltaX = containerCenterX - selectedCenterX;
        wrapper.style.transform = `translateX(${currentX + deltaX}px)`;
    }

    // Update category styles
    document.querySelectorAll('.category-column').forEach((col, idx) => {
        const distance = Math.abs(idx - selectedCategory);
        const scale = 1 - distance * 0.15;
        const opacity = 1 - distance * 0.25;

        col.style.transform = `scale(${scale})`;
        col.style.opacity = opacity;

        const icon = col.querySelector('.category-icon');
        const title = col.querySelector('.category-title');
        const iconWrapper = col.querySelector('.category-icon-wrapper');

        if (distance === 0) {
            icon.classList.add('active');
            title.style.opacity = '1';
            iconWrapper.style.transform = 'translateY(-10px)';
        } else {
            icon.classList.remove('active');
            title.style.opacity = '0.5';
            iconWrapper.style.transform = 'translateY(0)';
        }

        // Update item styles
        const items = col.querySelectorAll('.item-card');
        items.forEach((item) => {
            if (!item.dataset.item) {
                item.classList.remove('active');
                item.style.setProperty('--scale', 0.9);
                item.style.opacity = 0;
                return;
            }

            const isActiveCategory = idx === selectedCategory;
            const originalItemIdx = Number.parseInt(item.dataset.item.split('-')[1], 10);
            const itemDistance = Math.abs(originalItemIdx - selectedItem);
            const itemScale = isActiveCategory ? 1 - itemDistance * 0.15 : 0.9;
            const itemOpacity = isActiveCategory ? 1 - itemDistance * 0.4 : 0.3;

            item.style.setProperty('--scale', itemScale);
            item.style.opacity = itemOpacity;

            if (isActiveCategory && itemDistance === 0) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });

    // Update detail panel
    const detailPanel = document.getElementById('detailPanel');
    const detailText = document.getElementById('detailText');
    detailText.textContent = menuData[selectedCategory].items[selectedItem].content[currentLanguage];
    detailPanel.classList.add('visible');

    alignProjectsListToSelected();
}

// Selection functions
function selectCategory(idx) {
    selectedCategory = idx;
    selectedItem = 0;
    scheduleUIUpdate();
    alignProjectsListToSelected();
}

function selectItem(catIdx, itemIdx) {
    selectedCategory = catIdx;
    selectedItem = itemIdx;
    scheduleUIUpdate();
    alignProjectsListToSelected();
}

// Event listeners
function attachEventListeners() {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // If detail page is open
        if (document.getElementById('detailPage').classList.contains('visible')) {
            if (e.key === 'Escape' || e.key === 'Backspace') {
                closeDetailPage();
            }
            return;
        }

        if (e.key === 'ArrowLeft') {
            selectedCategory = Math.max(0, selectedCategory - 1);
            selectedItem = 0;
            updateUI();
        } else if (e.key === 'ArrowRight') {
            selectedCategory = Math.min(menuData.length - 1, selectedCategory + 1);
            selectedItem = 0;
            updateUI();
        } else if (e.key === 'ArrowUp') {
            selectedItem = Math.max(0, selectedItem - 1);
            updateUI();
        } else if (e.key === 'ArrowDown') {
            selectedItem = Math.min(menuData[selectedCategory].items.length - 1, selectedItem + 1);
            updateUI();
        } else if (e.key === 'Enter') {
            openDetailPage();
        }
    });

    // Mouse wheel navigation for project list (keeps selected project centered)
    document.addEventListener('wheel', (e) => {
        if (document.getElementById('detailPage').classList.contains('visible')) return;
        if (selectedCategory !== 1) return;

        e.preventDefault();
        if (Math.abs(e.deltaY) < 8) return;

        if (e.deltaY > 0) {
            selectedItem = Math.min(menuData[selectedCategory].items.length - 1, selectedItem + 1);
        } else {
            selectedItem = Math.max(0, selectedItem - 1);
        }
        updateUI();
    }, { passive: false });

    // Touch navigation
    document.addEventListener('touchstart', (e) => {
        touchEnd = null;
        touchStart = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    });

    document.addEventListener('touchmove', (e) => {
        touchEnd = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    });

    document.addEventListener('touchend', () => {
        if (!touchStart || !touchEnd) return;
        if (document.getElementById('detailPage').classList.contains('visible')) return;

        const distanceX = touchStart.x - touchEnd.x;
        const distanceY = touchStart.y - touchEnd.y;
        const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

        if (isHorizontalSwipe) {
            if (Math.abs(distanceX) > minSwipeDistance) {
                if (distanceX > 0) {
                    selectedCategory = Math.min(menuData.length - 1, selectedCategory + 1);
                    selectedItem = 0;
                } else {
                    selectedCategory = Math.max(0, selectedCategory - 1);
                    selectedItem = 0;
                }
                updateUI();
            }
        } else if (Math.abs(distanceY) > minSwipeDistance) {
            if (distanceY > 0) {
                selectedItem = Math.min(menuData[selectedCategory].items.length - 1, selectedItem + 1);
            } else {
                selectedItem = Math.max(0, selectedItem - 1);
            }
            updateUI();
        }
    });

    // Window resize
    window.addEventListener('resize', scheduleUIUpdate);
    window.visualViewport?.addEventListener('resize', scheduleUIUpdate);
    window.addEventListener('orientationchange', scheduleUIUpdate);
}

// Start the app
init();