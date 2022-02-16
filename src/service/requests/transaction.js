import API from "../API.js";

const get = async () => {
    try {
        const res = await API.get('/transaction', {}, {});
        return res;
    } catch (e) {
        console.log(e);
    }
}

const post = async (body) => {
    try {
        const res = await API.post('/transaction', {}, body);
        return res;
    } catch (e) {
        console.log(e);
    }
}

const exportObj = {
    get,
    post
}

export default exportObj;