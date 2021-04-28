import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";

import { ReactComponent as SearchIcon } from "./icons/search.svg";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <Button type="primary">Confirm Payment</Button> */}
      {/* <Input placeholder="Search" icon={<SearchIcon />} /> */}
      <Card icon="card" name="Credit Card" />
      <Card icon="paypal" name="PayPal" />
    </div>
  );
}

export default App;
