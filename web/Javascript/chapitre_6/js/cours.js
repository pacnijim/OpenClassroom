console.log("Test1");

console.log("Pacis test 18 mots".length);
console.log("Pacis 7".length);

console.log("Test2");

var nom = "Kingdom";
var lenNom = nom.length;
console.log(lenNom);

console.log("Test3");

var nomInit = "Kingdom";
var nomEnMaj = nomInit.toUpperCase();
var nomEnMin = nomInit.toLowerCase();
console.log(nomInit);
console.log("Nom en majuscule " +nomEnMaj);
console.log("Nom en minuscule " +nomEnMin);

console.log("Test4");

var str = "Pacis";

console.log(str === "Pacis");
console.log(str === "Paris");
console.log(str === "pacis");
console.log(str.toLowerCase() === "pacis");

console.log("Test5");

var seinenNum1 = "Shingeki No Kyojin";
console.log(seinenNum1.charAt(0));
console.log(seinenNum1[0]);
console.log(seinenNum1.charAt(9));
console.log(seinenNum1[9]);
console.log(seinenNum1.length);
console.log(seinenNum1[seinenNum1.length -1]);

console.log("Test6");
for (var i = 0; i < str.length; i++)
  console.log(str[i]);
let j = 0;
while (j < nom.length)
{
  console.log(nom[j]);
  j++;
}
