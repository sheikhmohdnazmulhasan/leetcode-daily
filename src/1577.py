from heapq import heappop, heappush
from itertools import pairwise
from math import inf
from typing import List

class Solution:
    def minimumTime(self, grid: List[List[int]]) -> int:
        if grid[0][1] > 1 and grid[1][0] > 1:
            return -1
      
        # Get dimensions of the grid
        rows, cols = len(grid), len(grid[0])
      
        # Initialize distance matrix with infinity
        distance = [[inf] * cols for _ in range(rows)]
        distance[0][0] = 0  # Start point has distance 0
      
        # Priority queue for the BFS: (time, row, col)
        priority_queue = [(0, 0, 0)]
      
        # Directions for exploring neighbors (up, right, down, left)
        directions = (-1, 0, 1, 0, -1)
      
        # Explore the grid until we reach the bottom-right corner
        while priority_queue:
            time, row, col = heappop(priority_queue)
          
            # If we reached the end, return the distance
            if row == rows - 1 and col == cols - 1:
                return time
          
            # Check all neighboring squares
            for delta_row, delta_col in pairwise(directions):
                new_row, new_col = row + delta_row, col + delta_col
                # Ensure we are within grid boundaries
                if 0 <= new_row < rows and 0 <= new_col < cols:
                    new_time = time + 1  # Increment time by one step
                    # If we reach earlier than the grid cell's value, we have to wait
                    if new_time < grid[new_row][new_col]:
                        new_time = grid[new_row][new_col] + (grid[new_row][new_col] - new_time) % 2
                    # If this path is faster, update the distance and push to the queue
                    if new_time < distance[new_row][new_col]:
                        distance[new_row][new_col] = new_time
                        heappush(priority_queue, (new_time, new_row, new_col))
      
        # If we never reached the end, we can not finish the task
        return -1