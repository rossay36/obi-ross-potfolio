import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper core styles

// Import Swiper modules (optional based on your needs)
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import your slice components
import SliceComponentOne from "../components/sliceComponents/SliceComponentOne";
import SliceComponentTwo from "../components/sliceComponents/SliceComponentTwo";
import SliceComponentThree from "../components/sliceComponents/SliceComponentThree";

const Home = () => {
	return (
		<div>
			<Swiper
				modules={[Pagination, Navigation, Autoplay]} // Register Swiper modules if needed
				spaceBetween={10} // Space between slides
				centeredSlides={true}
				autoplay={{
					delay: 5000, // Delay between slides in autoplay
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				speed={1000} // Duration of the slide transition in milliseconds
				className="height" // Adjust class name as needed
			>
				<SwiperSlide>
					<SliceComponentOne />
				</SwiperSlide>
				<SwiperSlide>
					<SliceComponentTwo />
				</SwiperSlide>
				<SwiperSlide>
					<SliceComponentThree />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Home;
