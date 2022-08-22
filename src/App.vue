<script setup lang="ts">
import axios from 'axios'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopNav from './components/TopNav.vue';
import LeftNavigation from './components/LeftNavigation.vue';
import Todos from './components/Todos.vue';
import "/node_modules/primeflex/primeflex.css";
import { reactive, ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import OverlayPanel from 'primevue/overlaypanel';

const toast = useToast();
const selectPrgData = ref();
const op = ref();
let prgData = ref()

onMounted(() => {
  axios
    .get('http://localhost:3000/Programs')
    .then((res) => {
      prgData.value = JSON.stringify(res)
      console.log(JSON.stringify(res.data))
      
      })
    .catch(err => console.error(err));
})

const toggle = (event: any) => {
  op.value.toggle(event)
};

const onActionSelect = (event: { data: { name: any; }; }) => {
  op.value.hide();
  toast.add({severity:'info', summary: 'Product Selected', detail: event.data.name, life: 3000});
};

const styleObject = reactive({
  backgroundColor: '#D1D5D5',
  fontSize: '13px'
})
</script>

<template>
<div id="app" class="card b @ g-blue-200">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/About">About</router-link> |
      <i class="pi pi-book"  @click="toggle" :label="selectPrgData ? selectPrgData.name : 'Select Something'"></i>
          <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 450px" :breakpoints="{'960px': '75vw'}">
            <DataTable :value="prgData" v-model:selection="selectPrgData" selectionMode="single" :paginator="true" :rows="5" @rowSelect="onActionSelect" responsiveLayout="scroll" >
                <Column field="program" header="Program" sortable style="width: 50%"></Column>
                <Column field="funded" header="Funded" sortable style="width: 30%"></Column>
                <Column field="company" header="Company" sortable style="width: 30%"></Column>
            </DataTable>
        </OverlayPanel>
    </div>
</div>

  <div class="flex flex-row">
    <div>
      <LeftNavigation  :style="styleObject"/>
    </div>
    <div class="container bg-yellow-200">
      
      <router-view />
      <Todos />
    </div>
  </div>
    <!-- <TopNav /> -->

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

button {
    min-width: 1rem;
}

.product-image {
    width: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
</style>
