def solution(name, yearning, photo):
    answer = []
    
    yearningDict = {}
    for idx in range(len(name)):
        yearningDict[name[idx]] = yearning[idx]
    
    for pho in photo:
        sumYearning = 0
        for name in pho:
            if name in yearningDict:
                sumYearning += yearningDict[name]
        answer.append(sumYearning)
    
    return answer