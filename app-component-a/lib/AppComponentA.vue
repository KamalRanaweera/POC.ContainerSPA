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
        This is the application component imported from @spa/app-component-a package.
    </div>
    <div>Count: {{  store.count }}</div>
    <button @click="increment()">Increment</button>
    <button @click="decrement()">Decrement</button>
</template>