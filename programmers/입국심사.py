def solution(n, times):
    answer = 9999999999999
    sorted_times = sorted(times, key=lambda x: x)
    
    # 시간을 기준으로 이분 탐색
    left, right = (0, sorted_times[-1] * n)
    
    while left <= right:
        mid = (left + right) // 2
        remain_n = n
        for time in sorted_times:
            if remain_n <= 0:
                break
            cnt = mid // time
            remain_n -= cnt
        
        if remain_n <= 0:
            answer = min(answer, mid)
            right = mid - 1
        else:
            left = mid + 1
    
    return answer