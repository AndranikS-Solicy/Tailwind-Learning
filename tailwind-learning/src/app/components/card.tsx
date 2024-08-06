import React from "react";
import ImageComponent from "./image";
import { CardInfoProps } from "../../../utils/helpers/cardsFakeData";

const Card: React.FC<CardInfoProps> = ({ src, title, price, description }) => {
  return (
    <div className="flex flex-col max-w-[20rem] w-full h-[25rem] bg-white p-4 rounded-lg shadow-md items-center justify-start">
      <div className="flex items-center justify-center mb-4">
        <ImageComponent src={src} width={200} height={50} alt={title} />
      </div>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-lg font-semibold">{price.toFixed(2)}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
