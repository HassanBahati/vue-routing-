// //importing vue 
// import Vue from 'vue';

// //importing vue-router
// import VueRouter from 'vue-router';

// //installing router 
// Vue.use(VueRouter);


// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const List = { template: '<div><ul><li>Samson Bruno Were</li><li>Hassan Bahati Mukisa</li><li>Joanita Kente Tushabe</li><li>Akena Keneth</li></ul></div>' }
const Description = { template: '<div><h3>Search about Routing</h3><p>Group 5 was tasked to read about <b>vue-routing</b> and do a teach back to the class</p><br><p>Please enjoy this pratical demo of our teach back &#128513; &#128513;</p></div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/list', component: List },
  { path: '/description', component: Description }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!