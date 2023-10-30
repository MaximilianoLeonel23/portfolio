'use client';
import { useLanguageStore } from '@/store/useLanguageStore';
import Link from 'next/link';
import React from 'react';

const TitleCard = () => {
	const { language } = useLanguageStore();
	return (
		<article className='col-span-2 flex flex-col items-start justify-between p-8 rounded-2xl bg-primary-teal hover:rounded-2xl hover:rounded-br-[4rem] transition-all duration-300 cursor-pointer'>
			<Link href='#about'>
				<div className='flex flex-col sm:gap-2'>
					<h4 className='font-black text-gray-100 dark:text-gray-800 text-2xl sm:text-3xl lg:text-4xl'>
						{language === 'en' ? "Hi, I'm Maximiliano" : 'Hola, soy Maximiliano'}
					</h4>
					<span className='font-normal text-gray-100 dark:text-gray-800 text-sm sm:text-lg lg:text-xl'>
						Frontend Developer
					</span>
				</div>
				<p className='font-medium text-gray-100 dark:text-gray-800 text-xs sm:text-base'>
					{language === 'en' ? "I've something to tell you..." : 'Te cuento algo...'}
				</p>
			</Link>
		</article>
	);
};

export default TitleCard;
