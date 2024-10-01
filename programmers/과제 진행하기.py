def format_time(time):
        [hour, minute] = time.split(":")
        return int(hour) * 60 + int(minute)
    
def solution(plans):
    answer = []
    
    formatted_plans = list(map(lambda x: [x[0], format_time(x[1]), int(x[2])], plans))
    sorted_plans = sorted(formatted_plans, key=lambda x: x[1])
    
    prev_plan = sorted_plans[0] # (과제명, 시작 시간, 남은 시간)
    remain_q = [] # (과제명, 남은 시간)
    for idx in range(1, len(sorted_plans)):
        plan = sorted_plans[idx]
        
        [name, start_time, remain_time] = plan
        [prev_name, prev_start_time, prev_remain_time] = prev_plan
        if prev_start_time + prev_remain_time > start_time:
            time = prev_remain_time - (start_time - prev_start_time)
            remain_q.append([prev_name, time])
            prev_plan = plan
        else:
            answer.append(prev_name)
            time = start_time - (prev_start_time + prev_remain_time)
            while time > 0 and remain_q:
                [remain_name, remain_remain_time] = remain_q.pop(-1)
                if remain_remain_time > time:
                    remain_remain_time -= time
                    time = 0
                    remain_q.append([remain_name, remain_remain_time])
                else:
                    time -= remain_remain_time
                    answer.append(remain_name)
            prev_plan = plan
    
    answer.append(prev_plan[0])
    while remain_q:
        answer.append(remain_q.pop(-1)[0])
    
    return answer