const { ethers } = require("ethers");
const hre = require("hardhat");

async function main() {
  const StudentRegistry = await hre.ethers.getContractFactory("StudentRegistry");
  const studentRegistry = await StudentRegistry.deploy();

  await studentRegistry.waitForDeployment();

  console.log("StudentRegistry deployed to:", studentRegistry.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
