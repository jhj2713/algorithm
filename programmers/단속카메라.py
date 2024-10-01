def solution(routes):
    answer = 1
    
    sorted_routes = list(sorted(routes, key=lambda x: (x[0], x[1])))
    prevEndPoint = sorted_routes[0][1]
    
    for route in sorted_routes:
        if route[0] <= prevEndPoint:
            prevEndPoint = min(route[1], prevEndPoint)
            continue
        
        answer += 1
        prevEndPoint = route[1]
    
    return answer