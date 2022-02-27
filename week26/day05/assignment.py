
# TARGET SUM :
class Solution:
    def findTargetSumWays(self, nums: list[int], target: int) -> int:
        dp = {}
    
        def backtrack(i, total):
            if i == len(nums):
               return 1 if total == target else 0
            if (i, total) in dp:
                return dp[(i, total)]
            
            dp[(i,total)] = (backtrack(i + 1, total + nums[i]))+backtrack(i + 1, total - nums[i])
        
            return dp[(i,total)]
        return backtrack(0,0)
                    
                    
#counting bits    

class Solution:
    def countBits(self, n: int) -> list[int]: 
        dp = [0] * (n + 1)
        offset = 1
        
        for i in range(1, n + 1):
            if offset * 2 == i:
                offset = i
            dp[i] = 1 + dp[i - offset]
        return dp               