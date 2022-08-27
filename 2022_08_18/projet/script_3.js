  function pyramide(n){
    let space = " ";
    let hash = "#";
    for(let count = 1; count <= n; count++){
      console.log(space.repeat(n-count) + hash.repeat(count));
    }
  }
  answer = prompt("Quelle est la taille de ta pyramide ?");
  if (!isNaN(answer) && answer != ""){
    pyramide(answer);
  }
  else{
    console.log("Not a number, please try again");
  }

