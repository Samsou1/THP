// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
pElements = document.getElementsByTagName("p");
console.log("Number of p elements: " + pElements.length);

// Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
coucouElement = document.getElementById("coucou");
console.log("Content of id coucou:" + coucouElement.textContent);

// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
thirdAElement = document.getElementsByTagName("a")[2];
console.log("Link to the third a tag:" + thirdAElement.href);

// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
compteMoiElements = document.getElementsByClassName("compte-moi");
console.log("Number of compte-moi elements:" + compteMoiElements.length);

// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
liCompteMoiElements = document.querySelectorAll("li.compte-moi");
console.log("Number of li elements that have the class 'compte-moi':" + liCompteMoiElements.length);

// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
liOrdCompteMoiElements = document.querySelectorAll("ol > li.compte-moi");
console.log("Number of li elements in a list that have the class 'compte-moi':" + liOrdCompteMoiElements.length);

// La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. 
// Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, 
// tu peux en récupérer le contenu. Affiche-le dans la console.
hiddenMessage = document.querySelectorAll("div > ul")[1].getElementsByTagName("li")[0];
console.log("Here is the hidden element:" + hiddenMessage.textContent);