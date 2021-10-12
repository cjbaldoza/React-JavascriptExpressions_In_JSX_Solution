import React from "react";
import ReactDOM from "react-dom";

const dynamicImg = "https://picsum.photos/200";

let greeting = "Good morning";

const fName = "Christopher";
const lName = "Baldoza";

const customStyle = {
  color: ""
};

//const currentDate = new Date(2021, 1, 1, 11);
const currentDate = new Date();
const currentTime = currentDate.getHours();
// if (12 <= currentTime < 18) {
//   greeting = "Good Afternoon";
//   customStyle.color = "green";
// } else if (18 <= currentTime < 0) {
//   greeting = "Good Evening";
//   customStyle.color = "blue";
// } else if (0 <= currentTime <= 12) {
//   greeting = "Good Morning";
//   customStyle.color = "red";
// }

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "green";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "blue";
} else {
  greeting = "Good Night";
  customStyle.color = "red";
}

const copyRightYear = new Date().getFullYear();
console.log(copyRightYear);

ReactDOM.render(
  <div>
    <h1 className="greeting-heading" style={customStyle}>
      {greeting} Visitor! Thanks for visiting my site.
    </h1>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Ginisang Mongo</li>
      <li>Halabos na Hipon</li>
      <li>Pancit Bihon</li>
    </ul>
  </div>,
  document.getElementById("header")
);

ReactDOM.render(
  <div>
    <img
      className="food-img"
      alt="Ginisang Mongo"
      src="http://1.bp.blogspot.com/-K6ixGtpDJO0/T3funOj3ScI/AAAAAAAAAho/Q8dP8Garx_c/s1600/MONGO%2BSOUP.jpg"
    />
    <img
      className="food-img"
      alt="Halabos na Hipon"
      src="https://2.bp.blogspot.com/-aouSjQyvjD0/W7bNR3SN8CI/AAAAAAAAMjA/YT_WB3o4dpoSkVCaTPhhDcAf-UnDjmbLACLcBGAs/w1200-h630-p-k-no-nu/20170909_125442a.jpg"
    />
    <img
      className="food-img"
      alt="Pancit Bihon"
      src="https://www.whats4eats.com/files/pastas-pancit-bihon-flickr-dbgg1979-3852511838-4x3.jpg"
    />
  </div>,
  document.getElementById("body")
);

ReactDOM.render(
  <div>
    <img src={dynamicImg + "?grayscale"} alt="Random" />
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
