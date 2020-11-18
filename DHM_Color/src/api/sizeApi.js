import http from "./axiosHttp";

const getAll = () => {
    return http.get("/sizes");
};

const get = id => {
    return http.get(`/sizes/${id}`);
};

const create = data => {
    return http.post("/sizes", data);
};

const update = (id, data) => {
    return http.put(`/sizes/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/sizes/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};