import Sidebar from "./features/sidebar";
import { Switch, Route } from "react-router-dom";
import Payment from "./features/payment/payment";
import Button from "./components/Button";
import Input from "./components/Input";
import Setting from "./components/Setting";
import DishCard from "./components/DishCard";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <div className="grid grid-cols-5 w-full gap-4 w">
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
