/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			animation: {
				'right-pan': 'rpan 7s linear alternate infinite'
			},
			keyframes: {
				rpan: {
					'0%': { translate: '10%' },
					'100%': { translate: '12%' }
				}
			}
		}
	},
	plugins: []
};
