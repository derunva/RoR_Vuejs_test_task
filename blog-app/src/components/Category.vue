<template lang="pug">
  .box.is-primary.is-child
    div(v-if="editable") редагування поля "name"
    .title.title-name(:contenteditable="editable" ref="name") {{item.name}}
    div(v-if="editable") редагування поля "description"
    .subtitle(:contenteditable="editable" ref="description")  {{item.description}}
    .buttons
      router-link.button.is-primary(:to="{path: '/categories/' + item.id}") список постів
      button.button(v-if="!editable" @click="editable = true") редагувати
      button.button.is-success(v-if="editable" @click="updateCategory(item.id)") зберегти
      button.button.is-danger(@click="deleteCategory(item.id)") видалити
</template>
<script>
  import {mapState} from 'vuex';
  export default{
    data: function(){
      return {
        editable: false,
        id: null
      }
    },
    props: {
      item: Object
    },
    methods:{
      deleteCategory(id){
        this.$store.dispatch('deleteCategory', id)
      },
      updateCategory(id){
        this.id = id;
        let payload = {
          id: id,
          data: {
            name: this.$refs.name.innerText,
            description: this.$refs.description.innerText
          } 
        }
        this.$store.dispatch('updateCategory', payload)
      }
    },
    watch:{
      success_id(){
        if(this.id === this.success_id){
          this.editable = false;
          this.$store.dispatch('clearSuccess')
        }
      }
    },
    computed: {
      ...mapState([
        'success_id'
      ])
    }
  };
</script>
