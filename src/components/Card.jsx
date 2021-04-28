import React, { useState } from "react";

// ICONS
import { ReactComponent as CardIcon } from "../icons/card.svg";
import { ReactComponent as PayPalIcon } from "../icons/paypal.svg";

const Card = ({ icon, name }) => {
  const CardSelectHandler = () => {
    setCardSelect(name);
  };

  return (
    <div
      onClick={CardSelectHandler}
      className="mr-3 w-110 h-70 text-sm bg-base-dark-2 flex flex-col items-center justify-center rounded cursor-pointer transition duration-150 hover:bg-base-dark-1 border border-text-dark text-text-light font-medium"
    >
      <span className="mb-2">
        {icon === "paypal" ? <PayPalIcon /> : <CardIcon stroke="current" />}
      </span>
      <span>{name}</span>
    </div>
  );
};

export default Card;
