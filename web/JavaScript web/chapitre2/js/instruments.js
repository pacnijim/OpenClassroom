//le nombre total de liens dans la page web ;

//la cible du premier et du dernier lien.
//infosLiens

function infosLiens()
{
  console.log(document.querySelectorAll("a").length);
  console.log(document.querySelector("a").getAttribute("href"));
  let last = document.querySelectorAll("a");
  console.log(last[last.length - 1].getAttribute("href"));

}
infosLiens();

function possede(nom, type)
{
  if (document.getElementById(nom))
  {
    if (document.getElementById(nom).classList.contains(type))
      console.log(true);
      else
      console.log(false);
  }
  else
    console.log(`Aucun élément ne pôssède l'identifiant ${nom}`);
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
