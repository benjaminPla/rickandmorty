<template>
  <div class='view'>
    <h1>Characters</h1>
    <list-characters />
  </div>
</template>

<script>
import ListCharacters from '@/components/ListCharacters.vue';

export default {
  name: 'ViewCharacters',
  components: { ListCharacters },
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
}
</style>
