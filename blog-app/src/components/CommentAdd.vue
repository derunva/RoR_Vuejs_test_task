<template lang="pug">
  .comment
    h2.subtitle Залиште коментар до {{type}}
    p автор
    input.input(type="text" v-model="comment.author")
    p контент
    textarea.textarea(type="text" v-model="comment.content")
    p &nbsp;
    button.button(@click="sendComment") відправити
</template>
<script>
export default{
  data: function(){
    return {
      comment: {
        author: '',
        content: ''
      }
    }
  },
  methods:{
    sendComment(){
      console.log(this.url)
      this.$store.dispatch('leaveComment', {path: this.url, data: this.comment })
      this.comment = {
        author: '',
        content: ''
      }
    }
  },
  props:{
    url: String,
    type: String
  }
}

</script>
