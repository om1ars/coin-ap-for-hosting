import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsnycCoins, getAllCoins } from "./redux/reducers/coinsSlice";
import Settings from "./Pages/Settings";
import Sidebar from "./components/Sidebar";
import Dashboard from "./coinsPage/Dashboard";
import SettingsSettings from "./coinsPage/SettingsSettings";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  const currency = "USD";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsnycCoins(currency));
  }, [dispatch]);

  const coins = useSelector((state) => state.allCoins.coins);

  return (
    <>
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <div>
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/settings" component={Settings} exact />
              <Route path="/coins/:id" component={CoinPage} exact />
              <Route path="/profile" component={CoinPage} exact />
            </Switch>
          </div>
  
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
