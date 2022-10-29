const computeSquareRoot = (n, p = 1) => {
    // Here we check that we are close enough to the solution. Reminder : p is supposed to be the square root of n so p * p should be equal to n.
    if(Math.abs(n - p * p) < 0.0001){
        return p;
    }else{
        // If we're not close enough we reiterate with a better approximation of p : (n/p +p)/2
        return computeSquareRoot(n, (n/p + p)/2);
    }
}
console.log(computeSquareRoot(4));
console.log(computeSquareRoot(9));
console.log(computeSquareRoot(81));
console.log(computeSquareRoot(2));