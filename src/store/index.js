import { createStore } from 'vuex';

export default createStore({
  state: {
    characters: [],
  },
  mutations: {
    // eslint-disable-next-line no-return-assign
    setCharacters: (state, payload) => state.characters = payload,
  },
  actions: {
    async getCharacters({ commit }) {
      const response = await fetch('https://rickandmortyapi.com/api/character')
        .then((data) => data.json())
        .catch((error) => error);
      commit('setCharacters', response.results);
    },
  },
  modules: {
  },
});
