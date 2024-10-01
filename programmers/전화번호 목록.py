def solution(phone_book):
    prefix_dict = {}
    
    phone_book = list(reversed(sorted(phone_book, key=lambda x: len(x))))
    
    for phone in phone_book:
        if phone in prefix_dict:
            return False
        prefix = ""
        for p in phone:
            prefix += p
            prefix_dict[prefix] = 1
    
    return True