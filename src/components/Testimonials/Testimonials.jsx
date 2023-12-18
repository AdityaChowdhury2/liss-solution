'use client';
import { Rating } from '@smastrom/react-rating';
import Image from 'next/image';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
	return (
		<section className="container my-12">
			<h1 className="text-3xl font-bold sm:text-4xl text-center text-[var(--secondary-color)] capitalize lg:text-3xl">
				What our client{' '}
				<span className="underline decoration-[var(--primary-color)]">
					Says
				</span>
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-12 gap-4">
				<div className="p-4  w-full border-2 border-[var(--primary-color)] rounded-lg">
					<div className="h-full p-8 rounded relative">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							className="absolute top-5 right-0.5 w-10 h-10 text-[var(--primary-color)] "
							viewBox="0 0 975.036 975.036"
						>
							<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
						</svg>
						<div className="flex justify-center">
							<Image
								src="/user-1.jpg"
								alt=""
								width={36}
								height={36}
								className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"
							/>
						</div>

						<p className="leading-relaxed my-6 text-center">
							Choosing Liss Solutions for my business website was a
							game-changer. Their team seamlessly brought my vision to life with
							a stunning and user-friendly design. Their commitment to
							excellence and passion for creating exceptional digital
							experiences set them apart. Thanks to Liss Solutions, my business
							now stands out online – a big thank you to the team for turning my
							vision into a digital masterpiece!
						</p>

						<div className="flex flex-col justify-center items-center pl-4 ">
							<Rating style={{ maxWidth: 100 }} value={5} readOnly />
							<span className=" font-semibold text-[var(--secondary-color)] italic">
								Derek
							</span>
							<span className="text-[var(--secondary-color)] text-sm italic font-thin">
								Codetic
							</span>
						</div>
					</div>
				</div>
				<div className="p-4  w-full  border-2 border-[var(--primary-color)] rounded-lg">
					<div className="h-full p-8 rounded relative">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							className="absolute top-5 right-0.5 w-10 h-10 text-[var(--primary-color)] "
							viewBox="0 0 975.036 975.036"
						>
							<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
						</svg>
						<div className="flex justify-center">
							<Image
								src="/user-2.jpg"
								alt=""
								width={36}
								height={36}
								className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"
							/>
						</div>

						<p className="leading-relaxed my-6 text-center">
							Entrusting Liss Solutions with our hotel&apos;s digital marketing
							was a game-changer for us. From the outset, their team
							demonstrated an exceptional understanding of our brand, weaving a
							narrative that resonated with our target audience. Liss
							Solution&apos;s agility in navigating the dynamic digital
							landscape and their commitment to our success have made them an
							invaluable partner, propelling our hotel to new heights in the
							digital realm.
						</p>

						<div className="flex flex-col justify-center items-center pl-4 ">
							<Rating style={{ maxWidth: 100 }} value={5} readOnly />
							<span className=" font-semibold  text-[var(--secondary-color)] italic">
								Laura
							</span>
							<span className="text-[var(--secondary-color)] text-sm italic font-thin">
								London Hotel
							</span>
						</div>
					</div>
				</div>
				<div className="p-4 w-full  border-2 border-[var(--primary-color)] rounded-lg">
					<div className="h-full p-8 rounded relative">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							className="absolute top-5 right-0.5 w-10 h-10 text-[var(--primary-color)] "
							viewBox="0 0 975.036 975.036"
						>
							<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
						</svg>
						<div className="flex justify-center">
							<Image
								src="/user-3.jpg"
								alt=""
								width={36}
								height={36}
								className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"
							/>
						</div>

						<p className="leading-relaxed my-6 text-center">
							Working with Liss Solutions to create a custom staff management
							software was a game-changer for my business. Their team&apos;s
							professionalism and expertise were evident from the start. The
							user-friendly interface and real-time tracking features have
							greatly enhanced our efficiency, making daily operations smoother
							than ever. Liss Solutions exceeded my expectations, and I highly
							recommend their services.
						</p>

						<div className="flex flex-col justify-center items-center pl-4 ">
							<Rating style={{ maxWidth: 100 }} value={5} readOnly />
							<span className="font-semibold  text-[var(--secondary-color)] italic">
								Joshua
							</span>
							<span className="text-[var(--secondary-color)] text-sm italic">
								Orean
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
