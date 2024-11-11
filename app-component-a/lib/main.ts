import { Pinia, setActivePinia } from "pinia";
import { App } from "vue";

export { default } from "./AppComponentA.vue";
export { useComponentStoreA } from "./stores"


export const componentA = {
    install: (_: App<Element>, options: { piniaInstance: Pinia; }) => {

        setActivePinia(options.piniaInstance);
        console.log("Set pinia instance.")
    }
};