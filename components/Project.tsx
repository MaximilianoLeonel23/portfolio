import Image from 'next/image';
import React from 'react';

interface Props {
	image: any;
}
const Project: React.FC<Props> = ({ image }) => {
	return (
		<article className='w-full aspect-video overflow-hidden rounded-2xl border-[0.5px] border-gray-200 dark:border-gray-800'>
			<Image
				src={image}
				alt='project image'
				className='rounded-2xl hover:scale-105 transition-transform '
			/>
		</article>
	);
};

export default Project;
