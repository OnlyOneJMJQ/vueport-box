/*
export const someFunction = ({commit, state, rootState}, payload) => {

}
*/

import { Connect } from 'uport-connect'

export const USER_LOGIN = async ({ commit }, network) => {
  try {
    const uport = new Connect('VuePort', {
      network
    })
    uport.loadState()
    if (uport.state && uport.did) {
      commit('USER_LOGIN', uport.state)
    } else {
      uport.requestDisclosure(
        {
          requested: ['name'],
          network: network,
          notifications: true
        },
        'disclosureReq'
      )
      const data = await uport.onResponse('disclosureReq')
      commit('USER_LOGIN', data.payload)
    }
  } catch (e) {
    console.log(e)
    throw Error(e.message)
  }
}

export const USER_LOGOUT = async ({ commit }) => {
  const uport = new Connect('VuePort')
  uport.logout()
  commit('USER_LOGOUT')
}
