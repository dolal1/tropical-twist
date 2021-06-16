import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    //runs only once when app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("User is >>> ", authUser);

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
