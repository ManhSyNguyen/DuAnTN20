
import http from "./axiosHttp";

const USER_API_BASE_URL = "v1/api";
const getAll = () => {
    return http.get(USER_API_BASE_URL + "/productdetails");
};

const get = id => {
    return http.get(USER_API_BASE_URL + `/productdetails/${id}`);
};

const create = data => {
    return http.post(USER_API_BASE_URL + "/productdetail", data);
};

const update = (id, data) => {
    return http.put(USER_API_BASE_URL + `/productdetail/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(USER_API_BASE_URL + `/productdetail/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,

};

