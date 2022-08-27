/* eslint-disable no-console */

// 1. lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>),
// tu vas afficher le mot "clique" en console.

// var footer = document.getElementsByTagName("footer")[0];
// footer.addEventListener('click', outputClick);
// function outputClick(){
//   console.log("clique");
// }

// 1b. Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer,
// tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

let increment = 0;
function outputClick2() {
  increment += 1;
  console.log(increment);
}
const footer = document.getElementsByTagName("footer")[0];
footer.addEventListener("click", outputClick2);

// 2. Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse.
// Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

const navbarHeader = document.getElementById("navbarHeader");

const hamburgerButton = document.getElementsByClassName("navbar-toggler")[0];

// const toggleCollapse = () => navbarHeader.classList.toggle("collapse");
function toggleCollapse() {
  navbarHeader.classList.toggle("collapse");
}

hamburgerButton.addEventListener("click", toggleCollapse);

// 3. À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card,
// le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !
const firstCard = document.getElementsByClassName("card")[0].parentElement;
function turnTextRed() {
  firstCard.style.color = "red";
}
firstCard.addEventListener("click", turnTextRed);

// 4. On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe :
// si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert.
// Si on re-clique dessus, il redevient comme avant !
// Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte.
// C'est plus compliqué que sur une classe.
const secondCardEditButton = document.getElementsByClassName(
  "btn-outline-secondary"
)[1];
const secondCard = document.getElementsByClassName("card")[1].parentElement;
function turnTextGreen() {
  console.log("test");
  if (secondCard.style.color === "green") {
    secondCard.style.color = "";
  } else {
    secondCard.style.color = "green";
  }
}
secondCardEditButton.addEventListener("click", turnTextGreen);

// 5. Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯.
// Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher :
// si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche
// comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible
// (un nouveau double-clic fait tout revenir à la normale).
function deleteCDN() {
  const CDNScript = document.querySelector("link");
  CDNScript.toggleAttribute("disabled");
}
const header = document.querySelector("header");
header.addEventListener("dblclick", deleteCDN);

// 6. La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle),
// celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine
// et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !
const viewButtons = document.querySelectorAll(".btn-group > .btn-success");

viewButtons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    const image = button.closest("div.card").querySelector("img");
    if (image.attributes.style) {
      image.removeAttribute("style");
    } else {
      image.setAttribute("style", "width: 20%");
    }
  });
});

// 7. Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>,
// la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !
const rotateButton = document.querySelector("a.btn-secondary");
function rotateCards() {
  const cards = document.querySelectorAll(".card");
  const newFirstCard = cards[cards.length - 1].parentNode;
  newFirstCard.parentNode.insertBefore(
    newFirstCard,
    newFirstCard.parentNode.firstChild
  );
}
rotateButton.addEventListener("click", rotateCards);

// 8. Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi.
// Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier.
// À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges.
const deRotateButton = document.querySelector("a.btn-primary");
function deRotateCards(event) {
  event.preventDefault();
  const cards = document.querySelectorAll(".card");
  const newFirstCard = cards[0].parentNode;
  console.log(newFirstCard);
  newFirstCard.parentNode.append(newFirstCard);
}
deRotateButton.addEventListener("click", deRotateCards);

// 9. La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
// Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
// Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
// Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
// Si l'utilisateur presse la touche "b", tout redevient normal.
const logo = document.querySelector(".navbar-brand");
console.log(logo);

// const body = document.body;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const { body } = document;

function setLayout(bsClass) {
  body.setAttribute("class", bsClass);
}

logo.addEventListener("keyup", (event) => {
  const { key } = event;

  switch (key) {
    case "a":
      setLayout("col-4");
      break;

    case "y":
      setLayout("col-4 offset-md-4");
      break;

    case "p":
      setLayout("col-4 offset-md-8");
      break;

    case "b":
      setLayout("");
      break;

    default:
      break;
  }
  console.dir(body.classList);
});
