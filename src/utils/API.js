import axios from 'axios';


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";


const API = {

    saveUser: function(userData) {
        return axios.post(BASE_URL + '/api/users', userData)
    },

    saveParty: function(partyData) {
        return axios.post(BASE_URL + '/api/parties', partyData)
    },

    getUserList: function(){
        return axios.get(BASE_URL + '/api/users');
    }

}


export default API
