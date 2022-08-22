<script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue';

const catId = ref('')
const allCats = ref();
const getCats = async (): Promise<void> => {
    allCats.value = await fetch("https://pokeapi.co/api/v2/berry/"+catId.value)
}
</script>

<template>
    <div>
        <InputText id="catId" v-model="catId" placeholder="Enter Cat ID" type="text" />
        <Button label="view" @click = "getCats" />
        <Child :document="allCats" />
    </div>
</template>

<style scoped>
</style>