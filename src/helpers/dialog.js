import { Dialog } from 'quasar'

export function error(message) {
    Dialog.create({
        title: 'Error',
        message: message,
        noBackdropDismiss: true
    })
}

export function success(message) {
    Dialog.create({
        title: 'Success',
        message: message,
        noBackdropDismiss: true
    })
}
