<script>
  export default {
    data() {
      return {
        welcome: true,
        name: ''
      }
    }
  }
</script>

<template>
  <div id="center_text">
    <input type="text" placeholder="What's your name?" v-model.lazy="name" />

    <p :class="{ welcome }">
      Welcome,
      {{ name }}!
    </p>
  </div>
</template>

<style>
  #center_text {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .welcome {
    width: 100%;
  }
</style>
