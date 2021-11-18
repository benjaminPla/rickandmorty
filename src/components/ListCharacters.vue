<template>
  <h2>Characters</h2>
  <ul class="characters">
    <li v-for="character in characters" :key="character.id">
      <character-card :character='character' />
    </li>
  </ul>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CharacterCard from './CharacterCard.vue';

export default {
  name: 'ListCharacters',
  components: { CharacterCard },
  setup() {
    const store = useStore();
    const characters = computed(() => store.state.characters);
    onMounted(() => {
      store.dispatch('getCharacters');
    });
    return {
      characters,
    };
  },
};
</script>

<style scoped lang="scss">
h2{
  text-align: center;
  color: #fff;
  padding: 20px 0;
}
.characters {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
