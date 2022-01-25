<script>
  import FilmList from './components/FilmList.vue'
  import Search from './components/Search.vue'
  
  export default {
    components: {
      FilmList,
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
