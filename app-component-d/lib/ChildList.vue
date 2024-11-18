<script setup lang="ts">
import { getCurrentInstance } from "vue";
import { useComponentStoreD } from "./stores";


const store = useComponentStoreD();
const router = getCurrentInstance()!.appContext.config.globalProperties.$router;


function add(): void {
    store.add();
};

function remove(id: number): void {
    store.remove(id);
}

function navigateTo(id: number): void {
    router.push(`/app-component-d/children/${id}`)
}
</script>

<template>
    <h2>App Component D Child List</h2>
    <div>
        This is an application component that is developed as a Vue plug-in in the @spa/app-component-d package. It uses Pinia to implement a state-full functionality.
    </div>
    <button @click="add()">Add</button>
    <div>
        <div v-for="item in store.items" :key="item.id.toString()">
            <span @click="navigateTo(item.id)" class="green link">{{ item.name }}</span><button @click="remove(item.id)">X</button>
        </div>
    </div>
</template>

<style scoped>
button {
    margin-left: 10px !important;
}
.info {
    margin: 10px 0;
}
</style>