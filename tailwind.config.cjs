/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],	
	theme: {			
		extend: {
			colors: {
				'regal-blue': '#243c5a',
				'aplime': '#598234',
				'apgreen': '#aebd38',
				'apgray': '#505160',
				'apsky':'#68829e',
				

			  },
			fontFamily: {
				sans: ["Nunito", 'sans-serif',...defaultTheme.fontFamily.sans],
      			serif: ['Merriweather', 'serif',...defaultTheme.fontFamily.serif],
			  },
		},
	},
	plugins: [],
}
