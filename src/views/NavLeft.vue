<template>
    <div>

        <!--toolbar-->
        <div class="toolbar text-center">
            <q-toolbar-title>myApp</q-toolbar-title>
        </div>

        <div class="list">
            <!--user setting-->
            <q-collapsible icon="person" label="My Account">
                <div class="item item-link" @click="$router.push('/password/change')">
                    <div class="item-content">Change Password</div>
                </div>
                <div class="item item-link" @click="$router.replace('/login')">
                    <div class="item-content">Logout</div>
                </div>
            </q-collapsible>
            <!--navigation-->
            <div class="list-label bg-light">Navigation</div>
            <div class="item item-link" @click="$router.push('/dashboard')">
                <div class="item-content">Dashboard</div>
            </div>
            <div class="item item-link" @click="$router.push('/students')" v-if="userCan('student.read')">
                <div class="item-content">Students</div>
            </div>
        </div>

    </div>
</template>

<script>
    import userCan from '../helpers/userCan'

    export default {
        data() {
            return {
                userCan: userCan
            }
        }
    }
</script>