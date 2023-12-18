'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
	return (
		<section>
			<div className="container px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
				<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
					<div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
						<h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us</h2>

						<p className="mt-4 text-gray-600">
							Welcome to Liss Solutions, a dynamic hub of digital excellence
							catering to a global clientele. Our adept team specializes in
							crafting unparalleled services encompassing web design, software
							development, social media management, graphic design, virtual
							assistance, and data entry. Committed to collaborative innovation,
							we tailor bespoke solutions that not only meet but surpass our
							client&apos;s unique needs.
						</p>

						<a
							href="#"
							className="mt-8 inline-block rounded bg-[var(--primary-color)] px-12 py-3 text-sm font-medium text-[var(--white-color)] transition hover:bg-[var(--primary-color-hover)] focus:outline-none focus:ring "
						>
							Get Started Today
						</a>
					</div>

					<div className="grid gap-4 grid-cols-2">
						<motion.a
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.8,
								delay: 0.5,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
							href=""
						>
							<span className="inline-block rounded-lg  p-3">
								<Image
									src={'/expertise.png'}
									width={40}
									height={40}
									alt="expertise"
								></Image>
							</span>

							<h2 className="mt-2 font-bold">Proven Expertise</h2>

							<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
								Enhance your digital presence with our experienced team
							</p>
						</motion.a>

						<motion.a
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.8,
								delay: 0.5,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
							href=""
						>
							<span className="inline-block rounded-lg  p-3">
								<Image
									src={'/collaboration.png'}
									width={40}
									height={40}
									alt="expertise"
								></Image>
							</span>

							<h2 className="mt-2 font-bold">Collaborative Approach</h2>

							<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
								Discover innovation by working together.
							</p>
						</motion.a>

						<motion.a
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.8,
								delay: 0.5,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
							href="/accountant"
						>
							<span className="inline-block rounded-lg  p-3">
								<Image
									src={'/service.png'}
									width={40}
									height={40}
									alt="expertise"
								></Image>
							</span>

							<h2 className="mt-2 font-bold">Comprehensive Services</h2>

							<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
								All of your digital needs are easily met by our services
							</p>
						</motion.a>

						<motion.a
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.8,
								delay: 0.5,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
							href="/accountant"
						>
							<span className="inline-block rounded-lg  p-3">
								<Image
									src={'/result.png'}
									width={40}
									height={40}
									alt="expertise"
								></Image>
							</span>

							<h2 className="mt-2 font-bold">Results-Driven</h2>

							<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
								We produce exceptional outcomes in addition to making promises.
							</p>
						</motion.a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
