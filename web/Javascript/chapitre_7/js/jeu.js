var perso = {
    name: "Cloud",
    hp: 978,
    strength: 132,

    statutDuPerso: function (){
      var statutDisplay = `${perso.name} a ${perso.hp}hp et ${perso.strength} en force.`;
      return (statutDisplay);
    }
};

var perso2 = {};

perso2.name = "Squall";
perso2.hp = 871;
perso2.strength = 153;

perso2.statutDuPerso = function(){
  var statutDisplay = `${this.name} a ${this.hp}hp et ${this.strength} en force.`;
  return (statutDisplay);
};

console.log(`${perso.name} a ${perso.hp}hp et ${perso.strength} en force.`);

console.log(`${perso2.name} frappe ${perso.name} (-${perso2.strength}hp)`);

perso.hp -= perso2.strength;
console.log(`${perso.name} perd ${perso2.strength}hp, il lui en reste ${perso.hp}`);

console.log(`${perso.name} utilise une potion de force (+30)`);
perso.strength = perso.strength + 30;

console.log(`${perso.name} a ${perso.hp}hp et ${perso.strength} en force.`);

console.log("Test propriété statut.");
console.log(perso.statutDuPerso());

console.log(`${perso2.name} frappe ${perso.name} (-${perso2.strength}hp)`);
perso.hp -= perso2.strength;
console.log(`${perso.name} utilise une potion de force (+30).`);
perso.strength += 30;
console.log(perso.statutDuPerso());

console.log("Test propriété statut de Squall.");
console.log(perso2.statutDuPerso());

console.log(`${perso.name} frappe ${perso2.name} (-${perso.strength})hp`);
perso2.hp -= perso.strength;
console.log(`${perso2.name} utilise une potion de force (+30).`);
perso2.strength += 30;
console.log(perso2.statutDuPerso());

console.log("Test de la fonction Display");

function displayStat(perso)
{
  var strStatut = `${perso.name} a ${perso.hp}hp et ${perso.strength} en force.`;
  return (strStatut);
}

console.log(displayStat(perso));
console.log(displayStat(perso2));
