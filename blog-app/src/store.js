import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
var apiRoot = "http://localhost:3000"
var categoriesPath = "categories"
var postsPath = "posts"
export default new Vuex.Store({
  state: {
    categories: [],
    category: [],
    posts: [],
    post: {}
  },
  mutations: {
    SET_CATS (state, cats){
      state.categories = cats;
    },
    SET_CAT (state, cat){
      state.category = cat;
    },
    SET_POSTS (state,  posts){
      state.posts = posts;
    },
    SET_POST (state, post){
      state.post = post;
    }
  },
  actions: {
    loadCats({ commit}){
      var path = [apiRoot, categoriesPath].join('/')
      axios
        .get(path)
        .then((responce)=>{
          console.log(responce)
          let items = responce.data;
          commit('SET_CATS', items)
        })
        .catch((err)=>{       
          let errors = Object.assign({}, err)
          console.log(errors)
        })
    },
    loadCategory({commit}, payload){
      var path = [apiRoot, categoriesPath, payload.id].join('/')
      axios.get(path)
      .then((responce)=>{
        console.log(responce)
        let item = responce.data;
        commit('SET_CAT', item)
      })
      .catch((err)=>{       
        let errors = Object.assign({}, err)
        console.log(errors)
      })
    },
    loadPosts({commit}, payload){
      var path = [apiRoot, postsPath].join('/')
      var param = ['category', payload.id].join('=')
      path = [path, param].join('?')
      axios.get(path)
      .then((responce)=>{
        let items = responce.data;
        commit('SET_POSTS', items)
      })
      .catch((err)=>{       
        let errors = Object.assign({}, err)
        console.log(errors)
      })
      
    }
  }
})
