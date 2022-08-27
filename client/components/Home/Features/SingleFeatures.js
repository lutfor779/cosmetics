import Image from "next/image";
import React from "react";

const SingleBanner = ({ details }) => {
  const { image, content1, content2 } = details;
  //const words = content1, content2;

  return (
    <div className="justify-end">
      <Image src={image} alt="image" />
      <h4>{content1}</h4>
      <h4>{content2}</h4>
    </div>
  );
};

export default SingleBanner;
