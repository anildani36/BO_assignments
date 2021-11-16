import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line
//import Cards from './Cards';
// import 'react-credit-card/es/styles-compiled.css'

function Card() {
  //  "const React = require('react')"
  const [number, setnumber] = useState("");
  const [name, setname] = useState("");
  const [Expiry, setexpiry] = useState("");
  const [Cvv, setCvv] = useState("");
  const [focus, setFocus] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="Apppp">
      <div className="font-loader">
        To start the 15 day free trial, please enter your billing information
        and click on Submit.
        <u>
          <b>Healthy-Diet</b>
        </u>{" "}
        Will take care of your health. There is no commitment, and you can
        cancel anytime with two clicks on your account page.
      </div>
      <card
        number={number}
        name={name}
        Expiry={Expiry}
        Cvv={Cvv}
        focused={focus}
      />

      <container className="con"></container>

      <input
        className="info"
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setname(e.target.value)}
        onFocus={(e) => setFocus(e.target.name)}
      />

      <input
        className="info"
        type="tel"
        name="number"
        placeholder="Card Number"
        value={number}
        onChange={(e) => setnumber(e.target.value)}
        onFocus={(e) => setFocus(e.target.name)}
      />

      <input
        className="info"
        type="text"
        name="expiry"
        placeholder="MM/YY Expiry"
        value={Expiry}
        onChange={(e) => setexpiry(e.target.value)}
        onFocus={(e) => setFocus(e.target.name)}
      />

      <input
        className="info"
        type="tel"
        name="Cvv"
        placeholder="Cvv"
        value={Cvv}
        onChange={(e) => setCvv(e.target.value)}
        onFocus={(e) => setFocus(e.target.name)}
      />
      <Link to="main">
        <div className="card_btn">
          <form onSubmit={handleSubmit}>
            <button onClick="{getData}" type="Submit" className="btnnn">
              Submit
            </button>
          </form>
        </div>
      </Link>
    </div>
  );
}

export default Card;
