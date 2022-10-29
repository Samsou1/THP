const computePowerIt = (n, p) => {
    if(p==0){
        return 1;
    }else{
        let result = 1;
        for(var i = 1; i<=p; i++){
            result *= n;
        }
        return result;
    }
}

const computePowerRec = (n, p) => {
    if(p==0){
        return 1;
    }else{
        return n * computePowerRec(n, p-1);
    }
}

console.log(computePowerIt(3,4))
console.log(computePowerIt(5,3))
console.log(computePowerRec(3,4))
console.log(computePowerRec(5,3))