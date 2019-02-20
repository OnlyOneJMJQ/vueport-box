<template>
  <div>
    <b-form-select
      @change="$store.commit('network/SELECT_NETWORK', selected)"
      v-model="selected"
      :options="options"
    />
  </div>
</template>

<script>
export default {
  name: 'network-selector',
  data () {
    return {
      selected: { id: '4', rpcUrl: 'https://rinkeby.infura.io' },
      options: [
        {
          value: { id: '1', rpcUrl: 'https://mainnet.infura;io' },
          text: 'mainnet'
        },
        {
          value: { id: '4', rpcUrl: 'https://rinkeby.infura.io' },
          text: 'rinkeby'
        },
        {
          value: { id: '3', rpcUrl: 'https://ropsten.infura.io' },
          text: 'ropsten'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
