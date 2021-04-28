<<<<<<< HEAD
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
=======
import Sidebar from './features/sidebar'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
>>>>>>> dfa8c2f82d48cfb212b393b6a5f6b595c9f08304
    </div>
  )
}

export default App
