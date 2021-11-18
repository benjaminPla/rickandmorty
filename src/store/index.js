import { createStore } from 'vuex';

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
  },
  mutations: {
    // eslint-disable-next-line no-return-assign
    setCharacters: (state, payload) => state.characters = payload,
    // eslint-disable-next-line no-return-assign
    setCharactersFilter: (state, payload) => state.charactersFilter = payload,
  },
  actions: {
    async getCharacters({ commit }) {
      const response = await fetch('https://rickandmortyapi.com/api/character')
        .then((data) => data.json())
        .catch((error) => error);
      commit('setCharacters', response.results);
      commit('setCharactersFilter', response.results);
    },
    filterByStatus({ commit, state }, status) {
      const results = state.characters.filter((character) => character.status.includes(status));
      commit('setCharactersFilter', results);
    },
  },
  // modules: {
  // },
});
