import React from "react";
import { Link } from "react-router-dom";
const IMG_URL = import.meta.env.VITE_PUBLIC_FOLDER;
// import project3 from "../../assets/project3.png";

const SliceComponentTwo = () => {
	return (
		<div
			className="relative flex items-center justify-center height p-8 bg-cover bg-center text-white"
			style={{ backgroundImage: `url(/images/portfolio-bg.png)` }}
		>
			<div className="absolute inset-0 bg-black w-full h-full opacity-75"></div>
			<div className="relative max-w-lg text-center md:text-left z-10">
				<h1 className="text-4xl font-bold mb-4">
					Building cutting-edge web applications.
				</h1>
				<p className="text-xl mb-4">Full Stack Development at its finest.</p>
				<p className="mb-6">
					I create solutions that are not only functional but also elegant and
					efficient.
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

export default SliceComponentTwo;
