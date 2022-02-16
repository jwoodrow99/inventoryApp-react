import API from "../API.js";

const login = async (body) => {
    try {
        const res = await API.post('/login', {}, body);
        return res;
    } catch (e) {
        console.log(e);
    }
}

const newUser = async (body) => {
    try {
        const res = await API.post('/newuser', {}, body);
        return res;
    } catch (e) {
        console.log(e);
    }
}

const exportObj = {
    login,
    newUser
}

export default exportObj;