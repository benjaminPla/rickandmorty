<template>
  <div class='container'>
    <h3>Contact Me</h3>
    <form>
      <input type='email' placeholder='Email...' />
      <input type='text' placeholder='Subject...' />
      <textarea placeholder='Message...'></textarea>
      <input type='submit' value='Under Construction' @click.prevent />
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
};
</script>

<style scoped lang='scss'>
.container {
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  margin: 20px;
  h3 {
    padding: 10px 15px 5px 15px;
  }
  form {
    display: flex;
    flex-direction: column;
    input,
    textarea {
      border: none;
      outline: none;
      background: none;
      border-bottom: 1px solid #000;
      padding: 10px 15px 5px 15px;
      margin: 10px 15px;
      transition: 0.2s;
    }
    textarea {
      resize: none;
      height: 100px;
    }
    input:focus,
    textarea:focus {
      border-bottom: 1px solid orange;
    }
    input[type='submit'] {
      background-color: orange;
      cursor: pointer;
      border: none;
      border-radius: 10px;
      padding: 10px 15px;
      transition: 0.2s;
      color: #fff;
    }
    input[type='submit']:hover {
      transform: scale(1.1);
      color: #000;
    }
  }
}
</style>
