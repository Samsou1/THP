function readAmino(str){
  switch(str){
    case "UCU":
    case "UCC":
    case "UCA":
    case "UCG":
    case "AGU":
    case "AGC":
      return "Sérine";
    case "CCU":
    case "CCC":
    case "CCA":
    case "CCG":
      return "Proline";
    case "UUA":
    case "UUG":
      return "Leucine";
    case "UUU":
    case "UUC":
      return "Phénylalanine";
    case "CGU":
    case "CGC":
    case "CGA":
    case "CGG":
    case "AGA":
    case "AGG":
      return "Arginine";
    case "UAU":
    case "UAC":
      return "Tyrosine";
    default:
      return "NOT AN AMINO ACID"
  }
}

function readARN(str){
  length = str.length;
  let ary = [];
  for(let count = 0; count < length; count += 3){
    if (readAmino(str.slice(count, count + 3)) === "NOT AN AMINO ACID"){
      return "Problem in the given code, please check again";
    }
    else{
      ary.push(readAmino(str.slice(count, count + 3)));
    }
  }
  return ary.join('-')
}
console.log(readARN('UUC'))
console.log(readARN('AGA'))

console.log(readARN('CCGUCGUUGCGCUACAGC'))
console.log(readARN('CCUCGCCGGUACUUCUCG'))
console.log(readARN('CCUCGCCGGUACUUCUCGX'))
console.log(readARN("UCCCCCUUGUUCCGCUAC"))