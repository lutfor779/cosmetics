import React from "react";
import PlusIcon from "../../Shared/PlusIcon";

const SingleItem = ({ image }) => {
	return (
		<div
			className="h-full lg:h-screen "
			style={{
				backgroundImage: `url(${image.src})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="container mx-auto p-5 h-full">
				<div className="flex items-center justify-center md:justify-start	h-full">
					<div className="pt-28 pb-12 text-center md:text-left">
						<h1 className="text-3xl md:text-5xl xl:text-7xl">
							New promotions! <br />
							Discounts up to 50% <br />
							in June.
						</h1>

						<div className="hidden md:block">
							<p className="my-9 text-xl">
								Lorem ipsum dolor sit amet consectetur <br />
								adipisicing elit. Autem, quasi!
							</p>

							<div className="uppercase text-xl flex gap-3 banner-link">
								<PlusIcon /> Discounts up to 50% in june
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleItem;
