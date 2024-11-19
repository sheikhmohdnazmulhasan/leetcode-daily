// 2461. Maximum Sum of Distinct Subarrays With Length K

function maximumSubarraySum(nums, k) {
  let maxSum = 0;
  let currentSum = 0;
  let windowSet = new Set();
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    while (windowSet.has(nums[end]) || windowSet.size >= k) {
      currentSum -= nums[start];
      windowSet.delete(nums[start]);
      start++;
    }

    currentSum += nums[end];
    windowSet.add(nums[end]);

    // Check if the window size equals k and update maxSum
    if (end - start + 1 === k) {
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}
