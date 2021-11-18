<template>
  <div class="container">
      <button @click.prevent='filter("")'>All</button>
      <button @click.prevent='filter("Alive")'>Alive</button>
      <button @click.prevent='filter("Dead")'>Dead</button>
      <button @click.prevent='filter("unknown")'>Unknown</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'CharactersFilter',
  setup() {
    const store = useStore();
    const filter = (status) => store.dispatch('filterByStatus', status);
    return { filter };
  },
};
</script>

<style scoped lang='scss'>
.container {
    background-color: #555;
    border-radius: 10px;
    display: inline-block;
    margin-bottom: 15px;
    padding: 10px 15px;
    button {
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      margin: 0 10px;
      outline: none;
    }
    button:hover {
      color: orange;
    }
}

</style>
