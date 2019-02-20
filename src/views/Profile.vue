<template>
  <div class="py-5">
    <ul class="profile-list">
      <li>
        <strong>Name: </strong>
        {{ $store.state.auth.credentials.name }}
      </li>
      <li>
        <strong>DID: </strong>
        {{ $store.state.auth.credentials.did }}
      </li>
      <li>
        <strong>Push Notifications: </strong>
        {{ $store.state.auth.credentials.pushToken ? "On" : "Off" }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'profile'
}
</script>

<style scoped>
.profile-list {
  list-style-type: none;
}
</style>
