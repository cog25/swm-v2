import solid from "solid-start/vite";
import unocss from "unocss/vite"
import { defineConfig } from "vite";
import StaticAdapter from "solid-start-static"

export default defineConfig({
  plugins: [solid({ adapter:  StaticAdapter()}), unocss()],
});
