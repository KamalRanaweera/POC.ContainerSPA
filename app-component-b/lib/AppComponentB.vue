<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const router = getCurrentInstance()!.appContext.config.globalProperties.$router;

const navigateTo = (path:string) => router.push(path);

</script>

<template>
    <h2>App Component B</h2>
    <div>
        This is the application component imported from @spa/app-component-b package.
    </div>
    <br />
    <span @click="navigateTo('/about')" class="green link">Navigate to About</span>
    <span @click="navigateTo('/app-component-b/subroot1')" class="green link">Navigate to sub-route one</span>

</template>