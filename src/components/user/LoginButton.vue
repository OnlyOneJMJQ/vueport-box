<template>
  <b-button :disabled="loading === true" @click="login" size="md" class="my-2 my-sm-0" type="submit">
    <img src="@/assets/uport-logo.svg" width="25" height="25" /> &nbsp;|&nbsp;
    <span v-if="loading === false">Log in with uport</span>
    <b-spinner variant="primary" v-if="loading === true" small />
  </b-button>
</template>

<script>
export default {
  name: 'loginButton',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    network () {
      return this.$store.getters['network/SELECTED']
    }
  },
  methods: {
    async login () {
      try {
        this.loading = true
        await this.$store.dispatch('auth/USER_LOGIN', this.network)
        this.loading = false
        this.$router.push('/profile')
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
