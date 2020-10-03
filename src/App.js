/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { Contact } from "./components/Contact";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "60rem", margin: "8rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path='/' component={Home} />
            <Route path='/add' component={AddUser} />
            <Route path='/contact/:id' component={Contact} />
            <Route path='/edit/:id' component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
