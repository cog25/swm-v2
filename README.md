# swm-v2
- soild-start
- unocss
- bun


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
