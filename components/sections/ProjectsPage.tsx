'use client';
import React from 'react';
import { projectData } from '@/lib/projectData';
import Project from '../Project';
import { ProjectIcon } from '@/assets/icons/generalIcons';
import { useTheme } from 'next-themes';
const ProjectsPage = () => {
	const { theme } = useTheme();
	return (
		<section className='flex flex-col gap-2 py-16'>
			<ProjectIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			<h2 className='font-semibold text-gray-700 dark:text-gray-100 text-2xl'>My Projects</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-8'>
				{projectData.map((project, index) => (
					<Project key={index} image={project} />
				))}
			</div>
		</section>
	);
};

export default ProjectsPage;
