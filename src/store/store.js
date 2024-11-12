import { createStore } from 'vuex';
import juegos from '../data/juegos.json';

const state = {
  games: juegos
};

const mutations = {
  UPDATE_STOCK(state, { codigo, amount }) {
    const game = state.games.find(game => game.codigo === codigo);
    if (game) {
      game.stock = parseInt(game.stock) + amount;
    }
  }
};

const actions = {
  updateStock({ commit }, payload) {
    commit('UPDATE_STOCK', payload);
  }
};

export default createStore({
  state,
  mutations,
  actions
});