<script>
  export default {
    data() {
      return {
        hamsters: '',
        isHidden: false
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
  <div id="content">
    <button @click="onClick((isHidden = true))" v-if="!isHidden">
      Show me da hamsters!
    </button>

    <ol>
      <li :key="hamster.id" v-for="hamster in hamsters">
        {{ hamster.name }} är {{ hamster.age }} år gammal och älskar att
        {{ hamster.loves }} och äta {{ hamster.favFood }}.
      </li>
    </ol>
  </div>
</template>

<style>
  li {
    text-align: left;
    line-height: 1.5;
  }
  #content {
    display: flex;
    justify-content: center;
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
