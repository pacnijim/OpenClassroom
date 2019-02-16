let lettres = ["A", "B", "C", "D", "E", "F"];

function displayInfos(reponse)
{
  let result = JSON.parse(reponse);
  let divElt = document.createElement("div");

  document.getElementById("contenu").innerHTML = "";

  divElt.appendChild(document.createElement("br"));
  divElt.appendChild(document.createElement("br"));

  if (result.length > 0)
  {
    for (let i = 0; i < result.length; i++)
    {
      let titreElt = document.createElement("h1");
      let defElt = document.createElement("p");

      titreElt.textContent = result[i].term;
      defElt.textContent = result[i].definition;

      divElt.appendChild(titreElt);
      divElt.appendChild(defElt);
    }
  }
  else
    divElt.appendChild(document.createTextNode("Aucun mot trouvé"));
  document.getElementById("contenu").appendChild(divElt);
}

function createLexique(lettres)
{
  let sommaireElt = document.createElement("span");

  for (let i = 0; i < lettres.length; i++)
  {
    let lettre = document.createElement("a");

    lettre.textContent = lettres[i];
    lettre.style.color = "blue";
    lettre.style.textDecoration = "underline";

    sommaireElt.appendChild(lettre);
    sommaireElt.appendChild(document.createTextNode(" | "));
    if (i + 1 === lettres.length)
      sommaireElt.appendChild(document.createTextNode("..."));

    lettre.addEventListener("click", function() {
      let url = "https://oc-jswebsrv.herokuapp.com/api/lexique/" + lettre.textContent;

      document.getElementById("contenu").innerHTML = "";

      ajaxGet(url, displayInfos);
    });
  }
  document.body.insertBefore(sommaireElt, document.getElementById("contenu"));
}
createLexique(lettres);
