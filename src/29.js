// 29.  Divide Two Integers

function divide(dividend, divisor) {
  // Edge cases
  if (dividend === -Math.pow(2, 31) && divisor === -1) {
    return Math.pow(2, 31) - 1; // 32-bit integer max
  }

  // Determine the sign of the result
  const isNegative = dividend < 0 !== divisor < 0;

  // Work with positive values
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);

  let quotient = 0;

  // Subtract divisor multiples from dividend
  while (absDividend >= absDivisor) {
    let tempDivisor = absDivisor;
    let multiple = 1;

    // Double the divisor until it is larger than dividend
    while (tempDivisor << 1 <= absDividend) {
      tempDivisor <<= 1;
      multiple <<= 1;
    }

    // Subtract the current largest multiple of divisor
    absDividend -= tempDivisor;
    quotient += multiple;
  }

  return isNegative ? -quotient : quotient;
}
