<script setup lang="ts">
import { AppComponentB } from '@spa/app-component-b'
import { useRouter } from 'vue-router';

</script>

<template>
    <app-component-b :router-instance="useRouter()"/>
</template>