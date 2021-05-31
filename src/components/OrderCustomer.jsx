import React from "react";
import Status from "../components/Status";

const OrderCustomer = ({ customer }) => {
  return (
    <div className="p-6 grid grid-cols-4 gap-5 items-center">
      <div className="flex items-center">
        <div
          className={`${customer.bgColor} flex items-center justify-center p-0.5 rounded-full mr-2`}
        >
          {customer.icon}
        </div>
        <p>{customer.name}</p>
      </div>
      <div>{customer.menu}</div>
      <div>${customer.payment}</div>
      <div>
        <Status status={customer.status} />
      </div>
    </div>
  );
};

export default OrderCustomer;
