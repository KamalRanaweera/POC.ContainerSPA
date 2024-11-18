import { Pinia, setActivePinia } from "pinia";
import { App } from "vue";
import { Router } from "vue-router";

export { default } from "./ChildList.vue";

export const componentC = {
    install: (_: App<Element>, options: { piniaInstance: Pinia, routerInstance: Router }) => {
        
		setActivePinia(options.piniaInstance);

        options.routerInstance.addRoute({
			name: "app-component-c-child-details", 
			path: "/app-component-c/children/:id", 
			component: () => import('./ChildDetails.vue')
		});		
    }
};