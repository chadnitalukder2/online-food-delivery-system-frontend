<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header>
    
    <div class="wrapper">
    <Nav></Nav>
    <main style=" width: 100%;">
      <notifications />
      <router-view></router-view>
    </main>
    <Footer></Footer>
    </div>
  </header>


</template>
