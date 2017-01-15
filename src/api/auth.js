import { api } from './interceptor'

export function login(data) {
    return api.post('login', data)
}

export function register(data) {
    return api.post('register', data)
}

export function passwordChange(data) {
    return api.post('password/change', data)
}

export function passwordForgot(data) {
    return api.post('password/forgot', data)
}

export function passwordForgotConfirm(data) {
    return api.post('password/forgot-confirm', data)
}

export function passwordReset(data) {
    return api.post('password/reset', data)
}
