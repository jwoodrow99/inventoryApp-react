import axios from "axios";
import queryString from "query-string";
import Cookie from 'js-cookie';

const axiosClient = axios.create({
  baseURL : "http://localhost:5000"
});

const apiRequest = (method, url, query = {}, body = {}) => {
    return axiosClient({
        method,
        url: `${url}?${queryString.stringify(query, {arrayFormat: 'index'})}`,
        headers: {Authorization: `Bearer ${Cookie.get('token')}`},
        data: body
    }).then(res => {
        return Promise.resolve(res.data);
    }).catch(err => {
        return Promise.reject(err);
    });
};

const get = (url, query, body) => apiRequest("get", url, query, body);
const deleteRequest = (url, query, body) => apiRequest("delete", url, query, body);
const post = (url, query, body) => apiRequest("post", url, query, body);
const put = (url, query, body) => apiRequest("put", url, query, body);
const patch = (url, query, body) =>  apiRequest("patch", url, query, body);

const exportObj = {
    get,
    delete: deleteRequest,
    post,
    put,
    patch
}

export default exportObj;