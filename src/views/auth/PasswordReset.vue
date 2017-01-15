<template>
    <q-layout>
        <div slot="header" class="toolbar text-center">
            <q-toolbar-title>myApp | Reset Password</q-toolbar-title>
        </div>
        <div class="layout-view bg-light">
            <div class="layout-padding">
                <p class="caption text-center">
                    Set a new password.
                </p>
                <form @submit.prevent="submit">
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
                    <div class="group text-center">
                        <button type="submit" class="primary full-width">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import * as auth from '../../api/auth'

    export default {
        data() {
            return {
                password: '',
                password_confirmation: ''
            }
        },
        methods: {
            submit() {
                this.$validator.validateAll()
                if (this.errors.any()) return

                let data = {
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }

                auth.passwordReset(data).then(res => {
                    this.$router.replace('/login')
                })
            }
        }
    }
</script>