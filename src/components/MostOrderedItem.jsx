import React from "react";

const MostOrderedItem = ({ dish }) => {
  return (
    <div className="flex mt-6">
      <div className="w-16 mr-4">
        <img src={dish.image} alt="Img" />
      </div>
      <div>
        <p className="text-text-lighter text-base">{dish.name}</p>
        <span className="text-sm text-text-light">
          {dish.orders} dishes ordered
        </span>
      </div>
    </div>
  );
};

export default MostOrderedItem;
