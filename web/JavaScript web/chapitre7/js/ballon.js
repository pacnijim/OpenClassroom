let startEvent = document.getElementById("demarrer");
let stopEvent = document.getElementById("arreter");
let spotEvent = document.getElementById("cadre");
let objetEvent = document.getElementById("ballon");
let interrupteur = true;
let vitesse = 1;
let widthObjet = parseFloat(getComputedStyle(objetEvent).width);
let animationId = null;

function deplacerObject()
{
  let xObjectEvent = parseFloat(getComputedStyle(objetEvent).left);
  let xMax = parseFloat(getComputedStyle(cadre).width);

  if (xObjectEvent + widthObjet <= xMax && interrupteur === true)
  {
    objetEvent.style.left = (xObjectEvent + vitesse) + "px";
    if (xObjectEvent + widthObjet === xMax)
      interrupteur = false;
    animationId = requestAnimationFrame(deplacerObject);
  }
  else
  {
    objetEvent.style.left = (xObjectEvent - vitesse) + "px";
    if (xObjectEvent <= xMax - xMax)
      interrupteur = true;
    animationId = requestAnimationFrame(deplacerObject);
  }
}

startEvent.addEventListener("click", function () {
  startEvent.disabled = "disabled";
  stopEvent.disabled = "";
  animationId = requestAnimationFrame(deplacerObject);
});

stopEvent.addEventListener("click", function () {
  startEvent.disabled = "";
  stopEvent.disabled = "disabled";
  cancelAnimationFrame(animationId);
})
