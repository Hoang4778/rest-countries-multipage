export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["country-favicon-96.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-106a9a44.js","imports":["_app/immutable/start-106a9a44.js","_app/immutable/chunks/index-52216521.js","_app/immutable/chunks/singletons-d63aee7d.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "border/[nation]",
				pattern: /^\/border\/([^/]+?)\/?$/,
				names: ["nation"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "[country]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["country"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
