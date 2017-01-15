<template>
    <q-layout>
        <div slot="header" class="toolbar text-center">
            <q-toolbar-title>myApp | Login</q-toolbar-title>
        </div>
        <div class="layout-view bg-light">
            <div class="layout-padding">
                <p class="caption text-center">
                    Complete form below to login.
                </p>
                <form @submit.prevent="submit">
                    <div class="item three-lines">
                        <div class="item-content">
                            <div class="floating-label">
                                <input v-model="login" v-validate.initial="login" data-vv-name="login" data-vv-rules="required" required class="full-width" :class="errors.first('login') ? 'has-error' : ''">
                                <label>Username or Email</label>
                            </div>
                            <small><sup class="text-red">{{ errors.first('login') }}</sup></small>
                        </div>
                    </div>
                    <div class="item three-lines">
                        <div class="item-content">
                            <div class="floating-label">
                                <input v-model="password" v-validate.initial="password" data-vv-name="password" data-vv-rules="required" required class="full-width" type="password" :class="errors.first('password') ? 'has-error' : ''">
                                <label>Password</label>
                            </div>
                            <small><sup class="text-red">{{ errors.first('password') }}</sup></small>
                        </div>
                    </div>
                    <div class="group text-center">
                        <button type="submit" class="primary full-width">Login</button>
                        <button type="button" @click="$router.push('/password/forgot')" class="primary clear small"><sub>Forgot password?</sub></button>
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
                login: 'user01@gmail.com',
                password: 'password'
            }
        },
        methods: {
            submit() {
                return console.log(this.$options.data())
                // why
                this.$validator.validateAll()
                if (this.errors.any()) return

                let data = {
                    login: this.login,
                    password: this.password,
                    role: false
                }

                auth.login(data).then(res => {
                    localStore('token', res.token)
                    localStore('user', res.user)
                    //go to dashboard
                    this.$router.push('/dashboard')
                })
            }
        },
        beforeCreate() {
            localStore.clearAll()
        }
    }
</script>