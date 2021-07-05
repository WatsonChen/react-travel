import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, DetailPage, SignIn, Register } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/detail/:touristId" component={DetailPage} />
          <Route render={() => <h1>404 Page Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
