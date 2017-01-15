import axios from 'axios'
import * as localStore from 'store2'
import * as alert from '../helpers/alert'
import spinner from '../helpers/spinner'
import { API_URL } from '../env'

export const api = axios.create({
    baseURL: API_URL
})

api.interceptors.request.use(requestSuccess, requestError)
api.interceptors.response.use(responseSuccess, responseError)

export function requestSuccess(config) {
    spinner(true)

    config.headers = config.headers || {}
    if (localStore('token'))
        config.headers.Authorization = 'Bearer ' + localStore('token')

    return config
}

export function requestError(error) {
    return Promise.reject(error)
}

export function responseSuccess(response) {
    spinner(false)

    alert.message(response.data)

    if (response.data.hasOwnProperty('error') || response.data.hasOwnProperty('errors'))
        return Promise.reject(response)
    return response.data
}

export function responseError(error) {
    spinner(false)

    if (isPrevent(error))
        window.location.replace('#/login')

    if (error.response.status === 422)
        alert.validator(error.response.data)
    alert.message(error.response.data)

    return Promise.reject(error)
}

//------------------------------ isPrevent ------------------------------//
function isPrevent(error) {
    if (error.response.status === 401) return true
    if (error.response.status === 403) return true
    if (error.response.status === 400 && error.response.data.error == 'token_not_provided') return true
    if (error.response.status === 404 && error.response.data.error == 'user_not_found') return true
}
