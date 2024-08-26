import React, { useState } from "react";
import axios from "axios";

const Contacts = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus(""); // Clear previous status
		setError(""); // Clear previous errors

		try {
			const res = await axios.post(
				"https://ross-portfolio.onrender.com/user",
				formData
			);

			// Handle success response
			if (res.status === 201) {
				setStatus(res.data.message); // Use the message from the server
				setFormData({ name: "", email: "", message: "" }); // Clear form fields
			} else {
				setError("Failed to send message. Please try again.");
			}
		} catch (err) {
			// Handle error response
			if (err.response && err.response.data) {
				setError(err.response.data.message);
			} else {
				setError("Failed to send message. Please try again.");
			}
		}
	};

	return (
		<section id="contact" className="py-2 bg-gray-50 text-black">
			<div className="container mx-auto px-4">
				<div className="text-center mb-2">
					<h2 className="text-3xl font-bold mb-2">Contact Me</h2>
					<p className="text-lg text-gray-600">
						I’d love to hear from you! Whether you have a question, feedback, or
						just want to say hi, feel free to reach out.
					</p>
				</div>
				<div className="flex flex-col md:flex-row md:justify-center">
					{/* Contact Form */}
					<div className="w-full md:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
						<h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
						{status && <p className="text-green-600 mb-4">{status}</p>}
						{error && <p className="text-red-600 mb-4">{error}</p>}
						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label
									htmlFor="name"
									className="block text-gray-700 font-semibold mb-2"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									required
								/>
							</div>
							<div className="mb-4">
								<label
									htmlFor="email"
									className="block text-gray-700 font-semibold mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Please enter a valid email"
									value={formData.email}
									onChange={handleChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									required
								/>
							</div>
							<div className="mb-4">
								<label
									htmlFor="message"
									className="block text-gray-700 font-semibold mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									rows="4"
									required
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								Send Message
							</button>
						</form>
					</div>

					{/* Contact Information */}
					<div className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg p-6 md:ml-8 mt-8 md:mt-0">
						<h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
						<p className="text-gray-700 mb-4">
							Feel free to reach out to me through the following methods:
						</p>
						<ul className="space-y-4">
							<li>
								<strong>Email:</strong>{" "}
								<a
									href="mailto:obi75309@gmail.com"
									className="text-blue-600 hover:underline"
								>
									obi75309@gmail.com
								</a>
							</li>
							<li>
								<strong>Phone:</strong>{" "}
								<a
									href="tel:+2347011128034"
									className="text-blue-600 hover:underline"
								>
									+2347011128034
								</a>
							</li>
							<li>
								<strong>LinkedIn:</strong>{" "}
								<a
									href="https://www.linkedin.com/in/obi-ross"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline"
								>
									www.linkedin.com/in/obi-ross
								</a>
							</li>
							<li>
								<strong>GitHub:</strong>{" "}
								<a
									href="https://github.com/yourusername"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline"
								>
									github.com/yourusername
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
