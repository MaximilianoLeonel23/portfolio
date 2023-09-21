'use client';
import { SkillsIcon } from '@/assets/icons/generalIcons';
import {
	AxiosIcon,
	BootstrapIcon,
	CSSIcon,
	ChaiIcon,
	CypressIcon,
	FirebaseIcon,
	GitIcon,
	HTMLIcon,
	InsomniaIcon,
	JavascriptIcon,
	JestIcon,
	MaterialIcon,
	MochaIcon,
	MongoDBIcon,
	MySQLIcon,
	NPMIcon,
	NextjsIcon,
	NodeIcon,
	PostmanIcon,
	ReactIcon,
	SlackIcon,
	StorybookIcon,
	TailwindcssIcon,
	TrelloIcon,
	TypescriptIcon,
	VercelIcon,
	YarnIcon,
} from '@/assets/icons/techIcons';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useTheme } from 'next-themes';
import React from 'react';

const SkillsPage = () => {
	const { theme } = useTheme();
	const { language } = useLanguageStore();
	return (
		<section id='skills' className='flex flex-col gap-2 py-16'>
			<SkillsIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			<h2 className='font-semibold text-gray-700 dark:text-gray-400 text-2xl'>
				{language === 'en' ? 'My skills' : 'Mis skills'}
			</h2>
			<div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 gap-8 py-16 items-center icon-fullwidth'>
				<HTMLIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<CSSIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<JavascriptIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<NodeIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<TypescriptIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<ReactIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<NextjsIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<TailwindcssIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<MaterialIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<BootstrapIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<MongoDBIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<FirebaseIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<MySQLIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<GitIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<NPMIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<YarnIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<ChaiIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<MochaIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<CypressIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<JestIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<StorybookIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<InsomniaIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<PostmanIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<AxiosIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<VercelIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<TrelloIcon mode={theme === 'dark' ? 'dark' : 'light'} />
				<SlackIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
		</section>
	);
};

export default SkillsPage;
