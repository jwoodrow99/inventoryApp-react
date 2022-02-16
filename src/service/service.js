import authService from './requests/auth';
import itemService from './requests/item';
import transactionService from './requests/transaction';

const serviceObj = {
    auth: authService,
    item: itemService,
    transaction: transactionService
}

export default serviceObj;