/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primario: '#78fdceff',
				secundario: '#70f5b7',
				acento: '#059669',
				error: '#ffa8a8',
				error_acento: '#ff2b2b',
			},
		},
	},
	plugins: [],
}
