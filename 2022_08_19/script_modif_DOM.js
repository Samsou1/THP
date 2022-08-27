// Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"
// Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui,
//  en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin.
//  Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. 
// Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
function changeTitles(){
  titleToChange = document.getElementsByTagName("h1")[0];
  // console.log(titleToChange.textContent);
  titleToChange.innerHTML = "Ce que j'ai appris à THP";
  // console.log(titleToChange.textContent);
  subtitleToChange = document.querySelectorAll("body > main > section > div > p")[0];
  // console.log(subtitleToChange.textContent);
  subtitleToChange.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
  // console.log(subtitleToChange.textContent);

  //to select the exact Element when you know the content you can:
  // const allNodes = document.body.querySelectorAll("*");
  // for (const node of allNodes){
// if (node.innerText === "Album example"){
// node.innerText = "Ce que j'ai appris à THP";
// }
  // }
}

// Changer le texte du bouton "Main call to action" en "OK je veux tester !"
// Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"
// Changer le texte du bouton "Secondary action" en "Non Merci"
// Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"
function changeCallToActions(){
  firstButtonToChange = document.querySelectorAll("body > main > section > div > p")[1].getElementsByTagName("a")[0];
  // console.log(buttonToChange.textContent)
  firstButtonToChange.innerHTML = "OK je veux tester !"
  firstButtonToChange.href = "http://www.thehackingproject.org"
  secondButtonToChange = document.querySelectorAll("body > main > section > div > p")[1].getElementsByTagName("a")[1];
  secondButtonToChange.innerHTML = "Non Merci"
  secondButtonToChange.href = "https://www.pole-emploi.fr/accueil/"
}

// Écris une fonction changeLogoName() qui va modifier le titre "Album" de la navbar (en haut à gauche) de la façon suivante :
// Change "Album" par "The THP Experience" ;
// Change la taille du texte pour le passer en 2em.
function changeLogoName(){
  logoToChange = document.querySelectorAll("body > header > div")[1].querySelectorAll("a > strong")[0];
  // console.log(logoToChange.textContent)
  logoToChange.textContent = "The THP Experience";
  logoToChange.style.fontSize = "2em";
}

// Écris une fonction populateImages() qui va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant :
// let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
function populateImages(){
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  placesToPopulate = document.querySelectorAll("body > main > div > div > div > div > div");  
  for(let count = 0; count < placesToPopulate.length; count++){
    const imgTag = document.createElement("img");
    imgTag.src = imagesArray[count];
    placesToPopulate[count].append(imgTag); 
  }
}

// Écris une fonction deleteLastCards() qui va supprimer les 3 dernières cards via une boucle.
function deleteLastCards(){
  cardsToDelete = document.querySelectorAll("body > main > div > div > div > div");
  for(let count = cardsToDelete.length - 1; count > cardsToDelete.length - 4; count--){
    cardsToDelete[count].remove();
  }
}

// Écris une fonction changeCardsText() qui va modifier le texte des 3 premières cards et le remplacer avec cela :
// Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
// Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
// Carte JS : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
function changeCardsText(){
  cardsToModify = document.querySelectorAll("body > main > div > div > div > div");
  textToModify = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web","Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
  for(let count= 0; count < 3; count++){
    cardsToModify[count].querySelectorAll("div > div > p")[0].textContent = textToModify[count];
  }
}

// Écris une fonction changeViewButtons() qui va modifier tous les boutons "View" des cards pour les passer en vert. 
// En gros il faut leur mettre la classe btn-success et enlever btn-outline-secondary. 
// Les boutons Edit ne doivent pas changer. 
// Évite bien sûr de faire les 6 modifications une à une ... faut de la boucle là !
function changeViewButtons(){
 buttonsToModify = document.querySelectorAll("body > main > div > div > div > div > div > div > div > div > button");
 numberOfCards = document.querySelectorAll("body > main > div > div > div > div").length;
 for(let count= 0; count < numberOfCards; count++){
  buttonsToModify = document.querySelectorAll("body > main > div > div > div > div")[count].querySelector("div > div > div > div > div > div > div > div > button");
  attributeClass = buttonsToModify.getAttribute("class");
  attributeClass = attributeClass.replace("btn-outline-secondary", "");
  // easier to do with buttonsToModify.classList.remove("btn-outline-secondary") & buttonsToModify.classList.add("btn-success")
  buttonsToModify.setAttribute("class", attributeClass + " btn-success");
  }
}

// Rajoute une <div> portant la classe row juste après celle qui contient déjà les cards actuelle.
// Déplace la 3ème card (JS) de la première <div class="row"> vers la deuxième que tu viens de créer.
function lastExercice(){
  whereToPutRow = document.querySelector("body > main > div > div");
  // console.log(whereToPutRow);
  newRow = document.createElement("div");
  newRow.setAttribute("class", "row");
  whereToPutRow.appendChild(newRow);
  cardToMove = document.querySelectorAll("body > main > div > div > div > div")[2];
  newRow.appendChild(cardToMove);

}

// changeTitles()
// changeCallToActions()
// changeLogoName()
// populateImages()
// deleteLastCards()
// changeCardsText()
// changeViewButtons()
lastExercice()
