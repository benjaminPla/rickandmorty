<template>
  <Navbar />
  <router-view />
  <footerbar />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footerbar from '@/components/Footerbar.vue';

export default {
  name: 'App',
  components: { Navbar, Footerbar },
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
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
</style>
