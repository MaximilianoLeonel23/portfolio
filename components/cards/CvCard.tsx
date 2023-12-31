'use client';
import { CVIcon } from '@/assets/icons/cardsIcons';
import React from 'react';
import { useTheme } from 'next-themes';
import { ArrowLink, ArrowLinkSmall } from '@/assets/icons/arrowIcons';
import { useLanguageStore } from '@/store/useLanguageStore';

const CvCard = () => {
	const { theme } = useTheme();
	const { language } = useLanguageStore();
	return (
		<article className='group relative aspect-square flex items-center justify-center p-4 rounded-2xl bg-gray-800 dark:bg-gray-100 cursor-pointer'>
			<div className='w-3/5 h-3/5 icon-fullwidth'>
				<CVIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
			<a
				href={language === 'en' ? '/cv_en.pdf' : '/cv_es.pdf'}
				rel='noopener noreferrer'
				target='_blank'
				download='maximiliano_perez_cv'
			>
				<div className='absolute bottom-0 left-0 group-hover:rotate-0 rotate-[135deg] transition-transform duration-300'>
					<div className='hidden lg:block'>
						<ArrowLink mode={theme === 'dark' ? 'dark' : 'light'} />
					</div>
					<div className='block lg:hidden'>
						<ArrowLinkSmall mode={theme === 'dark' ? 'dark' : 'light'} />
					</div>
				</div>
			</a>
		</article>
	);
};

export default CvCard;
