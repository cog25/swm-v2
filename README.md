# SolidStart by cog25

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com) and [`unocss`](https://unocss.dev);

## Creating a project

```bash
bunx degit cog25/solidstart
```

## Developing

Once you've created a project and installed dependencies with `bun i` start a development server:

```bash
bun dev

# or start the server and open the app in a new browser tab
bun dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `bun run build` will generate a Node app that you can run with `bun start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.
