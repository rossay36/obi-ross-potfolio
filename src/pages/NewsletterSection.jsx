import React, { useState } from "react";
import axios from "axios";

const NewsletterSection = () => {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("");
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus(""); // Clear previous status
		setError(""); // Clear previous error

		try {
			const res = await axios.post(
				"https://ross-portfolio.onrender.com/letter",
				{ email }
			);

			// Handle success response
			if (res.status === 201) {
				setStatus(res.data.message); // Use the message from the server
				setEmail(""); // Clear form fields
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
		<div className="container mx-auto px-4 mt-8">
			<div className="text-center">
				<p className="font-bold mb-2">Subscribe to My Newsletter.</p>
				{status && <p className="text-green-600 mb-4">{status}</p>}
				{error && <p className="text-red-600 mb-4">{error}</p>}
				<form
					onSubmit={handleSubmit}
					className="flex flex-col sm:flex-row justify-center"
				>
					<input
						type="email"
						value={email}
						onChange={handleChange}
						placeholder="Your email address"
						required
						className="p-2 border border-gray-300 rounded-l-md mb-2 sm:mb-0 sm:mr-2"
					/>
					<button
						type="submit"
						className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-800"
					>
						Subscribe
					</button>
				</form>
				{status && <p className="mt-4">{status}</p>}
			</div>
		</div>
	);
};

export default NewsletterSection;
