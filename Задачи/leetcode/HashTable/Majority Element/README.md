Approach
========

Let's define the number of elements we need by the condition, it is equal to nums.length/2

    const majorityNumber = Math.ceil(nums.length / 2)

The solution is to keep a tally in map. The key will be a number, and the value is the number of times the number was encountered. We go through the array and add to the map the numbers that have not been encountered before. If the number is already in the map, then we update the number of times it has been encountered by + 1. And then we check if the number of encounters is equal to the required number, which is nums.length/2

    for (let num of nums) {
        const currentNum = map.get(num)
    
        if (currentNum) {
            map.set(num, currentNum + 1)
    
            if (currentNum + 1 >= majorityNumber) return num
        } else {
            map.set(num, 1)
        }
    }

Complexity
==========

*   Time complexity:  
    O(n)

*   Space complexity:  
    O(n)


Code
====

    function majorityElement(nums: number[]): number {
        if (nums.length === 1) return nums[0]
    
        const map = new Map()
        const majorityNumber = Math.ceil(nums.length / 2)
    
        for (let num of nums) {
            const currentNum = map.get(num)
    
            if (currentNum) {
                map.set(num, currentNum + 1)
    
                if (currentNum + 1 >= majorityNumber) return num
            } else {
                map.set(num, 1)
            }
        }
    };