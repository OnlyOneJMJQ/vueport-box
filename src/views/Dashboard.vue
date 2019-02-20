<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-8 offset-lg-2 my-5">
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
          <b-button :disabled="loading.set===true" class="mx-2" @click="set" variant="outline-primary">
            <span v-if="loading.set === false">Set Number</span>
             <b-spinner variant="primary" v-else small />
          </b-button>
          <b-button :disabled="loading.get===true" class="mx-2" @click="get" variant="primary">
            <span v-if="loading.get === false">Get Number</span>
             <b-spinner variant="primary" v-else small />
            </b-button>
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
      getter: 0,
      loading: {
        set: false,
        get: false
      }
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
        this.loading.set = true
        await simpleStorage.set(this.setter, this.network)
        this.$emit('alert', {
          countdown: 5,
          color: 'success',
          message: `Number set to ${this.setter}`
        })
        await this.get()
        this.setter = null
        this.loading.set = false
      } catch (e) {
        this.$root.$emit('alert', {
          countdown: 5,
          color: 'danger',
          message: e.message
        })
        this.setter = null
        this.loading.set = false
        console.log(e)
      }
    },
    async get () {
      try {
        this.loading.get = true
        this.getter = (await simpleStorage.get(this.network)).toString(10)
        this.loading.get = false
      } catch (e) {
        this.$root.$emit('alert', {
          countdown: 5,
          color: 'danger',
          message: e.message
        })
        this.loading.get = false
        console.log(e)
      }
    }
  }
}
</script>

<style scoped></style>
