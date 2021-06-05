import React from "react";
import { Switch, Route } from "react-router-dom";

//featutes
import Sidebar from "./features/sidebar";

//pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex overflow-hidden relative w-full flex-1 h-screen">
      <header className="sticky top-0 h-full">
        <Sidebar />
      </header>
      <main className="flex-grow h-full overflow-auto overflow-x-hidden relative">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
