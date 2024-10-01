import heapq

def solution(scoville, K):
    answer = 0
    
    q = []
    for s in scoville:
        heapq.heappush(q, s)
    
    while len(q) >= 2:
        min1 = heapq.heappop(q)
        if min1 >= K:
            break
        
        min2 = heapq.heappop(q)
        sum = min1 + (min2 * 2)
        heapq.heappush(q, sum)
        answer += 1
    
    min = heapq.heappop(q)
    if min < K:
        return -1
    
    return answer