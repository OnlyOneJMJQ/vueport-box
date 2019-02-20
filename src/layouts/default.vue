<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand @click="$router.push('/')" href="#"
        >VuePort</b-navbar-brand
      >

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item
            href="#"
            @click="$router.push('/profile')"
            :disabled="loggedIn === false"
            >Profile</b-nav-item
          >
          <b-nav-item
            href="#"
            @click="$router.push('/dashboard')"
            :disabled="loggedIn === false"
            >Dashboard</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <NetworkSelector class="mr-2" v-if="loggedIn === false" />
          <LoginButton v-if="loggedIn === false" />
          <LogoutButton v-else />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view />
    <Alert />
  </div>
</template>

<script>
import LoginButton from '@/components/user/LoginButton.vue'
import LogoutButton from '@/components/user/LogoutButton.vue'
import NetworkSelector from '@/components/user/NetworkSelector.vue'
import Alert from '@/components/ui/Alert.vue'
export default {
  name: 'layout',
  computed: {
    loggedIn () {
      return this.$store.getters['auth/LOGGED_IN']
    }
  },
  components: {
    LoginButton,
    LogoutButton,
    NetworkSelector,
    Alert
  }
}
</script>

<style scoped></style>
