module.exports = {
	title: 'UzHackintosh',
	description: 'UzHackintosh - [macOS, iOS] Development Portal for UZB developers',
	theme: 'yuu',
	themeConfig: {
		logo: 'https://i.imgur.com/x61tQnz.png',
		yuu: {
			colorThemes: ['red', 'blue'],
		},
		repo: 'genemator/uzhackintosh',
		docsDir: 'pages',
		editLinks: true,
		sidebarDepth: 3,
		lastUpdated: true,
		nav: [
			{
				text: 'Home',
				link: '/',
			},
			{
				text: 'Guide',
				link: '/guides/more-text',
			},
			{
				text: 'Commando',
				link: '/commando/',
			},
			{
				text: 'Red',
				link: '/red/',
			},
			{
				text: 'Telegram',
				link: '/telegram/',
			},
		],
		sidebar: {
			'/commando/': [
				'',
				'more-content',
				'final-content',
			],
			'/red/': [
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
					children: ['/', 'custom/'],
				},
				{
					title: 'Intel installation',
					collapsable: false,
					children: [
						'/guides/more-text',
						'/guides/markdown',
						'/guides/markdown-vuepress',
						'/guides/markdown-it',
					],
				},
				{
					title: 'Misc pages',
					children: [
						'/guides/custom-themes',
						'/guides/default-theme-config',
					],
				},
			],
		},
	},
};
