import React from "react";
import cn from "classnames";

const Status = ({ status }) => {
  return (
    <span
      className={cn("py-1 px-3 rounded-full text-white", {
        "bg-accent-green": status === "Completed",
        "bg-accent-red": status === "Pending",
        "bg-secondary": status === "Preparing",
      })}
    >
      {status}
    </span>
  );
};

export default Status;
