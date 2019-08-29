<style scoped lang="sass">
.errors
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  max-height: 90vh
  max-width: 90vw
  margin: auto
  overflow: auto
</style>
<template lang="pug">
  .errors(v-if="custom_error.data")
    .notification.is-warning
      button.delete( @click="closeErrror")
      |{{custom_error.data}}
</template>
<script >
  import {mapState} from 'vuex';
  export default{
    watch:{
      error(){
        console.log(this.custom_error)
      }
    },
    methods:{
      closeErrror(){
        this.$store.dispatch('unsetError')
      }
    },
    computed: {
      ...mapState([
        'custom_error'
      ])
    }
  };
</script>
