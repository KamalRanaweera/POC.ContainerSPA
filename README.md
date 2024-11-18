# Introduction
This is a proof-of-concept (POC) implementation of a single-page application (SPA) that provides core functionality for a website, delegating the rendering of specific pages to domain-specific components. The technology platform used is Vue.JS, along with its associated frameworks. 
Domain-specific components can be developed independently from the SPA and integrated as Vue plugins or components.

# Source Code Structure
This repository consist of the followings:
  * **spa-poc:** The prototype single-page application.
  * **app-component-a:** An implementation of a plugin that uses Pinia store to manage application state.
  * **app-component-b:** An implementation of a plugin that uses Vue Router to add new routes.
  * **app-component-c:** An implementation of a plugin that uses both Pinia to manage the state and Vue Router to add new routes.
  * **app-component-d:** An implementation of a simple Vue component.

# How to Build
Foloow these steps to build this POC:
 * Clone the repository
 * Go inside each app-compoment folder and run 
    <code>
    	npm install
    	npm build
    	npm link
    </code>
 * Go inside the spa-poc folder and run
      <code>
    	npm install
    	npm link @spa/app-component-a @spa/app-component-b @spa/app-component-c @spa/app-component-d
    	npm run dev
      </code>
 
# What to Expect
When you visit http://localhost:8080, you should see a website with the following pages:
 * **Home, About:** simple pages created on the SPA
 * **App Component A:** a page that displays the Pinia based component imported from <code>app-component-a</code>. This page has two buttons that increment and descrement a counter.
 * **App Component B:** a page that displays the Vue-Router based component imported from <code>app-component-b</code>. This page has two Vue-router based links:
    * **Navigate to About Page:** a link that navigates to the SPA-based *About* page.
    * **Navigate to Sub-route-one Page:** a link that navigates to a page that is added to the Vue Router by the plugin. The SPA is unaware of this inner page or its route.
* **App Component C:** a page that displays the component imported from <code>app-component-b</code>, which uses both Pinia store and custom routing . On this pagem you will findL
    * An **Add** button that would add items to a list.
    * The list of items added to the list. The initial list is empty.
    * Each list item is a link to the detailed view of the item, which is a route added by the component. It also has an **X** button, which deletes the list item.
* **App Component D:** a page that renders the simple component imported from <code>app-component-c</code> 
