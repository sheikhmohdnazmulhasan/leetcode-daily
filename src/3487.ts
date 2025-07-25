// 3487. Maximum Unique Subarray Sum After Deletion
// https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/

// Given an array of integers, find the maximum sum of a subarray where no two elements are the same.

// Time Complexity: O(n)
// Space Complexity: O(n)
// Runtime: 0ms
// Memory: 58.2MB

function maxSum(nums: number[]): number {
  const maxElement = Math.max(...nums)

  if (maxElement <= 0) {
    return maxElement
  }

  const uniqueElementsSet = new Set<number>()
  let sum: number = 0

  for (const number of nums) {
    if (number < 0 || uniqueElementsSet.has(number)) {
      continue
    }

    sum += number
    uniqueElementsSet.add(number)
  }

  return sum
}

console.log(maxSum([1, 2, 3, 4, 5]))
// 15
