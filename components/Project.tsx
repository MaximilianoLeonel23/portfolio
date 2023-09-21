'use client';
import { GithubIcon, WeblinkIcon } from '@/assets/icons/generalIcons';
import { useTheme } from 'next-themes';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
	project: {
		link: string;
		image: StaticImageData;
		title: string;
		id: string;
		github: string;
	};
}
const Project: React.FC<Props> = ({ project }) => {
	const [showLabel, setShowLabel] = useState(false);
	const { link, image, title, github } = project;
	const { theme } = useTheme();
	return (
		<article
			onMouseEnter={() => setShowLabel(true)}
			onMouseLeave={() => setShowLabel(false)}
			className='relative w-full aspect-video overflow-hidden rounded-2xl border-[0.5px] border-gray-200 dark:border-gray-800 cursor-pointer'
		>
			<Link href={link} target='_blank'>
				<Image
					src={image}
					alt='project image'
					className='rounded-2xl w-full h-full hover:scale-105 transition-transform '
				/>
			</Link>

			<div
				className={`${
					showLabel ? 'opacity-100' : 'opacity-0'
				} absolute bottom-0 left-0 flex items-center justify-between px-6 py-4 w-full transition-all duration-300 bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(255,255,255,0.4)] `}
			>
				<h4 className='font-medium text-gray-100 dark:text-gray-700'>{title}</h4>
				<div className='flex items-center gap-4'>
					<Link href={link} target='_blank' className='icon-fullwidth'>
						<WeblinkIcon mode={theme === 'dark' ? 'dark' : 'light'} />
					</Link>
					<Link href={github} target='_blank' className='icon-fullwidth'>
						<GithubIcon mode={theme === 'dark' ? 'dark' : 'light'} />
					</Link>
				</div>
			</div>
		</article>
	);
};

export default Project;
