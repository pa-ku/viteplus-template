<h1 align="center">⚡VitePlus Template</h1>

`Vite` `TS` `React` `Vitest` `Tailwind` `Lucide` `Eslint (Common)` `Prettier (With the tailwind pluggin)`

#### Create the project.

```shell
pnpm dlx degit pa-ku/viteplus-template.git app-name
```

#### Access the project directory.

```shell
cd app-name
```

#### Install dependencies.

```shell
pnpm install
```

<br></br>

## 🌐 Relative Paths

Relative paths allow importing files without using long and repetitive routes (../../components/Button), making code organization easier.

### How to Use Them

```js
import Header from "@components/Header"
```

### Dynamic Paths Added

`@src`
`@assets`
`@components`
`@hooks`
`@pages`
`@utils`
`@context`
`@data`
<br></br>

> [!IMPORTANT]
> In this project, aliases are configured in tsconfig.app.json and vite.config.json, allowing them to be used in both TypeScript and Node.
