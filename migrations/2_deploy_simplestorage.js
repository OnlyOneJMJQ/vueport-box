const SimpleStorage = artifacts.require('SimpleStorage')

module.exports = deployer => deployer.then(async () => {
    await deployer.deploy(SimpleStorage)
})