import React from "react";

const SingleBlog = ({}) => {
	return (
		<div>
			<section class="bg-white dark:bg-gray-900">
				<div class="container px-6 py-10 mx-auto">
					<h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
						From the blog
					</h1>

					<div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
						<img
							class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
							src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							alt=""
						/>

						<div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
							<p class="text-sm text-blue-500 uppercase">category</p>

							<a
								href="#"
								class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
							>
								All the features you want to know
							</a>

							<p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
								veritatis sint autem nesciunt, laudantium quia tempore delect
							</p>

							<a
								href="#"
								class="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
							>
								Read more
							</a>

							<div class="flex items-center mt-6">
								<img
									class="object-cover object-center w-10 h-10 rounded-full"
									src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
									alt=""
								/>

								<div class="mx-4">
									<h1 class="text-sm text-gray-700 dark:text-gray-200">
										Amelia. Anderson
									</h1>
									<p class="text-sm text-gray-500 dark:text-gray-400">
										Lead Developer
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<article class="py-12 px-4">
				<h1 class="text-4xl text-center mb-4 font-heading font-semibold">
					The Official Dunder Mifflin Scranton Diary
				</h1>
				<p class="text-center">
					<span>October 22, by</span>
					<a class="ml-1 text-indigo-600 hover:underline" href="#">
						Michael Scott
					</a>
				</p>

				<div class="max-w-3xl mx-auto">
					<p class="mb-4">
						We offer a dependable and quick supply of copy paper suited to all
						kinds of printers. Each of our various products is designed to
						provide the finest performance and meet international standards.
					</p>
					<p class="mb-4">
						We’re dedicated to ensure the highest level of customer satisfaction
						based on long-term professional relationships. By creating the
						positive working environment we’re enabling our employees to
						significantly improve not only their productivity, but what’s more
						important – job satisfaction.
					</p>
					<ul class="mb-4 list-inside list-disc">
						<li>High durability</li>
						<li>Value-based price</li>
						<li>Perfect performance on copy machines</li>
						<li>Long lasting whiteness</li>
					</ul>
					<p class="mb-10">
						We deliver our services with passion and dedication unmatched by
						other so called “big players”. We create a friendly environment for
						our workers and that’s what makes their dedication soar to the
						maximum. You are getting not only the best possible product, but
						also our love for paper (completely free of charge).
					</p>
					<blockquote class="text-center mb-10">
						<p class="text-lg font-semibold mb-2">
							"I would say I kind of have an unfair advantage, because I watch
							reality dating shows like a hawk, and I learn. I absorb
							information from the strategies of the winners and the losers.
							Actually, I probably learn more from the losers."
						</p>
						<footer class="text-gray-400">Michael Scott</footer>
					</blockquote>
					<p>Because the real business is done on paper.</p>
				</div>
			</article>
		</div>
	);
};
export default SingleBlog;	