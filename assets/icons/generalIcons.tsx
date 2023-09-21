interface Props {
	mode: string;
}

export const ProjectIcon: React.FC<Props> = ({ mode }) => {
	const colorMode = mode === 'dark' ? '#9ca3af' : '#9ca3af';
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
	const colorMode = mode === 'dark' ? '#9ca3af' : '#9ca3af';
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

export const GithubIcon: React.FC<Props> = ({ mode }) => {
	const colorMode = mode === 'dark' ? '#374151' : '#f3f4f6';

	return (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M11.9648 0.799988C5.63456 0.799988 0.5 5.89414 0.5 12.1746C0.5 17.199 3.80581 21.4558 8.30734 22.991C8.87003 23.0608 9.08104 22.7118 9.08104 22.4327C9.08104 22.1536 9.08104 21.4558 9.08104 20.4788C5.9159 21.1766 5.21254 18.9436 5.21254 18.9436C4.72018 17.6177 3.94648 17.2688 3.94648 17.2688C2.89144 16.5709 4.01682 16.5709 4.01682 16.5709C5.1422 16.6407 5.77523 17.7573 5.77523 17.7573C6.83028 19.5018 8.44801 19.0133 9.08104 18.7342C9.15138 17.9666 9.50306 17.4781 9.7844 17.199C7.25229 16.9199 4.57951 15.9429 4.57951 11.5466C4.57951 10.2905 5.00153 9.3135 5.77523 8.47611C5.70489 8.26676 5.28287 7.08045 5.9159 5.54522C5.9159 5.54522 6.90061 5.26609 9.08104 6.73153C9.99541 6.4524 10.9801 6.38262 11.9648 6.38262C12.9495 6.38262 13.9342 6.52218 14.8486 6.73153C17.0291 5.26609 18.0138 5.54522 18.0138 5.54522C18.6468 7.08045 18.2248 8.26676 18.1544 8.54589C18.8578 9.3135 19.3502 10.3603 19.3502 11.6164C19.3502 16.0127 16.6774 16.9199 14.1453 17.199C14.5673 17.5479 14.919 18.2457 14.919 19.2925C14.919 20.8277 14.919 22.014 14.919 22.4327C14.919 22.7118 15.13 23.0608 15.6927 22.991C20.2645 21.4558 23.5 17.199 23.5 12.1746C23.4297 5.89414 18.2951 0.799988 11.9648 0.799988Z'
				fill={colorMode}
			/>
		</svg>
	);
};

export const WeblinkIcon: React.FC<Props> = ({ mode }) => {
	const colorMode = mode === 'dark' ? '#374151' : '#f3f4f6';
	return (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_118_4)'>
				<path
					d='M12 23.1428C18.1541 23.1428 23.1429 18.1541 23.1429 12C23.1429 5.84595 18.1541 0.857117 12 0.857117C5.84597 0.857117 0.857142 5.84595 0.857142 12C0.857142 18.1541 5.84597 23.1428 12 23.1428Z'
					stroke={colorMode}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M0.857142 12H23.1429'
					stroke={colorMode}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M16.2857 12C16.0752 16.0748 14.5743 19.9771 12 23.1428C9.42569 19.9771 7.9248 16.0748 7.71429 12C7.9248 7.92513 9.42569 4.0228 12 0.857117C14.5743 4.0228 16.0752 7.92513 16.2857 12Z'
					stroke={colorMode}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_118_4'>
					<rect width='24' height='24' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};
