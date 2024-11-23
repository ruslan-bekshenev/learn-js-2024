/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if (diff in map) {
            return [map[diff], i]
        }

        map[nums[i]] = i
    }

    return []
    // const result = []
    // for (let i = 0; i < nums.length; i++) {
    //     let sum = target - nums[i]
    //     let second = nums.findIndex(item => sum === item)

    //     if (nums[i] + nums[second] !== target) {
    //         continue
    //     }

    //     if (second > -1 && i !== second) {
    //         result.push(i)
    //         result.push(second)
    //         break;
    //     }
    // }
    // return result
};


var twoSum2 = function(nums, target) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        let sum = target - nums[i]
        let second = nums.findIndex(item => sum === item)

        if (nums[i] + nums[second] !== target) {
            continue
        }

        if (second > -1 && i !== second) {
            result.push(i)
            result.push(second)
            break;
        }
    }
    return result
};