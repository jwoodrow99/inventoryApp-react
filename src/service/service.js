import authRequest from './requests/auth';
import itemRequest from './requests/item';

const serviceObj = {
    auth: authRequest,
    item: itemRequest,
}

export default serviceObj;