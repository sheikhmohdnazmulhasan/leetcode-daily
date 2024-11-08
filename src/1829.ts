// 1829 - Maximum XOR for Each Query
// https://leetcode.com/problems/maximum-xor-for-each-query/

// TS solution

function getMaximumXor(nums: number[], maximumBit: number): number[] {
    const n = nums.length;
    const maxVal = (1 << maximumBit) - 1;
    let xorAll = 0;

    // Calculate the XOR of the entire array
    for (let num of nums) {
        xorAll ^= num;
    }

    const answer = new Array(n);

    for (let i = 0; i < n; i++) {
        answer[i] = xorAll ^ maxVal;
        // Remove the last element from xorAll as per the query requirements
        xorAll ^= nums[n - 1 - i];
    }

    return answer;
}

// Example call
const nums = [0, 1, 1, 3];
const maximumBit = 2;
console.log(getMaximumXor(nums, maximumBit)); // Output: [0, 3, 2, 3]
