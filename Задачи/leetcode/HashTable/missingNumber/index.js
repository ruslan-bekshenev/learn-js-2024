/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const map = {}
    const sortedObject = {...nums.sort((a,b) => a > b ? 1 : -1)}

    for (let [key, value] of Object.entries(nums)) {
        if (+key !== value) {
            return +key
        }
    }

    return nums.length
};

var missingNumber2 = function(nums) {
    let set = new Set(nums);
    for(let i = 0; i <=set.size; i++) {
        if(!set.has(i)) return i;
    }
    return set.size;
};