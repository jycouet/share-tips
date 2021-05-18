# Tips that I want to share 🚲

⚡ To share at least with me ⚡

## 🚀 General tips

- add a `.npmrc` file like [this](./.npmrc).

## 🧰 Svelte & Svelte Add

Nide tool to start a project in the right way: [svelte-add](https://github.com/svelte-add/svelte-add)

```bash
npm init svelte@next my-cool-app
yarn add @sveltejs/adapter-node -D

npx svelte-add tailwindcss --jit
npx svelte-add graphql
```

Add [app.postcss](./skm/app.postcss) under `src`
Add [\_\_layout.svelte](./skm/__layout.svelte) under `src/routes`

## 📂 .fttemplates

Simply grab your favorite [fttemplates](https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure)

### module-NewEntityResolversGetCreate

```bash
npx degit github:jycouet/share-tips/fttemplates/module-NewEntityResolversGetCreate .fttemplates/module-NewEntityResolversGetCreate
```

## 💯 skm - SvelteKit Modules

add codegen:

```bash
yarn add -D @graphql-codegen/cli @graphql-codegen/graphql-modules-preset @graphql-codegen/introspection @graphql-codegen/typescript @graphql-codegen/typescript-document-nodes @graphql-codegen/typescript-operations @graphql-codegen/typescript-resolvers graphql-modules @urql/devtools
```

```bash
yarn add graphql @urql/core @urql/exchange-request-policy @urql/svelte
```

To trigger the codegen, add in package.json

```bash
"gen": "graphql-codegen --config codegen-skm.yml",
```

Check: [./skm/codegen-skm.yml](./codegen/codegen-skm.yml) to get the prefect codegen for SvelteKit (graphql-modules & client)

## 💡 Nice scripts in package.json

- clean your repo (coming back to a git clone)

  ```json
  "reset": "git clean -xdf"
  ```

- update all your packages!
  ```json
  "update": "npm i -g npm-check-updates && ncu -u -p yarn && yarn"
  ```

## 🔧 tools

### graphql-codegen-modules-merge-resolver

Generate a `resolvers.ts` file in `_gen` folder of each graphql-module. It's simply a merge of all existing resolvers in the `resolvers` folder of the graphql-module.
//Todo: Ask to have the option directly in graphql-codegen?

To launch it, add in package.json:

```bash
"gen-mr": "node tools/graphql-codegen-modules-merge-resolver",
```
