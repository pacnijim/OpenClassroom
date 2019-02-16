function displayProfil(reponse)
{
  let profilInfos = JSON.parse(reponse);
  let infoProfil = document.createElement("div");
  let photoProfil = document.createElement("img");
  let nameProfil = document.createElement("h1");
  let urlsite = document.createElement("a");

  document.getElementById("contenu").innerHTML = "";

  photoProfil.src = profilInfos.avatar_url;
  photoProfil.id = "photoProfil";

  nameProfil.textContent = profilInfos.name;
  nameProfil.id = "nameProfil";

  urlsite.textContent = profilInfos.blog;
  urlsite.href = profilInfos.blog;
  urlsite.id = "lienBlog";

  infoProfil.appendChild(photoProfil);
  infoProfil.appendChild(nameProfil);
  infoProfil.appendChild(urlsite);

  document.getElementById("contenu").appendChild(infoProfil);
}
//brendaneich douglascrockford vjeux
function searchProfil(event)
{
  event.preventDefault();
  let urlBase = "https://api.github.com/users/";
  let apiUrl = `${urlBase}${inputElt.value}`;

  ajaxGet(apiUrl, displayProfil);
}

let formElt = document.createElement("form");
let inputElt = document.createElement("input");
let spotElt = document.createElement("button");

inputElt.setAttribute("placeholder", "Entrez le nom complet");
inputElt.setAttribute("required", "required");

spotElt.textContent = "Rechercher";

formElt.appendChild(inputElt);
formElt.appendChild(spotElt);

document.getElementById("formulaire").appendChild(formElt);

formElt.addEventListener("submit", searchProfil);
