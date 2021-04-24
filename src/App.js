import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import { useHistory } from "react-router";
import LoginPage from "./components/LoginPage";
import ChatPage from "./components/ChatPage";

const App = () => {
  const history = useHistory();
  let [user, setUser] = useState(null);

  let handleSubmit = (user) => {
    setUser(user);
    if (user) history.push("/chat");
  };

  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login">
          <LoginPage setUser={handleSubmit} />
        </Route>
        <Route path="/chat">
          {user ? <ChatPage user={user} /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
