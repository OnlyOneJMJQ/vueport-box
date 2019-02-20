/*
export const someFunction = state => {

}
*/

export const CREDENTIALS = state => state.credentials

export const LOGGED_IN = state => (!!state.credentials)
