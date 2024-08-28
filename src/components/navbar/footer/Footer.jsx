import React from "react";
import { Link } from "react-router-dom";
import NewsletterSection from "../../../pages/NewsletterSection";

const Footer = () => {
	// Function to scroll to top
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// Handle link click and scroll to top
	const handleLinkClick = () => {
		scrollToTop();
	};
	return (
		<footer className="bg-secondary text-black py-8">
			<div className="container mx-auto px-6">
				<div className="flex flex-wrap justify-between mb-12">
					{/* Contact Information */}
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
						<p className="font-bold text-lg mb-2">Contact Me</p>
						<p className="mb-1">9 Waidi Crescent, Lagos, Lagos, 100001</p>
						<p className="mb-1">Phone: +234 7011128034</p>
						<p>
							Email:{" "}
							<a
								href="mailto:obi75309@gmail.com"
								className="text-blue-600 hover:underline"
							>
								obi75309@gmail.com
							</a>
						</p>
					</div>

					{/* Navigation Links */}
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
						<p className="font-bold text-lg mb-2">Quick Links</p>
						<ul className="space-y-2">
							<li>
								<Link
									to="about"
									className="text-blue-600 hover:underline"
									onClick={handleLinkClick}
								>
									About Me
								</Link>
							</li>
							<li>
								<Link
									to="services"
									className="text-blue-600 hover:underline"
									onClick={handleLinkClick}
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									to="projects"
									className="text-blue-600 hover:underline"
									onClick={handleLinkClick}
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									to="skills"
									className="text-blue-600 hover:underline"
									onClick={handleLinkClick}
								>
									Skills
								</Link>
							</li>
							<li>
								<Link
									to="contact"
									className="text-blue-600 hover:underline"
									onClick={handleLinkClick}
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									to="blog"
									className="text-blue-600 hover:underline"
									onClick={handleLinkClick}
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="education"
									className="text-blue-600 hover:underline"
									onClick={handleLinkClick}
								>
									Education / CV
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Media Links */}
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
						<p className="font-bold text-lg mb-2">Follow Us</p>
						<div className="flex flex-col space-y-2">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								Facebook
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								Twitter
							</a>
							<a
								href="https://linkedin.com/in/obi-ross"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								LinkedIn
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								Instagram
							</a>
						</div>
					</div>

					{/* Legal Information */}
					<div className="w-full md:w-1/4">
						<p className="font-bold text-lg mb-2">Legal</p>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-blue-600 hover:underline">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="text-blue-600 hover:underline">
									Terms of Service
								</a>
							</li>
							<li>
								<a href="#" className="text-blue-600 hover:underline">
									Cookie Policy
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Newsletter Signup */}
				<NewsletterSection />

				{/* Copyright Notice */}
				<div className="bg-gray-500 text-white py-4 mt-8 text-center">
					<p className="text-sm text-white">
						&copy; 2024 Obi Ross. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
