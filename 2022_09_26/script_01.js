const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let length = entrepreneurs.length;
let todaysYear = 2022;

function firstAndLastName(){
  let ary = []
  for(let count = 0; count < length; count++){
    ary.push(entrepreneurs[count]['first'] + ' '+ entrepreneurs[count]['last']);
  }
  return ary;
}

function changeYearIntoAge(){
  for(let count = 0; count < length; count++){
    entrepreneurs[count]['age'] = todaysYear - entrepreneurs[count]['year'];
    delete entrepreneurs[count].year;
  }
  return entrepreneurs
}

function changeFirstAndLast(){
  for(let count = 0; count < length; count++){
    entrepreneurs[count]['firstName'] = entrepreneurs[count]['first'];
    entrepreneurs[count]['lastName'] = entrepreneurs[count]['last'];
    delete entrepreneurs[count].first;
    delete entrepreneurs[count].last;
  }
  return entrepreneurs;
}

function filterSeventees(){
  ary = [];
  for(let count = 0; count < length; count++){
    if (entrepreneurs[count]['year'] < 1980 && entrepreneurs[count]['year'] > 1970){
      ary.push(entrepreneurs[count]);
    }
  }
  return ary;
}

// console.log(firstAndLastName());
// console.log(changeYearIntoAge());
// console.log(changeFirstAndLast());
console.log(filterSeventees());
