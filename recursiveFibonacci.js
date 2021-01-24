function fibonacciRecursive(n){
    // stopping condition 
    if (n == 0){
        return [1];
    }
    if (n == 1){
        return [1, 1];
    }
    // recursive call 
    var fibo = fibonacciRecursive(n - 1);
    var nextFibo = fibo[n - 1] + fibo[n - 2];
    fibo.push(nextFibo);
    return fibo;
}
var result = fibonacciRecursive(5)
console.log(result)
