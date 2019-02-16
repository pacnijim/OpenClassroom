console.log(document.body.childNodes[5].childNodes[1]);

let titresElts = document.getElementsByTagName("h2");
console.log(titresElts[0]);
console.log(titresElts.length);

let merveillesElts = document.getElementsByClassName("merveilles");
console.log(merveillesElts.length);
for (let i = 0; i < merveillesElts.length; i++)
  console.log(merveillesElts[i]);
console.log(document.getElementById("nouvelles"));

console.log(document.getElementById("antiques").getElementsByClassName("existe").length);

console.log(document.querySelectorAll("p").length);
console.log(document.querySelectorAll("#contenu p").length);
console.log(document.querySelectorAll(".existe").length);

console.log(document.querySelectorAll("#antiques > .existe"));

console.log(document.querySelector("p"));
console.log(document.getElementById("contenu").innerHTML);
console.log(document.getElementById("contenu").textContent);

console.log(document.querySelector("a").getAttribute("href"));

console.log(document.querySelector("ul").id);
console.log(document.querySelector("a").href);

if (document.querySelector("a").hasAttribute("target"))
  console.log("Oui");
else
  console.log("Non");

let Classes = document.getElementById("antiques").classList;
console.log(Classes.length);
console.log(Classes[0]);

if (document.getElementById("antiques").classList.contains("merveille"))
  console.log("Oui");
else
  console.log("Non");
