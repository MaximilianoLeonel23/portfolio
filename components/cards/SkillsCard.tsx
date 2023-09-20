'use client';
import {
	NodeButtonIcon,
	ReactButtonIcon,
	TailwindcssButtonIcon,
	TypescriptButtonIcon,
} from '@/assets/icons/techIcons';
import React from 'react';
import { useTheme } from 'next-themes';

const SkillsCard = () => {
	const { theme } = useTheme();
	return (
		<article className='aspect-square flex items-center justify-center p-4 rounded-2xl bg-gray-100 dark:bg-gray-700'>
			<div className='grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 icon-fullwidth'>
				<ReactButtonIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<TypescriptButtonIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<NodeButtonIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<TailwindcssButtonIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
		</article>
	);
};

export default SkillsCard;
