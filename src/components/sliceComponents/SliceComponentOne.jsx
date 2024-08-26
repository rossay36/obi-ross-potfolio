import React from "react";
import { Link } from "react-router-dom";

const SliceComponentOne = () => {
	return (
		<div
			className="relative flex items-center justify-center height p-8 bg-cover bg-center text-white"
			style={{ backgroundImage: "url(../../../src/assets/project4.png)" }}
		>
			<div className="absolute inset-0 bg-black opacity-55"></div>
			<div className="relative max-w-lg text-center md:text-left z-10">
				<h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
				<p className="text-xl mb-4">Full Stack Development at its finest.</p>
				<p className="mb-6">
					Explore my work and skills in web development, design, and more.
				</p>
				<Link
					to="contact"
					className="inline-block px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-400 transition duration-300"
				>
					Get in Touch
				</Link>
			</div>
		</div>
	);
};

export default SliceComponentOne;
