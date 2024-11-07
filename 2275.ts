// 2275 - Largest Combination With Bitwise AND Greater Than Zero
// https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/

// JS Solution

// Case Study
// The problem requires finding the largest combination of numbers in an array such that the bitwise AND of the selected numbers is greater than zero.To solve this, we analyze each bit position in all numbers.For each bit position, we count how many numbers have that bit set to 1. The largest count at any bit position represents the maximum size of a subset where all numbers have that bit set, which guarantees a non - zero bitwise AND.

//Approach
// 1. Initialize an array to count the number of 1s at each bit position across all numbers.
// 2. For each number, check each bit position(up to 24 bits).
// 3. If a bit is set, increment the count for that bit.
// 4. Return the maximum count across all bit positions as it represents the largest subset size with a bitwise AND greater than zero.


function largestCombination(candidates) {
    const bitCounts = Array(24).fill(0);

    for (let num of candidates) {
        // Check each bit position
        for (let bit = 0; bit < 24; bit++) {
            if ((num & (1 << bit)) !== 0) {
                bitCounts[bit]++;
            }
        }
    }

    return Math.max(...bitCounts);
}

// Sample call
const candidates = [16, 17, 71, 62, 12];
console.log(largestCombination(candidates)); // Output: 3
