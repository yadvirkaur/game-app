import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'9349752c58d4481495a2d5a344b7a60b'
    }
})