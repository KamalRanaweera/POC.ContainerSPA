<script setup lang="ts">
import { getCurrentInstance } from "vue";
import { useComponentStoreD } from "./stores";

const router = getCurrentInstance()!.appContext.config.globalProperties.$router;

const store = useComponentStoreD();
function back():void {
    router.back();
}

</script>

<template>
    <h2>App Component D Child Details</h2>
    <div>
        Item Count: {{ store.items.length }}
    </div>
    <div>
        <span @click="back()" class="green link">Back to list</span>
    </div>
</template>

<style scoped>
button {
    margin-right: 10px !important;
}
.info {
    margin: 10px 0;
}
</style>