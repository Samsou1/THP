let length = users.length;
function averageGrossIncome(){
  let grossIncome = 0;
  for(let count = 0; count < length; count++){
    grossIncome += users[count]['revenue'];
  }
  return parseInt(grossIncome / 100 / length)
}

function percentageOfPeopleWhoMadeMoney(){
  let people = 0;
  for(let count = 0; count < length; count++){
    if(users[count]['revenue'] != 0){
      people +=1 ;
    }
  }
  return parseInt(people / length * 100);
}

function averageGrossIncomeAmongPeopleWhoMadeMoney(){
  let grossIncome = 0;
  let people = 0;
  for(let count = 0; count < length; count++){
    if(users[count]['revenue'] != 0 ){
      grossIncome += users[count]['revenue'];
      people += 1
    }
  }
  return parseInt(grossIncome / 100 / people);
}

function totalEarned(){
  let grossIncome = 0;
  for(let count = 0; count < length; count++){
    grossIncome += users[count]['revenue'];
  }
  return parseInt(grossIncome / 100);
}

function numberOfUsers(country){
  let people = 0;
  for(let count = 0; count < length; count++){
    if(users[count]['country'] == country){
      people += 1;
    }
  }
  return people;
}

function numberOfPayingUsers(country){
  let people = 0;
  for(let count = 0; count < length; count++){
    if(users[count]['country'] == country && users[count]['revenue'] != 0){
      people += 1;
    }
  }
  return people;
}

function incomeByCountry(){
  let hash = {};
  for(let count = 0; count < length; count++){
    if(hash[users[count]['country']] == undefined){
      hash[users[count]['country']] = users[count]['revenue']
    }else{
      hash[users[count]['country']] += users[count]['revenue']
    }
  }
  return hash;
}

function incomeInFourMostRepresentedCountries(){
  let hash = {'France': 0, 'Germany': 0, 'United States': 0, 'Great Britain': 0}
  for(let count = 0; count < length; count++){
    if(users[count]['country'] == 'France'){
      hash['France'] += users[count]['revenue'];
    }else if(users[count]['country'] == 'Germany'){
      hash['Germany'] += users[count]['revenue'];
    }else if(users[count]['country'] == 'United States'){
      hash['United States'] += users[count]['revenue'];
    }else if(users[count]['country'] == 'Great Britain'){
      hash['Great Britain'] += users[count]['revenue'];
    }
  }
  return hash;
}

function incomeByPayingCountry(){
  let hash = {};
  for(let count = 0; count < length; count++){
    if(hash[users[count]['country']] == undefined && users[count]['revenue'] !=0){
      hash[users[count]['country']] = users[count]['revenue']
    }else if(hash[users[count]['country']] != undefined){
      hash[users[count]['country']] += users[count]['revenue']
    }
  }
  return hash;
}

function topFiveUsers(){
  users.sort(function(a, b){return b['revenue'] - a['revenue']})
  return [users[0], users[1], users[2], users[3], users[4]];
}

function menOrWomen(){
  let womenIncome = 0;
  let menIncome = 0;
  for(let count = 0; count < length; count ++){
    if(users[count]['sex'] == 'F'){
      womenIncome += users[count]['revenue'];
    }else if(users[count]['sex'] == 'M'){
      menIncome += users[count]['revenue'];
    }
  }
  if(menIncome > womenIncome){
    return 'Men earn more';
  }else if(womenIncome > menIncome){
    return 'Women earn more';
  }else{
    return 'They earn the same';
  }
}

function usersWhoEarnedMoreThan(int){
  ary = [];
  for(let count = 0; count < length ; count ++){
    if(users[count]['revenue'] >= int){
      ary.push(users[count]);
    }
  }
  return ary;
}

function howManyPayingUsersAmongFirst(int){
  let paying = 0;
  for(let count = 0; count < int ; count ++){
    if(users[count]['revenue'] > 0){
      paying += 1;
    }
  }
  return paying;
}


// console.log(averageGrossIncome());
// console.log(percentageOfPeopleWhoMadeMoney());
// console.log(averageGrossIncomeAmongPeopleWhoMadeMoney());
// console.log(totalEarned());
// console.log(numberOfUsers('France'));
// console.log(numberOfPayingUsers('France'));
// console.log(incomeByCountry());
// console.log(incomeInFourMostRepresentedCountries());
// console.log(incomeByPayingCountry());
// console.log(topFiveUsers());
// console.log(menOrWomen());
// console.log(usersWhoEarnedMoreThan(9800));
console.log(howManyPayingUsersAmongFirst(10));
