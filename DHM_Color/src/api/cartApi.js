




import http from "./axiosHttp";

const getAll = () => {
    return http.get("/carts");
};

const get = id => {
    return http.get(`/carts/${id}`);
};

const create = data => {
    return http.post("/carts", data);
};

const update = (id, data) => {
    return http.put(`/carts/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/carts/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};