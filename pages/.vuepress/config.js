module.exports = {
	head: [
		['link', { rel: 'icon', href: '/favicon/favicon.ico' }]
	],
	title: 'UzHackintosh',
	description: 'UzHackintosh - [macOS, iOS] Development Portal for UZB developers',
	theme: 'yuu',
	"themeConfig": {
		logo: '/images/logo.png',
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
		lastUpdated: true,
		searchMaxSuggestions: 10,
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
				"text": 'MacOS',
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
					{ text: 'Русский (Under Development)', link: '/' },
					{ text: "O'zbek (Under Development)", link: '/' }
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
					title: 'Others',
					children: [
						'/guides/custom-themes',
						'/guides/default-theme-config',
					],
				},
			],
		},
	},
	plugins: [
		     ['@vuepress/google-analytics', {
		       ga: 'UA-12345678-9'
     }]
  ]
};
