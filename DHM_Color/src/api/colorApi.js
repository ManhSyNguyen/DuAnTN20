import http from "./axiosHttp";

const USER_API_BASE_URL = "v1/api";

const getAll = () => {
    return http.get(USER_API_BASE_URL + "/colors");
};

const get = id => {
    return http.get(USER_API_BASE_URL + `/colors/${id}`);
};

const create = data => {
    return http.post(USER_API_BASE_URL + "/color", data);
};

const update = (id, data) => {
    return http.put(USER_API_BASE_URL + `/color/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(USER_API_BASE_URL + `/color/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};