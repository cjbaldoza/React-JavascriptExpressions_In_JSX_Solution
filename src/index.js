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

const fName = "Christopher";
const lName = "Baldoza";

const copyRightYear = new Date().getFullYear();
console.log(copyRightYear);

ReactDOM.render(
  <div>
    <p>
      Created by {fName} {lName}.
    </p>
    <p>Copyright {copyRightYear}.</p>
  </div>,
  document.getElementById("root")
);
