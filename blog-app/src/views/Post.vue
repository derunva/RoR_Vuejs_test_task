<style scoped lang="sass">
  .post--title
    &::first-letter
      text-transform: capitalize
</style>
<template lang="pug">
  .post
    h1.post--title.title {{post.name}}
    .post--image(v-if="post && post.file && post.file.url")
      img(:src="imgUrl" :alt="post.name")
    .post--content
      |{{post.content}}
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    data: function(){
      return{
        imagesStorageHost: 'http://localhost:3000'
      }

    },
    mounted(){
      this.$store.dispatch('loadPost', {id:this.$route.params.post_id})
    },
    computed: {
      ...mapState([
        'post'
      ]),
      imgUrl:function(){
        let url = this.post.file.url || ''
        return this.imagesStorageHost+url
      }
    }
  }
</script>
