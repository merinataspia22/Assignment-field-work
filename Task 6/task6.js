function isPalindrome(str) {
    let text = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return text === text.split("").reverse().join("");
}

let str = prompt("Enter a string:");
console.log(isPalindrome(str));