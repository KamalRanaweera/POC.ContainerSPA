import { App } from "vue";
import { Router } from "vue-router";

export { default } from "./AppComponentB.vue";

export const componentB = {
    install: (_: App<Element>, options: { routerInstance: Router }) => {
        options.routerInstance.addRoute({name: "app-component-b/subroot1", path: "/app-component-b/subroot1", component: () => import('./components/SubruteOne.vue')})
    }
};