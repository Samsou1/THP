var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const getForecast = ()=> {
  fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=Paris&country=France&key=529f3f4adeca420686b347825387b7ee&hours=120`)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    buildForecast(response['data']);
  })
  .catch((error) => { 
    console.error(error); 
  });
};

const buildForecast = (ary) => {
  const today = new Date();
  for(let i = 0; i < 5; i ++){
    let date = new Date(24* i * 3600 * 1000 + today.getTime());
    let day = date.getDay();
    showForecast(document.getElementById(`weather${i+1}`), days[day], ary[i * 24]['weather']['icon'],ary[i * 24]['temp'],ary[i * 24]['pop']);
  }
}

const showForecast = (element, day, icon, temp, pop) => {
  element.innerHTML = `
  <div>
    <h2>${day}</h2>
    <img src='icons/${icon}.png'
    <br>
    <p>Average temp:${temp}</p>
    <p>Probability of precipiration:${pop}%</p>
  </div>
  `;
}

getForecast();