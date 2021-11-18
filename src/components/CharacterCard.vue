<template>
<div class="card">
    <img :src='character.image' :alt='character.name' />
    <div class="info">
      <h3>{{ character.name }}</h3>
      <ul>
        <li
        :class='
          character.status === "Alive"
            ? "alive" : character.status === "Dead"
            ? "dead" : "unknown"'
            >Status: {{ character.status }}</li>
        <li>Species: {{ character.species }}</li>
        <li>Gender: {{ character.gender }}</li>
        <li>Location: {{ character.location.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: ['character'],
};
</script>

<style scoped lang='scss'>
.card{
  background-color: #555;
  border-radius: 20px;
  font-size: .7rem;
  height: 290px;
  overflow: hidden;
  width: 190px;
  img{
    height: 150px;
    object-fit: cover;
    width: 100%;
  }
  .info{
    color: #ccc;
    font-weight: 100;
    padding: 10px 25px;
    h3{
      color:#fff;
    }
    .alive,
    .dead,
    .unknown {
      padding: 5px 0;
    }
    .alive::before {
      color: green;
      content: "\25CF";
      padding-right: 5px;
    }
    .dead::before {
      color: maroon;
      content: "\25CF";
      padding-right: 5px;
    }
    .unknown::before {
      content: "\fffd";
      padding-right: 5px;
    }
  }
}
  </style>
