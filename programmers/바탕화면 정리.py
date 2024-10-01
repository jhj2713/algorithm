def solution(wallpaper):
    answer = []
    
    minY = 99
    minX = 99
    maxY = 0
    maxX = 0
    
    n = len(wallpaper)
    m = len(wallpaper[0])
    
    for i in range(n):
        for j in range(m):
            if wallpaper[i][j] == "#":
                minY = min(minY, i)
                minX = min(minX, j)
                maxY = max(maxY, i)
                maxX = max(maxX, j)
    
    answer = [minY, minX, maxY + 1, maxX + 1]
    
    return answer