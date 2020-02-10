console.log("Guess the number");

let userNumber = 25;
//let randomNumber = 5; //om te checken voor correct antwoord
let randomNumber = Math.floor(Math.random() * userNumber) + 1;
//console.log(randomNumber); checkt if randomNumber werkt
let attempt = 26;
let i = 0;

name = prompt("Welkom! Wat is je naam?");
document.write("Hey " + name);
alert("Hey " + name);

while (attempt != randomNumber && i < 5) {
  attemptString = prompt(
    "Voer een nummer in van 0 tot 25 ... Je hebt in totaal 5 pogingen."
  );
  attempt = parseInt(attemptString);
  document.write("<br>" + "Jouw getal is " + attempt);

  if (attempt === randomNumber) {
    document.write("<br>" + "Gefeliciteerd, je hebt het goede nummer geraden!");
    alert("Gefeliciteerd, je hebt het goede nummer geraden!");
  } else {
    document.write("<br>" + "Dit is niet het correcte nummer");
    alert("Dit is niet het correcte nummer");
  }
  if (i == 4 && attempt != randomNumber) {
    document.write("<br>" + "Helaas, je pogingen zijn allemaal gebruikt");
    alert("Helaas, je pogingen zijn allemaal gebruikt");
  } else document.write("<br>" + "Je hebt nog " + [4 - i] + " poging(en) over");
  alert("Je hebt nog " + [4 - i] + " poging(en) over");

  i++;
}

document.write("<br>" + "Dag " + [name] + ". Tot de volgende keer");
