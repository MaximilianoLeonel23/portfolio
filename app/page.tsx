import ProjectsPage from '@/components/sections/ProjectsPage';
import SkillsPage from '@/components/sections/SkillsPage';
import WelcomePage from '@/components/sections/WelcomePage';
import React from 'react';
export default function MainPage() {
	return (
		<main className='container'>
			<WelcomePage />
			<SkillsPage />
			<ProjectsPage />
		</main>
	);
}
