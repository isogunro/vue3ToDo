<script setup lang="ts">
import { ref } from 'vue';
import Menubar from 'primevue/menubar'
import Menu from 'primevue/menu';

        const items = ref([
            {  
                items: [{
                    label: 'Search',
                    icon: 'pi pi-search',
                    url: '/Search'
                },
                {
                    label: 'View Completed',
                    icon: 'pi pi-check-square', 
                    url: '/Completedtasks'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    url: '/DeletedTasks'
                },
                {
                    label: 'View Archived',
                    icon: 'pi pi-cloud-upload',
                    url: '/Archived'
                },
                {
                    label: 'View All',
                    icon: 'pi pi-list',
                    url: '/AllTask'
                },                                                                
            ]},
        ]);
</script>

<template>
           <Menu :model="items" />
</template>

<style lang="scss" scoped>

</style>