<template lang="pug">
  .box.is-primary.is-child
    .title {{item.name}}
    .subtitle {{item.description}}
    .buttons
      router-link.button.is-primary(:to="{path: '/categories/' + item.id}") список постів
      button.button редагувати
      button.button.is-danger видалити
</template>
<script>
  export default{
    props: {
      item: Object
    }
  };
</script>