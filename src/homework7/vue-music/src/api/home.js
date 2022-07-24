import request from '@/utils/request'
export const recommendSongList = params => {
    return request({
        url: '/personalized',
        params,
    })
}
export const newsSongList = params => {
    return request({
        url: '/personalized/newsong',
        params,
    })
}
