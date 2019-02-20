<template>
  <b-button
    @click="$store.dispatch('auth/USER_LOGOUT')"
    size="md"
    class="my-2 my-sm-0"
    type="submit"
    >Log Out</b-button
  >
</template>

<script>
export default {
  name: 'logoutButton'
}
</script>

<style scoped></style>
