<style lang="sass" scoped>
  .comment
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a
    display: block
    padding: 1.25rem
    margin-bottom: 1.5rem
    &--author
      font-size: 1.2em
      font-weight: bold
      text-transform: capitalize
</style>
<template lang="pug">
  .comments
    h2.subtitle Коментарі
    .comment(v-for="item in list")
      .comment--author {{item.author}}
      |{{item.content}}
</template>
<script>
export default{
  props:{
    list: Array
  }
}

</script>
