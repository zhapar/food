import React from "react";

//Icons
import { ReactComponent as SecurityIcon } from "../icons/security.svg";
import { ReactComponent as AppearanceIcon } from "../icons/appearance.svg";

const Setting = ({ text, caption }) => {
  return (
    <div className="group overflow-hidden relative w-full flex px-7 py-6 h-fit hover:bg-primaryOpacity transition duration-100">
      <div className="mr-3">
        <SecurityIcon
          width="18"
          height="18"
          className="group-hover:text-primary text-sm fill-current"
        />
      </div>
      <div>
        <p className="group-hover:text-primary text-base">{text}</p>
        <p className="text-text-gray text-sm">{caption}</p>
      </div>
      <span className="w-1 h-8 bg-primary absolute -right-2 group-hover:-translate-x-2 top-2/4 transform -translate-y-2/4 rounded transition duration-300"></span>
    </div>
  );
};

export default Setting;
