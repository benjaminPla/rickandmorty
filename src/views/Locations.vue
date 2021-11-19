<template>
  <div class='view'>
    <h1>Locations</h1>
    <list-locations />
  </div>
</template>

<script>
import ListLocations from '@/components/ListLocations.vue';

export default {
  name: 'ViewLocations',
  components: { ListLocations },
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
