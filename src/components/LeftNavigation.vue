<script setup lang="ts">
import { ref } from 'vue';
import Menubar from 'primevue/menubar'
import Menu from 'primevue/menu';

        const items = ref([
            {  
                items: [{
                    label: 'Search',
                    icon: 'pi pi-search',
                    url: './LeftNavigation.vue'
                },
                {
                    label: 'View Completed',
                    icon: 'pi pi-check-square', 
                    url: '../views/CompletedTasks.vue'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    url: '../views/DeletedTasks.vue'
                },
                {
                    label: 'View Archived',
                    icon: 'pi pi-cloud-upload',
                    url: '../views/Archived.vue'
                },
                {
                    label: 'View All',
                    icon: 'pi pi-list',
                    url: '../views/AllTask.vue'
                },                                                                
            ]},
        ]);
</script>

<template>
           <Menu :model="items" />
</template>

<style lang="scss" scoped>

</style>