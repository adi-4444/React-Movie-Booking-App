import React from "react";
import "./slider.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import img2 from "../../../assets/img2.avif";
import img3 from "../../../assets/img3.avif";
import img4 from "../../../assets/img4.avif";
import img5 from "../../../assets/img5.avif";

const Slider = () => {
	return (
		<div>
			<CCarousel controls indicators>
				<CCarouselItem>
					<CImage
						className='d-block w-100'
						src={img2}
						alt='slide 2'
					/>
				</CCarouselItem>
				<CCarouselItem>
					<CImage
						className='d-block w-100'
						src={img3}
						alt='slide 3'
					/>
				</CCarouselItem>
				<CCarouselItem>
					<CImage
						className='d-block w-100'
						src={img4}
						alt='slide 4'
					/>
				</CCarouselItem>
				<CCarouselItem>
					<CImage
						className='d-block w-100'
						src={img5}
						alt='slide 4'
					/>
				</CCarouselItem>
			</CCarousel>
		</div>
	);
};

export default Slider;
