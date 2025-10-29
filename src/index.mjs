import globals from "globals";

// Configs
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier/flat";

// Plugins
// @ts-ignore: no types exist for this plugin
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import imp from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import n from "eslint-plugin-n";
// @ts-ignore: no types exist for this plugin
import promise from "eslint-plugin-promise";
import regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";

/** @type {import('eslint').Linter.Config[]} */
const config = [
	eslint.configs.recommended,
	comments.recommended,
	jsdoc.configs["flat/recommended"],
	promise.configs["flat/recommended"],
	regexp.configs["flat/recommended"],
	security.configs.recommended,
	{
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: 2024,
			sourceType: "commonjs",
			globals: { ...globals.node },
		},
		plugins: { import: imp, jsdoc, n, regexp },
		rules: {
			// Standard rules
			// Possible problems
			"array-callback-return": ["error", { allowImplicit: true }],
			"no-await-in-loop": "warn",
			"no-constructor-return": "error",
			"no-promise-executor-return": "error",
			"no-template-curly-in-string": "error",
			"no-use-before-define": [
				"error",
				{ functions: true, classes: true, variables: true },
			],
			"no-useless-assignment": "error",
			"require-atomic-updates": "error",
			// Suggestions
			"arrow-body-style": [
				"error",
				"as-needed",
				{
					requireReturnForObjectLiteral: false,
				},
			],
			camelcase: [
				"error",
				{ properties: "never", ignoreDestructuring: false },
			],
			"class-methods-use-this": "error",
			"consistent-return": "error",
			curly: ["error", "multi-line"],
			"default-case-last": "error",
			"default-param-last": "error",
			"dot-notation": "error",
			eqeqeq: ["error", "always", { null: "ignore" }],
			"func-names": "warn",
			"func-style": ["error", "declaration"],
			"grouped-accessor-pairs": "error",
			"guard-for-in": "error",
			"max-classes-per-file": ["error", 1],
			"new-cap": [
				"error",
				{
					capIsNew: false,
					capIsNewExceptions: [
						"Immutable.Map",
						"Immutable.Set",
						"Immutable.List",
					],
				},
			],
			"no-array-constructor": "error",
			"no-bitwise": "error",
			"no-caller": "error",
			"no-console": "warn",
			"no-else-return": ["error", { allowElseIf: false }],
			"no-empty-function": [
				"error",
				{
					allow: ["arrowFunctions", "functions", "methods"],
				},
			],
			"no-eval": "error",
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-extra-label": "error",
			"no-floating-decimal": "error",
			"no-implied-eval": "error",
			"no-iterator": "error",
			"no-label-var": "error",
			"no-labels": "error",
			"no-lone-blocks": "error",
			"no-lonely-if": "error",
			"no-loop-func": "error",
			"no-multi-assign": "error",
			"no-multi-str": "error",
			"no-nested-ternary": "error",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-wrappers": "error",
			"no-object-constructor": "error",
			"no-octal-escape": "error",
			"no-param-reassign": [
				"error",
				{
					props: true,
					ignorePropertyModificationsFor: [
						"acc", // Reduce accumulators
						"accumulator", // Reduce accumulators
						"req", // Server requests
						"request", // Server requests
						"res", // Server responses
						"response", // Server responses
					],
				},
			],
			"no-plusplus": "error",
			"no-proto": "error",
			"no-return-assign": ["error", "always"],
			"no-self-compare": "error",
			"no-sequences": "error",
			"no-shadow": "error",
			"no-throw-literal": "error",
			"no-undef-init": "error",
			"no-underscore-dangle": [
				"error",
				{
					enforceInMethodNames: true,
				},
			],
			"no-unneeded-ternary": ["error", { defaultAssignment: false }],
			"no-unreachable-loop": "error",
			"no-unused-expressions": [
				"error",
				{
					allowShortCircuit: false,
					allowTernary: false,
					allowTaggedTemplates: false,
				},
			],
			"no-useless-computed-key": "error",
			"no-useless-concat": "error",
			"no-useless-constructor": "error",
			"no-useless-rename": "error",
			"no-useless-return": "error",
			"no-var": "error",
			"no-void": "error",
			"object-shorthand": [
				"error",
				"always",
				{
					ignoreConstructors: false,
					avoidQuotes: true,
				},
			],
			"one-var": ["error", "never"],
			"prefer-const": [
				"error",
				{
					destructuring: "any",
					ignoreReadBeforeAssign: true,
				},
			],
			"prefer-destructuring": ["error", { object: true, array: false }],
			"prefer-exponentiation-operator": "error",
			"prefer-object-spread": "error",
			"prefer-promise-reject-errors": [
				"error",
				{ allowEmptyReject: true },
			],
			"prefer-rest-params": "error",
			"prefer-spread": "error",
			radix: "error",
			"symbol-description": "error",
			strict: ["error", "global"],
			yoda: "error",
			// Comments rules
			"@eslint-community/eslint-comments/disable-enable-pair": "off",
			"@eslint-community/eslint-comments/no-unused-disable": "error",
			"@eslint-community/eslint-comments/require-description": "error",
			// Import rules
			"import/no-extraneous-dependencies": "error",
			// JSDoc rules
			"jsdoc/check-syntax": "error", // Error on Google Closure Compiler annotations as IntelliSense struggles with them
			"jsdoc/require-hyphen-before-param-description": "error",
			// Node rules
			"n/global-require": "error",
			"n/hashbang": "error",
			"n/no-deprecated-api": "error",
			"n/no-new-require": "error",
			"n/no-path-concat": "error",
			"n/no-unsupported-features/es-builtins": "error",
			"n/no-unsupported-features/es-syntax": "error",
			"n/no-unsupported-features/node-builtins": "error",
			"n/prefer-node-protocol": "error",
			// Promise rules
			"promise/prefer-await-to-callbacks": "warn",
			"promise/prefer-await-to-then": "warn",
			// RegExp rules
			"regexp/require-unicode-regexp": "error",
			// Security rules
			"security/detect-object-injection": "off",
		},
	},
	{
		files: ["scripts/**/*.js"],
		rules: {
			"no-console": "off",
		},
	},
	prettier,
];

export default config;
