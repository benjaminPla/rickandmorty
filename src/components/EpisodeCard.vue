<template>
<div class="card">
    <h3>{{ episode.name }}</h3>
    <ul>
      <li>Season: {{ episode.episode }}</li>
      <li>Episode: {{ episode.episode }}</li>
      <li>Air Date: {{ episode.air_date }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EpisodeCard',
  props: ['episode'],
};
</script>

<style scoped lang='scss'>
.card{
  background-color: #555;
  border-radius: 20px;
  font-size: .7rem;
  overflow: hidden;
  transition: 0.1s;
  color: #ccc;
  font-weight: 100;
  padding: 10px 25px;
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
