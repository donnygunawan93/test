<template>
    <q-layout>
        <div slot="header" class="toolbar text-center">
            <q-toolbar-title>myApp | Forgot Password</q-toolbar-title>
        </div>
        <div class="layout-view bg-light">
            <div class="layout-padding">
                <p class="caption text-center">
                    We have sent the code confirmation to your email, please check then fill in the form below.
                </p>
                <form @submit.prevent="submit">
                    <div class="item three-lines">
                        <div class="item-content">
                            <div class="floating-label">
                                <input v-model="code" v-validate.initial="code" data-vv-name="code" data-vv-rules="required|numeric|digits:6" required class="full-width" :class="errors.first('code') ? 'has-error' : ''">
                                <label>Enter the code confirmation here</label>
                            </div>
                            <small><sup class="text-red">{{ errors.first('code') }}</sup></small>
                        </div>
                    </div>
                    <div class="group text-center">
                        <button type="submit" class="primary full-width">Verify</button>
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
                code: ''
            }
        },
        methods: {
            submit() {
                this.$validator.validateAll()
                if (this.errors.any()) return

                let data = {
                    email: localStore('email'),
                    code: this.code
                }

                auth.passwordForgotConfirm(data).then(res => {
                    localStore('token', res.token)
                    this.$router.push('/password/reset')
                })
            }
        }
    }
</script>