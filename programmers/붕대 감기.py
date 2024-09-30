def solution(bandage, health, attacks):
    answer = health
    attackDict = {}
    
    for attack in attacks:
        attackDict[attack[0]] = attack[1]
    
    maxAttackTime = max(attackDict.keys())
    [bandageTime, recovery, additionalRecovery] = bandage
    time = 0
    sumSuccess = 0
    
    while time <= maxAttackTime:
        if time in attackDict.keys():
            answer -= attackDict[time];
            sumSuccess = 0
        else:
            answer += recovery
            if answer > health:
                answer = health
            sumSuccess += 1
        
        if answer <= 0:
            return -1
        
        if sumSuccess == bandageTime:
            answer += additionalRecovery
            if answer > health:
                answer = health
            sumSuccess = 0
        
        time += 1
    
    return answer