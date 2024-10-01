def solution(n, m, section):
    answer = 0
    
    idx_dict = {}
    for s in section:
        idx_dict[s] = 1
    
    prev_sum = 0
    for i in range(1, n+1):
        if prev_sum != 0 or i in idx_dict:
            prev_sum += 1
        
        if prev_sum == m:
            prev_sum = 0
            answer += 1
    
    if prev_sum > 0:
        answer += 1
    
    return answer