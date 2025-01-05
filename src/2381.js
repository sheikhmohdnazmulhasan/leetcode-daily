// 2381. Shifting Letters II
// JS Solution

function shiftingLetters(s, shifts) {
  const n = s.length;
  const shiftArray = new Array(n).fill(0);

  // Calculate cumulative shifts
  for (const [start, end, direction] of shifts) {
    const shift = direction === 1 ? 1 : -1;
    shiftArray[start] += shift;
    if (end + 1 < n) {
      shiftArray[end + 1] -= shift;
    }
  }

  // Calculate prefix sum
  for (let i = 1; i < n; i++) {
    shiftArray[i] += shiftArray[i - 1];
  }

  // Apply shifts to the string
  const result = s
    .split("")
    .map((char, index) => {
      const code = char.charCodeAt(0) - 97; // 'a' is 97
      const newCode = (((code + shiftArray[index]) % 26) + 26) % 26;
      return String.fromCharCode(newCode + 97);
    })
    .join("");

  return result;
}
