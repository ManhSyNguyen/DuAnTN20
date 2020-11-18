import http from "./axiosHttp";

const getAll = () => {
    return http.get("/colors");
};

const get = id => {
    return http.get(`/colors/${id}`);
};

const create = data => {
    return http.post("/colors", data);
};

const update = (id, data) => {
    return http.put(`/colors/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/colors/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};