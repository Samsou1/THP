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

const length = books.length;

function listOfBooks(){
  let ary = [];
  for(let count = 0; count < length; count++){
    ary.push(books[count]['title']);
  }
  return ary;
}

function rentedOnce(){
  let condition = true;
  for(let count = 0; count < length; count++){
    if (books[count]['rented'] == 0){
      condition = false;
    }
  }
  return condition;
}

function mostRented(){
  let book = 0;
  let rented = books[0]['rented'];
  for(let count = 1; count < length; count++){
    if (rented < books[count]['rented']){
      rented = books[count]['rented'];
      book = count;
    }
  }
  return books[book];
}

function leastRented(){
  let book = 0;
  let rented = books[0]['rented'];
  for(let count = 1; count < length; count++){
    if (rented > books[count]['rented']){
      rented = books[count]['rented'];
      book = count;
    }
  }
  return books[book];
}

function deleteBook(id){
  for(let count = 0; count < length; count++){
    if (books[count]['id'] == id){
      delete books[count];
    }
  }
  return books
}

// console.log(listOfBooks());
// console.log(rentedOnce());
// console.log(mostRented());
// console.log(leastRented());
console.log(deleteBook(133712));
