<template>
  <div id="q-app">
    <online></online>
    <router-view></router-view>
  </div>
</template>

<script>
  import Online from './Online'

  export default {
    components: { Online }
  }
</script>