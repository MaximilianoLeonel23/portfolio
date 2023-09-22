'use client';
import { LogoIcon } from '@/assets/icons/generalIcons';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
	const { language } = useLanguageStore();
	const { theme } = useTheme();
	return (
		<header className='container flex justify-between items-start py-4 bg-gray-50 dark:bg-gray-800'>
			<div>
				<LogoIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
			<Link
				href='mailto:maxoleo.dev@gmail.com'
				className='font-bold text-xs sm:text-sm bg-primary-teal text-gray-50 w-fit dark:text-gray-800 rounded-full px-6 py-2 transition-all duration-300'
			>
				{language === 'en' ? 'I wanna meet you!' : 'Quiero conocerte!'}
			</Link>
		</header>
	);
};

export default Header;
