import { FaRegMessage } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
const Footer = () => {
	return (
		<footer className="bg-[var(--primary-color)] text-[var(--white-color)]">
			<div className="mx-auto max-w-screen-2xl space-y-8 px-4 py-10 sm:px-6 lg:space-y-16 lg:px-8 ">
				<div className="grid grid-cols-1 gap-8  pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
					<div>
						<p className="font-medium ">Links</p>

						<ul className="mt-6 space-y-4 text-sm">
							<li>
								<a href="#" className=" transition hover:opacity-75">
									ABOUT US
								</a>
							</li>

							<li>
								<a href="#" className=" transition hover:opacity-75">
									SERVICES
								</a>
							</li>

							<li>
								<a href="#" className="transition hover:opacity-75">
									PORTFOLIO
								</a>
							</li>

							<li>
								<a href="#" className="transition hover:opacity-75">
									LISS ACADEMY
								</a>
							</li>

							<li>
								<a href="#" className="transition hover:opacity-75">
									CAREERS
								</a>
							</li>
						</ul>
					</div>

					<div>
						<p className="font-medium ">Legal </p>

						<ul className="mt-6 space-y-4 text-sm">
							<li>
								<a href="#" className="transition hover:opacity-75">
									DISCLAIMER
								</a>
							</li>

							<li>
								<a href="#" className="transition hover:opacity-75">
									DATA STATEMENT
								</a>
							</li>

							<li>
								<a href="#" className="transition hover:opacity-75">
									IMPRINT
								</a>
							</li>
						</ul>
					</div>

					<div>
						<p className="font-medium ">CONTACT</p>

						<ul className="mt-6 space-y-4 text-sm">
							<li>
								<div className="flex gap-4 items-center">
									<IoCall /> 069 21 57 422
								</div>
							</li>

							<li>
								<div className="flex gap-4 items-center">
									<FaRegMessage /> info@lisssolutions.com
								</div>
							</li>
						</ul>
					</div>

					<div>
						<p className="font-medium ">Legal</p>

						<ul className="mt-6 space-y-4 text-sm">
							<li>
								<a href="#" className="transition hover:opacity-75">
									{' '}
									Accessibility{' '}
								</a>
							</li>

							<li>
								<a href="#" className=" transition hover:opacity-75">
									{' '}
									Returns Policy{' '}
								</a>
							</li>

							<li>
								<a href="#" className=" transition hover:opacity-75">
									{' '}
									Refund Policy{' '}
								</a>
							</li>

							<li>
								<a href="#" className=" transition hover:opacity-75">
									{' '}
									Hiring Statistics{' '}
								</a>
							</li>
						</ul>
					</div>
				</div>

				<p className="  text-center">
					&copy; 2023. Liss Solution. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
