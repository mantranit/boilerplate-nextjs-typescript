# Next.js with TypeScript and ESLint

Starter code for a clean Next.js + TypeScript + ESLint project.

## Get started

```sh
# Install dependencies
yarn

# Start dev server
yarn dev
```

## From Create-Next-App

Some differences are:

- Using `npx tsconfig.json` for Nextjs
- Husky package
- ESLint and Prettier are integrated with VSCode
- Lint-staged package: linting will only happen on staged files, not all file

## What is commitlint

commitlint checks if your commit messages meet the conventional commit format.

In general the pattern mostly looks like this:

```
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

Common types according to commitlint-config-conventional (based on the Angular convention) can be:

```
build
ci
chore
docs
feat
fix
perf
refactor
revert
style
test
```
