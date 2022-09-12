import React, { useState } from "react";
import Menu from "../menu";
import "../../../style/font/font-awesome-4.7.0/css/font-awesome.css";

const NavigationBar = (props) => {
  function logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  }
  return (
    <>
      <nav className="header__nav">
        <img src="/assets/image/logo.svg" alt="Logo" />
        <Menu menu={props.menu} />
        {localStorage.getItem("token") || sessionStorage.getItem("token") ? (
          window.location.pathname === "/Users" ? (
            <button className="header__nav__button" onClick={logout}>
              Logout
            </button>
          ) : (
            <button
              style={props.loginPage ? { display: "none" } : null}
              className="header__nav__button"
              onClick={props.changeDirectionHandler}
            >
              Panel
            </button>
          )
        ) : (
          <button
            style={props.loginPage ? { display: "none" } : null}
            className="header__nav__button"
            onClick={props.changeDirectionHandler}
          >
            Login
          </button>
        )}
        <i className="fa fa-bars fa-2x header__nav__i"></i>
      </nav>
    </>
  );
};
export default NavigationBar;
