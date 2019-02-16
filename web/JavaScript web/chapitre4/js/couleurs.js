let choix = 0;
while (choix === 0)
  choix = Number(prompt("les noms des couleurs (1), ou les valeur rgb (2)?"));
if (choix === 1)
{
  let colorTitreName = prompt("Donnez le nom de la couleur en anglais please!");
  let colorParaName = prompt("Puis la couleur de fond des paragraphes");

  let Titre = document.querySelectorAll("h1");
  for (let i = 0; i < Titre.length; i++)
    Titre[i].style.color = colorTitreName;

  let Para = document.querySelectorAll("div");
  for (let j = 0; j < Para.length; j++)
    Para[j].style.backgroundColor = colorParaName;
}
/*else if (choix === 2)
{
  let colorH1 = [];
  let coloPara2 = [];

  for (let x = 0; x < 3; x++)
    colorH1[x] = Number(prompt(`Couleur ${x + 1}, 1(rouge), 2(vert), 3(bleu).`));
  let Titre2 = document.querySelectorAll("h1");
  for (let y = 0; y < Titre2.length; y++)
    Titre2[y].style.color = rgb(colorH1[1], colorH1[2], colorH1[3]);

  for (let z = 0; x < 3; z++)
    coloPara2[z] = Number(prompt(`Couleur ${z + 1}, 1(rouge), 2(vert), 3(bleu).`));
  let Param2 = document.querySelectorAll("div");
  for (z2 = 0; z2 < Param2.length; z2++)
    Param2[z2].style.backgroundColor = rgb(colorH1[1], colorH1[2], colorH1[3]);
}*/
