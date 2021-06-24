import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import "./App.css";

const promise = loadStripe(
  "pk_test_51HT2vmH3QpMNxKLRNPHmbN8ALUNL7JZnmi8IbnxiUnSlaVc6A74IFj7V1a1ufjm49FpSjZieWeanaLCIipIhk7zq009DbnWQsQ"
);

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    //runs only once when app component loads
    auth.onAuthStateChanged((authUser) => {
      // console.log("User is >>> ", authUser);

      if (authUser) {
        //user authenticated
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user unauthenticated
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    }); // eslint-disable-next-line
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
