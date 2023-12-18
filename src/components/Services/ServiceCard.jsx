import PropTypes from 'prop-types';
import Image from 'next/image';
import { FaHandPointRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
	return (
		<div
			key={service.id}
			className="flex flex-col mb-12 overflow-hidden cursor-pointer border-2 p-4 rounded-xl border-[var(--primary-color)] space-y-4 h-full"
		>
			<div className="flex-1 flex justify-center">
				<Image
					alt={service.title.toLowerCase().split(' ').join('_')}
					src={service.image}
					width={600}
					height={200}
					className=""
				></Image>
			</div>

			<div className="flex flex-col justify-between flex-1">
				<div className="">
					<h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
						{service.title}
					</h3>
					<ul>
						{service.features.map((feature, idx) => (
							<li
								className="text-[var(--secondary-color)]  mt-2 flex "
								key={idx}
							>
								<p className="flex gap-4 text-justify">
									<span className="mt-1">
										<FaHandPointRight />
									</span>{' '}
									{feature}
								</p>
							</li>
						))}
					</ul>
					{/* <p className="text-lg font-normal text-gray-500"></p> */}
				</div>
				<button className="mt-4 py-2 px-3 bg-[var(--primary-color)] rounded-2xl text-[var(--white-color)] max-w-fit mx-auto hover:bg-[var(--primary-color-hover)] transition-transform duration-700">
					Learn More
				</button>
			</div>
		</div>
	);
};

ServiceCard.propTypes = {
	service: PropTypes.object,
};

export default ServiceCard;
