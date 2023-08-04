/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        theme: {
					light: "#eff4f5",
					dark: "#1d1a1d"
				},
        atlanticNavy: {
					50: "#c8d7e6",
					100: "#a5bdd8",
					200: "#6b8dbb",
					300: "#4163a0",
					400: "#284386",
					500: "#1c2e6f",
					600: "#1a235b",
					700: "#1c1e49",
					800: "#1f1e39",
					900: "#201e2b",
				},
        alexisBlue: {
					50: "#d3e3e9",
					100: "#b9d3dd",
					200: "#8cb2c4",
					300: "#6994ad",
					400: "#507896",
					500: "#40607f",
					600: "#374c6a",
					700: "#323d56",
					800: "#2c3143",
					900: "#252630",
				},
        fuchsiaFever: {
					50: "#f9ddfb",
					100: "#ffcafc",
					200: "#ff9fea",
					300: "#ff7bcf",
					400: "#ff62b3",
					500: "#f7559a",
					600: "#db5183",
					700: "#b55273",
					800: "#874e60",
					900: "#533d44",
				},
        jadeMountain: {
					50: "#dff3d3",
					100: "#c1f1b8",
					200: "#86eb9c",
					300: "#5de3a1",
					400: "#40d6ad",
					500: "#31c4ae",
					600: "#30ab9c",
					700: "#358d7c",
					800: "#376a59",
					900: "#304439",
				},
        'logo-white': '#f7fbfc',
        'logo-pink': {
          'dark': '#f7559a',
          'light': '#f986b7'
        },
        'logo-blue': {
          'dark': '#121d46',
          'medium': '#1c2e6f',
          'light': '#263f98'
        },
        'warning': {
          // lightning-yellow
          '50': '#fffbeb',
          '100': '#fef3c7',
          '200': '#fde58a',
          '300': '#fcd24d',
          '400': '#fbbd23',
          '500': '#f59c0b',
          '600': '#d97506',
          '700': '#b45209',
          '800': '#923f0e',
          '900': '#78340f',
          '950': '#451903'
        },
        'danger': {
          // alizarin-crimson
          '50': '#fef2f2',
          '100': '#fee2e2',
          '200': '#fecaca',
          '300': '#fca5a5',
          '400': '#f87171',
          '500': '#ef4444',
          '600': '#dc2626',
          '700': '#b91c1c',
          '800': '#991b1b',
          '900': '#7f1d1d',
          '950': '#450a0a'
        },
        'neutral': {
          // ebony-clay
          '50': '#f3f7f8',
          '100': '#e0e8ed',
          '200': '#c4d3dd',
          '300': '#9cb5c4',
          '400': '#6c8da4',
          '500': '#50718a',
          '600': '#455d75',
          '700': '#3d4f61',
          '800': '#384552',
          '900': '#2a323c',
          '950': '#1e252e'
        }
      }
    }
  },
  plugins: [],
}

