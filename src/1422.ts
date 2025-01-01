// 1422. Maximum Score After Splitting a String
// TS Solution

function maxScore(s: string): number {
  const stringLength = s.length;
  let maxResult = 0;
  let currentScore = 0;

  if (s[0] === "0") {
    currentScore++;
  }

  for (let i = 1; i < stringLength; i++) {
    if (s[i] === "1") {
      currentScore++;
    }
  }

  maxResult = Math.max(maxResult, currentScore);

  for (let i = 1; i < stringLength - 1; i++) {
    if (s[i] === "0") {
      currentScore++;
    } else if (s[i] === "1") {
      currentScore--;
    }
    maxResult = Math.max(maxResult, currentScore);
  }

  // return the maximum score found, which corresponds to the maximum number of 1s in the string
  return maxResult;
}
