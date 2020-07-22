<template>
  <div class="card w-100" @click="$emit('click')">
    <img :src="image" class="card-img-top" alt="..." />
    <div class="card-body flex-fill">
      <h5 class="card-title">{{title}}</h5>
      <h6>{{date}}</h6>
      <p class="card-text mb-4">{{text}}</p>
      <span>
        <i class="fas fa-fire"></i>
        {{popularity}}
      </span>
      <span>
        <i class="fas fa-heart"></i>
        {{rate}}|10
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    image: {
      type: String
    },
    date: {
      type: String
    },
    popularity: {
      type: Number
    },
    rate: {
      type: Number
    }
  }
};
</script>
<style lang="scss">
.card {
  cursor: pointer;
  :hover {
    h5 {
      color: #ff6d40;
    }
  }
  span {
    position: absolute;
    bottom: 10px;
  }
  .fa-fire {
    color: blue;
  }
  span:last-child {
    margin-left: 10rem;
    i {
      color: red;
    }
  }
}
</style>