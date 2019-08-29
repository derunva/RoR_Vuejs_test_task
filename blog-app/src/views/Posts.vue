<template lang="pug">
  .posts
    .h1.title Пости категорії {{category.name}}
    post(v-for="post in posts" :item="post")
    comments(:type="'категорії'", :url="url")
</template>

<script>
// @ is an alias to /src
import Comments from '@/components/Comments.vue'
import Post from '@/components/Post.vue'
import {mapState} from 'vuex';
export default {
  components: {
    Post,
    Comments
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
