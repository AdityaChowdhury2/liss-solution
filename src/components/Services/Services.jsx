'use client';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const services = [
	{
		id: 1,
		image: '/web_development.svg',
		title: 'Web Design',
		features: [
			' Designing custom websites that are unique and visually appealing to your business and industry.',
			'Designing websites that are mobile-friendly and adapt to different screen sizes, ensuring that your website looks good on all devices.',
		],
	},
	{
		id: 2,
		image: '/web-design.svg',
		title: 'Web Design',
		features: [
			' Designing custom websites that are unique and visually appealing to your business and industry.',
			'Designing websites that are mobile-friendly and adapt to different screen sizes, ensuring that your website looks good on all devices.',
		],
	},
	{
		id: 3,
		image: '/software-development.svg',
		title: 'Software design & development',
		features: [
			' Designing custom websites that are unique and visually appealing to your business and industry.',
			'Designing websites that are mobile-friendly and adapt to different screen sizes, ensuring that your website looks good on all devices.',
		],
	},
	{
		id: 4,
		image: '/social-media.svg',
		title: 'Social media management',
		features: [
			' Designing custom websites that are unique and visually appealing to your business and industry.',
			'Designing websites that are mobile-friendly and adapt to different screen sizes, ensuring that your website looks good on all devices.',
		],
	},
	{
		id: 5,
		image: '/seo-services.svg',
		title: 'SEO services',
		features: [
			' Designing custom websites that are unique and visually appealing to your business and industry.',
			'Designing websites that are mobile-friendly and adapt to different screen sizes, ensuring that your website looks good on all devices.',
		],
	},
	{
		id: 6,
		image: '/data-entry.svg',
		title: 'Data entry',
		features: [
			' Designing custom websites that are unique and visually appealing to your business and industry.',
			'Designing websites that are mobile-friendly and adapt to different screen sizes, ensuring that your website looks good on all devices.',
		],
	},
	{
		id: 7,
		image: '/virtual-assistant.svg',
		title: 'Virtual Assistance',
		features: [
			' Designing custom websites that are unique and visually appealing to your business and industry.',
			'Designing websites that are mobile-friendly and adapt to different screen sizes, ensuring that your website looks good on all devices.',
		],
	},
	{
		id: 8,
		image: '/graphic-design.svg',
		title: 'Graphic design',
		features: [
			' Designing custom websites that are unique and visually appealing to your business and industry.',
			'Designing websites that are mobile-friendly and adapt to different screen sizes, ensuring that your website looks good on all devices.',
		],
	},
];

const Services = () => {
	const [isShowAll, setIsShowAll] = useState(false);

	return (
		<section className="">
			<div className="container px-6 py-10 mx-auto text-[var(--primary-color)]">
				<h1 className="text-3xl font-bold sm:text-4xl text-center text-[var(--secondary-color)] capitalize lg:text-3xl">
					explore our <br /> awesome{' '}
					<span className="underline decoration-[var(--primary-color)]">
						Services
					</span>
				</h1>

				<div className="relative">
					<div className="grid gap-12 mx-auto mt-12  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
						{isShowAll
							? services.map(service => (
									<ServiceCard key={service.id} service={service} />
							  ))
							: services
									.slice(0, 6)
									.map(service => (
										<ServiceCard key={service.id} service={service} />
									))}
					</div>
				</div>
				{!isShowAll && (
					<div className="flex justify-center">
						<button
							className=" mt-10 py-2 px-5 bg-[var(--primary-color)] rounded-lg text-[var(--white-color)]  hover:bg-[var(--primary-color-hover)] transition-transform duration-700"
							onClick={() => setIsShowAll(!isShowAll)}
						>
							Show All
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default Services;
