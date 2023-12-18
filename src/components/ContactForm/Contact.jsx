'use client';

const Contact = () => {
	return (
		<div className="container items-center justify-center p-12 gap-5">
			<h1 className="text-3xl font-bold sm:text-4xl text-center text-[var(--secondary-color)] capitalize lg:text-3xl">
				Do you have any project to discuss with us?
			</h1>
			<div className="mx-auto w-full text-[var(--secondary-color)]  mt-12">
				<form>
					<div className="mb-5">
						<label htmlFor="name" className="mb-3 block text-base font-medium ">
							Full Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Full Name"
							className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[var(--secondary-color)] outline-none focus:border-[var(--primary-color)] focus:shadow-md"
						/>
					</div>
					<div className="mb-5">
						<label
							htmlFor="email"
							className="mb-3 block text-base font-medium "
						>
							Email Address
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="example@domain.com"
							className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[var(--secondary-color)] outline-none focus:border-[var(--primary-color)] focus:shadow-md"
						/>
					</div>
					<div className="mb-5">
						<label
							htmlFor="subject"
							className="mb-3 block text-base font-medium "
						>
							Subject
						</label>
						<input
							type="text"
							name="subject"
							id="subject"
							placeholder="Enter your subject"
							className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[var(--secondary-color)] outline-none focus:border-[var(--primary-color)] focus:shadow-md"
						/>
					</div>
					<div className="mb-5">
						<label
							htmlFor="message"
							className="mb-3 block text-base font-medium "
						>
							Message
						</label>
						<textarea
							rows="4"
							name="message"
							id="message"
							placeholder="Type your message"
							className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[var(--white-color)] outline-none focus:border-[var(--primary-color)] focus:shadow-md"
						></textarea>
					</div>
					<div>
						<button className="hover:shadow-form rounded-md bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] py-3 px-8 text-base font-semibold text-[var(--white-color)] outline-none">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
