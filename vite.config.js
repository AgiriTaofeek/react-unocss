import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';
// import presetMini from '@unocss/preset-mini';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        // presetMini({
        //   theme: {
        //     // ...
        //     colors: {
        //       veryCool: '#0000ff', // class="text-very-cool"
        //       brand: {
        //         primary: 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"
        //       },
        //     },
        //   },
        // }),
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
      transformers: [transformerAttributifyJsx()],
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
