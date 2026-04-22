# Assignment 2: Polygon Deployment (Amoy)

## Objective
Deploy the `StudentRegistry` smart contract to the Polygon Amoy testnet.

## Setup
1. Initialize project:
   ```bash
   npm init -y
   npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
   npx hardhat
   ```
2. Copy the provided files into place:
   - `contracts/StudentRegistry.sol`
   - `scripts/deploy.js`
   - `hardhat.config.js`

## Amoy Network Details
- RPC URL: https://rpc-amoy.polygon.technology/
- Chain ID: 80002
- Currency Symbol: MATIC
- Block Explorer: https://amoy.polygonscan.com/
- Faucet: https://faucet.polygon.technology/

## Environment
Create a `.env` file:
```
PRIVATE_KEY=your_wallet_private_key
```

## Deployment Steps
```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network amoy
```

## Contract Address
Paste your deployed contract address here:
```
<YOUR_CONTRACT_ADDRESS>
```

## Screenshots
Create a `screenshots/` folder and add:
- `screenshots/deploy-success.png`
- `screenshots/explorer-transaction.png`
