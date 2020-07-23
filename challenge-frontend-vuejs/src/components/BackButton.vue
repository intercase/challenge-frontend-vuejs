<template>
  <div>
    <a
      :href="toPath"
      class="btn btn-dark font-weight-bold"
    >
      &#x02190; Voltar
    </a>
  </div>
</template>

<script>
export default {
  props: {
    toPath: {
      type: String,
      default: '/',
      required: true,
    },
  },
};
</script>
