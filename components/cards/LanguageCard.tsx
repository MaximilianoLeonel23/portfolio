'use client';
import { useLanguageStore } from '@/store/useLanguageStore';
import React from 'react';

const LanguageCard = () => {
	const { language, setLanguage } = useLanguageStore();
	return (
		<article
			onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
			className='group relative aspect-square flex items-center justify-center p-4 rounded-2xl bg-primary-brown-orange cursor-pointer'
		>
			<div className='flex flex-col'>
				<span
					className={`font-black text-6xl lg:text-7xl ${
						language === 'en' ? 'text-gray-300 dark:text-gray-300' : 'text-gray-50 dark:text-gray-50'
					} tracking-widest`}
				>
					ES
				</span>

				<span
					className={`font-black text-6xl lg:text-7xl ${
						language === 'en' ? 'text-gray-50 dark:text-gray-50' : 'text-gray-300 dark:text-gray-300'
					} tracking-widest`}
				>
					EN
				</span>
			</div>
		</article>
	);
};

export default LanguageCard;
