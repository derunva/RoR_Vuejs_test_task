<template lang="pug">
  .box.is-secondary.is-child
    .title.title-name {{item.name}}
    .subtitle {{item.description}}
    .buttons
      router-link.button(:to="{path: '/categories/'+category.id+'/'+item.id}") переглянути
      button.button.is-danger( @click="remove(item.id)") видалити
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    props: {
      item: Object
    },
    methods:{
      remove(id){
        this.$store.dispatch('deletePost', id)
      }
    },
    computed: {
      ...mapState([
        'category'
      ])
    }
  };
</script>
