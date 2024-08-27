import React, { useState } from "react";
import Modal from "react-modal";
import useTitle from "../hooks/useTitle";

Modal.setAppElement("#root"); // For accessibility

const Education = () => {
	useTitle(
		"Education page",
		"https://th.bing.com/th/id/R.ba9bbc88be4c58a273889a17f7a94f00?rik=atehCeB3o639ew&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f14%2fGolden-Badge-Transparent-PNG.png&ehk=%2bHYV23vObrT9WFFHg1q4XY0a4uE4hI0OKIIi6sv%2b7L8%3d&risl=&pid=ImgRaw&r=0"
	);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const images = [
		"/images/cert.png",
		"/images/cert.png",
		// Add paths to your certification images here
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
		<div className=" w-full min-h-[100vh] grid bg-secondary text-stone-950">
			<section id="resume" className="container py-8 w-full">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-4">Resume</h2>
					<p className="text-lg mb-4">
						Download my resume to learn more about my background and experience.
					</p>
					<a
						href="/images/resume.pdf"
						download
						className="bg-blue-500 text-white px-4 py-2 rounded"
					>
						Download Resume
					</a>
				</div>
			</section>
			<section id="cover-letter" className="container py-8 w-full">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-4">Cover Letter</h2>
					<p className="text-lg mb-4">Dear Hiring Team,</p>
					<p className="text-lg mb-4">
						I am excited to express my interest in opportunities within your
						organization. With nearly three years of experience in web
						development, I have developed a strong foundation in both frontend
						and backend technologies, which I am eager to leverage to contribute
						to your team.
					</p>
					<p className="text-lg mb-4">My background includes:</p>
					<ul className="list-disc list-inside mb-4 pl-5">
						<li>
							<strong>Frontend Development:</strong> Expertise in HTML, CSS, and
							JavaScript, with practical experience using React and Tailwind CSS
							to create responsive and dynamic user interfaces.
						</li>
						<li>
							<strong>Backend Development:</strong> Proficient in Node.js and
							Express for building scalable server-side applications, with
							experience using MongoDB for database management and integrating
							authentication mechanisms with JWT and Firebase.
						</li>
						<li>
							<strong>State Management:</strong> Skilled in using Redux Toolkit
							and RTK Query to manage application state and handle data fetching
							efficiently.
						</li>
						<li>
							<strong>Version Control:</strong> Experienced with Git and GitHub
							for version control, facilitating collaborative development and
							maintaining code quality.
						</li>
					</ul>
					<p className="text-lg mb-4">
						I am passionate about developing innovative solutions and
						continuously enhancing my skills. I am drawn to environments that
						challenge me and offer opportunities for growth and impact. I am
						confident that my technical abilities and enthusiasm would be a
						valuable addition to your team.
					</p>
					<p className="text-lg">
						Thank you for taking the time to review my portfolio. I look forward
						to the opportunity to discuss how my skills and experiences align
						with potential opportunities within your organization.
					</p>
					<p className="text-lg">
						Best regards,
						<br />
						<strong>Obi Ross</strong>
					</p>
				</div>
			</section>
			<section id="certifications" className="container py-8 w-full">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-4">Certifications</h2>
					<ul className="list-disc ml-6 text-lg">
						<li>
							<strong>Certified Web Developer</strong> - LINAR SCHOOL OF MEDIA &
							ITC
							<br />
							<a
								href="https://linar.ng"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500"
							>
								Verify Certification
							</a>
							<br />
							<img
								src="/images/cert.png" // Replace with the actual path
								alt="Certified Web Developer"
								className="w-32 h-32 object-cover rounded-lg mt-2 cursor-pointer"
								onClick={() => openLightbox(0)}
							/>
						</li>
						<li>
							<strong>Front-End Web Development Certification</strong> - LINAR
							SCHOOL OF MEDIA & ITC
							<br />
							<a
								href="https://linar.ng"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500"
							>
								Verify Certification
							</a>
							<br />
							<img
								src="/images/cert.png" // Replace with the actual path
								alt="Front-End Web Development Certification"
								className="w-32 h-32 object-cover rounded-lg mt-2 cursor-pointer"
								onClick={() => openLightbox(1)}
							/>
						</li>
						{/* Add more certifications as needed */}
					</ul>
				</div>

				{/* Lightbox Modal */}
				<Modal
					isOpen={isLightboxOpen}
					onRequestClose={closeLightbox}
					className="modal"
					overlayClassName="overlay"
				>
					<button onClick={closeLightbox} className="close-button">
						X
					</button>
					<button onClick={goToPrevImage} className="prev-button">
						&lt;
					</button>
					<button onClick={goToNextImage} className="next-button">
						&gt;
					</button>
					<img
						src={images[currentImageIndex]}
						alt={`Certification ${currentImageIndex + 1}`}
						className="full-image"
					/>
				</Modal>
			</section>
		</div>
	);
};

export default Education;
