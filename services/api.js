import http from 'axios'

export const getsTVShows = async () => {
    const {data} = await http.get('http://api.tvmaze.com/schedule/full')
    return data.slice(0, 12)
}