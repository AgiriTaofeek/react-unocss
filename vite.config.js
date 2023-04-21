import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
      shortcuts: [
        // ['btn-red', 'bg-red-500 text-light-100'],
        [/^btn-(.*)$/, ([, color]) => `bg-${color}-500 text-light-100`],
      ],
      rules: [
        // ['my-blue', { color: 'blue' }],
        [/^my-(.*)$/, (result) => ({ color: result[1] })],
      ],
    }),
    react(),
  ],
});
