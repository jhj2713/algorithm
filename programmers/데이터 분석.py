def solution(data, ext, val_ext, sort_by):
    dataIdx = ["code", "date", "maximum", "remain"]
    extIdx = dataIdx.index(ext)
    filteredData = list(filter(lambda d: d[extIdx] < val_ext, data))
    
    sortIdx = dataIdx.index(sort_by)
    sortedData = sorted(filteredData, key=lambda d: d[sortIdx])
    
    return sortedData