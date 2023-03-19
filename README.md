# react-ts

React boilerplate template with typescript and vite

![Typescript](https://img.shields.io/badge/lang-typescript-blue) ![Vitest](https://img.shields.io/badge/test-vitest-brightgreen)
![Linter](https://img.shields.io/badge/lint-typescript--eslint%20%7C%20eslint-informational) ![prettier](https://img.shields.io/badge/formatter-prettier-blueviolet) ![pnpm](https://img.shields.io/badge/pnpm-%3E=7.17.1-yellow)

# Getting started

Use this repository as a [GitHub template](https://github.com/dhelarius/react-ts/generate) or use [degit](https://github.com/Rich-Harris/degit) to clone to your machine with an empty git history:

```
npx degit dhelarius/react-ts#fullstack my-app
```

# Frontend

## Features

- [Vite](https://vitejs.dev/) with [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/).
- [ESlint](https://eslint.org/), [typescript-eslint](https://typescript-eslint.io/), [Prettier](https://prettier.io/) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- Unit testing with [Vitest](https://vitest.dev/).

Access the **`frontend`** directory.  
Then, install the dependencies:  

```
pnpm install
```

## Before you start coding

- [ ] Change the `vite.svg` on **`public`** folder. [favicon.io](https://favicon.io/) is a cool tool for generating these assets.
- [ ] Remove the `react.svg` from **`assest`** folder.
- [ ] In the project root, remove the **`test`**.
- [ ] Change the title in the `index.html`.
- [ ] Modify or delete the `LICENSE` file.
- [ ] Change the `name` and `description` field in package.json.

## Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm preview` - locally preview the production build.
- `pnpm lint` - runs TypeScript and ESLint.
- `pnpm prettier:check` - checks that files are already formatted.
- `pnpm prettier:write` - format all files with Prettier.
- `pnpm test` - run unit tests with Vitest.
- `pnpm test:ui` - run unit tests with ui vitest.

# Backend

## Features

- [Typescript](https://www.typescriptlang.org/).
- [ESlint](https://eslint.org/), [typescript-eslint](https://typescript-eslint.io/), [Prettier](https://prettier.io/),[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and [Jest](https://jestjs.io/).

Access the **`backend`** directory.  
Then, install the dependencies:  

```
pnpm install
```

## Before you start coding

- [ ] Change the `name` and `description` field in package.json.

## Scripts

- `pnpm dev` - start server execution for development.
- `pnpm prod` - start server execution for production. The generated files will be on the `dist` folder.
- `pnpm build` - build for production.
- `pnpm lint` - runs TypeScript and ESLint.
- `pnpm prettier:check` - checks that files are already formatted.
- `pnpm prettier:write` - format all files with Prettier.
- `pnpm test` - run unit tests with jest.