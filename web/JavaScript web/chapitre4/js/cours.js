let primoElt = document.querySelector("p");
primoElt.style.color = "blue";
primoElt.style.margin = "50px";

primoElt.style.fontFamily = "Arial";
primoElt.style.backgroundColor = "white";

let paraElts = document.getElementsByTagName("p");
for (let i = 0; i < paraElts.length; i++)
  console.log(paraElts[i].style.color);

// fonction getComputedStyle
let stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle);
console.log(stylePara.color);
