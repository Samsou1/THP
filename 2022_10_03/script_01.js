const computeFactorialIt = (n) => {
    let product = 1;
    for(var i = 1; i <= n; i++){
        product *= i;
    }
    return product;
}

const computeFactorialRec = (n) =>{
    if(n==0){
        return 1;
    }else{
        return n * computeFactorialRec(n-1);
    }
}

console.log(computeFactorialIt(5))
console.log(computeFactorialRec(6))
