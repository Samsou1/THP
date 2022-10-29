const findSupPrime = (n) => {
  if(isPrime(n)){
    return n
  }else{
    return findSupPrime(n + 1)
  }
}

const isPrime = (n, p = 2) => {
  if(n == 1){
      return false
  }else if(p * p > n){
      return true
  }else if(n % p == 0){
      return false
  }else{
      return isPrime(n, p + 1);
  }
}

console.log(findSupPrime(14))
console.log(findSupPrime(100))