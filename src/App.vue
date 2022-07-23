<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopNav from './components/TopNav.vue';
import LeftNavigation from './components/LeftNavigation.vue';
import Todos from './components/Todos.vue';
import { reactive } from 'vue';

const styleObject = reactive({
  backgroundColor: '#D1D5D5',
  fontSize: '13px'
})
</script>

<template>
<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/About">About</router-link>
    </div>
</div>
    <TopNav />
    <div class="container">
      <router-view />
      <LeftNavigation  :style="styleObject"/>
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
