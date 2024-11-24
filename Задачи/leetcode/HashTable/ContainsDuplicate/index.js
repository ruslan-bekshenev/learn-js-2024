/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const s = new Set(nums);
    return s.size !== nums.length
};

var containsDuplicate2 = function(nums) {
    const values = Object.keys(nums.reduce((acc, item) => {
        if (!acc[item]) {
            acc[item] = 1
        } else {
            acc[item]++
        }

        return acc
    }, {}))

    return values.length !== nums.length
}