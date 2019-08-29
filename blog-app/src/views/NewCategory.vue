<style lang="sass" scoped>
input, textarea
  margin-bottom: 20px

</style>
<template lang="pug">
  .new-category
    h1.title
      | Нова категорія
      |
      button.button(@click="clear") очистити
    <input v-model="category.name" class="input" type="text" placeholder="Назва категорії">
    <textarea class="textarea" v-model="category.description" placeholder="Опис категорії"></textarea>
    .button.button-primary(@click="saveCategory") Зберегти
</template>
<script>
  import EventBus from '../event-bus';
  export default{
    data: function(){
      return {
        category: {
          name: '',
          description: ''
        }
      }
    },
    mounted(){
      EventBus.$on('post_done',  (payLoad) => {
        console.log(123)
        this.$router.push({ path: '/' })
      });
    },
    methods:{
      saveCategory(){
        this.$store.dispatch('newCategory', this.category)
      },
      clear(){
        this.category = {
          name: '',
          description: ''
        }
      }
    }
  };
</script>
