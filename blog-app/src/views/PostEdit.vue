<style lang="sass" scoped>

input, textarea
  margin-bottom: 20px

</style>
<template lang="pug">
  .edit-post
    h1.title Редагування поста
    form(ref="form" @submit.prevent="savePost")
      input.input(v-model="post.name" name="post[name]")
      input(type="file" name="post[file]" placeholder="Файл")
      textarea.textarea(v-model="post.content" name="post[content]")
      button.button зберегти
</template>
<script>
import EventBus from '../event-bus';
import {mapState} from 'vuex'
export default{
  mounted(){
    this.$store.dispatch('loadPost', {id:this.$route.params.post_id});
    EventBus.$on('post_done',  (payLoad) => {
      this.$router.push({ path: '/categories/' + this.category.id+'/'+payLoad.id })
    });
  },
  methods:{
    savePost(){
      var formData = new FormData(this.$refs.form);
      this.$store.dispatch('updatePost', {formData:formData, id: this.post.id})
    }
  },
  computed: {
    ...mapState([
      'post',
      'category'
    ])
  }
}
</script>
