<template lang="pug">
  .posts
    .h1.title Пости категорії {{category.name}}
    post(v-for="post in posts" :item="post")
    CommentsList(:list="category.comments")
    CommentAdd(:type="'категорії'", :url="url")
</template>

<script>
// @ is an alias to /src
import CommentAdd from '@/components/CommentAdd.vue'
import Post from '@/components/Post.vue'
import CommentsList from '@/components/CommentsList.vue'
import {mapState} from 'vuex';
export default {
  components: {
    Post,
    CommentAdd,
    CommentsList
  },
  mounted(){
    let payload = {
      id: this.$route.params.id
    };
    this.$store.dispatch('loadCategory', payload)
    this.$store.dispatch('loadPosts', payload)
  },
  computed: {
    ...mapState([
      'category',
      'posts'
    ]),
    url: function(){
      return '/categories/'+this.category.id+'/comments'
    }
  }
}
</script>
