import React from "react";
import Image from "next/image";
import category1 from "../../../assets/images/homepage/bannercontainer/category1.jpg";
import category2 from "../../../assets/images/homepage/bannercontainer/category2.jpg";
import category3 from "../../../assets/images/homepage/bannercontainer/category3.jpg";

const SubBanner = () => {
  return (
    <div className="flex">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={category1} alt="Shoes" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={category2} alt="Shoes" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={category3} alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
