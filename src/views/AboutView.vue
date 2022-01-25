<script>
import FilmList from '../components/FilmList.vue'
import Search from '../components/Search.vue'

export default {
    components: {
        FilmList,
        Search
    }
}
</script>

<template>
    <h1>About</h1>
    <Search />
    <FilmList />
</template>
