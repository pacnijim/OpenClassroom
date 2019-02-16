// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}
function boutonFamille()
{
  for (let i = 0; i < maisons.length; i++)
  {
    let optionElt = document.createElement("option");

    optionElt.value = maisons[i].code;
    optionElt.textContent = maisons[i].nom;
    document.getElementById("maison").appendChild(optionElt);
  }
}

function displayPersos()
{
  let form = document.querySelector("form");

  form.addEventListener("change", function (e) {
    let result = [];

    result = getPersonnages(form.elements.maison.value);
    document.getElementById("persos").innerHTML = "";
    for (let i = 0; i < result.length; i++)
    {
      let personnages = document.createElement("li");

      personnages.textContent = result[i];
      document.getElementById("persos").appendChild(personnages);
    }
  });
}

boutonFamille();
displayPersos();
/*let starkOpt = document.createElement("option");
let lannisterOpt = document.createElement("option");
let baratheonOpt = document.createElement("option");
let targaryenOpt = document.createElement("option");


document.getElementById("maison").appendChild(starkOpt);
document.getElementById("maison").appendChild(lannisterOpt);
document.getElementById("maison").appendChild(baratheonOpt);
document.getElementById("maison").appendChild(targaryenOpt);
*/
