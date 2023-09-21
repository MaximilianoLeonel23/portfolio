import React from 'react';
import Image from 'next/image';
import projectBackground from '@/assets/images/projectBackground.png';
import Link from 'next/link';

const ProjectsCard = () => {
	return (
		<article className='row-span-2 relative overflow-hidden p-4 rounded-2xl bg-primary-red hover:rounded-2xl hover:rounded-br-[4rem] transition-all duration-300 cursor-pointer'>
			<Link href='#projects'>
				<Image
					src={projectBackground}
					alt='projects background image'
					className='absolute top-16 -right-4 -rotate-12 drop-shadow'
				/>
			</Link>
		</article>
	);
};

export default ProjectsCard;
