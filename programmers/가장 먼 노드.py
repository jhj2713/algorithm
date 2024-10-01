import heapq

def solution(n, edge):
    answer = 0
    
    INF = 999999
    dist = [INF for _ in range(n + 1)]
    graph = [[] for _ in range(n + 1)]
    for [start, end] in edge:
        graph[start].append(end)
        graph[end].append(start)
    
    dist[0] = 0
    dist[1] = 0
    q = [[0, 1]] # [edge_count, node]
    while q:
        [edge_cnt, node] = heapq.heappop(q)
        if edge_cnt > dist[node]:
            continue
        
        for vertex in graph[node]:
            new_cnt = edge_cnt + 1
            if dist[vertex] > new_cnt:
                dist[vertex] = new_cnt
                heapq.heappush(q, [new_cnt, vertex])
    
    max_cnt = max(dist)
    answer = dist.count(max_cnt)
    return answer