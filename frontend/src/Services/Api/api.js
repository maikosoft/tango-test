import axios from 'axios';
import URL from '../Constants/constants';

class APIService {
    getFibonacci(number) {
        return axios.get(URL.FIBONACCI + number);
    }
}
export default new APIService();