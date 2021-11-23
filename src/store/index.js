import { createStore } from 'vuex';

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
    charactersPage: 1,

    locations: [],
    locationsFilter: [],
    locationsPage: 1,

    episodes: [],
    episodesFilter: [],
  },
  mutations: {
    /* eslint-disable */
    setCharacters: (state, payload) => state.characters = payload,
    setCharactersFilter: (state, payload) => state.charactersFilter = payload,
    setCharactersPage: (state, payload) => state.charactersPage += payload,

    setLocations: (state, payload) => state.locations = payload,
    setLocationsFilter: (state, payload) => state.locationsFilter = payload,
    setLocationsPage: (state, payload) => state.locationsPage += payload,

    setEpisodes: (state, payload) => state.episodes = payload,
    setEpisodesFilter: (state, payload) => state.episodesFilter = payload,
    /* eslint-disable */
  },
  actions: {
    async getCharacters({ commit, state }) {
      const endpoint = 'https://rickandmortyapi.com/api/character?page=';
      const characters = await fetch(endpoint + state.charactersPage)
        .then((data) => data.json())
        .catch((error) => error);
      commit('setCharacters', characters.results);
      commit('setCharactersFilter', characters.results);
    },
    async getLocations({ commit, state }) {
      const endpoint = 'https://rickandmortyapi.com/api/location?page=';
      const locations = await fetch(endpoint + state.locationsPage)
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
    setCharactersPage({ commit, state, dispatch}, type) {
      if(type === 'previous' && state.charactersPage === 1) return;
      type === 'next' ? commit('setCharactersPage', 1) : commit('setCharactersPage', -1);
      dispatch('getCharacters');
    },
    setLocationsPage({ commit, state, dispatch }, type) {
      if(type === 'previous' && state.locationsPage === 1) return;
      type === 'next' ? commit('setLocationsPage', 1) : commit('setLocationsPage', -1);
      dispatch('getLocations');

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
