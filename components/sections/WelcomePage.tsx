import React from 'react';
import CvCard from '@/components/cards/CvCard';
import GithubCard from '@/components/cards/GithubCard';
import LinkedinCard from '@/components/cards/LinkedinCard';
import ModeCard from '@/components/cards/ModeCard';
import ProjectsCard from '@/components/cards/ProjectsCard';
import SkillsCard from '@/components/cards/SkillsCard';
import TitleCard from '@/components/cards/TitleCard';
import ClockCard from '../cards/ClockCard';
const WelcomePage = () => {
	return (
		<>
			<section className='grid grid-cols-2 sm:grid-cols-4 gap-4 py-16'>
				<LinkedinCard />
				<CvCard />
				<ModeCard />
				<ProjectsCard />
				<GithubCard />
				<TitleCard />
				<ClockCard />
				<SkillsCard />
			</section>
		</>
	);
};

export default WelcomePage;
