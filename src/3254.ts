// 3254. Find the Power of K - Size Subarrays I
// https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/

// TypeScript Solution

function resultsArray(nums: number[], k: number): number[] {
    const n = nums.length;
    const f: number[] = Array(n).fill(1);
    for (let i = 1; i < n; ++i) {
        if (nums[i] === nums[i - 1] + 1) {
            f[i] = f[i - 1] + 1;
        }
    }
    const ans: number[] = [];
    for (let i = k - 1; i < n; ++i) {
        ans.push(f[i] >= k ? nums[i] : -1);
    }
    return ans;
}