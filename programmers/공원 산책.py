def solution(park, routes):    
    directionMap = {
        'E': [0, 1],
        'W': [0, -1],
        'S': [1, 0],
        'N': [-1, 0]
    }
    
    n = len(park)
    m = len(park[0])
    currentY = 0
    currentX = 0
    
    for i in range(n):
        for j in range(m):
            if park[i][j] == 'S':
                currentY = i
                currentX = j
    
    for route in routes:
        [direction, length] = route.split(" ")
        
        [dy, dx] = directionMap[direction]
        isRightRoute = True
        
        for cnt in range(1, int(length) + 1):
            newY = currentY + dy * cnt
            newX = currentX + dx * cnt
            
            if not (newY >= 0 and newY < n and newX >= 0 and newX < m and park[newY][newX] != 'X'):
                isRightRoute = False
                break
        
        if isRightRoute:
            currentY += dy * int(length)
            currentX += dx * int(length)
    
    return [currentY, currentX]