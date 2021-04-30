import React from "react";
import cn from "classnames";

const Button = ({ children, type }) => {
  return (
    <>
      <button
        className={cn(
          "flex justify-center items-center h-fit  py-3 px-7 rounded border-2 border-primary shadow transition duration-150 font-semibold",
          {
            "bg-primary hover:bg-base-dark-1 hover:text-primary":
              type === "primary",
          },
          { "bg-transparent hover:opacity-80 px-12": type === "secondary" }
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
