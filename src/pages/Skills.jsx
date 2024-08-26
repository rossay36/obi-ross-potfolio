// src/components/Skills.js
import React from "react";

const skills = [
	{
		category: "Frontend Technologies",
		items: [
			{
				name: "HTML",
				description: "The standard markup language for creating web pages.",
			},
			{
				name: "CSS",
				description:
					"A style sheet language used for describing the presentation of a document.",
			},
			{
				name: "JavaScript",
				description:
					"A programming language that enables interactive web pages.",
			},
			{
				name: "React",
				description: "A JavaScript library for building user interfaces.",
			},
			{
				name: "Redux Toolkit",
				description: "A set of tools for efficient Redux development.",
			},
			{
				name: "Tailwind CSS",
				description: "A utility-first CSS framework for rapid UI development.",
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
			},
			{
				name: "Express",
				description:
					"A minimal and flexible Node.js web application framework.",
			},
			{
				name: "MongoDB",
				description:
					"A NoSQL database for storing data in flexible, JSON-like documents.",
			},
			{
				name: "Mongoose",
				description:
					"An ODM (Object Data Modeling) library for MongoDB and Node.js.",
			},
			{
				name: "JWT",
				description:
					"A compact, URL-safe means of representing claims to be transferred between two parties.",
			},
			{
				name: "Socket.io",
				description:
					"A library for real-time, bidirectional, and event-based communication.",
			},
		],
	},
	{
		category: "Tools & Libraries",
		items: [
			{
				name: "Postman",
				description: "A collaboration platform for API development.",
			},
			{
				name: "RTK Query",
				description:
					"A powerful data fetching and caching tool from Redux Toolkit.",
			},
		],
	},
];

const Skills = () => {
	return (
		<section id="skills" className="py-2 bg-gray-50 text-black">
			<div className="container mx-auto px-4">
				<div className="text-center mb-4">
					<h2 className="text-3xl font-bold text-black mb-4">Skills</h2>
					<p className="text-lg text-gray-600">
						Here are the technologies and tools I've mastered to create robust
						and efficient web applications.
					</p>
				</div>
				<div className="flex flex-wrap justify-center">
					{skills.map((skillCategory, index) => (
						<div key={index} className="w-full md:w-1/3 px-4 mb-8">
							<h3 className="text-xl font-semibold mb-4">
								{skillCategory.category}
							</h3>
							<ul className="space-y-4">
								{skillCategory.items.map((skill, idx) => (
									<li key={idx} className="bg-white shadow-md rounded-lg p-4">
										<h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
										<p className="text-gray-700">{skill.description}</p>
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
