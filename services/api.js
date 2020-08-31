import http from 'axios'

export const getsTVShows = async () => {
    const {data} = await http.get('http://api.tvmaze.com/schedule/full')
    return data.slice(0, 12)
}
export const getTvShow = async (showId) => {
    let response = {};
    try {
        response = await http.get(`http://api.tvmaze.com/shows/${showId}`);
        return response.data;
    } catch (error) {  
        return error.response.data;
    }
}