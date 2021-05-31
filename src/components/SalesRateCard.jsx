import React from "react";

//icnos

import { ReactComponent as ArrowUp } from "../icons/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../icons/arrow-down.svg";

const SalesRateCard = ({ rate }) => {
  return (
    <div className="bg-base-dark-2 p-4 rounded">
      <div className="flex items-center mb-3">
        <span className="p-1 bg-base-dark-1 rounded mr-4">{rate.icon}</span>
        {rate.precentage > 0 ? (
          <span className="flex text-accent-green text-base">
            +{rate.precentage}
            <span className="bg-accent-green flex items-center justify-center rounded-full p-1 ml-2">
              <ArrowUp
                className="fill-current text-white"
                style={{ width: "15px", height: "15px" }}
              />
            </span>
          </span>
        ) : (
          <span className="flex text-accent-red text-base">
            {rate.precentage}
            <span className="bg-accent-red flex items-center justify-center rounded-full p-1 ml-2">
              <ArrowDown
                className="fill-current text-white"
                style={{ width: "15px", height: "15px" }}
              />
            </span>
          </span>
        )}
      </div>
      <h1>${rate.price}</h1>
      <p className="mt-2 text-text-light text-base">{rate.category}</p>
    </div>
  );
};

export default SalesRateCard;
