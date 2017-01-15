import { api } from './interceptor'

export function all() {
    return api.get('students')
}

export function create(data) {
    return api.post('students', data)
}

export function update(id, data) {
    return api.put('students/' + id, data)
}

export function remove(id) {
    return api.delete('students/' + id)
}
