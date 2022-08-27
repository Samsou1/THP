// console.log("coucou depuis la console");
// let myVariable = 5;
// let myVariable2 = "pirate";
// console.log(myVariable);
// console.log(typeof myVariable2);


// let data1 = "variable en let définie dans le bloc principal";

// {

//   data1 = "variable en let modifiée dans le sous-bloc";
//   var data2 = "variable en var définie dans le sous-bloc";
//   let data3 = "variable en let définie dans le sous-bloc";

// } 

// console.log(data1); // "variable let modifiée dans le sous-bloc"
// console.log(data2); // "variable var définie dans le sous-bloc"
// console.log(data3); // On aura une erreur : data3 n'est pas visible dans le bloc principal

{
  let a = 1;
  let b = 1;
  a++;
  console.log(a);
  console.log(b += 2);
}

{
  let a = "Bonjour", b = "Monde";
  console.log(a + " " + b);
}

{
  let a = Number("5");
  console.log(a);
  console.log(typeof a);
  let b = String(36);
  console.log(b);
  console.log(typeof b);
}

{
  let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];
  console.log(statusDeTHP[0]);
  console.log(statusDeTHP.length);
  statusDeTHP[0] = "La moussaille"
  console.log(statusDeTHP[0]);
  statusDeTHP.push("Flibustier");
  console.log(statusDeTHP[3]);
  statusDeTHP.unshift("Pirate");
  console.log(statusDeTHP[0]);
  statusDeTHP.pop();
  console.log(statusDeTHP.length);
  statusDeTHP.shift();
  console.log(statusDeTHP[0]);
  console.log(statusDeTHP.slice(0,2));

}

{
  let numStudent = 4;
  let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
  console.log(statement);
}

{
  console.log("The Hacking Project"[0]);
  console.log("The Hacking Project".length);
  console.log("The Hacking Project".indexOf("Hack"));
}

{
  const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
  const lesson = contentOfTHP.split("-");
  console.log(lesson[0]); // "Git"
  console.log(lesson[5]); // "JS"
  const content = lesson.join(',')
  console.log(content)
}

{
  let THPSessionNum2 = {
    numOfMouss: 80,
    cities: ["Paris", "Lyon", "Montpellier"],
    successRate: 0.80,
    sessionMoto: "keep pushing to the top"
  };

  console.log(THPSessionNum2.numOfMouss);
  console.log(THPSessionNum2.sessionMoto);

  THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
  console.log(THPSessionNum2.numOfMouss);
  THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
  console.log(THPSessionNum2); //j'imprime tout l'objet pour voir

}

{
  let number = -3; //fais ensuite le test avec d'autres valeurs (positives et négatives)
  if(number > 0) {
    console.log("number est positif");
  } else if(number === 0) {
    console.log("number est nul");
  } else {
    console.log("number est négatif");
  } 

}

{
  if (true && true) {
    console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
  }
  if (true || false) {
    console.log("ce message s'affiche car avec un OU, si l'une des conditions est à TRUE, le résultat est TRUE");
  } 
  if (!false) {
    console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
  }
}

{
  weekNum = -1; //teste avec plusieurs valeurs
switch (weekNum) {
  case 1:
    console.log("Semaine 1 - Introduction au Code");
    break;
  case 2:
    console.log("Semaine 2 - Découverte de Ruby");
    break;
  case 3:
    console.log("Semaine 3 - Programmation Orientée Objet");
    break;
  case 4:
    console.log("Semaine 4 - Initiation à Rails");
    break;
  case 5:
    console.log("Semaine 5 - Rails intermédiaire");
    break;
  case 6:
    console.log("Semaine 6 - Rails avancé");
    break;
  case 7:
    console.log("Semaine 7 - HTML / CSS et intro au JS");
    break;
  case 8:
    console.log("Semaine 8 - JavaScript de front");
    break;

  default:
    console.log("Cette entrée n'est pas reconnue");
    break;
}
}

{
  let number = 0; //fais aussi le test avec un chiffre non nul
if (number) {
  console.log("ce message ne s'affiche que si number est non nul ");
}

let string = ""; //fais aussi le test avec un mot non vide
if (string) {
  console.log("ce message ne s'affiche que si string est non vide");
}

let myVariable // ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
if (myVariable) {
  console.log("ce message ne s'affiche que si myVariable contient une valeur ");
}
}

{
  for(let count = 0; count <=5; count++){
    console.log(`on va compter jusqu'à 5 : ${count}`);
  }
  
  // let answer = "";
  // while(answer !== "oui") {
  //   console.log("alors ?")
  //   answer = prompt("Tu kiffes THP ?");
  // } 

  // console.log("haaa, tu nous fais plaisir !");
}

{
  //On déclare d'abord un array
  let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

  //On déclare ensuite un objet
  let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

  console.log("**********Parcourons le array :")
  for(let index in weeksOfTHPArray) {
    console.log(index); // index va aller de 0 à 3
    console.log(weeksOfTHPArray[index]);
  }

  console.log("**********Parcourons l'objet :")
  for(let weekAttribut in weeksOfTHPObject) {
    console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
    console.log(weeksOfTHPObject[weekAttribut]);
  }
}

{
  function sayHello() {
    console.log("Bonjour toi !");
  }
  
  sayHello();
}

{
  function multiply(inputNumber1, inputNumber2) {
    let outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }
  
  console.log(multiply(2, 3));
  console.log(multiply(2, multiply(2,3)));
}

{
  const multiply = function(inputNumber1, inputNumber2) {
    let outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }
  
  console.log(multiply(2, 3));
  
  const otherMultiply = multiply; //On peut ainsi affecter la fonction à une autre variable
  console.log(otherMultiply(2, 3));
}

{
  const multiply = (inputNumber1, inputNumber2) => {
    let outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }
}