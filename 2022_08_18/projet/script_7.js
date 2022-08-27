function chatBot(){
  let answer = prompt("Qu'est ce que tu veux ?");
  if (answer.charAt(answer.length - 1) === "?"){
    return 'Ouais ouais';
  }
  else if (answer === answer.toUpperCase() && answer!=""){
    return 'Pwa, calme-toi...';
  }
  else if (answer.toUpperCase().includes('FORTNITE')){
    return "on s' fait une partie soum-soum ?";
  }
  else if(answer === ""){
    return "t'es en PLS ?";
  }
  else{
    return 'balek';
  }
}

console.log(chatBot());