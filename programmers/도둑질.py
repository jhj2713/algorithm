def solution(money):
    # 첫 번째 원소 선택 O
    dp_1 = []
    dp_1.append(money[0])
    dp_1.append(money[1])
    dp_1.append(money[0] + money[2])
    
    for idx in range(3, len(money)):
        dp_1.append(max(dp_1[idx - 2], dp_1[idx - 3]) + money[idx])
    
    # 첫 번째 원소 선택 X
    dp_2 = []
    dp_2.append(0)
    dp_2.append(money[1])
    dp_2.append(money[2])
    
    for idx in range(3, len(money)):
        dp_2.append(max(dp_2[idx - 2], dp_2[idx - 3]) + money[idx])
    
    max_1 = max(dp_1[:-1])
    max_2 = max(dp_2)

    answer = max(max_1, max_2)
    
    return answer