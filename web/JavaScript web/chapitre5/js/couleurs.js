/*modifier la couleur de fond des trois éléments div
lorsque l'utilisateur appuie sur la touche R (rouge),
J (jaune), V (vert) ou B (blanc).
On ne fera pas de distinction entre minuscules et majuscules.*/

const para = document.querySelectorAll("div");
function changeBackground(color){
  for (let i = 0; i < para.length; i++)
    para[i].style.backgroundColor = color;
}
function chosenColor(e) {
  switch (String.fromCharCode(e.charCode)) {
    case "r":
      changeBackground("red");
      break;
    case "j":
      changeBackground("yellow");
      break;
    case "v":
      changeBackground("green");
      break;
    case "b":
      changeBackground("white");
      break;
    default:
  }
}
document.addEventListener("keypress", chosenColor);
