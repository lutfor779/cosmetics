import React from "react";
import styles from "../../../../styles/Header.module.css";
import { menu } from "../../../../utility/manu";
import SubMenu from "./SubMenu";

const index = () => {
	return (
		<ul className="uppercase hidden lg:inline-block ">
			{menu.map((item) => (
				<li
					key={item.id}
					className={`inline-block py-7 ml-5 ${styles.showOption}`}
				>
					{item.title}
					{item.children && <SubMenu data={item.children} image={item.image} />}
				</li>
			))}
		</ul>
	);
};

export default index;
