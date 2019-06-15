module.exports = {
	theme: 'yuu',
	head: [
		['link', {rel: 'icon', href: '/favicon/favicon.ico'}]
	],
	locales: {
		'/': {
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
						link: '/',
					},
					{
						text: 'Руководство',
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
						'fix-error-app-message',
					],
					'/ios/': [
						'',
						'ios13',
					],
					'/telegram/': [
						'',
					],
					'/': [
						{
							title: 'Полезные',
							collapsable: false,
							children: ['/credits/'],
						},
						{
							title: 'Установка Хакинтоша',
							collapsable: false,
							children: [
								'/guides/',
								'/guides/bw',
							],
						},
						{
							title: 'Другие',
							children: [
								'/guides/',
							],
						},
					],
				},
			},
			'/uz/': {
				selectText: 'Tillar',
				editLinkText: "Birga o'zgatirish kiriting!",
				serviceWorker: {
					updatePopup: {
						message: "Yangi kontent mavjud.",
						buttonText: "Yangilash"
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
						'fix-error-app-message',
					],
					'/uz/ios/': [
						'',
						'ios13',
					],
					'/uz/telegram/': [
						'',
					],
					'/': [
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
							title: 'Boshqalars',
							children: [
								'/uz/guides/',
							],
						},
					],
				},
			},
		},
	},
};
