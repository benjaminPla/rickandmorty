<template>
  <footer>
    <a href='https://github.com/benjaminPla' target='_blank'>
      <i class='fab fa-github'></i>
    </a>
    <a href='https://www.linkedin.com/in/benjamin-pla/' target='_blank'>
      <i class='fab fa-linkedin'></i>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
};
</script>

<style scoped lang='scss'>
footer {
  text-align: center;
  font-size: 1.5rem;
  padding: 20px 15%;
  color: #333;
  a {
    margin: 0 20px;
    transition: 0.2s;
  }
  a:hover {
    color: orange;
  }
}
</style>
