interface Props {
	mode: string;
}

export const ProjectIcon: React.FC<Props> = ({ mode }) => {
	const colorMode = mode === 'dark' ? '#374151' : '#9ca3af';
	return (
		<svg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M57.1429 2.28564H6.85719C4.33246 2.28564 2.28577 4.33234 2.28577 6.85707V43.4285C2.28577 45.9532 4.33246 47.9999 6.85719 47.9999H57.1429C59.6676 47.9999 61.7143 45.9532 61.7143 43.4285V6.85707C61.7143 4.33234 59.6676 2.28564 57.1429 2.28564Z'
				stroke={colorMode}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M2.28577 16H61.7143'
				stroke={colorMode}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M32 48V61.7143'
				stroke={colorMode}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M25.1429 48L11.4286 61.7143'
				stroke={colorMode}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M38.8572 48L52.5715 61.7143'
				stroke={colorMode}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

export const SkillsIcon: React.FC<Props> = ({ mode }) => {
	const colorMode = mode === 'dark' ? '#374151' : '#9ca3af';
	return (
		<svg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M61.7143 48V11.4286C61.7143 10.1662 60.6907 9.14288 59.4286 9.14288H4.57143C3.35901 9.14288 2.28571 10.2162 2.28571 11.4286V48C2.28571 49.2124 3.35901 50.2857 4.57143 50.2857H59.4286C60.6409 50.2857 61.7143 49.2124 61.7143 48Z'
				stroke={colorMode}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M27.4286 50.2857L22.8571 61.7143'
				stroke={colorMode}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M36.5714 50.2857L41.1429 61.7143'
				stroke={colorMode}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M18.2857 61.7143H45.7143'
				stroke={colorMode}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M22.8571 22.8571L16 29.7143L22.8571 36.5714'
				stroke={colorMode}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M41.1429 22.8571L48 29.7143L41.1429 36.5714'
				stroke={colorMode}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
