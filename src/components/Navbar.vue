<template>
  <nav>
    <img src="../assets/logo.svg" alt='logo' />
    <ul>
      <li>Characters</li>
      <li>XXX</li>
      <li>XXX</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
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
      width: 100px;
      cursor: pointer;
      margin-left: 20px;
    }
    li {
      display: inline-block;
      padding: 0 20px;
      cursor: pointer;
    }
  }
</style>
