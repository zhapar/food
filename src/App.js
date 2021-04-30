import Sidebar from "./features/sidebar";
import { Switch, Route } from "react-router-dom";
import Payment from "./features/payment/payment";
import Button from "./components/Button";
import Input from "./components/Input";
import Setting from "./components/Setting";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
    </div>
  );
}

export default App;
