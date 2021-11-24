/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]

    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    } else {
      map.set(diff, i)
    }
  }

  return []
}

const test1 = [2, 7, 11, 15]
const test2 = [3, 2, 4]

console.log(twoSum(test1, 9))
console.log(twoSum(test2, 6))
