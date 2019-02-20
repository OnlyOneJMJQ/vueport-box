/*
export const someFunction = (state, payload) => {

}
*/

/*
     When accessing properties or array elements
     use Vue.set() to make sure the new property/element is also reactive
     if you are unsure, it is best to use Vue.set and Vue.delete() as a best practice
     */

export const USER_LOGIN = (state, payload) => {
  state.credentials = payload
}

export const USER_LOGOUT = state => {
  state.credentials = undefined
}
