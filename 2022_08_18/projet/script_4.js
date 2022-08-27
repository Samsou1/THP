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

function birthYear(){
  let numberOfBirth = 0;

  for(let count = 0; count < length; count++){
    if(entrepreneurs[count].year >= 1970 && (entrepreneurs[count].year) <= 1980) {
      numberOfBirth++;
    }
  }
  return numberOfBirth;
}

function names(){
  let ary = [] ;
  for(let count = 0; count < length; count++){
    ary.push(entrepreneurs[count].first + " " + entrepreneurs[count].last);
  }
  return ary;
}

function age(){
  names = names();
  for(let count = 0; count < length; count++){
    console.log(names[count] + ` aurait ${2022 - entrepreneurs[count].year} ans aujourd'hui`);
  }
}

function compare(a, b) {
  const lastA = a.last.toUpperCase();
  const lastB = b.last.toUpperCase();

  let comparison = 0;
  if (lastA > lastB) {
    comparison = 1;
  } else if (lastA < lastB) {
    comparison = -1;
  }
  return comparison;
}

console.log(birthYear());
console.log(names());
age();
console.log(entrepreneurs.sort(compare));