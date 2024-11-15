// 1574. Shortest Subarray to be Removed to Make Array Sorted
// https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/

// JavaScript Solution

function findLengthOfShortestSubarray(arr) {
  const n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left < n - 1 && arr[left] <= arr[left + 1]) {
    left++;
  }

  if (left === n - 1) return 0;

  while (right > 0 && arr[right] >= arr[right - 1]) {
    right--;
  }

  let minLengthToRemove = Math.min(n - left - 1, right);

  // Try merging the left and right parts to find the shortest subarray to remove
  let i = 0;
  let j = right;
  while (i <= left && j < n) {
    if (arr[i] <= arr[j]) {
      minLengthToRemove = Math.min(minLengthToRemove, j - i - 1);
      i++;
    } else {
      j++;
    }
  }

  return minLengthToRemove;
}
