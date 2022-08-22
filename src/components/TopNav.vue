<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import 'primeicons/primeicons.css';
import Dialog from 'primevue/dialog';
import "/node_modules/primeflex/primeflex.css";

const tempName = ref('TO DO APP')

        const displayModal = ref(false);
        const openModal = () => {
            displayModal.value = true;
        };
        
        console.log("outside:modal value: "+displayModal.value)
        const closeModal = () => {
            displayModal.value = false;
        }

        const toast = useToast();
        const menu = ref();
        const items = ref([
            {
                label: 'Options',
                items: [{
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    url: './MyForm'
                    // command: () => {
                    //     // toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                    //     displayModal.value = true;
                    //     console.log("inside:modal value: "+displayModal.value)
                    // }
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
        <!-- <a href="#"><i class="pi pi-bars" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"></i></a> 
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />-->
    </div>

    <Dialog header="Header" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" :modal="true">
            <p class="m-0">mmmLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <template #footer>
                <!-- <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/> -->
                <Button label="Save" icon="pi pi-check" @click="closeModal" autofocus />
            </template>
    </Dialog>    
</template>

<style scoped>
.p-button {
    margin: 0.3rem .5rem;
    min-width: 10rem;
}

p {
    margin: 0;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-dialog .p-button {
    min-width: 6rem;
}
</style>