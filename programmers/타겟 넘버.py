def solution(numbers, target):
    answer = 0
    length = len(numbers)
    
    def dfs(idx, sum):
        nonlocal answer
        if idx == length:
            if sum == target:
                return 1
            return 0
        
        dfs(idx + 1, sum + numbers[idx])
        dfs(idx + 1, sum - numbers[idx])
        
        return answer
    
    dfs(0, 0)
    
    return answer