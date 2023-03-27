import { defineConfig } from 'unocss/vite';
import { presetUno, presetAttributify } from 'unocss';

export default defineConfig({
  rules: [],
  shortcuts: {},
  presets: [presetUno(), presetAttributify()],
});
