var perso = {
    name: "Cloud",
    hp: 978,
    strength: 132,
    xp: 0,

    statutDuPerso: function (){
      var statutDisplay = `${perso.name} a ${perso.hp}hp, ${perso.strength} en force et ${perso.xp}XP.`;
      return (statutDisplay);
    }
};

var perso2 = {};

perso2.name = "Squall";
perso2.hp = 871;
perso2.strength = 153;
perso2.xp = 0;

perso2.statutDuPerso = function(){
  var statutDisplay = `${this.name} a ${this.hp}hp, ${this.strength} en force et ${this.xp}XP.`;
  return (statutDisplay);
};

function displayStat(perso)
{
  var strStatut = `${perso.name} a ${perso.hp}hp, ${perso.strength} en force et ${perso.xp}XP.`;
  return (strStatut);
}

console.log(perso.statutDuPerso())
console.log(displayStat(perso2));
