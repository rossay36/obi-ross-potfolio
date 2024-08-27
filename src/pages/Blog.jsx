// src/components/Blog.js
import React from "react";
import useTitle from "../hooks/useTitle";

const posts = [
	{
		id: 1,
		title: "Understanding React Hooks",
		date: "August 1, 2024",
		excerpt:
			"React Hooks are a feature that lets you use state and other React features without writing a class. In this post, we’ll dive into the most commonly used hooks and how they can simplify your code.",
		link: "#",
	},
	{
		id: 2,
		title: "A Beginner's Guide to Tailwind CSS",
		date: "July 15, 2024",
		excerpt:
			"Tailwind CSS is a utility-first CSS framework that can be highly customized. This guide will walk you through the basics of setting up Tailwind in your project and some tips to get started quickly.",
		link: "#",
	},
	{
		id: 3,
		title: "Building a REST API with Express and Node.js",
		date: "June 25, 2024",
		excerpt:
			"In this post, we’ll explore how to build a RESTful API using Express.js and Node.js. We’ll cover setting up your server, defining routes, and connecting to a MongoDB database.",
		link: "#",
	},
];

const Blog = () => {
	useTitle(
		"Blog page",
		"https://th.bing.com/th/id/R.ba9bbc88be4c58a273889a17f7a94f00?rik=atehCeB3o639ew&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f14%2fGolden-Badge-Transparent-PNG.png&ehk=%2bHYV23vObrT9WFFHg1q4XY0a4uE4hI0OKIIi6sv%2b7L8%3d&risl=&pid=ImgRaw&r=0"
	);
	return (
		<section id="blog" className="py-2 bg-gray-50 text-black">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-2">Blog</h2>
					<p className="text-lg text-gray-600">
						Welcome to my blog! Here you'll find posts about web development,
						technology, and more.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{posts.map((post) => (
						<div key={post.id} className="bg-white shadow-lg rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-2">{post.title}</h3>
							<p className="text-gray-500 mb-4">{post.date}</p>
							<p className="text-gray-700 mb-4">{post.excerpt}</p>
							<a href={post.link} className="text-blue-600 hover:underline">
								Read more
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
