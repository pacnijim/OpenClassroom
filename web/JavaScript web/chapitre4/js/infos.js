let styleElt = getComputedStyle(document.getElementById("contenu"));
let listeElt = document.createElement("ul");
let longueurElt = document.createElement("li");
let hauteurElt = document.createElement("li");

document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));

longueurElt.textContent = `Longueur : ${styleElt.width}`;
hauteurElt.textContent = `Hauteur : ${styleElt.height}`;

listeElt.appendChild(hauteurElt);
listeElt.appendChild(longueurElt);

document.getElementById("infos").appendChild(listeElt);
