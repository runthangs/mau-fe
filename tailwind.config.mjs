/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#12a880',    // Green Cyan
				secondary: '#fffbf3',  // Parchment
				accent: '#037657',     // Dome Green
				dark: '#121916',       // Black Stone
				text: '#1c3832',       // Myrtle
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
}