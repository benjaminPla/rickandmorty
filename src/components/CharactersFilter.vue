<template>
  <div class="container">
      <button @click.prevent='filterStatus("")'>All</button>
      <button @click.prevent='filterStatus("Alive")'>Alive</button>
      <button @click.prevent='filterStatus("Dead")'>Dead</button>
      <button @click.prevent='filterStatus("unknown")'>Unknown</button>
  </div>
  <input
    type="search"
    placeholder="Search by name..."
    v-model='name'
    @input.prevent='filterName()'/>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

const capitalize = (string) => string.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

export default {
  name: 'CharactersFilter',
  setup() {
    const store = useStore();
    const name = ref('');
    const filterName = () => store.dispatch('filterByName', capitalize(name.value));
    const filterStatus = (status) => store.dispatch('filterByStatus', status);
    return { name, filterName, filterStatus };
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
input[type=search] {
  padding: 10px 15px;
  border: none;
  outline: none;
  border-radius: 10px;
}
</style>
