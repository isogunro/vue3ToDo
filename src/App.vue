<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopNav from './components/TopNav.vue';
import LeftNavigation from './components/LeftNavigation.vue';
import Todos from './components/Todos.vue';
</script>

<template>
    <TopNav />
    <div class="container">
      <LeftNavigation />
      <Todos />
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
