'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import React from 'react';
import Header from '../components/Header';
const montserrat = Montserrat({ subsets: ['latin'] });
import { ThemeProvider } from 'next-themes';
export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Maximiliano Pérez Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={montserrat.className}>
			<body className='bg-gray-50 dark:bg-gray-800'>
				<ThemeProvider attribute='class'>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
