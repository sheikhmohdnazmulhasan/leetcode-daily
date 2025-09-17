function replaceNonCoprimes(nums: number[]): number[] {
  // Calculates the Greatest Common Divisor (GCD) using Euclidean
  const calculateGCD = (a: number, b: number): number => {
    if (b === 0) {
      return a
    }
    return calculateGCD(b, a % b)
  }
  const stack: number[] = []

  // Process each number in the input array
  for (const currentNumber of nums) {
    stack.push(currentNumber)

    while (stack.length > 1) {
      const lastElement = stack[stack.length - 1]
      const secondLastElement = stack[stack.length - 2]

      const gcdValue = calculateGCD(lastElement, secondLastElement)

      // If they are coprime (GCD = 1), stop merging
      if (gcdValue === 1) {
        break
      }

      stack.pop()
      stack.pop()

      // Calculate LCM using formula: LCM(a,b) = (a * b) / GCD(a,b)
      // Use bitwise OR with 0 to convert to integer
      const lcmValue = ((lastElement * secondLastElement) / gcdValue) | 0

      // Push the LCM back to stack
      stack.push(lcmValue)
    }
  }

  return stack
}
