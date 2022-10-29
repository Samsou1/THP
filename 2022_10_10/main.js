const main = document.getElementsByTagName('main')[0];
const body = document.getElementsByTagName('body')[0];
const welcome = main.innerHTML;
const originalMenu = "<h1>Menu</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quia.</p><button>Marre de ce menu ? Changez-le !</button>"
document.getElementsByClassName('nav-item')[0].addEventListener('click', () => {
  main.innerHTML = welcome;
});
document.getElementsByClassName('nav-item')[1].addEventListener('click', () => {
  main.innerHTML = originalMenu;
  document.getElementsByTagName('button')[0].addEventListener('click', () => {
    main.innerHTML = menu;
  });
});



const mainCourses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"];
const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"];
const sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"];
const seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"];

const getRandom = (data) => data[Math.floor(Math.random() * data.length)];

const menu = `<p>${getRandom(mainCourses)} ${getRandom(techniques)}, avec ${getRandom(sides)} ${getRandom(seasonings)}</p>`

const modal = document.getElementById('modal')
const modalWindow = 
`
<div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria_hidden="false">
<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span>&times;</span>
        </button>
      </div>
    </div>
  </div>
</div>
`;

document.addEventListener('mouseout', (event) => {
  body.style.opacity = 0.1;
  modal.innerHTML = modalWindow;
});