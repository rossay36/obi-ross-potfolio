// src/components/Project.js
import React, { useState } from "react";
import Modal from "react-modal";
import useTitle from "../hooks/useTitle";

Modal.setAppElement("#root"); // For accessibility

const IMG_URL = import.meta.env.VITE_PUBLIC_FOLDER;

const Projects = () => {
	useTitle(
		"Projects page",
		"https://th.bing.com/th/id/R.ba9bbc88be4c58a273889a17f7a94f00?rik=atehCeB3o639ew&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f14%2fGolden-Badge-Transparent-PNG.png&ehk=%2bHYV23vObrT9WFFHg1q4XY0a4uE4hI0OKIIi6sv%2b7L8%3d&risl=&pid=ImgRaw&r=0"
	);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const images = [
		"/images/project4.png",
		"/images/project3.png",
		"/images/project5.png",
	];

	const openLightbox = (index) => {
		setCurrentImageIndex(index);
		setIsLightboxOpen(true);
	};

	const closeLightbox = () => {
		setIsLightboxOpen(false);
	};

	const goToNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const goToPrevImage = () => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	return (
		<section id="project" className="py-12 bg-gray-50 text-black">
			<div className="container mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-extrabold mb-6">Social Media App</h2>
					<p className="text-lg text-gray-700">
						A fully functional and interactive social media app built from
						scratch with real-time chat and various features.
					</p>
				</div>
				<div className="flex flex-col md:flex-row md:justify-center gap-8">
					{/* Project Overview */}
					<div className="w-full md:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-lg p-8 mb-8 md:mb-0">
						<h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
						<p className="text-gray-800 mb-4">
							This social media app allows users to interact through posts,
							comments, and real-time chat. It includes a friend request system,
							file uploads, and more. Built over 3 months, the app leverages a
							variety of technologies to provide a seamless user experience.
						</p>
						<div className="mb-6">
							<h4 className="text-xl font-semibold mb-2">Technologies Used:</h4>
							<ul className="list-disc list-inside ml-6 text-gray-800">
								<li>HTML & CSS</li>
								<li>JavaScript</li>
								<li>React.js</li>
								<li>Redux Toolkit & RTK Query</li>
								<li>Node.js & Express</li>
								<li>MongoDB & Mongoose</li>
								<li>JWT</li>
								<li>Socket.io</li>
								<li>Postman</li>
								<li>Firebase (for file uploads)</li>
								<li>Vite & Babel</li>
							</ul>
						</div>
						<div className="mb-6">
							<h4 className="text-xl font-semibold mb-2">Key Features:</h4>
							<ul className="list-disc list-inside ml-6 text-gray-800">
								<li>Real-time chat functionality</li>
								<li>Friend request system</li>
								<li>File uploads via Firebase</li>
								<li>Interactive user interface</li>
								<li>Responsive design</li>
							</ul>
						</div>
						<div className="mb-6">
							<h4 className="text-xl font-semibold mb-2">Challenges Faced:</h4>
							<p className="text-gray-800">
								One of the most challenging parts was implementing the friend
								request system. Despite seeking help, I had to solve the issues
								independently, which provided me with significant learning
								experiences and improved my problem-solving skills.
							</p>
						</div>
						<a
							href="https://your-app-link.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:underline"
						>
							View Live Demo
						</a>
					</div>
					{/* Project Images */}
					<div className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg p-6">
						<h3 className="text-2xl font-semibold mb-4">Screenshots</h3>
						<div className="flex flex-wrap gap-4">
							{images.map((image, index) => (
								<img
									key={index}
									src={image}
									alt={`App Screenshot ${index + 1}`}
									className="w-32 h-32 object-cover rounded-lg shadow-md cursor-pointer"
									onClick={() => openLightbox(index)}
								/>
							))}
						</div>
					</div>
				</div>

				{/* Lightbox Modal */}
				<Modal
					isOpen={isLightboxOpen}
					onRequestClose={closeLightbox}
					className="modal"
					overlayClassName="overlay"
				>
					<button
						onClick={closeLightbox}
						className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
					>
						&times;
					</button>
					<button
						onClick={goToPrevImage}
						className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
					>
						&lt;
					</button>
					<button
						onClick={goToNextImage}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
					>
						&gt;
					</button>
					<img
						src={images[currentImageIndex]}
						alt={`Full size screenshot ${currentImageIndex + 1}`}
						className="w-full h-auto max-w-screen-lg mx-auto"
					/>
				</Modal>
			</div>
		</section>
	);
};

export default Projects;
