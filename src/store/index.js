import { createStore } from 'vuex';

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
    characterPage: 1,

    locations: [],
    locationsFilter: [],

    episodes: [],
    episodesFilter: [],
  },
  mutations: {
    /* eslint-disable */
    setCharacters: (state, payload) => state.characters = payload,
    setCharactersFilter: (state, payload) => state.charactersFilter = payload,
    setCharacterPage: (state, payload) => state.characterPage += payload,

    setLocations: (state, payload) => state.locations = payload,
    setLocationsFilter: (state, payload) => state.locationsFilter = payload,

    setEpisodes: (state, payload) => state.episodes = payload,
    setEpisodesFilter: (state, payload) => state.episodesFilter = payload,
    /* eslint-disable */
  },
  actions: {
    async getCharacters({ commit, state }, page) {
      const endpoint = 'https://rickandmortyapi.com/api/character?page=';
      const characters = await fetch(endpoint + state.characterPage)
        .then((data) => data.json())
        .catch((error) => error);
      commit('setCharacters', characters.results);
      commit('setCharactersFilter', characters.results);
    },
    async getLocations({ commit }) {
      const locations = await fetch('https://rickandmortyapi.com/api/location')
        .then((data) => data.json())
        .catch((error) => error);
      commit('setLocations', locations.results);
      commit('setLocationsFilter', locations.results);
    },
    async getEpisodes({ commit }) {
      const episodes = await fetch('https://rickandmortyapi.com/api/episode')
        .then((data) => data.json())
        .catch((error) => error);
      commit('setEpisodes', episodes.results);
      commit('setEpisodesFilter', episodes.results);
    },
    setPage({ commit, state, dispatch}, type) {
      if(type === 'previous' && state.characterPage === 1) return;
      type === 'next' ? commit('setCharacterPage', 1) : commit('setCharacterPage', -1);
      dispatch('getCharacters', state.characterPage);
    },
    filterByName({ commit, state }, name) {
      const results = state.characters.filter((character) => character.name.includes(name));
      commit('setCharactersFilter', results);
    },
    filterByStatus({ commit, state }, status) {
      const results = state.characters.filter((character) => character.status.includes(status));
      commit('setCharactersFilter', results);
    },
  },
});
