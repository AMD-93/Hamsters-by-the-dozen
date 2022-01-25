<script>
  export default {
    data() {
      return { films: [] }
    },
    methods: {
      getFilms() {
        fetch('https://ghibliapi.herokuapp.com/films/')
          .then((response) => response.json())
        .then((films) => {
          this.films = films
        })
    }
    }}
</script>


<template>
  <button @click="getFilms">Get films!</button>

  <div>
    <ol>
      <li v-for="film in films">{{ film.title }}</li>
    </ol>
</div>

</template>