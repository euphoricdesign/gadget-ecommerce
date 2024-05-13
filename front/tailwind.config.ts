import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        // Breakpoints predefinidos
        'sm': '640px',
        'md': '768px', 
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Breakpoints personalizados
        'tablet': '900px', // Dispositivos con un ancho de 900px o superior
        'desktop': '1200px', // Dispositivos con un ancho de 1200px o superior
        // Breakpoints para dispositivos móviles modernos
        'mobile': '360px', // Dispositivos móviles pequeños
        'phablet': '480px', // Dispositivos móviles medianos  
        'phone': '580px', // Dispositivos móviles grandes
      },
      height: {
        '75': '4.6875rem',
        '22rem': '22rem'
      },
      width: {
        '30percent': '30%',
        '45percent': '45%'
      },
      spacing: {
        '-55': '-55px'
      },
      margin: {
        '15percent': '15%'
      },
      maxHeight: {
        '650': '40.625rem'
      }
    },
  },
  plugins: [],
};
export default config;
