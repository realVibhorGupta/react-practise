// @flow
import React from "react";

const Footer = () => {
	return (
		<>
			<div className="pt-12">
				<footer id="footer" className="relative z-50 dark:bg-gray-900">
					<div
						tabindex="0"
						aria-label="footer"
						className="focus:outline-none border-t border-b border-gray-200 dark:border-gray-700 py-16"
					>
						<div className="mx-auto container px-4 xl:px-12 2xl:px-4">
							<div className="lg:flex">
								<div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
									<div className="w-full lg:w-1/2 px-6">
										<ul>
											<li>
												<a
													className="focus:outline-none focus:underline  text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
													href="javascript:void(0)"
												>
													Components
												</a>
											</li>
											<li className="mt-6">
												<a
													className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
													href="javascript:void(0)"
												>
													Templates
												</a>
											</li>
											<li className="mt-6">
												<a
													className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
													href="javascript:void(0)"
												>
													Pricing
												</a>
											</li>
											<li className="mt-6">
												<a
													className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
													href="javascript:void(0)"
												>
													FAQ
												</a>
											</li>
											<li className="mt-6">
												<a
													href="javascript:void(0)"
													className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
												>
													Documentation
												</a>
											</li>
										</ul>
									</div>
									<div className="w-full lg:w-1/2 px-6">
										<ul>
											<li>
												<a
													className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
													href="javascript:void(0)"
												>
													Free components
												</a>
											</li>
											<li className="mt-6">
												<a
													className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
													href="javascript:void(0)"
												>
													Blog
												</a>
											</li>
											<li className="mt-6">
												<a
													className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
													href="javascript:void(0)"
												>
													Changelog
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="w-full lg:w-1/2 flex">
									<div className="w-full lg:w-1/2 px-6">
										<ul>
											<li>
												<a
													href="javascript:void(0)"
													className="focus:underline focus:outline-none text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
												>
													Privacy policy
												</a>
											</li>
											<li className="mt-6">
												<a
													className="focus:underline focus:outline-none text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
													href="javascript:void(0)"
												>
													Terms of service
												</a>
											</li>
										</ul>
									</div>
									<div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
										<div className="flex items-center mb-6">
											<a aria-label="Github" href="javascript:void(0)">
												<div className="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand">
													<img
														className="dark:hidden"
														src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg1.svg"
														alt="Github"
													/>
													<img
														className="dark:block hidden"
														src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg1dark.svg"
														alt="Github"
													/>
												</div>{" "}
											</a>
											<a
												aria-label="Twitter"
												href="javascript:void(0)"
												className="ml-4"
											>
												<div className="">
													<img
														className="dark:hidden"
														src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg2.svg"
														alt="Twitter"
													/>
													<img
														className="dark:block hidden"
														src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg2dark.svg"
														alt="Twitter"
													/>
												</div>
											</a>
										</div>

										<div className="relative w-36">
											<img
												id="auto"
												className="dark:hidden absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-device-laptop"
												src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg3.svg"
												alt="auto"
											/>
											<img
												id="auto"
												className="dark:block hidden absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-device-laptop"
												src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg3dark.svg"
												alt="auto"
											/>
											<img
												id="light"
												className="dark:hidden hidden absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-brightness-up"
												src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg4.svg"
												alt="light"
											/>
											<img
												id="light"
												className="dark:block hidden  absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-brightness-up"
												src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg4dark.svg"
												alt="light"
											/>
											<img
												id="dark"
												className="dark:hidden hidden absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-moon"
												src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg5.svg"
												alt="dark"
											/>
											<img
												id="dark"
												className="dark:block  hidden absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-moon"
												src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg5dark.svg"
												alt="dark"
											/>

											<img
												src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg6.svg"
												className="pointer-events-none absolute inset-0 m-auto mr-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-chevron-down"
												alt="dropdown"
											/>
											<select
												aria-label="select box"
												onchange="switchMode(event)"
												className="w-full focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none pl-10 py-2 appearance-none flex items-center h-12 border rounded border-gray-700 dark:border-gray-50 text-sm leading-5 dark:bg-gray-900 dark:text-gray-50"
											>
												<option selected="" value="auto">
													Auto
												</option>
												<option value="light">Light</option>
												<option value="dark">Dark</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="py-16 flex flex-col justify-center items-center">
						<a
							className="focus:outline-none"
							tabindex="0"
							role="link"
							aria-label="home link"
							href="javascript:void(0)"
						>
							<img
								className="dark:hidden"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg7.svg"
								alt="tuk logo"
							/>
							<img
								className="dark:block hidden"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg7dark.svg"
								alt="tuk logo"
							/>
						</a>
						<p
							tabindex="0"
							className="focus:outline-none mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50"
						>
							{new Date().getFullYear()} Tailwind UI Kit. All Rights Reserved.
						</p>
					</div>
				</footer>
			</div>

			<div />
		</>
	);
};

export default Footer;
