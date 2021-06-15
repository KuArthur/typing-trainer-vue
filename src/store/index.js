import { createStore } from 'vuex'

import axios from 'axios'

export default createStore({
  state: {
    text: []
  },
  mutations: {
    setText (state, text) {
      state.text = text.join('').split('')
    }
  },
  actions: {
    getText ({ commit }) {
      return axios.get('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')
        .then(res => {
          commit('setText', res.data)
        })
    }
  },
  getters: {
    getText (state) {
      return state.text
    }
  }
})
