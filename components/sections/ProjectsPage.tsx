'use client';
import React from 'react';
import { projectData } from '@/lib/projectData';
import Project from '../Project';
import { ProjectIcon } from '@/assets/icons/generalIcons';
import { useTheme } from 'next-themes';
import { useLanguageStore } from '@/store/useLanguageStore';
const ProjectsPage = () => {
	const { theme } = useTheme();
	const { language } = useLanguageStore();
	return (
		<section id='projects' className='flex flex-col gap-2 py-16'>
			<ProjectIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			<h2 className='font-semibold text-gray-700 dark:text-gray-400 text-2xl'>
				{language === 'en' ? 'My Projects' : 'Mis proyectos'}
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-8'>
				{projectData.map(project => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</section>
	);
};

export default ProjectsPage;
