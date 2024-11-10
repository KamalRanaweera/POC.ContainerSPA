<script setup lang="ts">
import {Router} from 'vue-router';

const props = defineProps<{
    routerInstance?: Router | undefined
}>();


function navigateTo(path:string){
    console.log('Navigating to: ', path)
    props.routerInstance?.push(path);
}


props.routerInstance?.getRoutes().forEach(r => console.log(r.name?.toString));

</script>

<template>
    <h2>App Component B</h2>
    <div>
        This is the application component imported from @spa/app-component-b package.
    </div>
    <br />
    <a @click="navigateTo('/about')">Navigate to About</a>
</template>