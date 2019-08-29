import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Posts from './views/Posts.vue'
import NewCategory from './views/NewCategory.vue'
import NewPost from './views/NewPost.vue'
import Post from './views/Post.vue'
import PostEdit from './views/PostEdit.vue'
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
      path: '/categories/:id/new',
      name: 'new_post',
      component: NewPost
    },
    {
      path: '/categories/:id',
      name: 'posts',
      component: Posts
    },
    {
      path: '/categories/:id/:post_id',
      name: 'post',
      component: Post
    },
    {
      path: '/categories/:id/:post_id/edit',
      name: 'post',
      component: PostEdit
    },
    { path: '*', component: NotFound }
  ]
})
