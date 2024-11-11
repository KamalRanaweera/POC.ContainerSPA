import { Pinia, setActivePinia } from "pinia";
import { App } from "vue";

export { default } from "./AppComponentA.vue";

export const componentA = {
    install: (_: App<Element>, options: { piniaInstance: Pinia; }) => {
        setActivePinia(options.piniaInstance);
    }
};