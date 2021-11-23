<template>
  <div class="flex">
    <episodes-filter />
    <p>Results: {{ episodes.length }}</p>
    <ul class="episodes">
      <li v-for="episode in episodes" :key="episode.id">
        <episode-card :episode="episode" />
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import EpisodeCard from './EpisodeCard.vue';
import EpisodesFilter from './EpisodesFilter.vue';

export default {
  name: 'ListEpisodes',
  components: { EpisodeCard, EpisodesFilter },
  setup() {
    const store = useStore();
    const episodes = computed(() => store.state.episodesFilter);
    onMounted(() => store.dispatch('getEpisodes'));
    return { episodes };
  },
};
</script>

<style scoped lang="scss">
.flex {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 15px 10%;
  p {
    color: #fff;
    font-size: 0.5rem;
    font-weight: 100;
    text-align: left;
    width: 100%;
    padding: 0 0 5px 15px;
  }
  .episodes {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
