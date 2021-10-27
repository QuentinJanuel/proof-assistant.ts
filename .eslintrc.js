module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint",
	],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
	],
	rules: {
		"@typescript-eslint/no-unused-vars": "off",
		"no-case-declarations": "off",
		// No semi
		"semi": "off",
		"@typescript-eslint/semi": ["error", "never"],
		// "@typescript-eslint/switch-exhaustiveness-check": ["error"],
	},
};
