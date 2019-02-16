// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"



for (let i = 0; i < mots.length; i++)
{
  if (i === 0)
    var dico = document.createElement("dl");
  var elt = document.createElement("dt");
  var nom = document.createElement("strong");
  nom.textContent = mots[i].terme;
  elt.appendChild(nom);
  dico.appendChild(elt);
  var def = document.createElement("dd");
  def.textContent = mots[i].definition;
  dico.appendChild(def);
}
document.getElementById("contenu").appendChild(dico);
