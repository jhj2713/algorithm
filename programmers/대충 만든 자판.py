def solution(keymap, targets):
    answer = []
    
    key_dict = {}
    
    for keys in keymap:
        for idx in range(len(keys)):
            key = keys[idx]
            if key in key_dict:
                key_dict[key] = min(key_dict[key], idx + 1)
            else:
                key_dict[key] = idx + 1
    
    for target in targets:
        sum = 0
        for key in target:
            if key not in key_dict:
                sum = -1
                break
            sum += key_dict[key]
        answer.append(sum)
    
    return answer