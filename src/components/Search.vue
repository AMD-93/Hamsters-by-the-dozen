<script>
import FilmList from './FilmList.vue'  

  export default {
    name: "Search",
    data() {
        return { films: [] };
    },
    methods: {
        getFilms() {
            fetch("https://ghibliapi.herokuapp.com/films/")
                .then((response) => response.json())
                .then((films) => {
                this.films = films;
            });
        }
    },
    components: { FilmList }
}


</script>


<template>
<div class="search">
  <button @click="getFilms">Get films!</button>
  <FilmList :films="films" />
</div>

</template>