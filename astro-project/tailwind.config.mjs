/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#a47e58',          // Copper/bronze (brand color)
				'primary-dark': '#8a6847',
				'accent': '#28a745',           // WhatsApp green
				'accent-dark': '#218838',
				'secondary': '#2c2c2c',        // Dark text
				'warm-white': '#fdfcfb',       // Background
				'text-muted': '#6b7280'
			},
			fontFamily: {
				'serif': ['"Playfair Display"', 'serif'],    // Headlines
				'sans': ['Inter', 'sans-serif']             // Body text
			}
		},
	},
	plugins: [],
}
