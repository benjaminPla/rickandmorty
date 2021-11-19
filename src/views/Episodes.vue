<template>
  <div class='view'>
    <h1>Episodes</h1>
    <list-episodes />
  </div>
</template>

<script>
import ListEpisodes from '@/components/ListEpisodes.vue';

export default {
  name: 'ViewEpisodes',
  components: { ListEpisodes },
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
