<template>
  <div class="container">
      <button>All</button>
      <button>Alive</button>
      <button>Dead</button>
      <button>Unknown</button>
  </div>
</template>

<script>
export default {
  name: 'CharactersFilter',
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
