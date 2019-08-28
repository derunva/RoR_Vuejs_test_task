<template lang="pug">
  .posts
    .h1.title Пости категорії {{category.name}}
    post(v-for="post in posts" :item="post")
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import {mapState} from 'vuex';
export default {
  name: 'categories',
  components: {
    Post
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
    ])
  }
}
</script>