<template>
  <div class="col-12 d-flex justify-content-center mt-4">
    <button @click="$emit('click')">MORE</button>
  </div>
</template>

<style lang="scss" scoped>
button {
  background-color: transparent;
  border: 1px solid;
  transition: 0.5s;
  width:300px;
  border-radius: 3px;
  height:50px;
  &:hover {
    color: #ff6d40 !important;
  }
}
</style>