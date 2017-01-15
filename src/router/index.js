import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(component) {
  return () => System.import(`../views/${component}.vue`)
}

export default new VueRouter({
  mode: 'hash',
  routes: [
    // auth
    { path: '/login', component: load('auth/Login') },
    { path: '/password/forgot', component: load('auth/PasswordForgot') },
    { path: '/password/forgot-confirm', component: load('auth/PasswordForgotConfirm') },
    { path: '/password/reset', component: load('auth/PasswordReset') },
    { path: '/password/change', component: load('auth/PasswordChange') },
    // nav
    { path: '/', component: load('Dashboard') },
    { path: '/dashboard', component: load('Dashboard') },
    { path: '/students', component: load('Students') }
  ]
})
