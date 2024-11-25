# 773. Sliding Puzzle

from heapq import heappop, heappush
from typing import List

class Solution:
    def slidingPuzzle(self, board: List[List[int]]) -> int:
        rows, cols = 2, 3
        sequence = []
        start_state, target_state = '', '123450'

        for i in range(rows):
            for j in range(cols):
                start_state += str(board[i][j])
                if board[i][j] != 0:
                    sequence.append(board[i][j])

        def is_solvable(seq: List[int]) -> bool:
            """ Check if the board configuration is solvable """
            inv_count = sum(seq[i] > seq[j] for i in range(len(seq)) for j in range(i, len(seq)))
            return inv_count % 2 == 0

        def heuristic(s: str) -> int:
            """ Calculate the heuristic value for A* using Manhattan distance """
            total_distance = 0
            for i, char in enumerate(s):
                if char != '0':
                    num = ord(char) - ord('1')
                    total_distance += abs(i // cols - num // cols) + abs(i % cols - num % cols)
            return total_distance
        
        if not is_solvable(sequence):
            return -1

        queue = [(heuristic(start_state), start_state)]
        distances = {start_state: 0}

        while queue:
            _, state = heappop(queue)
            if state == target_state:
                return distances[state]  # Found solution

            zero_position = state.index('0')  
            i, j = divmod(zero_position, cols)
            state_list = list(state)

            for delta_row, delta_col in [[0, -1], [0, 1], [1, 0], [-1, 0]]:
                x, y = i + delta_row, j + delta_col
                if 0 <= x < rows and 0 <= y < cols:
                    new_zero_pos = x * cols + y
                    state_list[zero_position], state_list[new_zero_pos] = state_list[new_zero_pos], state_list[zero_position]
                    next_state = ''.join(state_list)
                    state_list[zero_position], state_list[new_zero_pos] = state_list[new_zero_pos], state_list[zero_position]
                    if next_state not in distances or distances[next_state] > distances[state] + 1:
                        distances[next_state] = distances[state] + 1
                        heappush(queue, (distances[next_state] + heuristic(next_state), next_state))
        return -1