import Image from "next/image";
import React from "react";

const SingleBanner = ({ details }) => {
	const { position, image, content } = details;
	const words = content.split(" ");

	return (
		<div className="relative">
			<Image src={image} alt="image" layout="responsive" />
			<div
				className={`absolute top-0 w-full h-full flex justify-${position} items-${
					position === "center" ? "start" : "center"
				} p-8 md:p-16`}
			>
				<div className={`text-${position}`}>
					<h3 className="text-3xl">
						{words[0] + " " + words[1]} <br />
						{words.slice(2)?.map((item) => item + " ")}
					</h3>

					<a className="uppercase text-lg pt-5 inline-block border-b border-black">
						Buy now
					</a>
				</div>
			</div>
		</div>
	);
};

export default SingleBanner;
