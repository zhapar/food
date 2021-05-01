import React, { useState } from "react";
import Card from "../../components/Card";

const Payment = () => {
  const [active, setActive] = useState("card");
  return (
    <div>
      {["card", "paypal"].map((type) => (
        <Card
          type={type}
          active={type === active}
          onClick={() => setActive(type)}
        />
      ))}
    </div>
  );
};

export default Payment;
