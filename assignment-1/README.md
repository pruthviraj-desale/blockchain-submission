# Assignment 1: Smart Contract Development

## Contract Purpose
The `StudentRegistry` contract stores a simple on-chain registry for a student’s name and roll number, keyed by wallet address.

## Functions and Logic
- `register(name, rollNumber)`: registers the caller once.
- `update(name, rollNumber)`: updates the caller’s record.
- `getMyRecord()`: returns the caller’s stored name and roll number.

## Compilation and Deployment Steps
1. Initialize Hardhat in this folder:
   ```bash
   npm init -y
   npm install --save-dev hardhat
   npx hardhat
   ```
2. Move `contract.sol` into `contracts/StudentRegistry.sol` (Hardhat default).
3. Compile:
   ```bash
   npx hardhat compile
   ```
4. (Optional local deployment)
   ```bash
   npx hardhat node
   npx hardhat run scripts/deploy.js --network localhost
   ```

## Screenshots
Create a `screenshots/` folder and add:
- `screenshots/compile-success.png`
- `screenshots/deploy-success.png`
