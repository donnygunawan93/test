<template>
    <q-layout>
        <div slot="header" class="toolbar">
            <button type="button" @click="$router.go(-1)"><i>arrow_back</i></button>
            <q-toolbar-title>Change Password</q-toolbar-title>
            <button @click="submit"><i>save</i></button>
        </div>
        <div class="layout-view">
            <div class="layout-padding">
                <form @submit.prevent="submit">
                    <div class="item three-lines">
                        <div class="item-content">
                            <div class="floating-label">
                                <input v-model="current" v-validate.initial="current" data-vv-name="current" data-vv-rules="required" required class="full-width"
                                    type="password" :class="errors.first('current') ? 'has-error' : ''">
                                <label>Current Password</label>
                            </div>
                            <small><sup class="text-red">{{ errors.first('current') }}</sup></small>
                        </div>
                    </div>
                    <div class="item three-lines">
                        <div class="item-content">
                            <div class="floating-label">
                                <input v-model="password" v-validate.initial="password" data-vv-name="password" data-vv-rules="required|min:8" required class="full-width"
                                    type="password" :class="errors.first('password') ? 'has-error' : ''">
                                <label>Password</label>
                            </div>
                            <small><sup class="text-red">{{ errors.first('password') }}</sup></small>
                        </div>
                    </div>
                    <div class="item three-lines">
                        <div class="item-content">
                            <div class="floating-label">
                                <input v-model="password_confirmation" v-validate.initial="password_confirmation" data-vv-name="password_confirmation" data-vv-rules="required|confirmed:password"
                                    required class="full-width" type="password" :class="errors.first('password_confirmation') ? 'has-error' : ''">
                                <label>Re-type Password</label>
                            </div>
                            <small><sup class="text-red">{{ errors.first('password_confirmation') }}</sup></small>
                        </div>
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
                current: '',
                password: '',
                password_confirmation: ''
            }
        },
        methods: {
            submit() {
                this.$validator.validateAll()
                if (this.errors.any()) return

                let data = {
                    current: this.current,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }

                auth.passwordChange(data)
            }
        },
        beforeRouteEnter(to, from, next) {
            if (localStore('token') && localStore('user')) return next()
            next('/login')
        }
    }
</script>