import { Pinia, setActivePinia } from "pinia";
import { App } from "vue";
import { Router } from "vue-router";

export { default } from "./ChildList.vue";

export const componentD = {
    install: (_: App<Element>, options: { piniaInstance: Pinia, routerInstance: Router }) => {
        
		setActivePinia(options.piniaInstance);

        options.routerInstance.addRoute({
			name: "app-component-d-child-details", 
			path: "/app-component-d/children/:id", 
			component: () => import('./ChildDetails.vue')
		});		
    }
};