function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let input = prompt("Enter numbers separated by spaces:");
let arr = input.split(" ").map(Number);

console.log(removeDuplicates(arr));