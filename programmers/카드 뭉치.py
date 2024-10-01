def solution(cards1, cards2, goal):
    firstIdx = 0
    secondIdx = 0
    for word in goal:
        if firstIdx < len(cards1) and cards1[firstIdx] == word:
            firstIdx += 1
        elif secondIdx < len(cards2) and cards2[secondIdx] == word:
            secondIdx += 1
        else:
            return "No"
    
    return "Yes"