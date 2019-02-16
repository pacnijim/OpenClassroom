// Liste des journaux
var journaux = [
  {
    nom: "le monde",
    url: "http://lemonde.fr"
  },
  {
    nom: "le figaro",
    url: "http://lefigaro.fr"
  },
  {
    nom: "liberation",
    url: "http://liberation.fr"
  }
];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

/*http://lemonde.fr
  http://lefigaro.fr
  http://liberation.fr*/

for (let i = 0; i < journaux.length; i++)
{
  var lienUrl = document.createElement("a");
  lienUrl.href = journaux[i].url;
  lienUrl.textContent = journaux[i].nom;
  document.getElementById("contenu").appendChild(lienUrl);
  document.getElementById("contenu").appendChild(document.createElement("br"));
}
