<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const router = getCurrentInstance()!.appContext.config.globalProperties.$router;

const navigateTo = (path:string) => router.push(path);

</script>

<template>
    <h2>App Component B</h2>
    <div>
        This is an application component that is developed as a Vue plug-in in the @spa/app-component-b package. 
        It uses Vue Router to navigate to the About page, which is a route defined in the main SPA, and to another
        inner route <em>/app-component-b/subroot1</em>, which is a route defined internally in this component.
    </div>
    <br />
    <span @click="navigateTo('/about')" class="green link">Navigate to About</span>
    <span @click="navigateTo('/app-component-b/subroot1')" class="green link">Navigate to sub-route one</span>

</template>