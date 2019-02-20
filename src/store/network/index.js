export default {
  namespaced: true,
  state: {
    selected: { id: '4447', rpcUrl: 'http://localhost:9545' }
  },
  getters: {
    SELECTED: state => state.selected
  },
  mutations: {
    SELECT_NETWORK: (state, payload) => (state.selected = payload)
  }
}
