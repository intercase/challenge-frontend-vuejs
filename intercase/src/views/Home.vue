<template>
  <section>
    <div class="bg-default w-100 h-100"></div>
  </section>
</template>
<style lang="scss">
.bg-default {
  background-image: url("https://s3.amazonaws.com/img-intercase/wp-content/uploads/2018/10/02143650/frente-grama-2.png");
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  @media all and (max-width: 768px) {
    background-position: initial;
  }
}
</style>