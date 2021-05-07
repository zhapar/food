import React from "react";
import { Link } from "react-router-dom";

import DishImg from "../images/dish-1.png";

const DishCard = () => {
  return (
    <div className="h-fit relative flex flex-col items-center justify-center group">
      <img src={DishImg} alt="" />
      <Link
        to=""
        className="w-36 text-center py-4 hover:text-primary transition duration-100"
      >
        Spicy seasoned seafood noodles
      </Link>
      <p className="mb-1">$2.29</p>
      <p className="text-text-gray mb-4">20 Bowls available</p>
      <div className="rounded w-full h-4/5 -z-1 absolute left-0 bottom-0 bg-base-dark-2"></div>
    </div>
  );
};

export default DishCard;
