import {heroui, colors} from "@heroui/theme";
import { COLORS } from './src/constants.ts';

 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-darkest': COLORS.mainDarkest,
        'main-darker': COLORS.mainDarker,
        'main-dark': COLORS.mainDark,
      }
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      dark: {
        colors: {
          background: COLORS.mainDarkest,
          primary: COLORS.primary,
        }
      }
    }
  })],
}
