<script>
  export default {
      name: "FilmList",
      props: {
          films: Array
      },
      methods: {
        filterFilms() {
          
        }
      }
    }
</script>


<template>
<div>
    <ol>
      <li class="films" v-for="film in films">
      <p>
      <i>{{ film.title }}</i>, {{ film.release_date }}. {{ film.description }}
      </p>
      </li>
    </ol>
</div>

<form>
        <input type="text" v-model="filter" placeholder="Search films by title" @keyup="filterFilms">
    </form>
</template>


<style>
.films {
  white-space: pre-wrap; 
  border: 1px solid; 
  background-color: darkblue; 
  padding: 1rem;
}
</style>