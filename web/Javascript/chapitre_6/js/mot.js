var strSaisie = prompt("Saisissez un mot.");
console.log(`Le mot ${strSaisie} contient ${strSaisie.length} caractère(s)\nIl s'écrit en minuscule ${strSaisie.toLowerCase()}\nIl s'écrit en majuscule ${strSaisie.toUpperCase()}`);

function isLowerCase(c)
{
  if (c >= "a" && c <= "z")
    return (true);
  return (false);
}

function  isUpperCase(c)
{
  if (c >= "A" && c <= "Z")
    return (true);
  return (false);
}

function comptNombreMin(str)
{
  let nombreDeMin = 0;
  for (let j = 0; j < str.length; j++)
    if (isLowerCase(str[j]))
      nombreDeMin++;
  return (nombreDeMin);
}

function comptNombreMaj(str)
{
  let nombreDeMaj = 0;
  for (let i = 0; i < str.length; i++)
    if (isUpperCase(str[i]))
      nombreDeMaj++;
  return (nombreDeMaj);
}

console.log(`Il contient ${comptNombreMin(strSaisie)} minuscule(s) et ${comptNombreMaj(strSaisie)} majuscule(s).`);

function isAlpha(c)
{
  if (isLowerCase(c) || isUpperCase(c))
    return (true);
  if (c === "à" || c === "â" || c === "é" || c === "è" || c === "ê" || c === "î" || c === "ô" || c === "ù" || c === "û")
    return (true);
  return (false);
}

function isVoyelle(c)
{
  if (isAlpha(c))
  {
    if (c === "a" || c === "à" || c === "â")
      return (true);
    if (c === "e" || c === "é" || c === "è" || c === "ê")
      return (true);
    if (c === "i" || c === "î")
      return (true);
    if (c === "o" || c === "ô")
      return (true);
    if (c === "u" || c === "ù" || c === "û")
      return (true);
    if (c === "y")
      return (true);
  }
  return (false);
}

function comptNombreV(str)
{
  let nombreDeV = 0;
  for (let i = 0; i < str.length; i++)
    if (isVoyelle(str[i]))
      nombreDeV++;
  return (nombreDeV);
}

function comptNombreC(str)
{
  let nombreDeC = 0;
  for (let i = 0; i < str.length; i++)
    if (isAlpha(str[i]))
      if (!isVoyelle(str[i]))
        nombreDeC++;
  return (nombreDeC);
}

console.log(`Il contient ${comptNombreV(strSaisie)} voyelle(s), et ${comptNombreC(strSaisie)} consonne(s).`);

function  inverse(str)
{
  let i = str.length - 1;
  let invStr ="";
  while (i >= 0)
  {
    invStr = invStr + str[i]
    i--;
  }
  return (invStr)
}

console.log("Il s'écrit à l'envers " +  inverse(strSaisie));

function palindrome(str)
{
  let invStr = inverse(str);
  let i = 0;
  let j = 0;
  while (i < str.length && j < str.length)
  {
    if (str[i] !== invStr[j])
      return (false);
    i++;
    j++;
  }
  return (true);
}

if (palindrome(strSaisie))
  console.log("C'est un palindrome");
else
  console.log("Ce n'est pas un palindrome");

function leetPossible(c)
{
  if (c === "a" || c === "b" || c === "e" || c === "l" || c === "o" || c === "s")
    return (true);
  return (false);
}

function findLettreLeet(c)
{
  if (c === "a")
    return "4";
  else if (c === "b")
    return "8";
  else if (c === "e")
    return "3";
  else if (c === "l")
    return "1";
  else if (c === "o")
    return "0";
  else
    return "5";
}

function convEnLeetSpeak(str)
{
  let convStr = "";
  let i = 0;
  while (i < str.length)
  {
    if (leetPossible(str[i]))
      convStr = convStr + findLettreLeet(str[i]);
    else
      convStr = convStr + str[i];
    i++;
  }
  return (convStr);
}

console.log(`Il s'écrit en leet speak ${convEnLeetSpeak(strSaisie)}`);
