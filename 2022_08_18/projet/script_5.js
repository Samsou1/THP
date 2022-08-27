const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let length = books.length;

function readOnce(){
  for(let count = 0; count < length; count++){
    if(books[count].rented === 0) {
      return false;
    }
  }
  return true
}

function readMost(){
  let read = books[0].rented;
  for(let count = 1; count < length; count++){
    if(books[count].rented > read) {
      read = books[count].rented;
    }
  }
  return read
}

function readLeast(){
  let read = books[0].rented;
  for(let count = 1; count < length; count++){
    if(books[count].rented < read) {
      read = books[count].rented;
    }
  }
  return read
}

function findBook(id){
  for(let count = 0; count < length; count++){
    if(books[count].id === id) {
      return books[count].title;
    }
  }
  return 'No book matches this ID';
}

function deleteBook(id){
  for(let count = 0; count < length; count++){
    if(books[count].id === id) {
      books.splice(count,1);
      console.log('Book deleted successfuly');
      return books;
    }
  }
  return 'No book matches this ID';
}

function compare(a, b) {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  let comparison = 0;
  if (titleA > titleB) {
    comparison = 1;
  } else if (titleA < titleB) {
    comparison = -1;
  }
  return comparison;
}

console.log(readOnce());
console.log(readMost());
console.log(readLeast());
console.log(findBook(873495));
console.log(deleteBook(133712));
console.log(books.sort(compare));