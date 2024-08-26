import React from "react";
import { Link } from "react-router-dom";

const SliceComponentThree = () => {
	return (
		<div
			className="relative flex flex-col md:flex-row items-center justify-center height p-8 bg-cover bg-center text-white"
			style={{ backgroundImage: "url(../../../src/assets/project5.png)" }}
		>
			<div className="absolute inset-0 bg-black opacity-55"></div>

			<div className="relative z-10 max-w-lg text-center md:text-left">
				<h1 className="text-4xl font-bold mb-4">Let's Build Together</h1>
				<p className="text-xl mb-4">Collaborate on exciting projects.</p>
				<p className="mb-6">
					I'm always open to new opportunities and collaborations. Let’s create
					something amazing.
				</p>
				<Link
					to="contact"
					className="inline-block px-6 py-3 text-lg font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-400 transition duration-300"
				>
					Contact Me
				</Link>
			</div>
		</div>
	);
};

export default SliceComponentThree;
