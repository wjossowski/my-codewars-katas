# Typescript x Webpack Library boilerplate

## Cool stuff included:

- TypeScript - Esnext build features
- Webpack - Library deployment
- Husky - Hooks on commit
- Jest
- Prettier

## How to start?

```sh
$ git clone https://github.com/wjossowski/typescript-webpack-library-boilerplate.git
$ nvm use
$ yarn
```

## How to build

```sh
$ yarn build
```

## Missing NPM records in `package.json` to publis package:

```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/wjossowski"
  },
  "repository": {
    "type": "git",
    "url": "ssh://git@github.com:wjossowski/<package-name>.git",
    "directory": "@wjossowski/<package-name>"
  },
  "files": ["lib/**/*"]
}
```
