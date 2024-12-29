// 1639. Number of Ways to Form a Target String Given a Dictionary
// TS Solution

function numWays(words: string[], target: string): number {
  const targetLength = target.length;
  const wordLength = words[0].length;

  const dp = new Array(targetLength + 1)
    .fill(0)
    .map(() => new Array(wordLength + 1).fill(0));

  const MOD = 1e9 + 7;

  for (let j = 0; j <= wordLength; ++j) {
    dp[0][j] = 1;
  }

  const charCount = new Array(wordLength)
    .fill(0)
    .map(() => new Array(26).fill(0));

  for (const word of words) {
    for (let j = 0; j < wordLength; ++j) {
      ++charCount[j][word.charCodeAt(j) - "a".charCodeAt(0)];
    }
  }

  for (let i = 1; i <= targetLength; ++i) {
    for (let j = 1; j <= wordLength; ++j) {
      dp[i][j] =
        (dp[i][j - 1] +
          dp[i - 1][j - 1] *
            charCount[j - 1][target.charCodeAt(i - 1) - "a".charCodeAt(0)]) %
        MOD;
    }
  }

  return dp[targetLength][wordLength];
}
