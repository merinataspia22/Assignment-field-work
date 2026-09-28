function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let value = target - nums[i];

        if (map.has(value)) {
            return [map.get(value), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

let input = prompt("Enter numbers separated by spaces:");
let nums = input.split(" ").map(Number);
let target = parseInt(prompt("Enter target:"));

console.log(twoSum(nums, target));