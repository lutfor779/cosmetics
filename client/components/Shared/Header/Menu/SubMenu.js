import Image from "next/image";
import React from "react";
import styles from "../../../../styles/Header.module.css";

const SubMenu = ({ data, image }) => {
	return (
		<div className={`${styles.options} absolute left-0 top-12 z-20 w-full`}>
			<ul className="container m-auto bg-white shadow-lg p-5">
				<div className="flex justify-between gap-3">
					{data.map((item) => (
						<li key={item.title}>
							<span className="text-xl font-medium inline-block">
								{item.title}
							</span>

							<ul>
								{item.children.map((item) => (
									<li key={item} className="block mt-3">
										{item}
									</li>
								))}
							</ul>
						</li>
					))}

					<li className="hidden 2xl:block">
						<Image src={image} alt="image" />
					</li>
				</div>
			</ul>
		</div>
	);
};

export default SubMenu;
