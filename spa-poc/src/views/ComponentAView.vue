<script setup lang="ts">
import { AppComponentA, useComponentStoreA } from '@spa/app-component-a'
import { getActivePinia } from 'pinia';

// const pinia = getActivePinia();
// const storeA = useComponentStoreA(pinia);


</script>

<template>
    <app-component-a :pinia-instance="getActivePinia()" />

    <br >
    <br >
    <br >

</template>