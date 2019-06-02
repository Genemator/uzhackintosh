module.exports = {
	theme: 'yuu',
	head: [
		['link', {rel: 'icon', href: '/favicon/favicon.ico'}]
	],
	locales: {
		'/': {
			lang: 'English',
			title: 'UzHackintosh || Development Portal',
			description: 'UzHackintosh - [macOS, iOS] Development Portal for UZB developers',
		},
		'/ru/': {
			lang: 'Русский',
			title: 'UzHackintosh || Портал Разработки',
			description: 'UzHackintosh - [macOS, iOS] Портал разработки для разработчиков УЗБ',

		},
		'/uz/': {
			lang: "O'zbek",
			title: 'UzHackintosh || Dasturlash Portali',
			description: "UzHackintosh - [macOS, iOS] O'zbekistondagi Programistlar uchun Portal",
		},
	},
	themeConfig: {
		logo: '/images/logo.png',
		yuu: {
			colorThemes: ['red', 'blue'],
		},
		repo: 'genemator/uzhackintosh',
		docsBranch: 'master',
		repoLabel: 'GitHub',
		sidebarDepth: 10,
		searchMaxSuggestions: 10,
		docsDir: 'pages',
		locales: {
			'/': {
				selectText: 'Languages',
				serviceWorker: {
					updatePopup: {
						message: "New content is available.",
						buttonText: "Refreshissimo"
					}
				},
				"nav": [
					{
						text: 'Home',
						link: '/',
					},
					{
						text: 'Guide',
						link: '/guides/',
					},
					{
						text: 'MacOS',
						link: '/macos/',
					},
					{
						text: 'iOS',
						link: '/ios/',
					},
					{
						text: 'Telegram',
						link: '/telegram/',
					},
				],
				sidebar: {
					'/macos/': [
						'',
						'more-content',
						'final-content',
					],
					'/ios/': [
						'',
						'more-content',
						'final-content',
					],
					'/telegram/': [
						'',
						'links',
						'rules',
					],
					'/': [
						{
							title: 'Useful',
							collapsable: false,
							children: ['credits/'],
						},
						{
							title: 'Hackintosh Installation',
							collapsable: false,
							children: [
								'/guides/',
								'/guides/bw',
							],
						},
						{
							title: 'Others',
							children: [
								'/guides/custom-themes',
								'/guides/default-theme-config',
							],
						},
					],
				},
			},
			'/ru/': {
				selectText: 'Языки',
				editLinkText: 'Отредактируйте это вместе!',
				serviceWorker: {
					updatePopup: {
						message: "Новый контент доступен.",
						buttonText: "Обновить"
					}
				},
				"nav": [
					{
						text: 'Главный',
						link: '/ru/',
					},
					{
						text: 'Руководство',
						link: '/ru/guides/',
					},
					{
						text: 'MacOS',
						link: '/ru/macos/',
					},
					{
						text: 'iOS',
						link: '/ru/ios/',
					},
					{
						text: 'Telegram',
						link: '/ru/telegram/',
					},
				],
				sidebar: {
					'/ru/macos/': [
						'',
						'fix-error-app-message',
					],
					'/ru/ios/': [
						'',
						'ios13',
					],
					'/ru/telegram/': [
						'',
						'links',
						'rules',
					],
					'/ru/': [
						{
							title: 'Полезные',
							collapsable: false,
							children: ['/ru/credits/'],
						},
						{
							title: 'Установка Хакинтоша',
							collapsable: false,
							children: [
								'/ru/guides/',
								'/ru/guides/bw',
							],
						},
						{
							title: 'Другие',
							children: [
								'/ru/guides/more-content',
								'/ru/guides/final-content',
							],
						},
					],
				},
			},
			'/uz/': {
				selectText: 'Tillar',
				editLinkText: "O'zgartirish kiriting",
				serviceWorker: {
					updatePopup: {
						message: "Yangi kontent bor.",
						buttonText: "Yangilang"
					}
				},
				"nav": [
					{
						text: 'Asosiy',
						link: '/uz/',
					},
					{
						text: "Qo'llanma",
						link: '/uz/guides/',
					},
					{
						text: 'MacOS',
						link: '/uz/macos/',
					},
					{
						text: 'iOS',
						link: '/uz/ios/',
					},
					{
						text: 'Telegram',
						link: '/uz/telegram/',
					},
				],
				sidebar: {
					'/uz/macos/': [
						'',
						'more-content',
						'final-content',
					],
					'/uz/ios/': [
						'',
						'more-content',
						'final-content',
					],
					'/uz/telegram/': [
						'',
						'links',
						'rules',
					],
					'/uz/': [
						{
							title: 'Foydali',
							collapsable: false,
							children: ['/uz/credits/'],
						},
						{
							title: "Hackintosh O'rnatish",
							collapsable: false,
							children: [
								'/uz/guides/',
								'/uz/guides/bw',
							],
						},
						{
							title: 'Boshqalar',
							children: [
								'/uz/guides/custom-themes',
								'/uz/guides/default-theme-config',
							],
						},
					],
				},
			},
		},
	},
};
