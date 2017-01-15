import { Loading } from 'quasar'

export default function (bool) {
    Loading.show({
        message: 'Processed, please wait.',
        spinner: 'bars',
        messageColor: 'aqua',
        spinnerColor: 'aqua'
    })

    if (!bool) Loading.hide()
}
