import API from '../API';

const login = async (body) => {
    try {
        const res = await API.post('/login', {}, {
            employee_id: body.employee_id,
            password: body.password
        });
        return res;
    } catch(e){
        console.log(e);
    }
}

const exportObj = {
    login
}

export default exportObj;