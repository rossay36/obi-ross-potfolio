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
		image:
			"https://plus.unsplash.com/premium_photo-1678565202188-f69b2e593998?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Back-End Development",
		description:
			"Building scalable and efficient server-side applications with robust APIs, authentication, and database management.",
		technologies: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT"],
		image:
			"https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Full-Stack Development",
		description:
			"Combining front-end and back-end skills to deliver complete web applications from scratch, integrating multiple technologies for a seamless experience.",
		technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io"],
		image:
			"https://plus.unsplash.com/premium_photo-1723601137214-1d5bfe3181f6?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Website Maintenance",
		description:
			"Providing ongoing support and updates to ensure your website stays current, secure, and functional.",
		technologies: ["Website Optimization", "Bug Fixes", "Security Updates"],
		image:
			"https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

const Services = () => {
	useTitle(
		"Services page",
		"https://th.bing.com/th/id/R.ba9bbc88be4c58a273889a17f7a94f00?rik=atehCeB3o639ew&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f14%2fGolden-Badge-Transparent-PNG.png&ehk=%2bHYV23vObrT9WFFHg1q4XY0a4uE4hI0OKIIi6sv%2b7L8%3d&risl=&pid=ImgRaw&r=0"
	);
	return (
		<section id="services" className="py-12 bg-gray-100 text-black">
			<div className="container mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-extrabold mb-6">My Services</h2>
					<p className="text-lg text-gray-700">
						Here are some of the services I offer to help you build and maintain
						high-quality web applications.
					</p>
				</div>
				<div className="flex flex-wrap justify-center">
					{services.map((service, index) => (
						<div
							key={index}
							className="w-full md:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg p-8 mb-8 flex flex-col items-center"
						>
							<img
								src={service.image}
								alt={service.title}
								className="w-full h-32 object-cover rounded-lg mb-6"
							/>
							<h3 className="text-2xl font-semibold mb-4 text-center">
								{service.title}
							</h3>
							<p className="text-gray-800 mb-4 text-center">
								{service.description}
							</p>
							<div className="mb-4">
								<h4 className="text-xl font-semibold mb-2 text-center">
									Technologies Used:
								</h4>
								<ul className="list-disc list-inside ml-6 text-gray-800">
									{service.technologies.map((tech, techIndex) => (
										<li key={techIndex} className="text-center">
											{tech}
										</li>
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
