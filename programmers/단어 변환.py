def solution(begin, target, words):
    INF = 999999
    answer = INF
    visited = [False for _ in range(len(words))]
    
    def dfs(current_word, cnt):
        nonlocal answer
        nonlocal visited
        
        if (current_word == target):
            answer = min(answer, cnt)
            return
        
        for i in range(len(words)):
            if visited[i]:
                continue
            word_list = list(words[i])
            word_count = 0
            for c in current_word:
                if c in word_list:
                    idx = word_list.index(c)
                    word_list[idx] = ""
                    word_count += 1
            if len(word_list) == word_count + 1:
                visited[i] = True
                dfs(words[i], cnt + 1)
                visited[i] = False
    
    dfs(begin, 0)
    
    if answer == INF:
        answer = 0
    
    return answer