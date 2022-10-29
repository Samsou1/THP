num1 = [10, 15, 3, 7];
num2 = [1, 8, 10, 21];
num3 = [10, 15, 3, 7, 25, 29];

floor1 = [3, 7, 8, 3, 6, 1];
floor2 = [1, 4, 5, 8];
floor3 = [10, 9, 7, 8, 4, 5, 3, 1];

console.log(sumQuad([...num1], 17));
console.log(sumQuad([...num2], 19));
console.log(sumQuad([...num3], 32));

console.log(floorQuad([...floor1]));
console.log(floorQuad([...floor2]));
console.log(floorQuad([...floor3]));

console.log(sumLinear([...num1], 17));
console.log(sumLinear([...num2], 19));
console.log(sumLinear([...num3], 32));

console.log(floorLinear([...floor1]));
console.log(floorLinear([...floor2]));
console.log(floorLinear([...floor3]));

console.log(sumConst([...num1], 17));
console.log(sumConst([...num2], 19));
console.log(sumConst([...num3], 32));

console.log(floorConst([...floor1]));
console.log(floorConst([...floor2]));
console.log(floorConst([...floor3]));


function sumQuad(ary, int){
  for(let i = 0; i < ary.length - 1; i++){
    for(let j = i + 1; j < ary.length; j++){
      if(ary[i] + ary[j] == int){
        return true
      }
    }
  }
  return false
}

function floorQuad(ary){
  let num = 0;
  for(let i = 0; i < ary.length; i++){
    let taller = true;
    for(let j = i + 1; j < ary.length; j++){
      if(ary[i] < ary [j]){
        taller = false;
      }
    }
    if(taller == true){
      num++;
    }
  }
  return num;
}

function sumLinear(ary, int){
  let hash = {};
  for(let i = 0; i < ary.length; i++){
    if(!hash[ary[i]]){
      hash[ary[i]] = 1;
    }else{
      hash[ary[i]]++;
    }
  }
  let keys = Object.keys(hash).map(element => parseFloat(element));
  for(let j = 0; j < keys.length - 1; j++){
    if(hash[int - keys[j]] > 0){
      return true;
    }
  }
  return false;
}

function floorLinear(ary){
  let num = 1;
  ary = ary.reverse();
  let max = ary[0];
  for(let j = 0 ; j < ary.length ; j++){
    if(ary[j] > max){
      num++;
      max = ary[j];
    }
  }
  return num;
}

function sumConst(ary,int){
  hash = {};
  for(let i = 0; i < ary.length; i++){
    if(hash[int - ary[i]] != undefined){
      return true;
    }else{
      hash[ary[i]] = 1;
    }
  }
  return false;
}


function floorConst(ary){
  let num = 1;
  let max = ary[ary.length - 1];
  for(let i = ary.length - 2; i >= 0 ; i--){
    if(ary[i] > max){
      num++;
      max = ary[i];
    }
  }
  return num;
}