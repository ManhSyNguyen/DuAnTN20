import http from "./axiosHttp";

const USER_API_BASE_URL = "v1/api";
// class CateService {
const getAll = () => {
    return http.get(USER_API_BASE_URL + "/categorys");
};

const get = id => {
    return http.get(USER_API_BASE_URL + `/categorys/${id}`);
};

const create = data => {
    debugger
    return http.post(USER_API_BASE_URL + "/category", data);
};

const update = (id, data) => {
    return http.put(USER_API_BASE_URL + `/categorys/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(USER_API_BASE_URL + `/categorys/${id}`);
}

export default {
    getAll,
    get,
    create,
    update,
    remove,
};