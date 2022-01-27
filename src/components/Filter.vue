<script>
export default {
    name: "Filter",
    props: {
        filter: Array
    }, 
    methods: {
        filterFilms() {
            
        }
    },
    created() {
        
    }
}
</script>


<template>
    <form>
        <input type="text" v-model="filter" placeholder="Search films by title" @keyup="filterFilms">
    </form>

</template>


<style>

</style>