import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/online-fashion-store-react" component={HomePage} />
        <Route path="/online-fashion-store-react/shop" component={ShopPage} />
        <Route
          path="/online-fashion-store-react/signin"
          component={SignInAndSignOut}
        />
      </Switch>
    </div>
  );
}

export default App;
