<script>
  import Search from './components/Search.vue'
  
  export default {
    components: {
      Search
    },
    data() {
        return { }
    },
    methods: {
      
    }
  }
</script>

<template>
<nav>
  <ul>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/about">About</RouterLink>
    </li>
    <li>
      <RouterLink to="/contact">Contact</RouterLink>
    </li>
  </ul>
</nav>

<main>
  <RouterView />
</main>

</template>


