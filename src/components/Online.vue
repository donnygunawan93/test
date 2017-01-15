<template>
    <div v-if="!online" class="z-absolute fixed-top animate-blink text-center text-white bg-negative">
        {{ message }}
    </div>
</template>

<script>
    import Pusher from 'pusher-js'
    import { PUSHER_KEY } from '../env'

    var pusher = new Pusher(PUSHER_KEY)

    export default {
        data() {
            return {
                online: navigator.onLine,
                message: ''
            }
        },
        methods: {
            setConnection(bool, message) {
                this.online = bool
                this.message = message
            }
        },
        mounted() {
            let setConnection = this.setConnection

            // check with navigator
            window.addEventListener('offline', function () {
                setConnection(false, 'No internet access')
            })

            // check with socket
            pusher.connection.bind('state_change', function (states) {
                setConnection(true, 'Connected')

                if (states.current == 'connecting')
                    return setConnection(false, 'Waiting for connection')
                else if (states.current == 'unavailable')
                    return setConnection(false, 'No internet access')
                else if (states.current == 'disconnected')
                    return setConnection(false, 'Disconnected, please check your connection')
                else if (states.current == 'initialized')
                    return setConnection(false, 'Initialized')
                else if (states.current == 'failed')
                    return setConnection(false, 'Please use lastest version Google Chrome to access this page')
            })
        }
    }
</script>