<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue';
</script>

<template>
  <header>
    
    <div class="wrapper">
    <Nav></Nav>
    <main style=" width: 100%;">
      <notifications />
      <router-view></router-view>
    </main>
    </div>
  </header>

</template>
