<template>
  <navbar/>
  <div class='app'>
    <list-characters />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ListCharacters from '@/components/ListCharacters.vue';

export default {
  name: 'App',
  components: { Navbar, ListCharacters },
};
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');

*{
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  list-style: none;
  margin: 0;
  padding: 0;
}
.app{
  align-items: center;
  background-color: #333;
  display: flex;
  justify-content: center;
}
</style>
