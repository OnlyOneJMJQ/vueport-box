import SimpleStorage from '../../build/contracts/SimpleStorage'
import { providers, Contract } from 'ethers'
import { Connect } from 'uport-connect'

const isDeployed = chainId => SimpleStorage.networks[chainId] === undefined

const set = async (x, network) => {
  if (!isDeployed(network.id)) { throw new Error('Error: contract not deployed on selected network') }
  try {
    const uport = new Connect('VuePort')
    const contract = uport
      .contract(SimpleStorage.abi)
      .at(SimpleStorage.networks[network.id].address)
    contract.set(x, 'set')
    return await uport.onResponse('set')
  } catch (e) {
    throw Error(e.message)
  }
}

const get = async network => {
  if (!isDeployed(network.id)) { throw new Error('Error: contract not deployed on selected network') }
  try {
    const provider = new providers.JsonRpcProvider(network.rpcUrl)
    const contract = new Contract(
      SimpleStorage.networks[network.id].address,
      SimpleStorage.abi,
      provider
    )
    return await contract.get()
  } catch (e) {
    throw Error(e.message)
  }
}

export default {
  isDeployed,
  set,
  get
}
