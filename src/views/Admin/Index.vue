<script setup>
import sidebar from '../../components/AdminSidebar.vue';

</script>

<template>
    <main class="admin-section">
        <sidebar/>
        <router-view></router-view>
    </main>

</template>

<style lang="scss" scoped>
.admin-section{
    display: flex;
     width: 100%;
     gap: 0px;
}

</style>