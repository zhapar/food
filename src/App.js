import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";

import { ReactComponent as SearchIcon } from "./icons/search.svg";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <Button type="primary">Confirm Payment</Button> */}
      <Input placeholder="Search" icon={<SearchIcon />} />
    </div>
  );
}

export default App;
