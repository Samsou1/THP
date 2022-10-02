function averageGrossIncome(ary){
  return totalGrossIncome(ary) / ary.length;
} 
function totalGrossIncome(ary){
  return ary.reduce((sum, user) => user['revenue'] + sum, 0);
}
console.log(averageGrossIncome(users));
// -------------------------------------->

function percentageOfPayingPeople(ary){
  return numberOfPayingPeople(ary) * 100 / ary.length + "%";
}

function numberOfPayingPeople(ary){
  return ary.reduce(function(number, user){
    if(user['revenue'] != 0 ){
      return number + 1;
    }else{
      return number;
    }
  }, 0 );
}
console.log(percentageOfPayingPeople(users));
// -------------------------------------->

function averageGrossIncomeAmongPayingPeople(ary){
 return averageGrossIncome(payingPeople(ary));
}

function payingPeople(ary){
  return ary.filter(user => user.revenue !=0);
}
console.log(averageGrossIncomeAmongPayingPeople(users));
// -------------------------------------->

console.log(totalGrossIncome(users));
// -------------------------------------->

function peopleInCountry(ary, country){
  return ary.filter(user => user.country == country);
}

function countPeopleInCountry(ary, country){
  return peopleInCountry(ary, country).length;
}

console.log(countPeopleInCountry(users, 'France'));
// -------------------------------------->

function payingPeopleInCountry(ary, country){
  return ary.filter(user => user.country == country && user.revenue != 0);
}

function countPayingPeopleInCountry(ary, country){
  return payingPeopleInCountry(ary, country).length;
}

console.log(countPayingPeopleInCountry(users, 'France'));
// -------------------------------------->

function incomeByTopCountries(ary){
  return ary.reduce(function(result, user){
    if(!result[user.country] && (user.country == 'France' || user.country == 'Germany' || user.country == 'United States' || user.country == 'Great Britain')){
      result[user.country] = user.revenue;
    }else if(result[user.country]){
      result[user.country] += user.revenue;
    }
    return result;
  }, {});
}
console.log(incomeByTopCountries(users));
// -------------------------------------->

function incomeByPayingCountries(ary){
  return ary.reduce(function(result, user){
    if(!result[user.country] && user.revenue != 0){
      result[user.country] = user.revenue;
    }else if(result[user.country]){
      result[user.country] += user.revenue;
    }
    return result;
  }, {});
}
console.log(incomeByPayingCountries(users));
// -------------------------------------->

function topFiveUsers(ary){
  ary.sort(function(user1, user2){return user2['revenue'] - user1['revenue']});
  return [ary[0], ary[1], ary[2], ary[3], ary[4]];
}
// console.log(topFiveUsers(users));
// -------------------------------------->

function menOrWomen(ary){
  results = ary.reduce(function(result, user){
    if(user.sex == 'M'){
      result[0] += user.revenue;
      return result
    }else{
      result[1] += user.revenue;
      return result
    }
  }, [0,0])
  if(results[0]> results[1]){
    return 'Men earn more'
  }else if(results[1] > results[0]){
    return 'Women earn more'
  }else{
    return 'Women and men earn the same'
  }
}
console.log(menOrWomen(users));
// -------------------------------------->
function usersWhoEarnedMoreThan(ary, int){
  return ary.filter(user => user.revenue > int)
}

console.log(usersWhoEarnedMoreThan(users, 75));
// -------------------------------------->

function howManyUsersAmongTheFirst(ary, int){
  if(int < ary.length){
    return percentageOfPayingPeople(ary.slice(0,int));
  }else{
    return 'error, number asked too high';
  }
}
console.log(howManyUsersAmongTheFirst(users, 10));
