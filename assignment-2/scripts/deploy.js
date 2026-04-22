const hre = require("hardhat");

async function main() {
  const StudentRegistry = await hre.ethers.getContractFactory("StudentRegistry");
  const registry = await StudentRegistry.deploy();
  await registry.deployed();

  console.log("StudentRegistry deployed to:", registry.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
