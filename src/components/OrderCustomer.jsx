import React, { useState, useEffect } from "react";
import Status from "../components/Status";

const OrderCustomer = ({ customer }) => {
  const [isCustomerOpen, setIsCustomerOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsCustomerOpen(!isCustomerOpen)}
        className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-5 items-center"
      >
        <div className="flex items-center">
          <div
            className={`${customer.bgColor} hidden sm:flex items-center justify-center p-0.5 rounded-full mr-2`}
          >
            {customer.icon}
          </div>
          <p>{customer.name}</p>
        </div>
        <div className="hidden sm:block">{customer.menu}</div>
        <div className="hidden sm:block">${customer.payment}</div>
        <div className="justify-self-end">
          <Status status={customer.status} />
        </div>
      </div>
      {isCustomerOpen && (
        <div className="flex flex-col w-full px-6 sm:hidden">
          <div className="flex justify-between mb-2">
            <span className="font-bold mr-2">Menu:</span>
            <span className="text-text-lighter">{customer.menu}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold mr-2">Payment:</span>
            <span className="text-text-lighter">${customer.payment}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCustomer;
