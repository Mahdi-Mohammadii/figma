import React from "react";
import Header from "./components/header";
import { MENU } from "./Data/Menu";
import "./style/index.sass";
import Login from "./components/login";
import Users from "./components/users";

function App() {
  function handleClick(index) {
    window.location.href = `/${index}`;
  }
  if (window.location.pathname === "/Login") {
    return <Login changeDirectionHandler={() => handleClick("Users")} />;
  } else if (localStorage.getItem("token") || sessionStorage.getItem("token")) {
    if (window.location.pathname === "/Users") {
      return <Users />;
    } else {
      return (
        <Header
          menu={MENU}
          changeDirectionHandler={() => handleClick("Users")}
        />
      );
    }
  } else {
    return (
      <Header menu={MENU} changeDirectionHandler={() => handleClick("Login")} />
    );
  }
}

export default App;
