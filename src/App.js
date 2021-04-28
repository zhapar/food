import Sidebar from "./features/sidebar";
import { Switch, Route } from "react-router-dom";
import Payment from "./features/payment/payment";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <Payment />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
