import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prices: []
  },
  mutations: {
    SET_PRICES(state, payload) {
      Vue.set(state, 'prices', payload)
    }
  },
  actions: {
    getPrices({commit}, payload) {
      axios.post('https://run2updistributor.azurewebsites.net/api/pricing', payload)
      .then(function (response) {
        commit('SET_PRICES', response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  modules: {
  }
})
