def solution(tickets):
    answer = []
    length = len(tickets) + 1
    
    routeDict = {}
    for idx in range(len(tickets)):
        [start, end] = tickets[idx]
        if start in routeDict:
            routeDict[start].append([idx, end])
        else:
            routeDict[start] = [[idx, end]]
    
    for key in routeDict.keys():
        routeDict[key] = sorted(routeDict[key], key=lambda x: x[1])
    
    visited = [False for _ in range(len(tickets))]
    
    def dfs(point, route):
        nonlocal answer
        nonlocal visited
        nonlocal routeDict
        nonlocal length
        
        if len(route) == length:
            if len(answer) == 0:
                answer = route
            return
        
        if not (point in routeDict):
            return
        
        for [newIdx, newPoint] in routeDict[point]:
            if visited[newIdx]:
                continue
            visited[newIdx] = True
            newRoute = list(map(lambda x:x, route))
            newRoute.append(newPoint)
            dfs(newPoint, newRoute)
            visited[newIdx] = False
    
    dfs("ICN", ["ICN"])
    
    return answer