<script setup lang="ts">
import { ref } from 'vue';
import Menubar from 'primevue/menubar'
import Menu from 'primevue/menu';

        const items = ref([
            {  
                items: [{
                    label: 'Search',
                    icon: 'pi pi-search',
                    uri: './LeftNavigation.vue'
                },
                {
                    label: 'View Completed',
                    icon: 'pi pi-check-square', 
                    uri: ''
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    uri: ''
                },
                {
                    label: 'View Archived',
                    icon: 'pi pi-cloud-upload',
                    uri: ''
                },
                {
                    label: 'View All',
                    icon: 'pi pi-list',
                    uri: ''
                },                                                                
            ]},
        ]);
</script>

<template>
    <div style="background-color:brown;width:50px">
           <Menu :model="items" />
    </div>
</template>

<style lang="scss" scoped>

</style>