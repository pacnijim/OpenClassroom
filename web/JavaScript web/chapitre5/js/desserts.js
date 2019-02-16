/*d'ajouter un nouveau dessert à la liste "desserts"
lors d'un clic sur le bouton "Ajouter un dessert".*/

let boutonElt = document.querySelector("button");

function addInList()
{
  let newLine = document.createElement("li");
  newLine.textContent = prompt("Nom du dessert:");
  document.getElementById("desserts").appendChild(newLine);
}
boutonElt.addEventListener("click", addInList);
