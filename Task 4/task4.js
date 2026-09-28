function countVowels(str) {
    let vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

let str = prompt("Enter a string:");
console.log(countVowels(str));