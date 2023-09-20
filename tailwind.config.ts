import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					'brown-orange': '#D9A566',
					teal: '#8FBFB6',
					red: '#F2A29B',
					cream: '#F2E7DC',
					blue: '#7895CB',
				},
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '1rem',
					lg: '3rem',
				},
				center: true,
			},
			fontSize: {
				xxs: '10px',
			},
		},
	},
	plugins: [],
};
export default config;
