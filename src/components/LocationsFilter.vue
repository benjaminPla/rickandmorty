<template>
  <div class='container'>
    <div class='pages'>
      <i
        class="fas fa-angle-double-left"
        @click.prevent='setPage("previous")'
        :class='page === 1 && "disable"'>
      </i>
      <span>Page: {{ page }}</span>
      <i class="fas fa-angle-double-right" @click.prevent='setPage("next")'></i>
    </div>
    <input
      type="search"
      placeholder="Search by name..."
      v-model='name'
      @input.prevent='filterName()'/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

const capitalize = (string) => string.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

export default {
  name: 'LocationsFilter',
  setup() {
    const store = useStore();
    const name = ref('');
    const page = computed(() => store.state.locationsPage);
    const setPage = (type) => store.dispatch('setLocationsPage', type);
    const filterName = () => store.dispatch('filterLocationsByName', capitalize(name.value));
    // eslint-disable-next-line
    return { page, name, setPage, filterName };
  },
};

</script>

<style scoped lang='scss'>
.container {
  align-items: center;
  display:  flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  .fas {
    transition: 0.2s;
    background-color: #555;
    border-radius: 10px;
    padding: 10px 15px;
    color: #fff;
  }
  .fas:hover {
    color: orange;
    cursor: pointer;
  }
  .pages {
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    span {
      font-size: 1.5rem;
      margin: 0 10px;
    }
  }
  .disable,
  .disable:hover {
    color: #000;
    cursor: not-allowed;
  }
  input[type=search] {
    width: 40%;
    padding: 10px 15px;
    border: none;
    outline: none;
    border-radius: 10px;
  }
}
</style>
