'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const variants = {
	hidden: { opacity: 0, x: -100, y: -5 },
	enter: { opacity: 1, x: 0, y: -5 },
};

const Hero = () => {
	return (
		<section className="container flex flex-col md:flex-row mt-10 gap-5">
			<div
				className="md:w-1/2 flex flex-col justify-center items-center md:items-start
                md:pl-5 lg:pl-10
            "
			>
				<motion.h1
					variants={{
						hidden: { opacity: 0, x: -100, y: -5 },
						enter: { opacity: 1, x: 0, y: -5 },
					}}
					initial="hidden"
					animate="enter"
					transition={{ type: 'linear' }}
					className="uppercase text-[var(--primary-color)] text-3xl font-bold "
				>
					Liss Solutions
				</motion.h1>
				<motion.h4
					variants={{
						hidden: { opacity: 0, x: -600, y: -5 },
						enter: { opacity: 1, x: 0, y: -5 },
					}}
					initial="hidden"
					animate="enter"
					transition={{ duration: 0.9 }}
					className="text-[var(--secondary-color)] text-xl md:text-base lg:text-xl"
				>
					Empowering Your Digital Journey
				</motion.h4>
			</div>
			<motion.div
				variants={{
					hidden: { opacity: 0, x: 300, y: -5 },
					enter: { opacity: 1, x: 0, y: -5 },
				}}
				initial="hidden"
				animate="enter"
				transition={{ duration: 0.9 }}
			>
				<Image alt="logo" width={500} height={500} src={'/hero.svg'}></Image>
			</motion.div>
		</section>
	);
};

export default Hero;
