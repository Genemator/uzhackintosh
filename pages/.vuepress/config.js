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
		docsBranch: 'master',
		repoLabel: 'GitHub',
		docsDir: 'pages',
		editLinks: true,
		editLinkText: 'Edit it, Hack it!',
		sidebarDepth: 10,
		lastUpdated: 'Updated',
		searchMaxSuggestions: 10,
		serviceWorker: {
			 updatePopup: {
			    message: "New content is available.",
			    buttonText: "Refreshissimo"
			}
		},
		nav: [
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
			{
				text: 'Languages',
				items: [
					{ text: 'English', link: '/' },
					{ text: 'Русский (Under Development)', link: '404' },
					{ text: "O'zbek (Under Development)", link: '404' }
				]
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
