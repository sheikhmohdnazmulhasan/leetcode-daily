// 2116. Check if a Parentheses String Can Be Valid

function canBeValid(s: string, locked: string): boolean {
  let n: number = s.length;

  if (n % 2 !== 0) {
    return false;
  }

  let openBrackets: number = 0;
  for (let i: number = 0; i < n; ++i) {
    if (s[i] === "(" || locked[i] === "0") {
      ++openBrackets;
    } else if (openBrackets > 0) {
      --openBrackets;
    } else {
      return false;
    }
  }

  let closeBrackets: number = 0;
  for (let i: number = n - 1; i >= 0; --i) {
    if (s[i] === ")" || locked[i] === "0") {
      ++closeBrackets;
    } else if (closeBrackets > 0) {
      --closeBrackets;
    } else {
      return false;
    }
  }

  return true;
}
