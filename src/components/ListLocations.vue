<template>
  <div class="flex">
    <p>Results: {{ locations.length }}</p>
    <ul class="characters">
      <li v-for="location in locations" :key="location.id">
        <location-card :location="location" />
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import LocationCard from './LocationCard.vue';

export default {
  name: 'ListLocations',
  components: { LocationCard },
  setup() {
    const store = useStore();
    const locations = computed(() => store.state.locationsFilter);
    onMounted(() => {
      store.dispatch('getLocations');
    });
    return { locations };
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
