# 2081. Sum of k-Mirror Numbers
# Python3 Solution

class Solution:
    def kMirror(self, base: int, count: int) -> int:
        sum_of_k_mirrors = 0
        length = 1

        while True:
            start = 10 ** ((length - 1) // 2)
            end = 10 ** ((length + 1) // 2)

            for i in range(start, end):
                palindrome = i

                j = i if length % 2 == 0 else i // 10
                while j > 0:
                    palindrome = palindrome * 10 + j % 10
                    j //= 10

                base_representation = self.to_base(palindrome, base)

                if self.is_palindrome(base_representation):
                    sum_of_k_mirrors += palindrome
                    count -= 1
                    if count == 0:
                        return sum_of_k_mirrors

            length += 1

    def to_base(self, num: int, base: int) -> str:
        chars = []
        while num > 0:
            chars.append(str(num % base))
            num //= base
        return ''.join(reversed(chars))

    def is_palindrome(self, s: str) -> bool:
        return s == s[::-1]
