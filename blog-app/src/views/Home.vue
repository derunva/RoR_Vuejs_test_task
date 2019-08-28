<template lang="pug">
  .categories
    .h1.title Категорії
    category(v-for="category in categories" :item="category")
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category.vue'
import {mapState} from 'vuex';
export default {
  name: 'categories',
  components: {
    Category
  },
  mounted(){
    this.$store.dispatch('loadCats')
  },
  computed: {
    ...mapState([
      'categories'
    ])
  }
}
</script>
