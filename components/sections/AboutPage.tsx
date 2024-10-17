'use client';
import data from '@/about.json';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useEffect, useState } from 'react';

interface AboutContent {
	about: {
		title: string;
		body: string;
	};
	education: {
		title: string;
		body: {
			institution: string;
			degree: string;
			startDate: string;
			endDate?: string;
		}[];
	};
	experience: {
		title: string;
		body: {
			position: string;
			company: string;
			startDate: string;
			endDate: string;
			responsibilities: string[];
		}[];
	};
	certificates: {
		title: string;
		body: {
			certificate: string;
			institution: string;
			date: string;
		}[];
	};
	skills: {
		title: string;
		body: string[];
	};
	languages: {
		title: string;
		body: {
			language: string;
			proficiency: string;
		}[];
	};
}

const AboutPage = () => {
	const [content, setContent] = useState<AboutContent>();
	const { language } = useLanguageStore();
	useEffect(() => {
		if (!data) return;
		if (language === 'en') {
			setContent(data.data.en);
		} else {
			setContent(data.data.es);
		}
	}, [language]);
	return (
		<section id='about' className='w-full sm:w-1/2 flex flex-col gap-8 py-16'>
			<div className='flex flex-col gap-2'>
				<h4 className='font-bold text-gray-700 dark:text-gray-200 text-base sm:text-2xl'>
					{content?.about.title}
				</h4>
				<p className='text-xs sm:text-sm text-gray-700 dark:text-gray-400'>{content?.about.body}</p>
			</div>
			<div className='flex flex-col gap-2'>
				<h4 className='font-bold text-gray-700 dark:text-gray-200 text-base sm:text-lg'>
					{content?.education.title}
				</h4>
				<ul className='flex flex-col gap-2'>
					{content?.education.body.map((exp, idx) => {
						return (
							<li key={idx} className='flex flex-col'>
								<p className='text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300'>
									{exp.degree}
								</p>
								<p className='text-xs sm:text-sm  text-gray-700 dark:text-gray-400'>{exp.institution}</p>
								<span className='text-xs sm:text-sm font-light text-gray-700 dark:text-gray-400'>
									{exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ''}
								</span>
							</li>
						);
					})}
				</ul>
			</div>

			<div className='flex flex-col gap-2'>
				<h4 className='font-bold text-gray-700 dark:text-gray-200 text-base sm:text-lg'>
					{content?.skills.title}
				</h4>
				<div className='grid grid-cols-2'>
					{content?.skills.body.map((skill, idx) => {
						return (
							<p className='text-xs sm:text-sm text-gray-700 dark:text-gray-400' key={idx}>
								{skill}
							</p>
						);
					})}
				</div>
			</div>

			<div className='flex flex-col gap-2'>
				<h4 className='font-bold text-gray-700 dark:text-gray-200 text-base sm:text-lg'>
					{content?.experience?.title}
				</h4>
				<ul className='flex flex-col gap-2'>
					{content?.experience?.body.map((exp, idx) => {
						return (
							<li key={idx} className='flex flex-col'>
								<p className='text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300'>
									{exp.position}
								</p>
								<p className='text-xs sm:text-sm  text-gray-700 dark:text-gray-400'>{exp.company}</p>
								<span className='text-xs sm:text-sm font-light text-gray-700 dark:text-gray-400'>
									{exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ''}
								</span>
								<ul className='flex flex-col gap-1'>
									{exp.responsibilities.map((r, idx) => {
										return (
											<li key={idx} className='text-xs sm:text-sm  text-gray-700 dark:text-gray-400'>
												- {r}
											</li>
										);
									})}
								</ul>
							</li>
						);
					})}
				</ul>
			</div>

			<div className='flex flex-col gap-2'>
				<h4 className='font-bold text-gray-700 dark:text-gray-200 text-base sm:text-lg'>
					{content?.languages.title}
				</h4>
				<ul className='flex flex-col gap-2'>
					{content?.languages.body.map((lang, idx) => {
						return (
							<li key={idx} className='flex gap-2'>
								<p className='text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300'>
									{lang.language} :
								</p>
								<p className='text-sm sm:text-base font-normal text-gray-700 dark:text-gray-300'>
									{lang.proficiency}
								</p>
							</li>
						);
					})}
				</ul>
			</div>

			<div className='flex flex-col gap-2'>
				<h4 className='font-bold text-gray-700 dark:text-gray-200 text-base sm:text-lg'>
					{content?.certificates.title}
				</h4>
				<ul className='flex flex-col gap-2'>
					{content?.certificates.body.map((cer, idx) => {
						return (
							<li key={idx} className='flex flex-col'>
								<p className='text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300'>
									{cer.certificate}
								</p>
								<p className='text-xs sm:text-sm  text-gray-700 dark:text-gray-400'>{cer.institution}</p>
								<span className='text-xs sm:text-sm font-light text-gray-700 dark:text-gray-400'>
									{cer.date}
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default AboutPage;
