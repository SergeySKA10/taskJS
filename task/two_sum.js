const twoSum = function(nums, target) {
    const result = [];
    const indexes = {};
    
    for (let i = 0; i < nums.length; i++) {
        const x = target - nums[i];
        if (indexes[x] === undefined) {
            indexes[nums[i]] = i;
        } else {
            result.push(indexes[x], i)
        }
    }

    return result;
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

