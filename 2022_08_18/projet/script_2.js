function fact(n) {
  return (n != 1) ? n * fact(n - 1) : 1;
}

answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
if (!isNaN(answer) && answer != "" && answer > 0){
  console.log(`Résultat: ${fact(answer)}`);
}
else if(answer === '0'){
  console.log(`Résultat: 1`);
}
else{
  console.log("Not a positive number, please try again");
}
