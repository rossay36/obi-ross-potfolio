import React from "react";
import useTitle from "../hooks/useTitle";

const services = [
	{
		title: "Front-End Development",
		description:
			"Creating responsive, interactive, and visually appealing front-end solutions using modern technologies like React, Tailwind CSS, and more.",
		technologies: [
			"React.js",
			"Redux-Toolkit",
			"RTK-Query",
			"Tailwind CSS",
			"JavaScript",
			"HTML & CSS",
		],
	},
	{
		title: "Back-End Development",
		description:
			"Building scalable and efficient server-side applications with robust APIs, authentication, and database management.",
		technologies: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT"],
	},
	{
		title: "Full-Stack Development",
		description:
			"Combining front-end and back-end skills to deliver complete web applications from scratch, integrating multiple technologies for a seamless experience.",
		technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io"],
	},
	{
		title: "Website Maintenance",
		description:
			"Providing ongoing support and updates to ensure your website stays current, secure, and functional.",
		technologies: ["Website Optimization", "Bug Fixes", "Security Updates"],
	},
];

const Services = () => {
	useTitle(
		"Services page",
		"https://th.bing.com/th/id/R.ba9bbc88be4c58a273889a17f7a94f00?rik=atehCeB3o639ew&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f14%2fGolden-Badge-Transparent-PNG.png&ehk=%2bHYV23vObrT9WFFHg1q4XY0a4uE4hI0OKIIi6sv%2b7L8%3d&risl=&pid=ImgRaw&r=0"
	);
	return (
		<section id="services" className="py-2 bg-gray-100 text-black">
			<div className="container mx-auto px-4">
				<div className="text-center mb-4">
					<h2 className="text-3xl font-bold mb-4">My Services</h2>
					<p className="text-lg text-gray-600">
						Here are some of the services I offer to help you build and maintain
						high-quality web applications.
					</p>
				</div>
				<div className="flex flex-col md:flex-row md:space-x-4">
					{services.map((service, index) => (
						<div
							key={index}
							className="w-full md:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg p-6 mb-8"
						>
							<h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
							<p className="text-gray-700 mb-4">{service.description}</p>
							<div className="mb-4">
								<h4 className="text-xl font-semibold mb-2">
									Technologies Used:
								</h4>
								<ul className="list-disc list-inside ml-6 text-gray-700">
									{service.technologies.map((tech, techIndex) => (
										<li key={techIndex}>{tech}</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
