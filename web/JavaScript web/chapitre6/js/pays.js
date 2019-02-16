// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

let saisiElt = document.querySelector("input");
let suggestionsElt = document.getElementById("suggestions");

console.log(suggestionsElt);
function displayList(saisi)
{
  document.getElementById("suggestions").innerHTML = "";
  for (let i = 0; i < listePays.length; i++)
  {
    if (listePays[i].indexOf(saisi) !== -1)
    {
      let paysElt = document.createElement("div");
      paysElt.classList.add("suggestion")
      paysElt.textContent = listePays[i];
      suggestionsElt.appendChild(paysElt);
    }
  }
  suggestionsElt.addEventListener("click", function (e) {
    saisiElt.value = e.target.textContent;
    suggestionsElt.innerHTML = "";
  });
}

saisiElt.addEventListener("input", function () {
  displayList(saisiElt.value);
});

suggestionsElt.style.left = "215px";

/*
var paysElt = document.querySelector("input");
var suggestionsElt = document.getElementById("suggestions");

// Gère le changement de valeur saisie
paysElt.addEventListener("input", function () {
    suggestionsElt.innerHTML = ""; // Vidage de la liste des suggestions
    listePays.forEach(function (pays) {
    // Si valeur en cours de saisie correspond au début du pays
    if (pays.indexOf(paysElt.value) === 0)
    {
      var suggestionElt = document.createElement("div");
      suggestionElt.classList.add("suggestion");
      suggestionElt.textContent = pays;
      // Gère le lic sur une suggestion
      suggestionElt.addEventListener("click", function (e) {
      // Remplacement de la valeur saisie par la suggestion
      paysElt.value = e.target.textContent;
      // Vidage de la liste des suggestions
      suggestionsElt.innerHTML = "";
      });
      suggestionsElt.appendChild(suggestionElt);
    }
  });
});
*/
