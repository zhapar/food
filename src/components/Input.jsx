import React from "react";
import cn from "classnames";

const Input = ({ placeholder, icon }) => {
  return (
    <div className="relative">
      <input
        type="text"
        className={cn("bg-base-form p-3 rounded", {
          "pl-12": icon,
        })}
        placeholder={placeholder}
      />
      {icon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-2/4">
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
