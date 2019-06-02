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
		editLinks: true,
		docsBranch: 'master',
		repoLabel: 'GitHub',
		sidebarDepth: 10,
		searchMaxSuggestions: 10,
		docsDir: 'pages',
		locales: {
			'/': {
				selectText: 'Languages',
				editLinkText: 'Edit it, Hack it!',
				lastUpdated: 'Last Updated',
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
							title: 'Home',
							collapsable: false,
							children: ['/', 'credits/'],
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
				lastUpdated: 'Последнее обновление',
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
						'more-content',
						'final-content',
					],
					'/ru/ios/': [
						'',
						'more-content',
						'final-content',
					],
					'/ru/telegram/': [
						'',
						'links',
						'rules',
					],
					'/ru/': [
						{
							title: 'Главный',
							collapsable: false,
							children: ['/ru/', '/ru/credits/'],
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
								'/ru/guides/custom-themes',
								'/ru/guides/default-theme-config',
							],
						},
					],
				},
			},
			'/uz/': {
				selectText: 'Tillar',
				editLinkText: "O'zgartirish kiriting",
				lastUpdated: 'Oxirgi yangilangan',
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
							title: 'Asosiy',
							collapsable: false,
							children: ['/uz/', '/uz/credits/'],
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
