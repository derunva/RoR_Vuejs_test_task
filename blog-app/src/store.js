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
    post: {},
    custom_error: {},
    success_id: null
  },
  mutations: {
    NEW_CAT(state, item){
      state.categories.push(item)
    },
    DELETE_ITEM(state, {item , list_name}){
      console.log(state['categories'])
      let items = state[list_name];
      let index = items.findINdex((x)=>{
        return x.id == item.id
      })
      state[list_name] = items.splice(index, 1)
    },
    SET_BY_ITEM(state, {item , list_name}){
      let items = state[list_name];
      let index = items.findINdex((x)=>{
        return x.id == item.id
      })
      if(index){
        items[index] = item
      }else{
        items.push(item)
      }
      state[list_name] = items
    },
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
    },
    SET_ERROR(state, errors){
      state.custom_error = errors
    },
    UNSET_ERROR(state){
      state.custom_error = {}
    },
    SET_SUCCESS(state, id){
      state.success_id = id
    }
  },
  actions: {
    newCategory({commit}, item){
      let path = [apiRoot, categoriesPath].join('/')
      axios.post(path, item)
        .then((response)=>{
          let item = response.data;
          commit('NEW_CAT', item)
        })
        .catch((err)=>{
          let errors = Object.assign({}, err)
          commit('SET_ERROR', errors.response)
        })
    },
    clearSuccess({ commit}){
      commit('SET_SUCCESS', null)
    },
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

    },
    unsetError({commit}){
      commit('UNSET_ERROR')
    },
    deleteCategory({commit}, id){

      var path = [apiRoot, categoriesPath, id].join('/')
      axios.delete(path)
        .then((response)=>{
          commit('DELETE_ITEM', {id: id, list_name: "categories"})
        })
    },
    updateCategory({commit}, payload){
      var path = [apiRoot, categoriesPath, payload.id].join('/');
      axios.put(path, payload.data)
      .then((responce)=>{
        let item = responce.data;
        console.log(item)
        commit('SET_SUCCESS', item.id)
      })
      .catch((err)=>{
        let errors = Object.assign({}, err)
        commit('SET_ERROR', errors.response)
      })
    }
  }
})
