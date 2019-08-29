import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Posts from './views/Posts.vue'
import NewCategory from './views/NewCategory.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/categories/new',
      component: NewCategory
    },
    {
      path: '/categories/:id',
      component: Posts
    },

    { path: '*', component: NotFound }
  ]
})
