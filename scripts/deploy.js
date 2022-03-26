
const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    const nftcontract = await nftContractFactory.deploy();
    await nftcontract.deployed();
    console.log("NFT contract deployed! ", nftcontract.address);

    txn = await nftcontract.makeEpicNFT();
    await txn.wait();
    //minted nft #1
    txn = await nftcontract.makeEpicNFT();
    await txn.wait();
    //minted nft #2
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log("Error occurred while deploying: ", error)
        process.exit(1);
    }
}

runMain();