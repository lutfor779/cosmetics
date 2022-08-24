import { useEffect, useState } from "react";

const useScroll = () => {
	const [scrolled, setScrolled] = useState(false);
	const [scrollHeight, setScrollHeight] = useState(0);

	useEffect(() => {
		window.onscroll = function () {
			if (document.documentElement.scrollTop === 0) {
				setScrolled(false);
			} else {
				setScrollHeight(document.documentElement.scrollTop);
				setScrolled(true);
			}
		};
	});
	return { scrolled, scrollHeight };
};

export default useScroll;
