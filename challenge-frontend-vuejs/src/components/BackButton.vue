<template>
  <div>
    <router-link
      :to="toPath"
      class="btn btn-dark font-weight-bold"
    >
      &#x02190; Voltar
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BackButton',
  props: {
    toPath: {
      type: String,
      default: '/',
      required: true,
    },
  },
};
</script>
