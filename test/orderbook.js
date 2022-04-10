const { expect } = require("chai");
const { ethers, network } = require("hardhat");

describe("OrderBook", function () {
  let deployer, attacker;
  let orderbook;

  before("Deploy!", async function () {
    [deployer, attacker] = await ethers.getSigners();
    await ethers.provider.send("hardhat_setBalance", [attacker.address, ethers.utils.parseEther("2")]);

    const NFTOrderBook = await ethers.getContractFactory("NFTOrderBook");
    orderbook = await NFTOrderBook.deploy({ value: ethers.utils.parseEther("50") });
  });

  it("Attack!", async function () {
    // your attack here
  });

  after("Check!", async function () {
    console.log("orderbook balance", ethers.utils.formatEther(await ethers.provider.getBalance(orderbook.address)));
    expect(await ethers.provider.getBalance(orderbook.address)).to.be.lt(ethers.utils.parseEther("1"));
    expect(await ethers.provider.getBalance(attacker.address)).to.be.gt(ethers.utils.parseEther("50"));
  });
});
