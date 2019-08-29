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
    CommentsList(:list="post.comments")
    CommentAdd(:type="'посту'", :url="url")
</template>
<script>
  import CommentAdd from '@/components/CommentAdd.vue'
  import CommentsList from '@/components/CommentsList.vue'
  import {mapState} from 'vuex'
  export default{
    components:{
      CommentAdd,
      CommentsList
    },
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
      },
      url: function(){
        return '/posts/'+this.post.id+'/comments'
      }
    }
  }
</script>
