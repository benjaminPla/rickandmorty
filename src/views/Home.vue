<template>
  <div class='view'>
    <h1>Home</h1>
    <p>Hi! My name is Benjamin Pla</p>
    <p>I am a <b>Full Stack Deveoper</b></p>
    <p>This project was created using Vue and Vuex technologies, consuming
      <a href='https://rickandmortyapi.com/' target="_blank">Rick and Morty API</a>
    </p>
    <!-- <p>Deploys by: </p> -->
    <contact-form />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'ViewHome',
  components: { ContactForm },
};
</script>

<style scoped lang='scss'>
.view {
  align-items: center;
  flex-direction: column;
  background-color: #333;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  h1 {
    color: #fff;
    padding: 20px 0;
  }
  p {
    padding-bottom:: 15px;
    color: #ccc;
    a {
      color: orange;
    }
    b {
      font-size: 1.3rem;
    }
  }
}
</style>
