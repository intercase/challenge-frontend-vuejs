<template>
  <div class="row mt-2">
    <div class="col-6">
      <div class="form-group">
        <select class="custom-select" required @input="$emit('input-select', $event.target.value)">
          <option value>Select a genre</option>
          <option :value="option.id" v-for="(option,index) in genres" :key="index">{{option.name}}</option>
        </select>
      </div>
    </div>
    <div class="col-6">
      <div class="form-group">
        <input type="tel" class="form-control"  @input="$emit('input', $event.target.value)" v-mask="'####'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    genres: {
      type: Array
    }
  }
};
</script>

