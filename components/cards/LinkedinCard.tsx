'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { LinkedinIcon } from '@/assets/icons/cardsIcons';
import { ArrowLinkColor } from '@/assets/icons/arrowIcons';

const LinkedinCard = () => {
	const { theme } = useTheme();
	return (
		<article className='group relative aspect-square flex items-center justify-center p-4 rounded-2xl bg-primary-brown-orange cursor-pointer'>
			<div className='w-3/5 h-3/5 icon-fullwidth'>
				<LinkedinIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
			<div className='absolute bottom-0 left-0 h-16 w-16  group-hover:rotate-45 transition-transform icon-fullwidth'>
				<ArrowLinkColor mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
		</article>
	);
};

export default LinkedinCard;
