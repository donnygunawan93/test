<template>
    <div>

        <q-layout>
            <!--navLeft-->
            <q-drawer ref="navLeft" swipe-only>
                <nav-left></nav-left>
            </q-drawer>

            <!--toolbar-->
            <div slot="header" class="toolbar">
                <button @click="$refs.navLeft.open()"><i>menu</i></button>
                <q-toolbar-title>Students</q-toolbar-title>
                <button @click="add" v-if="userCan('student.create')"><i>add</i></button>
            </div>

            <!--content-->
            <div class="layout-view">
                <div class="layout-padding">
                    <table class="q-table bordered cell-delimiter striped-even full-width responsive">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in students">
                                <td data-th="Name">
                                    {{ student.name }}
                                </td>
                                <td data-th="Address">
                                    {{ student.address }}
                                </td>
                                <td data-th="Action">
                                    <button @click="edit(student)" v-if="userCan('student.update')" class="small circular outline primary"><i>edit</i></button>
                                    <button @click="erase(student)" v-if="userCan('student.delete')" class="small circular outline negative"><i>delete_forever</i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </q-layout>

        <!--modal-->
        <q-modal ref="myForm" class="maximized">
            <q-layout>
                <!--toolbar-->
                <div slot="header" class="toolbar">
                    <button @click="$refs.myForm.close()"><i>arrow_back</i></button>
                    <q-toolbar-title>Detail Information</q-toolbar-title>
                    <button @click="submit"><i>save</i></button>
                </div>

                <!--content-->
                <div class="layout-view">
                    <div class="layout-padding">
                        <div class="list no-border">

                            <div class="item three-lines">
                                <div class="item-content">
                                    <div class="floating-label">
                                        <input v-model="student.name" v-validate="student.name" data-vv-name="student.name" data-vv-rules="required" required class="full-width" :class="errors.first('student.name') ? 'has-error' : ''">
                                        <label>Name</label>
                                    </div>
                                    <small><sup class="text-red">{{ errors.first('student.name') }}</sup></small>
                                </div>
                            </div>

                            <div class="item three-lines">
                                <div class="item-content">
                                    <div class="floating-label">
                                        <input v-model="student.address" v-validate="student.address" data-vv-name="student.address" data-vv-rules="required" required
                                            class="full-width" :class="errors.first('student.address') ? 'has-error' : ''">
                                        <label>Address</label>
                                    </div>
                                    <small><sup class="text-red">{{ errors.first('student.address') }}</sup></small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </q-layout>
        </q-modal>

    </div>
</template>

<script>
    import userCan from '../helpers/userCan'
    import NavLeft from './NavLeft'
    import { Dialog } from 'quasar'
    import * as students from '../api/students'

    export default {
        components: { NavLeft },
        data() {
            return {
                userCan: userCan,
                students: [],
                student: { name: '', address: '' },
                method: ''
            }
        },
        methods: {
            all() {
                students
                    .all()
                    .then(res => this.students = res)
            },
            create() {
                students
                    .create({ student: this.student })
                    .then(res => this.all())
            },
            update() {
                students
                    .update(this.student.id, { student: this.student })
                    .then(res => this.all())
            },
            remove(id) {
                students
                    .remove(id)
                    .then(res => this.all())
            },
            add() {
                this.showForm()
                this.method = 'create'
                this.student = { name: '', address: '' }
            },
            edit(student) {
                this.showForm()
                this.method = 'update'
                this.student = Object.assign({}, student)
            },
            erase(student) {
                const ref = this
                Dialog.create({
                    title: 'Confirm',
                    message: `Are you sure, you want to delete <strong class="text-red">${student.name}</strong>?`,
                    buttons: [
                        { label: 'No' },
                        { label: 'Yes', handler() { ref.remove(student.id) } }
                    ]
                })
            },
            submit() {
                this.$validator.validateAll()
                if (this.errors.any()) return

                this.method == 'create' ? this.create() : this.update()
            },
            showForm() {
                setTimeout(() => { this.errors.clear() }, 100)
                this.$refs.myForm.open()
            }
        },
        mounted() {
            this.all()
        },
        beforeRouteEnter(to, from, next) {
            if (userCan('student.read')) return next()
            next('/login')
        }
    }
</script>