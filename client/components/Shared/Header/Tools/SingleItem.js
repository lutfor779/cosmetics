import React from "react";
import styles from "../../../../styles/Header.module.css";

const SingleItem = ({ IconName, number, hoverData }) => {
	return (
		<li className={`${styles.showOption} inline-block relative`}>
			<IconName className="w-12 h-12 p-3 rounded-full bg-white shadow hover:bg-[#f85457] hover:text-white transition-all" />

			{/* DISPLAY ON HOVER */}
			{hoverData && (
				<div
					className={`${styles.options} w-64 bg-white absolute right-0 z-20 `}
				>
					<ul className="p-5">
						{hoverData.map((item) => (
							<li key={item} className="pb-1 mb-2 border-b">
								{item}
							</li>
						))}
						<li>LOGIN</li>
					</ul>
				</div>
			)}

			{/* BADGE */}
			{number && (
				<div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-[#f85457] rounded-full border border-white">
					{number}
				</div>
			)}
		</li>
	);
};

export default SingleItem;
