import React from "react";
import useTitle from "../hooks/useTitle";

// Import icons or images
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaDatabase,
} from "react-icons/fa";
import { IoMdConstruct } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import {
	SiRedux,
	SiTailwindcss,
	SiExpress,
	SiSocketdotio,
	SiPostman,
	SiGit,
} from "react-icons/si";
import { TbBrandGithub, TbBrandZapier } from "react-icons/tb";

const skills = [
	{
		category: "Frontend Technologies",
		items: [
			{
				name: "HTML",
				description: "The standard markup language for creating web pages.",
				icon: (
					<FaHtml5 className="text-4xl text-orange-600 font-bold w-10 h-10" />
				),
			},
			{
				name: "CSS",
				description:
					"A style sheet language used for describing the presentation of a document.",
				icon: (
					<FaCss3Alt className="text-4xl text-blue-600 font-bold w-14 h-14" />
				),
			},
			{
				name: "JavaScript",
				description:
					"A programming language that enables interactive web pages.",
				icon: <FaJs className="text-4xl text-yellow-600 font-bold w-10 h-10" />,
			},
			{
				name: "React",
				description: "A JavaScript library for building user interfaces.",
				icon: (
					<FaReact className="text-4xl text-blue-400 font-bold w-10 h-10" />
				),
			},
			{
				name: "Redux Toolkit",
				description: "A set of tools for efficient Redux development.",
				icon: (
					<SiRedux className="text-4xl text-purple-600 font-bold w-10 h-10" />
				),
			},
			{
				name: "Tailwind CSS",
				description: "A utility-first CSS framework for rapid UI development.",
				icon: (
					<SiTailwindcss className="text-4xl text-blue-500 font-bold w-12 h-12" />
				),
			},
		],
	},
	{
		category: "Backend Technologies",
		items: [
			{
				name: "Node.js",
				description:
					"A JavaScript runtime built on Chrome's V8 JavaScript engine.",
				icon: (
					<FaNodeJs className="text-4xl text-green-600 font-bold w-12 h-12" />
				),
			},
			{
				name: "Express",
				description:
					"A minimal and flexible Node.js web application framework.",
				icon: (
					<SiExpress className="text-4xl text-gray-600 font-bold w-12 h-12" />
				),
			},
			{
				name: "MongoDB",
				description:
					"A NoSQL database for storing data in flexible, JSON-like documents.",
				icon: (
					<DiMongodb className="text-4xl text-green-600 font-bold w-16 h-16" />
				),
			},
			{
				name: "Mongoose",
				description:
					"An ODM (Object Data Modeling) library for MongoDB and Node.js.",
				icon: (
					<FaDatabase className="text-4xl text-gray-800 font-bold w-10 h-10" />
				),
			},
			{
				name: "JWT",
				description:
					"A compact, URL-safe means of representing claims to be transferred between two parties.",
				icon: (
					<IoMdConstruct className="text-4xl text-blue-500 font-bold w-16 h-14" />
				),
			},
			{
				name: "Socket.io",
				description:
					"A library for real-time, bidirectional, and event-based communication.",
				icon: (
					<SiSocketdotio className="text-4xl text-blue-600 font-bold w-14 h-14" />
				),
			},
		],
	},
	{
		category: "Tools & Libraries",
		items: [
			{
				name: "Postman",
				description: "A collaboration platform for API development.",
				icon: (
					<SiPostman className="text-4xl text-red-600 font-bold w-10 h-10" />
				),
			},
			{
				name: "RTK Query",
				description:
					"A powerful data fetching and caching tool from Redux Toolkit.",
				icon: (
					<TbBrandZapier className="text-4xl text-blue-500 font-bold w-14 h-10" />
				),
			},
			{
				name: "Git",
				description: "A version control system to manage source code changes.",
				icon: (
					<SiGit className="text-4xl text-orange-600 font-bold w-12 h-10" />
				),
			},
			{
				name: "GitHub",
				description:
					"A platform for version control and collaboration using Git.",
				icon: (
					<TbBrandGithub className="text-4xl text-gray-800 font-bold w-14 h-10" />
				),
			},
			{
				name: "Zapier",
				description:
					"A tool for automating repetitive tasks by connecting apps.",
				icon: (
					<TbBrandZapier className="text-4xl text-blue-500 font-bold w-20 h-10" />
				),
			},
		],
	},
];

const Skills = () => {
	useTitle(
		"Skills page",
		"https://th.bing.com/th/id/R.ba9bbc88be4c58a273889a17f7a94f00?rik=atehCeB3o639ew&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f14%2fGolden-Badge-Transparent-PNG.png&ehk=%2bHYV23vObrT9WFFHg1q4XY0a4uE4hI0OKIIi6sv%2b7L8%3d&risl=&pid=ImgRaw&r=0"
	);
	return (
		<section id="skills" className="py-12 bg-gray-50 text-black">
			<div className="container mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-extrabold text-black mb-6">Skills</h2>
					<p className="text-lg text-gray-700">
						Here are the technologies and tools I've mastered to create robust
						and efficient web applications.
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-8">
					{skills.map((skillCategory, index) => (
						<div
							key={index}
							className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 mb-8"
						>
							<h3 className="text-2xl font-semibold mb-6 text-center">
								{skillCategory.category}
							</h3>
							<ul className="space-y-6">
								{skillCategory.items.map((skill, idx) => (
									<li
										key={idx}
										className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4"
									>
										{skill.icon}
										<div>
											<h4 className="text-xl font-semibold mb-2">
												{skill.name}
											</h4>
											<p className="text-gray-800">{skill.description}</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
