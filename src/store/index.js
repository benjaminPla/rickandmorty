import { createStore } from 'vuex';

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],

    locations: [],
    locationsFilter: [],

    episodes: [],
    episodesFilter: [],
  },
  mutations: {
    setCharacters: (state, payload) => state.characters = payload,
    setCharactersFilter: (state, payload) => state.charactersFilter = payload,

    setLocations: (state, payload) => state.locations = payload,
    setLocationsFilter: (state, payload) => state.locationsFilter = payload,

    setEpisodes: (state, payload) => state.episodes = payload,
    setEpisodesFilter: (state, payload) => state.episodesFilter = payload,
  },
  actions: {
    async getCharacters({ commit }) {
      const characters = await fetch('https://rickandmortyapi.com/api/character')
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
