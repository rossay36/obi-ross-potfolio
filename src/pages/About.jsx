import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const About = () => {
	useTitle(
		"About page",
		"https://th.bing.com/th/id/R.ba9bbc88be4c58a273889a17f7a94f00?rik=atehCeB3o639ew&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f14%2fGolden-Badge-Transparent-PNG.png&ehk=%2bHYV23vObrT9WFFHg1q4XY0a4uE4hI0OKIIi6sv%2b7L8%3d&risl=&pid=ImgRaw&r=0"
	);
	return (
		<section className="py-2 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-2">
					<h2 className="text-3xl font-bold mb-4 text-black">About Me</h2>
					<p className="text-lg text-gray-600">
						Hi, I'm Obi Ross, a dedicated web developer with a passion for
						creating dynamic, user-centric websites and applications.
					</p>
				</div>
				<div className="flex flex-wrap justify-center">
					{/* Who I Am */}
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<h3 className="text-xl font-semibold mb-4">Who I Am</h3>
						<p className="text-gray-700">
							I am a versatile web developer specializing in both frontend and
							backend technologies. My journey in web development began with a
							fascination for how websites work, which led me to delve into
							various technologies and tools to build comprehensive web
							applications.
						</p>
					</div>

					{/* What I've Learned */}
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<h3 className="text-xl font-semibold mb-4">What I've Learned</h3>
						<p className="text-gray-700">
							Throughout my career, I have mastered a range of technologies and
							tools. On the frontend, I’m proficient in{" "}
							<strong>
								HTML, CSS, JavaScript, React, Redux Toolkit, and Tailwind CSS
							</strong>
							, which enable me to create responsive and intuitive user
							interfaces. On the backend, I work with{" "}
							<strong>Node.js, Express, MongoDB, Mongoose, JWT</strong>, and{" "}
							<strong>Socket.io</strong> to build robust, scalable applications.
							I also use <strong>Postman</strong> for API testing and{" "}
							<strong>RTK Query</strong> for efficient data fetching and state
							management.
						</p>
					</div>

					{/* My Standards */}
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<h3 className="text-xl font-semibold mb-4">My Standards</h3>
						<p className="text-gray-700">
							I am committed to writing clean, maintainable code and adhering to
							best practices to ensure the performance and scalability of my
							projects. I believe in a user-centered approach, focusing on
							delivering seamless and engaging experiences. Continuous learning
							and staying updated with industry trends are integral to my
							professional growth.
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2 flex-wrap">
					<Link to="/projects" className="text-blue-600 hover:underline">
						Check out my work or
					</Link>
					<Link to="/contact" className="text-blue-600 hover:underline">
						get in touch
					</Link>
					to discuss how we can collaborate.
				</div>
			</div>
		</section>
	);
};

export default About;
