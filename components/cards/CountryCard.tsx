import { CountryIcon } from '@/assets/icons/cardsIcons';
import React from 'react';

const CountryCard = () => {
	return (
		<article className='relative aspect-square overflow-hidden flex items-center justify-center icon-fullwidth rounded-2xl bg-gray-100 dark:bg-gray-700 icon-fullwidth'>
			<CountryIcon />
		</article>
	);
};

export default CountryCard;
