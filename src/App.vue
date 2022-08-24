<script>
  import HelloWorld from './components/HelloWorld.vue'
  export default {
    components: {
      HelloWorld
    }
  }
</script>

<template>
  <header>
    <img id="icon" src="../public/icon.png" />
    <HelloWorld title="Hamsters, hamsters everywhere" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/hamsters">Hamsters</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f8ecd1;
  }

  #icon {
    padding-top: 10px;
    padding-right: 10px;
    height: 70px;
  }
  main {
    display: flex;
    justify-content: center;
  }
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: -10px;
    padding-left: 12px;
    margin-bottom: 50px;
    background-color: #deb6ab;
    font-weight: bold;
    font-size: 20px;
  }

  nav {
    margin-top: 30px;
    margin-right: 30px;
  }
  nav a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    padding: 15px;
    border-radius: 5px;
  }

  .router-link-exact-active {
    color: white;
    background: #85586f;
  }
</style>
