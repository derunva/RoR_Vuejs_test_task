<template lang="pug">
  #app
    .hero.is-dark
      .hero-body
        .container
          .title Blog
          router-link.button.is-primary(to="/") На головну
          | &nbsp;
          router-link.button.is-primary(to="/categories/new", v-if="routeName == 'home'") Нова категорія
          | &nbsp;
          router-link.button.button-primary(v-if="routeName == 'posts'" , :to="{path: '/categories/' + category.id+ '/new'}") Новий пост
          | &nbsp;
          router-link.button.button-primary(v-if="routeName == 'post' || routeName == 'new_post'" , :to="{path: '/categories/' + category.id}") Список постів
          | &nbsp;
          router-link.button(v-if="routeName == 'post'" :to="{path: '/categories/' + category.id+'/'+post.id+'/edit'}") редагувати
    .section
      .container
        router-view
    .footer.has-text-centered
      .container
        | @ 2019 blog
    errors
</template>
<script>
  import Errors from './components/Errors.vue'
  import {mapState} from 'vuex';
  export default{
    data: function() {
      return {
        routeName: 'home'
      }
    },
    components: {
      Errors
    },
    watch: {
    '$route' (to, from) {
        this.routeName = to.name
      }
    },
    channels:{
      CommentUpdateChannel:{
        connected(){
          console.log('connected');
        },
        rejected() {
          console.log('rejected')
        },
        received(data) {
          if(data.message == "Category"){
            this.$store.dispatch('loadCategory', {id:this.$route.params.id })
          }
          if(data.message == "Post"){
            this.$store.dispatch('loadPost', {id:this.$route.params.post_id })
          }
        },
        disconnected() {
          console.log('disconnected')
        }
      }
    },
    mounted(){
      this.$cable.subscribe({ channel: 'CommentUpdateChannel', room: 'public' });
      this.routeName = this.$route.name
      if(this.$route.params.id){
        let payload = {
          id: this.$route.params.id
        };
        this.$store.dispatch('loadCategory', payload)
      }
    },
    computed: {
      ...mapState([
        'category',
        'post'
      ])
    }
  };
</script>
<style lang="sass">
[contenteditable="true"]
  min-height: 2em
  border: 1px solid green
.title-name
  &:first-letter
    text-transform: uppercase
</style>
