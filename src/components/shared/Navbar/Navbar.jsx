'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdMenu, MdClose, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import {
	FaEnvelopesBulk,
	FaFacebook,
	FaInstagram,
	FaXTwitter,
} from 'react-icons/fa6';
import { motion } from 'framer-motion';

const variants = {
	hidden: { opacity: 0, x: -200, y: -5 },
	enter: { opacity: 1, x: 0, y: -5 },
};

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	const navLinks = (
		<ul
			className={`font-bold h-auto md:items-center md:justify-center flex flex-col md:flex-row gap-4 xl:gap-8 2xl:gap-16`}
		>
			<li>
				<Link href={'/'} className="text-sm lg:text-base block">
					Home
				</Link>
			</li>
			<li>
				<Link href={'/about'} className="text-sm lg:text-base block">
					About Us
				</Link>
			</li>
			<li className="relative">
				<div
					className="flex justify-between items-center gap-2 "
					onMouseEnter={() => setSubMenuOpen(!subMenuOpen)}
				>
					<Link href={'/service'} className="text-sm lg:text-base block">
						Services
					</Link>
					{subMenuOpen ? (
						<MdOutlineKeyboardArrowUp />
					) : (
						<MdOutlineKeyboardArrowDown />
					)}
				</div>
				{subMenuOpen && (
					<motion.main
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 0.9 }}
						transition={{ duration: 0.5 }}
						// variants={variants}
						// initial="hidden"
						// animate="enter"
						// transition={{ type: 'linear' }}
					>
						<ul
							className="md:absolute top-10 -left-1/3 bg-[var(--primary-color)] p-6 md:w-56 gap-6 flex flex-col"
							onMouseLeave={() => setSubMenuOpen(!subMenuOpen)}
						>
							<li>
								<Link href={'web-design'}>Web design</Link>
							</li>
							<li>
								<Link href={'web-development'}>Web Development</Link>
							</li>
							<li>
								<Link href={'software-design-development'}>
									Software Design & Development
								</Link>
							</li>
							<li>
								<Link href={'social-media-management'}>
									Social Media Management
								</Link>
							</li>
							<li>
								<Link href={'seo-services'}>SEO Services</Link>
							</li>
							<li>
								<Link href={'data-entry'}>Data Entry</Link>
							</li>
							<li>
								<Link href={'virtual-assistance'}>Virtual Assistance</Link>
							</li>
							<li>
								<Link href={'graphic-design'}>Graphic Design</Link>
							</li>
						</ul>
					</motion.main>
				)}
			</li>
			<li>
				<Link href={'/portfolio'} className="text-sm lg:text-base block">
					Portfolio
				</Link>
			</li>
			<li>
				<Link href={'/liss-academy'} className="text-sm lg:text-base block">
					Liss Academy
				</Link>
			</li>
			<li>
				<Link href={'/blog'} className="text-sm lg:text-base block">
					Blog
				</Link>
			</li>
			<li>
				<Link href={'/contact-us'} className="text-sm lg:text-base block">
					Contact us
				</Link>
			</li>
		</ul>
	);
	return (
		<div on>
			<nav className="w-full bg-[var(--primary-color)] fixed top-0 left-0 right-0 z-10 text-[var(--white-color)] px-2 md:px-0">
				<div className="container">
					<div className="justify-between px-4 md:items-center md:flex md:px-8">
						<div className="flex items-center justify-between py-3 md:py-5">
							<Link href={'/'}>
								<Image
									alt="logo"
									width={70}
									height={50}
									src={'/logo.png'}
								></Image>
							</Link>
							<div className="md:hidden">
								<button
									className="p-2 "
									onClick={() => {
										setIsOpen(!isOpen);
									}}
								>
									{isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
								</button>
							</div>
						</div>

						<div
							className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								isOpen ? ' md:p-0 block' : 'hidden'
							}`}
						>
							{navLinks}
						</div>

						<div className="hidden lg:flex">
							<ul className="hidden lg:flex gap-4">
								<li>
									<FaFacebook size={24} color="white" />
								</li>
								<li>
									<FaXTwitter size={24} color="white" />
								</li>
								<li>
									<FaInstagram size={24} color="white" />
								</li>
								<li>
									<FaEnvelopesBulk size={24} color="white" />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
