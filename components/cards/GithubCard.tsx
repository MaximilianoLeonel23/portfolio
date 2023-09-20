'use client';
import { GithubIcon } from '@/assets/icons/cardsIcons';
import React from 'react';
import { useTheme } from 'next-themes';
import { ArrowLink } from '@/assets/icons/arrowIcons';

const GithubCard = () => {
	const { theme } = useTheme();
	return (
		<article className='relative group aspect-square flex items-center justify-center p-4 rounded-2xl bg-gray-800 dark:bg-gray-700 cursor-pointer'>
			<div className='w-3/5 h-3/5 icon-fullwidth'>
				<GithubIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
			<div className='absolute bottom-0 left-0 group-hover:rotate-45 transition-transform'>
				<ArrowLink mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
		</article>
	);
};

export default GithubCard;
