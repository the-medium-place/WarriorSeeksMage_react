import axios from 'axios';


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";


const API = {
    getUserList: function(){
        return axios.get(BASE_URL + '/api/users');
    }

}


export default API
