import React from "react";
import useScroll from "../../../hooks/useScroll";
import styles from "../../../styles/Header.module.css";
import Logo from "./Logo";
import Menu from "./Menu";
import Tools from "./Tools";

const Header = () => {
	const { scrollHeight } = useScroll();

	return (
		<header
			className={`${styles.header}  
			translate-y-0
			${scrollHeight <= 150 ? "absolute" : "fixed bg-white shadow"} `}
		>
			<nav className="w-full 2xl:w-[85%] max-w-[1800px] m-auto p-5 ">
				<div className="flex justify-between items-center relative h-12">
					<Logo />
					<Menu />
					<Tools />
				</div>
			</nav>
		</header>
	);
};

export default Header;
