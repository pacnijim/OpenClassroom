var mots = [];
var i = 0;
var j = 0;
var interruptor = true;
var mot = "";

function testMot(mot)
{
  var stop = "stop";
  if (mot === stop)
    return (false);
  return (true);
}
while (interruptor === true)
{
  if (i > 0)
    console.log("again");
  mot = prompt("Tapez un mot:");
  if (testMot(mot) === false)
    interruptor = false;
  else
    mots[i] = mot;
  i += 1;
}
mots.forEach(function(mot) { console.log(mot);});
