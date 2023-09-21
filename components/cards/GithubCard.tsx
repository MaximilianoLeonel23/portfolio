'use client';
import { GithubIcon } from '@/assets/icons/cardsIcons';
import React from 'react';
import { useTheme } from 'next-themes';
import { ArrowLink, ArrowLinkSmall } from '@/assets/icons/arrowIcons';
import Link from 'next/link';

const GithubCard = () => {
	const { theme } = useTheme();
	return (
		<article className='relative group aspect-square flex items-center justify-center p-4 rounded-2xl bg-gray-800 dark:bg-gray-700 cursor-pointer'>
			<div className='w-3/5 h-3/5 icon-fullwidth'>
				<GithubIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
			<Link href='https://github.com/MaximilianoLeonel23' target='_blank'>
				<div className='absolute bottom-0 left-0 group-hover:rotate-45 transition-transform'>
					<div className='hidden lg:block'>
						<ArrowLink mode={theme === 'dark' ? 'dark' : 'light'} />
					</div>
					<div className='block lg:hidden'>
						<ArrowLinkSmall mode={theme === 'dark' ? 'dark' : 'light'} />
					</div>
				</div>
			</Link>
		</article>
	);
};

export default GithubCard;
