/* Liste des questions à afficher. Une question est définie par
   son énoncé et sa réponse*/
let questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

function displayR1()
{
  document.getElementById("clic 1").style.display = "none";
  document.getElementById("rep 1").style.display = "block";
}

function displayR2()
{
  document.getElementById("clic 2").style.display = "none";
  document.getElementById("rep 2").style.display = "block";
}

function displayR3()
{
  document.getElementById("clic 3").style.display = "none";
  document.getElementById("rep 3").style.display = "block";
}

for (let i = 0; i < questions.length; i++)
{
  let quiz = document.createElement("div");
  let questionTitre = document.createElement("span");
  let questionText = document.createElement("span");
  let boutonElt = document.createElement("button");
  let reponse = document.createElement("span");
  let x;

  x = i + 1;

  questionTitre.textContent = `Question ${i + 1}:`;
  questionTitre.style.fontWeight = "bold";

  questionText.textContent = questions[i].enonce;
  questionText.style.fontStyle = "italic";

  boutonElt.textContent = "Afficher la réponse"
  boutonElt.id = `clic ${x}`;

  reponse.textContent = questions[i].reponse;
  reponse.id = `rep ${x}`;

  quiz.appendChild(questionTitre);
  quiz.appendChild(questionText);
  quiz.appendChild(document.createElement("br"));
  quiz.appendChild(boutonElt);
  quiz.appendChild(reponse);

  reponse.style.display = "none";

  document.getElementById("contenu").appendChild(quiz);
  document.getElementById("contenu").appendChild(document.createElement("br"));
  x += 1;
}

let boutonElt = document.getElementById("clic 1");
boutonElt.addEventListener("click", displayR1);

let boutonElt2 = document.getElementById("clic 2");
boutonElt2.addEventListener("click", displayR2);

let boutonElt3 = document.getElementById("clic 3");
boutonElt3.addEventListener("click", displayR3);
