import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-violet-100': '#f9e5ff', // bem clara
        'custom-violet-200': '#f2c0ff',
        'custom-violet-300': '#ea99ff',
        'custom-violet-400': '#e066ff',
        'custom-violet-500': '#FF1CF7', // principal
        'custom-violet-600': '#d100d6',
        'custom-violet-700': '#a600ab',
        'custom-violet-800': '#b249f8', // escuro
        'custom-violet-900': '#73007a', // mais escuro
        'custom-violet-alpha': 'rgba(255,0,255,0.4)', // transparente
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #FF1CF7, #b249f8)',
      },
      boxShadow: {
        'violet-glow': '0 0 20px 2px rgba(255, 81, 255, 0.4)',
      },
      keyframes: {
        'fade-slide': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-slide-secondary': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-slide': 'fade-slide 1s ease-out forwards',
        'fade-slide-secondary': 'fade-slide-secondary 2s ease-soft-spring forwards',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
}
// module.exports = {
//   plugins: [
//     heroui({
//       themes: {
//         dark: {
//           colors: {
//             primary: {
//               DEFAULT: "#BEF264",
//               foreground: "#000000",
//             },
//             focus: "#BEF264",
//           },
//         },
//       },
//     }),
//   ],
// };