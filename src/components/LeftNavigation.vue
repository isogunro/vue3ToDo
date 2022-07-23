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
                    url: 'CompletedTasks.vue'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    url: ''
                },
                {
                    label: 'View Archived',
                    icon: 'pi pi-cloud-upload',
                    url: ''
                },
                {
                    label: 'View All',
                    icon: 'pi pi-list',
                    url: ''
                },                                                                
            ]},
        ]);
</script>

<template>
           <Menu :model="items" />
</template>

<style lang="scss" scoped>

</style>