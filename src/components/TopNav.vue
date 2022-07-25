<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import 'primeicons/primeicons.css';

const tempName = ref('TO DO APP')

        const toast = useToast();
        const menu = ref();
        const items = ref([
            {
                label: 'Options',
                items: [{
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                    }
                }
            ]},
            {
                label: 'Navigate',
                items: [{
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    url: 'https://vuejs.org/'
                }
            ]}
        ]);

        const toggle = (event: any) => {
            menu.value.toggle(event);
        };
        const save = () => {
            toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
        };
</script>

<template>
    <div>
       <Toast />

        <h5>Inline</h5>

        <h5>Overlay</h5>
        <a href="#"><i class="pi pi-bars" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"></i></a>
        <!-- <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" /> -->
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
    </div>
</template>

<style scoped>

</style>