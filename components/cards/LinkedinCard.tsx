'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { LinkedinIcon } from '@/assets/icons/cardsIcons';
import { ArrowLinkColor, ArrowLinkColorSmall } from '@/assets/icons/arrowIcons';
import Link from 'next/link';

const LinkedinCard = () => {
	const { theme } = useTheme();
	return (
		<article className='group relative aspect-square flex items-center justify-center p-4 rounded-2xl bg-primary-brown-orange cursor-pointer'>
			<div className='w-3/5 h-3/5 icon-fullwidth'>
				<LinkedinIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
			<Link
				href='https://www.linkedin.com/in/maximiliano-leonel-p%C3%A9rez-8846b826a/'
				target='_blank'
			>
				<div className='absolute bottom-0 left-0  group-hover:rotate-45 transition-transform'>
					<div className='hidden lg:block'>
						<ArrowLinkColor mode={theme === 'dark' ? 'dark' : 'light'} />
					</div>
					<div className='block lg:hidden'>
						<ArrowLinkColorSmall mode={theme === 'dark' ? 'dark' : 'light'} />
					</div>
				</div>
			</Link>
		</article>
	);
};

export default LinkedinCard;
