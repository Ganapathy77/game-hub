import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd04ef1fa502c4d85a6ec3001f0e4b859'
    }
})