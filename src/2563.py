# 2563. Count the Number of Fair Pairs
# https://leetcode.com/problems/count-the-number-of-fair-pairs/

# Python3 Solution

class Solution:
  def countFairPairs(self, nums: list[int], lower: int, upper: int) -> int:
    nums.sort()

    def countLess(summ: int) -> int:
      res = 0
      i = 0
      j = len(nums) - 1
      while i < j:
        while i < j and nums[i] + nums[j] > summ:
          j -= 1
        res += j - i
        i += 1
      return res

    return countLess(upper) - countLess(lower - 1)