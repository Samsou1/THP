const getVlibs = ()=> {
  fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=5&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes')
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    displayVlibs(response['records']);
  })
  .catch((error) => { 
    console.error(error); 
  });
};

const displayVlibs = (ary) =>{
  for(let i = 0 ; i < ary.length ; i ++){
    showVelibStation(document.getElementById(`vlib${i + 1}`), ary[i]['fields']['name'], ary[i]['fields']['mechanical'], ary[i]['fields']['ebike'])
  }
  let date = new Date();
  let currentTime = date.getHours() + 'h' + date.getMinutes() + 'min' + date.getSeconds() + 'sec';
  document.getElementById('refresh').innerHTML += `<p>${currentTime}</p>`;
}

const showVelibStation = (element, name, mechanicals, ebikes) => {
  element.innerHTML = `
  <div>
  <h2>Station : ${name}</h2>
  <p>${mechanicals} classical Velibs</p>
  <p>${ebikes} electric Velibs</p>
  </div>
  `;
}

getVlibs();
const run = setInterval(getVlibs, 60000);
