import { MdPadding } from "react-icons/md";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#003366", // Navy Blue
				secondary: "#F4F4F4", // Light Gray
				accent: "#4682B4", // Steel Blue
				highlight: "#6B8E23", // Muted Green
				padding: "0.75em",
			},
		},
	},
	plugins: [],
};
