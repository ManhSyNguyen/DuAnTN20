

import http from "./axiosHttp";

const API_URL = "v1/api/";

const getAll = () => {
    return http.get(API_URL + "productdetails");
};

const get = idproduct => {
    return http.get(API_URL + `productdetails/${idproduct}`);
};

const create = data => {
    return http.post(API_URL + "productdetail", data);
};

const update = (id, data) => {
    return http.put(API_URL + `productdetail/${id}`, data);
};

const remove = id => {
    return http.delete(`productdetail/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};

