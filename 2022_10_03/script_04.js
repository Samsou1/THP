const isPrimeNumber = (n, p = 2) => {
    if(n == 1){
        return false;
    }else if(p * p > n){
        return true;
    }else if(n % p == 0){
        return false;
    }else{
        return isPrimeNumber(n, p + 1);
    }
}

console.log(isPrimeNumber(2));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(18));
console.log(isPrimeNumber(31));