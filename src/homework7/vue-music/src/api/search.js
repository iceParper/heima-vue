import request from '@/utils/request'
export const searchHotList = params => {
    return request({
        url: '/search/hot',
        params,
    })
}
// 搜索结果列表
export const searchResult = params => {
    return request({
        url: '/cloudsearch',
        params,
    })
}
