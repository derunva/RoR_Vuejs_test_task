<template lang="pug">
  #app
    .hero.is-dark
      .hero-body
        .container
          .title Blog
          router-link.button.is-primary(to="/") На головну
    .section
      .container
        router-view
    .footer.has-text-centered
      .container
        | @ 2019 blog 
</template>
<style lang="sass">


</style>
