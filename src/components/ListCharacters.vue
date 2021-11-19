<template>
  <div class="flex">
    <characters-filter />
    <p>Results: {{ characters.length }}</p>
    <ul class="characters">
      <li v-for="character in characters" :key="character.id">
        <character-card :character="character" />
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CharacterCard from './CharacterCard.vue';
import CharactersFilter from './CharactersFilter.vue';

export default {
  name: 'ListCharacters',
  components: { CharacterCard, CharactersFilter },
  setup() {
    const store = useStore();
    const characters = computed(() => store.state.charactersFilter);
    onMounted(() => {
      store.dispatch('getCharacters');
    });
    return { characters };
  },
};
</script>

<style scoped lang="scss">
.flex {
  align-items: center;
  display: flex;
  flex-direction: column;
  p {
    color: #fff;
    font-size: 0.5rem;
    font-weight: 100;
    text-align: left;
    width: 100%;
  }
  .characters {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    padding: 15px 0;
  }
}
</style>
