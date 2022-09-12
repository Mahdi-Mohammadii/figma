import React from "react";
import "./style.css";

const Card = (props) => {
  return (
      <div class="card">
        <div class="imgBx">
          <img
            src={props.img}
            alt={props.login}
          />
        </div>
        <div class="details">
          <h2>
            {props.login}
            <br />
            <span>MORE DETAILS</span>
          </h2>
        </div>
      </div>
  );
};

export default Card;
