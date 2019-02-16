let formElt = document.querySelector("form");

formElt.addEventListener("submit", function (event) {
  event.preventDefault();
  let evaluationElt = {
    pseudo: formElt.elements.pseudo.value,
    evaluation: formElt.elements.note.value,
    message: formElt.elements.commentaire.value
  };

  ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", evaluationElt, function (reponse) {
      console.log("Evaluation " + JSON.stringify(evaluationElt) + " a été envoyé au serveur");
      document.getElementById("msg").appendChild(document.createElement("br"));
      document.getElementById("msg").appendChild(document.createTextNode("Fomulaire envoyer"));
    },
    true
  );
});
