<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="isShowNav"></TabBar>
  </div>

</template>
<script setup>
import TabBar from "./components/TabBar.vue"
import { ref, reactive, watch } from "vue"
import { useRoute } from "vue-router"

let route = useRoute()
let isShowNav = ref(false)
watch(route, newVal => {
  isShowNav.value = newVal.meta.isShowNav;
}, {
  immediate: true
})
</script>
<style scoped>

</style>
