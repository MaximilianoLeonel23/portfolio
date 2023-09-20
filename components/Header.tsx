import React from 'react';

const Header = () => {
	return (
		<header className='container flex justify-between items-center py-4 bg-gray-50 dark:bg-gray-800'>
			<h4 className='font-bold text-gray-800 dark:text-gray-100 text-xl'>
				Fullstack <br /> Developer
			</h4>
			<button className='font-bold bg-primary-teal text-gray-50 dark:text-gray-800 rounded-full px-6 py-2'>
				Contact
			</button>
		</header>
	);
};

export default Header;
