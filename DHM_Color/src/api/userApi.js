



import axios from "axios";

const USER_API_BASE_URL = "http://localhost:5000/";
class UserService {
    getUser() {
        return axios.get(USER_API_BASE_URL + 'secure/auth/admin/add');
    }
    getUserById(user_id) {
        return axios.get(USER_API_BASE_URL + 'secure/auth/admin/add' + '/' + user_id);
    }
    createUser(user) {
        return axios.post(USER_API_BASE_URL + 'secure/auth/admin/add', user);
    }
    loginUser(authReq) {
        return axios.post(USER_API_BASE_URL + 'rest/auth/authenticate', authReq);
    }
}
export default new UserService()