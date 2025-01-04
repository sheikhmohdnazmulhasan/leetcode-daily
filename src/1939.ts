// 1930. Unique Length-3 Palindromic Subsequences
// https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
// TS Solution with O(n) time complexity

import { Set } from "typescript-collections";

function countPalindromicSubsequence(s: string): number {
  let countPaliSubseq = 0;

  for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {
    let currentChar = String.fromCharCode(c);

    let firstIndex = s.indexOf(currentChar);
    let lastIndex = s.lastIndexOf(currentChar);

    let uniqueChars = new Set<string>();

    for (let i = firstIndex + 1; i < lastIndex; i++) {
      uniqueChars.add(s[i]);
    }

    countPaliSubseq += uniqueChars.size();
  }

  return countPaliSubseq;
}
