import React from "react";
import { Link } from "react-router-dom";

const MissingPage = () => {
	return (
		<div className="flex items-center gap-4 justify-center height max-w-full">
			<span className="">Page Not Found</span>
			<Link to="/" className="">
				<span className="text-blue-200 border-b">Back To Home Page</span>
			</Link>
		</div>
	);
};

export default MissingPage;
