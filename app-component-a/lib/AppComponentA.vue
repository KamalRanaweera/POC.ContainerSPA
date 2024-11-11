<script setup lang="ts">
import { useComponentStoreA } from "./stores";


const store = useComponentStoreA();

function increment(): void {
    store.increment();
};

function decrement(): void {
    store.decrement();
}
</script>

<template>
    <h2>App Component A</h2>
    <div>
        This is an application component that is developed as a Vue plug-in in the @spa/app-component-a package. It uses Pinia to implement a state-full functionality.
    </div>
    <div>Count: {{  store.count }}</div>
    <button @click="increment()">Increment</button>
    <button @click="decrement()">Decrement</button>
</template>