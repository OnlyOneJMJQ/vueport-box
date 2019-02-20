# VuePort (Vue-uport)
![banner](https://github.com/saga-foundation/vueport-box/blob/master/loading-banner.png)

## Installation
Install Truffle globally.

`npm install -g truffle`

Download the box. This also takes care of installing the necessary dependencies.

`truffle unbox saga-foundation/vueport-box
`
## Uport 
This particular box comes with UPort authentication built-in using `uport-connect` 

uPort returns ownership of identity to the individual. uPort's open identity system allows users to register their own identity on Ethereum, send and request credentials, sign transactions, and securely manage keys & data.

To fully interact with this box you will need the uport mobile App.

NOTE: To interact with your smart contracts through UPort's web3 instance, make sure they're deployed to the `Rinkeby` testnet.

NOTE: uport-connect uses the `Infura IPFS gateway`, due to this the uPort login modal might not always be available

For more visit the [uport website](https://www.uport.me/)

## Demo Contract 

You will find a demo contract `SimpleStorage.sol` as well as its truffle artifact in this repository. The contract is already deployed on the `rinkeby` testnet. As long as you do not delete the corresponding truffle artifact you can interact with the deployed contract if you have rinkeby test ether. 

Once authenticated with uport you can find it under `dashboard`

To get rinkeby test ether visit [the rinkeby faucet](https://faucet.rinkeby.io/)

## Vue

### Vuex Store 

Due to using a single state tree, all state of our application is contained inside one big object. However, as our application grows in scale, the store can get really bloated.

To help with that, Vuex allows us to divide our store into modules. Each module can contain its own state, mutations, actions, getters, and even nested modules - it's fractal all the way down. In `src/store` you will currently find one module, `auth`.

For more visit [vuex modules](https://vuex.vuejs.org/guide/modules.html).

### Vue Router 

Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. 
The router is configured in `src/router`. You can add or adjust routes in `routes.js` and change route handling (eg. for meta tags) in `route-handler.js`

For more visit [vue router](https://router.vuejs.org/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
Both standard and prettier config is included in the box. 
Change this by adjusting this line is `.eslintrc.js`: 
 *  `extends: ['plugin:vue/essential', '@vue/eslint-config-standard']`
 *  `extends: ['plugin:vue/essential', '@vue/prettier']`
