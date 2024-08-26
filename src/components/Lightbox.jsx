// src/components/Lightbox.js
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // For accessibility

const Lightbox = ({ isOpen, image, onClose, onNext, onPrev }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			className="modal"
			overlayClassName="overlay"
		>
			<button onClick={onClose} className="close-button">
				Close
			</button>
			<img src={image} alt="Full size" className="full-image" />
			<button onClick={onPrev} className="prev-button">
				Previous
			</button>
			<button onClick={onNext} className="next-button">
				Next
			</button>
		</Modal>
	);
};

export default Lightbox;
