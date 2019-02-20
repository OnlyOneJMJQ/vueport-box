<template>
  <div class="home col-12 col-lg-8 offset-lg-2 my-5">
    <h1>Welcome to VuePort</h1>
    <h2>Good to Go!</h2>
    <p>Your Truffle Box is installed and ready.</p>
    <h4>UPort Authentication</h4>
    <p>This particular box comes with UPort authentication built-in.</p>
    <p>
      NOTE: To interact with your smart contracts through UPort's web3 instance,
      make sure they're deployed to the <code> Rinkeby </code> testnet.
    </p>
    <p>
      NOTE: uport-connect uses the Infura IPFS gateway, due to this the uPort
      login modal might not always be available
    </p>
    <p>
      In the upper-right corner, you'll see a login button. Click it to login
      with UPort. There are two authenticated routes, <code>"/profile"</code> ,
      that displays the UPort user's name once authenticated and
      <code>"/dashboard"</code> where the user can interact with
      SimpleStorage.sol (which is already deployed on the Rinkeby test net).
    </p>
    <p>
      Using login will save your data to <code>localStorage</code> to remember
      you for your next login so you do not have to scan a QR code again.
      Pressing logout explicitly clears <code>localStorage</code>, requiring you
      to scan a QR code again next time you press login.
    </p>
    <h4>Redirect Path</h4>
    <p>
      This example redirects home <code>"/"</code> when trying to access an
      authenticated route without first authenticating. You can change this path
      in <code>src/router/route-handler.js</code>
    </p>
    <h4>Accessing User Data</h4>
    <p>
      Once authenticated, any component can access the user's accessing it from
      the vuex store by using the <code>auth/CREDENTIALS</code> getter
    </p>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
.home {
  text-align: left;
}
</style>
