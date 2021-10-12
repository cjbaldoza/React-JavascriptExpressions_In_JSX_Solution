//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const dynamicImg = "https://picsum.photos/200";

const fName = "Christopher";
const lName = "Baldoza";

const copyRightYear = new Date().getFullYear();
console.log(copyRightYear);

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Mongo</li>
      <li>Halabos na Hipon</li>
      <li>Pancit Canton</li>
    </ul>
  </div>,
  document.getElementById("header")
);

ReactDOM.render(
  <div>
    <img
      className="food-img"
      src="http://1.bp.blogspot.com/-K6ixGtpDJO0/T3funOj3ScI/AAAAAAAAAho/Q8dP8Garx_c/s1600/MONGO%2BSOUP.jpg"
    />
    <img
      className="food-img"
      src="https://2.bp.blogspot.com/-aouSjQyvjD0/W7bNR3SN8CI/AAAAAAAAMjA/YT_WB3o4dpoSkVCaTPhhDcAf-UnDjmbLACLcBGAs/w1200-h630-p-k-no-nu/20170909_125442a.jpg"
    />
    <img
      className="food-img"
      src="https://www.whats4eats.com/files/pastas-pancit-bihon-flickr-dbgg1979-3852511838-4x3.jpg"
    />
  </div>,
  document.getElementById("body")
);

ReactDOM.render(
  <div>
    <img src={dynamicImg} />
  </div>,
  document.getElementById("carousel")
);

ReactDOM.render(
  <div>
    <p>
      Created by {fName} {lName}.
    </p>
    <p>Copyright {copyRightYear}.</p>
  </div>,
  document.getElementById("footer")
);
