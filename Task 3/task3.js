function findMax(arr) {
    return Math.max(...arr);
}

let input = prompt("Enter numbers separated by spaces:");
let arr = input.split(" ").map(Number);

console.log(findMax(arr));