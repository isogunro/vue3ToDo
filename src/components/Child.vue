<script setup lang="ts">
import { ref, watch } from 'vue';
import InputText from 'primevue/inputtext';
import type { catDocument } from '@/models/cat-api.models';
const tempName = ref('TODOS LIST YESSS!!')
const props =  defineProps({
    document: {
        type: Object as () => catDocument,
        default: () => {
            return {};
        }
    }
})

const selectedCat = ref()
watch(
    () => props.document,
    (document) => {
        selectedCat.value = document
    }
)
</script>

<template>
    <div>
        {{ selectedCat.value }}
    </div>
</template>

<style scoped>

</style>