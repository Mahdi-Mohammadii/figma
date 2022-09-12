import React from "react";
import { MENU } from "../../../Data/Menu";

const Menu = (props) => {
  return (
    <ul className="header__nav__ul">
      {MENU.map((item) => {
        return (
          <li key={item.id} id={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
