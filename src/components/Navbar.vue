<template>
  <nav>
    <img src="../assets/logo.svg" alt='logo' />
    <div>
      <router-link to="/characters" class='route'>CHARACTERS</router-link>
      <router-link to="/locations" class='route'>LOCATIONS</router-link>
      <router-link to="/episodes" class='route'>EPISODES</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped lang='scss'>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    background-color: #fff;
    color: #333;
    position: fixed;
    width: 100%;
    z-index: 100;
    img {
      width: 120px;
      margin-left: 20px;
      transition: 0.2s;
    }
    img:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
    .route {
      display: inline-block;
      padding: 0 20px;
      transition: 0.2s;
    }
    .route:hover {
      cursor: pointer;
      color: orange;
      transform: scale(1.1);
    }
    a,
    a:hover,
    a:focus,
    a:active {
      text-decoration: none;
      color: inherit;
    }
  }
</style>
