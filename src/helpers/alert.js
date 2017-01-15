import * as dialog from './dialog'

export function validator(data) {
    let messages = ''

    for (let key in data) {
        if (data.hasOwnProperty(key))
            messages += data[key][0] + '<br/>'
    }

    dialog.error(messages)
}

export function message(data) {
    if (data.hasOwnProperty('success'))
        dialog.success(data.success)

    if (data.hasOwnProperty('error'))
        dialog.error(data.error)

    if (data.hasOwnProperty('errors')) {
        let errors = data.errors
        let messages = ''

        for (let key in errors) {
            if (errors.hasOwnProperty(key))
                messages += errors[key] + '<br/>'
        }

        dialog.error(messages)
    }
}
