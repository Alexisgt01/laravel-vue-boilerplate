import api from './index';

export function login(email, password) {
    return api.post('login', {email, password}).then((r) => {
        return r.data;
    })
}

export function passwordRequest(email) {
    return api.post('password/request', {email}).then((r) => {
        return r.data;
    })
}

export function passwordReset(email, password, password_confirmation, token) {
    return api.post('password/reset', {email, password, password_confirmation, token}).then((r) => {
        return r.data;
    })
}
