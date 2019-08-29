<template lang="pug">
  #app
    .hero.is-dark
      .hero-body
        .container
          .title Blog
          router-link.button.is-primary(to="/") На головну
          | &nbsp;
          router-link.button.is-primary(to="categories/new", v-if="routeName == 'home'") Нова категорія
    .section
      .container
        router-view
    .footer.has-text-centered
      .container
        | @ 2019 blog
    errors
</template>
<script>
  import Errors from './components/Errors.vue'
  export default{
    data: function() {
      return {
        routeName: 'home'
      }
    },
    components: {
      Errors
    },
    watch: {
    '$route' (to, from) {
        this.routeName = to.name
        console.log(to.name)
        // react to route changes...
      }
    }
  };
</script>
<style lang="sass">
[contenteditable="true"]
  min-height: 2em
  border: 1px solid green
.title-name
  &:first-letter
    text-transform: uppercase
</style>
