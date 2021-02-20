module.exports = {
	purge: [
		"src/**/*.js",
		"src/**/*.jsx",
		"src/**/*.ts",
		"src/**/*.tsx",
		"public/**/*.html",
	],
	theme: {
		extend: {
			height: {
				"h-screen-1/2": "50vh",
				"h-screen-3/4": "75vh",
				"h-screen-1/4": "25vh",
			},
		},
	},
	variants: {
		extend: {
			display: ["hover", "focus", "group-hover"],
		},
	},
	plugins: [],
};
