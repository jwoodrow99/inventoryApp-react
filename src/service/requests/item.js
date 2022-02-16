import API from "../API.js";

const get = async () => {
    try {
        const res = await API.get('/item', {}, {});
        return res;
    } catch (e) {
        console.log(e);
    }
}

const post = async (body) => {
    try {
        const res = await API.post('/item', {}, body);
        return res;
    } catch (e) {
        console.log(e);
    }
}

const patch = async (query, body) => {
    try {
        const res = await API.patch('/item', query, body);
        return res;
    } catch (e) {
        console.log(e);
    }
}

const remove = async (query) => {
    try {
        const res = await API.delete('/item', query, {});
        return res;
    } catch (e) {
        console.log(e);
    }
}

const exportObj = {
    get,
    post,
    patch,
    delete: remove
}

export default exportObj;