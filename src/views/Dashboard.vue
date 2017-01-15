<template>
    <q-layout>
        <!--navLeft-->
        <q-drawer ref="navLeft" swipe-only>
            <nav-left></nav-left>
        </q-drawer>

        <!--toolbar-->
        <div slot="header" class="toolbar">
            <button @click="$refs.navLeft.open()"><i>menu</i></button>
            <q-toolbar-title>Dashboard</q-toolbar-title>
        </div>

        <!--content-->
        <div class="layout-view">
            <div class="layout-padding">
                Welcome to Dashboard Page.
            </div>
        </div>
    </q-layout>
</template>

<script>
    import * as localStore from 'store2'
    import NavLeft from './NavLeft'

    export default {
        components: { NavLeft },
        beforeRouteEnter(to, from, next) {
            if (localStore('token') && localStore('user')) return next()
            next('/login')
        }
    }
</script>