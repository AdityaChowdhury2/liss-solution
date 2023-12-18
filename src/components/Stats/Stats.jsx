'use client';
import CountUp from 'react-countup';

const Stats = () => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<h1 className="text-3xl font-bold sm:text-4xl text-center text-[var(--secondary-color)] capitalize lg:text-3xl">
				Stats
			</h1>
			<div className="grid mt-12 row-gap-8 sm:grid-cols-3 text-[var(--primary-color)]">
				<div className="text-center">
					<h6 className="text-5xl font-bold text-deep-purple-accent-400">
						<CountUp start={0} end={20} duration={2.75} enableScrollSpy />
					</h6>
					<p className="font-bold">Happy Clients</p>
				</div>
				<div className="text-center">
					<h6 className="text-5xl font-bold text-deep-purple-accent-400">
						<CountUp start={0} end={32} duration={2.75} enableScrollSpy />
					</h6>
					<p className="font-bold">Projects</p>
				</div>
				<div className="text-center">
					<h6 className="text-5xl font-bold text-deep-purple-accent-400">
						<CountUp start={0} end={2} duration={2.75} enableScrollSpy />
					</h6>
					<p className="font-bold">Years of experience</p>
				</div>
			</div>
		</div>
	);
};

export default Stats;
