def solution(arr):
    answer = []
    prevValue = arr[0]
    answer.append(prevValue)
    
    for idx in range(1, len(arr)):
        if prevValue != arr[idx]:
            answer.append(arr[idx])
            prevValue = arr[idx]
            continue
    
    return answer