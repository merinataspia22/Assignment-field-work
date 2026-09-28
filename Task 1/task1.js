function reverseString(str) {
    return str.split("").reverse().join("");
}

let str = prompt("Enter a string:");
console.log(reverseString(str));