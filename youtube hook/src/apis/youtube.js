import axios from 'axios'

const KEY = 'AIzaSyB4EMjxjqLYHOF3310wC8Do_LVza-Y4Np8'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})