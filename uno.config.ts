import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({ cdn: "https://esm.sh/" }),
  ],
  transformers: [transformerVariantGroup()],
  // ...UnoCSS options
  shortcuts: {
    "container": "m-auto max-w-900px px-4",
  },
  theme: {
    fontFamily: {
      "line-seed": "'Line Seed KR'",
      "pretendard": "'Pretendard Variable'",
    },
  },
});
