<script>
  export default {
    data() {
      return {
        hamsters: '',
        isHidden: false,
        listItemStyle: {
          color: '#85586f',
          fontSize: '0.7em'
        }
      }
    },
    methods: {
      onClick() {
        fetch('https://hamsterwarsdb.herokuapp.com/hamsters')
          .then((response) => response.json())
          .then((hamsters) => {
            this.hamsters = hamsters
          })
      }
    }
  }
</script>

<template>
  <button @click="onClick((isHidden = true))" v-if="!isHidden">
    Show me da hamsters!
  </button>

  <ul>
    <li :key="hamster.id" v-for="hamster in hamsters">
      <p :style="listItemStyle">
        {{ hamster.name }} är {{ hamster.age }} år gammal och älskar att
        {{ hamster.loves }} och äta {{ hamster.favFood }}.
      </p>
    </li>
  </ul>
</template>

<style>
  ul {
    list-style: none;
  }
  li {
    line-height: 1;
  }

  button {
    color: white;
    font-size: 30px;
    background: #85586f;
    border-radius: 5px;
    border: none;
    padding: 30px;
  }
</style>
