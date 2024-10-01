def solution(board, h, w):
    answer = 0
    
    val = board[h][w]
    n = len(board)
    coordinates = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    for [dh, dw] in coordinates:
        newH = dh + h
        newW = dw + w
        if newH >= 0 and newH < n and newW >= 0 and newW < n:
            if board[newH][newW] == val:
                answer += 1
    
    return answer