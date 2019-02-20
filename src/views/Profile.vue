<template>
  <div class="row">
    <div class="col-12 col-lg-8 offset-lg-2 my-5">
      <h1>Profile</h1>
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
