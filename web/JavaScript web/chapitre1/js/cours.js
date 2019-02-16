let h = document.head;
console.log(h);
let b = document.body;
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE)
  console.log("Body est un noeud élément");
else
  console.log("Body est un noeud textuel");

if (document.body.childNodes[0] === document.ELEMENT_NODE)
  console.log(`" " "est un noeud élément`);
else
  console.log(`" " est un noeud textuel`);

if (document.body.childNodes[1] === document.ELEMENT_NODE)
  console.log("h1 est un noeud élément");
else
  console.log("h1 est un noeud textuel");

console.log(document.body.childNodes[1]);

for (let i = 0; i < document.body.childNodes.length; i++)
  console.log(document.body.childNodes[i]);

let h1 = document.body.childNodes[1];
console.log(h1.parentNode);

console.log(document.parentNode);
