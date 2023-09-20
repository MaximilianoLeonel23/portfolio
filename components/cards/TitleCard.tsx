import React from 'react';

const TitleCard = () => {
	return (
		<article className='col-span-2 flex flex-col items-start justify-between p-8 rounded-2xl bg-primary-teal'>
			<h4 className='font-black text-gray-100 dark:text-gray-800 text-4xl'>
				Hi, I{"'"}m <br /> Maximiliano
			</h4>
			<span className='font-normal text-gray-100 dark:text-gray-800 text-xl'>Fullstack Developer</span>
		</article>
	);
};

export default TitleCard;
