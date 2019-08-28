<template lang="pug">
  .box.is-secondary.is-child
    .title {{item.name}}
    .subtitle {{item.description}}
</template>
<script>
  export default{
    props: {
      item: Object
    }
  };
</script>