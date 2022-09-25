import axios from 'axios';

const instance = axios.create({
    baseURL: `${window.url}/guest`,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default instance;
