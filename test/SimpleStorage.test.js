const SimpleStorage = artifacts.require('SimpleStorage')

contract('SimpleStorage.sol', () => {
    before(async () => {
        this.simpleStorage = await SimpleStorage.new()
        this.x = '5'
    })

    it("Sets a number", async () => {
        await this.simpleStorage.set(this.x)
        assert.equal(this.x, (await this.simpleStorage.get()).toString(10))
    })
})