//ajouter du html
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

//vider element
//document.getElementById("langages").innerHTML = "";

//modif text
document.querySelector("h1").textContent += " de programmation";

//def de l'attribut id du h1
document.querySelector("h1").setAttribute("id", "titre");
//ou
document.querySelector("h1").id = "titre";

//classes
var titreElt = document.querySelector("h1");
titreElt.classList.remove("debut");
titreElt.classList.add("titre");
console.log(titreElt);

//Ajout new element
var pythonElt = document.createElement("li");
pythonElt.id = "python";
pythonElt.textContent = "Python";
document.getElementById("langages").appendChild(pythonElt);

var rubyElt = document.createElement("li");
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby"));
document.getElementById("langages").appendChild(rubyElt);

var perlElt = document.createElement("li");
perlElt.id = "perl";
perlElt.textContent = "Perl";
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

/*insertAdjacentHTML("ou", "quoi");
  beforebegin-> av l'element;
  afterbegin-> a l'interieur de l'élément existant, av 1er enfant;
  beforeend-> a l'interieur de l'élément existant, ap le dernier enfant;
  afterend-> ap l'element;*/

document.getElementById("langages").insertAdjacentHTML("afterbegin", '<li id="javascript">JavaScript</li>');

//Remplacer noeud
var bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

//supprimer noeud
document.getElementById("langages").removeChild(document.getElementById("bash"));

//exercice
var listeElt = document.createElement("p");
var lienElt = document.createElement("a");
lienElt.href = "https://fr.wikipedia.org/wiki/Liste_de_langages_de_programmation";
lienElt.textContent = "liste";
listeElt.appendChild(document.createTextNode("En voici une "));
listeElt.appendChild(lienElt);
listeElt.appendChild(document.createTextNode(" plus complète."));
document.getElementById("contenu").appendChild(listeElt)
