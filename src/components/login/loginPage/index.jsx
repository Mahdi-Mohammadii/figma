import React, { useState } from "react";
import styled from "styled-components";
import NavigationBar from "../../header/navigation";
import Users from "../../users";

const LoginPage = (props) => {
  const [remember, setRemember] = useState("false");
  const [token, setToken] = useState("");

  const Section = styled.section`
    display: flex;
  `;
  const Form = styled.form`
    width: min-content;
    margin: 8% auto;
    border: 1px solid #000;
    border-radius: 8px;
    padding: 20px;
  `;
  const Label = styled.label`
    color: #1f2e35;
  `;
  const Div = styled.div`
    margin-top: 10px;
  `;

  function rememberHandler() {
    setRemember(!remember);
  }

  function tokenGenerator(e) {
    e.preventDefault();
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let token = "";
    for (var i = 0; i <= 12; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      token += chars[randomNumber];
    }
    setToken(token);
    if (remember) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }
  }
  return (
    <>
      {localStorage.getItem("token") || sessionStorage.getItem("token") ? (
        <Users />
      ) : (
        <>
          <header className="header">
            <NavigationBar loginPage={true} />
          </header>
          <Section>
            <Form onSubmit={tokenGenerator}>
              <h3 className="Login__h3">Login</h3>
              <Div>
                <Label>Username</Label>
                <input type="text" id="username" name="username" />
              </Div>
              <Div>
                <Label>Password</Label>
                <input type="password" id="password" name="password" />
              </Div>
              <Div>
                <Label>Remember Me</Label>
                <input
                  type="checkbox"
                  checked={remember}
                  onClick={rememberHandler}
                />
              </Div>
              <Div>
                <input
                  type="Submit"
                  className="header__nav__button"
                  onClick={props.changeDirectionHandler}
                />
              </Div>
            </Form>
            <Form onSubmit={tokenGenerator}>
              <h3 className="Login__h3">Regester</h3>
              <Div>
                <Label>Username</Label>
                <input type="text" />
              </Div>
              <Div>
                <Label>Password</Label>
                <input type="password" id="password" name="password" />
              </Div>
              <Div>
                <Label>Confirm Password</Label>
                <input type="password" />
              </Div>
              <Div>
                <input type="Submit" className="header__nav__button" />
              </Div>
            </Form>
          </Section>
        </>
      )}
    </>
  );
};

export default LoginPage;
