import Image from "next/image";
import React, { useState } from "react";
import PlusIcon from "../../Shared/PlusIcon";

const Treatment = ({ content }) => {
	const { image, content1, content2, bgImage, details } = content;

	const [hover, setHover] = useState(false);

	const hoverStyle = {
		backgroundImage: `url(${bgImage.src})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<div
			className={`justify-star border relative`}
			onMouseEnter={() => {
				setHover(true);
			}}
			onMouseLeave={() => {
				setHover(false);
			}}
		>
			<div className="h-full" style={hover ? hoverStyle : null}>
				<div className={`p-12  ${hover ? "hidden" : "block"}`}>
					<div className="bg-white">
						<Image src={image} alt="image" />

						<div className="text-xl font-medium mt-3">
							<h4>{content1}</h4>
							<h4>{content2}</h4>
						</div>
					</div>
				</div>

				{/* onHover */}
				<div
					className={`h-full bg-[#ffffffbb] p-12 ${hover ? "block" : "hidden"}`}
				>
					<div className="h-full flex flex-col justify-between relative">
						<div className="text-xl font-medium">
							<h4>{content1}</h4>
							<h4>{content2}</h4>
						</div>
						<p>{details}</p>

						{/* icon */}
						<div className="absolute -top-7 right-0">
							<PlusIcon />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Treatment;
