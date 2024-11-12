// 32. Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/

function longestValidParentheses(s) {
  let maxLength = 0;
  const stack = [-1]; // Initialize stack with -1 as base index

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i); // Push the index of '('
    } else {
      stack.pop(); // Pop for ')'
      if (stack.length === 0) {
        stack.push(i); // Push current index as base for next valid substring
      } else {
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      }
    }
  }
  return maxLength;
}
