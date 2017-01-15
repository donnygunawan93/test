import * as localStore from 'store2'

export default function (permission) {
    if (!localStore('user') && localStore('user').permissions)
        return false
    return localStore('user').permissions.indexOf(permission) >= 0 ? true : false
}
