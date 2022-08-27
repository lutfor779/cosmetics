import Image from "next/image";
import React from "react";

const SingleBanner = ({ details }) => {
  const { image, content1, content2 } = details;

  return (
    <div className="justify-between text-center m-4">
      <Image src={image} alt="image" />
      <div className="text-center">
        <h4>{content1}</h4>
        <h4>{content2}</h4>
      </div>
    </div>
  );
};

export default SingleBanner;
