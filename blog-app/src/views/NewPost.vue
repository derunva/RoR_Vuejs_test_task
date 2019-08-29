<style lang="sass" scoped>
input, textarea
  margin-bottom: 20px

</style>
<template lang="pug">
  .new-post
    h1.title
      | Новий пост для категорії {{category.name}}
      |
      button.button(@click="clear") очистити
    form( ref="form")
      input(type="hidden" name="post[category_id]" :value="category.id")
      <input name="post[name]" class="input" type="text" placeholder="Назва категорії">
      input(type="file" name="post[file]" placeholder="Файл")
      <textarea class="textarea" name="post[content]" placeholder="Опис категорії"></textarea>
      .button.button-primary(@click="savePost") Зберегти
</template>
<script>
  import {mapState} from 'vuex'
  import EventBus from '../event-bus';
  export default{

    methods:{
      savePost(){
        var formData = new FormData(this.$refs.form);
        this.$store.dispatch('newPost', formData)
      },
      clear(){
        this.$refs.form.reset()
      }
    },
    computed: {
      ...mapState([
        'category'
      ])
    },
    mounted(){
      let payload = {
        id: this.$route.params.id
      };
      this.$store.dispatch('loadCategory', payload)
      EventBus.$on('post_done',  (payLoad) => {
        this.$router.push({ path: '/categories/' + this.category.id+'/'+payLoad.id })
      });
    }
  };
</script>
