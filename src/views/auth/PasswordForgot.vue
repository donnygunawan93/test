<template>
    <q-layout>
        <div slot="header" class="toolbar text-center">
            <q-toolbar-title>myApp | Forgot Password</q-toolbar-title>
        </div>
        <div class="layout-view bg-light">
            <div class="layout-padding">
                <p class="caption text-center">
                    Enter your email, we will send you message to reset your password.
                </p>
                <form @submit.prevent="submit">
                    <div class="item three-lines">
                        <div class="item-content">
                            <div class="floating-label">
                                <input v-model="email" v-validate.initial="email" data-vv-name="email" data-vv-rules="required|email" required class="full-width" :class="errors.first('email') ? 'has-error' : ''">
                                <label>Enter your email here</label>
                            </div>
                            <small><sup class="text-red">{{ errors.first('email') }}</sup></small>
                        </div>
                    </div>
                    <div class="group text-center">
                        <button type="submit" class="primary full-width">Send email confirmation</button>
                        <button type="button" @click="$router.push('/login')" class="primary clear small"><sub>Back to login page?</sub></button>
                    </div>
                </form>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import * as localStore from 'store2'
    import * as auth from '../../api/auth'

    export default {
        data() {
            return {
                email: ''
            }
        },
        methods: {
            submit() {
                this.$validator.validateAll()
                if (this.errors.any()) return

                auth.passwordForgot({ email: this.email }).then(res => {
                    localStore('email', this.email)
                    this.$router.push('/password/forgot-confirm')
                })
            }
        }
    }
</script>