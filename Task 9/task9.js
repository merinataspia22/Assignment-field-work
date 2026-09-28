function memoize(fn) {
    let cache = {};

    return function(...args) {
        let key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        let result = fn(...args);
        cache[key] = result;

        return result;
    };
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

let memoizedFactorial = memoize(factorial);
let n = parseInt(prompt("Enter a number:"));

console.log(memoizedFactorial(n));