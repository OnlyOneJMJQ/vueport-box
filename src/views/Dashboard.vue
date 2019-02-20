<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-8 offset-lg-2">
        <h1>
          Contract Interaction
        </h1>
        <p>
          Here you can interact with the simpleStorage.sol contract, if
          deployed, using your uPort identity and keys.
        </p>
        <div>
          <b-form-input
            class="my-2"
            v-model="setter"
            type="number"
            placeholder="Enter a number"
          />
          <b-button class="mx-2" @click="set" variant="outline-primary"
            >Set !
          </b-button>
          <b-button class="mx-2" @click="get" variant="primary">Get</b-button>
          <br />
          <p class="my-2"><strong>Current value: </strong> {{ getter }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import simpleStorage from '@/util/simple-storage.js'
export default {
  name: 'dashboard',
  data () {
    return {
      setter: null,
      getter: 0
    }
  },
  mounted () {
    this.get()
  },
  computed: {
    network () {
      return this.$store.getters['network/SELECTED']
    }
  },
  methods: {
    async set () {
      try {
        await simpleStorage.set(this.setter, this.network)
      } catch (e) {
        this.$emit('alert', {
          countdown: 5,
          color: 'danger',
          message: e.message
        })
        console.log(e)
      }
    },
    async get () {
      try {
        this.getter = (await simpleStorage.get(this.network)).toString(10)
      } catch (e) {
        this.$emit('alert', {
          countdown: 5,
          color: 'danger',
          message: e.message
        })
        console.log(e)
      }
    }
  }
}
</script>

<style scoped></style>
