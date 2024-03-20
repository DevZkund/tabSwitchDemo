import React from "react";
import { useState } from "react";

function CardContainer() {
  const [bool1, setBool1] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);

  const handleChangeState1 = (e) => {
    setBool1(!bool1);
  };
  const handleChangeState2 = (e) => {
    setBool2(!bool2);
    document.getElementById('div2').style.height="auto";
    document.getElementById('div2').style.width="20em";
  };
  const handleChangeState3 = (e) => {
    setBool3(!bool3);
    document.getElementById('div2').style.width="10em";
    document.getElementById('div2').style.height="15em";
  };

  return (
    <div className="container">
      <div
        id="cardId"
        className={`card ${bool1 ? "expandCard" : ""}`}
        value={0}
        onMouseEnter={handleChangeState1}
        onMouseLeave={handleChangeState1}
      >
        <h3>CARD</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam
          perspiciatis animi placeat porro eos illum in eius iste officia. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Debitis quam
          perspiciatis animi placeat porro eos illum in eius iste officia.
        </p>
      </div>
      <div id="div2" className={`card`} onMouseEnter={handleChangeState2} onMouseLeave={handleChangeState2}>
        <h3>CARD</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam
          perspiciatis animi placeat porro eos illum in eius iste officia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam
          perspiciatis animi placeat porro eos illum in eius iste officia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam
          perspiciatis animi placeat porro eos illum in eius iste officia.
        </p>
      </div>
      <div className={`card ${bool3 ? "expandCard" : ""}`} onMouseEnter={handleChangeState3} onMouseLeave={handleChangeState3}> 
        <h3>CARD</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam
          perspiciatis animi placeat porro eos illum in eius iste officia.
        </p>
      </div>
    </div>
  );
}

export default CardContainer;
