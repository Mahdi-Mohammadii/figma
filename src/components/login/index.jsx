import React from "react";
import LoginPage from "./loginPage";

const Login = (props) => {
  return <LoginPage changeDirectionHandler={props.changeDirectionHandler} />;
};

export default Login;
