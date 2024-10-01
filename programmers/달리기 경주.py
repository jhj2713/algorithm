def solution(players, callings):
    idxDict = {}
    for idx in range(len(players)):
        idxDict[players[idx]] = idx
    
    for name in callings: 
        playerIdx = idxDict[name]
        prevName = players[playerIdx - 1]
        players[playerIdx - 1] = name
        players[playerIdx] = prevName
        
        idxDict[name] = playerIdx - 1
        idxDict[prevName] = playerIdx
    
    return players