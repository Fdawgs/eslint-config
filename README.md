# @fdawgs/eslint-config

[![GitHub release](https://img.shields.io/github/release/Fdawgs/eslint-config.svg)](https://github.com/Fdawgs/eslint-config/releases/latest/)
[![npm version](https://img.shields.io/npm/v/@fdawgs/eslint-config)](https://npmjs.com/package/@fdawgs/eslint-config)
[![CI](https://github.com/Fdawgs/eslint-config/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Fdawgs/eslint-config/actions/workflows/ci.yml)
[![code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> @fdawgs' shareable flat ESLint config

## Overview

This package provides a shareable ESLint config that can be used across multiple projects. It is designed to enforce consistent coding styles across personal and professional projects, ensuring that code is clean, readable, and maintainable.

## Installation

Install using `npm`:

```bash
npm i @fdawgs/eslint-config
```

## Example usage

Import the package inside of an eslint.config.js file as shown in the [ESLint documentation](https://eslint.org/docs/latest/extend/shareable-configs#using-a-shareable-config) and it will apply the rules defined in the `@fdawgs/eslint-config` package to your project:

```js
import { defineConfig } from "eslint/config";
import fdawgs from "@fdawgs/eslint-config";

const config = defineConfig([
	{
		files: ["**/*.js", "**/*.jsx"],
		extends: [fdawgs],
	},
]);

export default config;
```

## Contributing

Contributions are welcome, and any help is greatly appreciated!

See [the contributing guide](https://github.com/Fdawgs/.github/blob/main/CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](https://github.com/Fdawgs/.github/blob/main/CODE_OF_CONDUCT.md) when contributing.

## License

`@fdawgs/eslint-config` is licensed under the [MIT](./LICENSE) license.
