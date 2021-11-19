<template>
<div class="card">
    <h3>{{ location.name }}</h3>
    <ul>
      <li>Type: {{ location.type }}</li>
      <li>Dimension: {{ location.dimension }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LocationCard',
  props: ['location'],
};
</script>

<style scoped lang='scss'>
.card{
  background-color: #555;
  border-radius: 20px;
  font-size: .7rem;
  transition: 0.1s;
  padding: 10px 25px;
  width: 100%;
  height: 100%;
  color: #ccc;
  font-weight: 100;
  h3{
    color:#fff;
    transition: 0.2s;
  }
}
.card:hover {
  transform: scale(1.1);
  h3 {
    color: orange;
  }
}
  </style>
