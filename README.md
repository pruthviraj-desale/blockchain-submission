# Blockchain Lab Assignments

Student Name: Pruthviraj Desale  
Roll Number: 123B1B056  
Course Name: Blockchain Technology

## Overview
This repository contains five assignments for the Blockchain Lab course. Each assignment folder has its own README with steps, code, and required screenshots.

## Tech Stack
- Solidity
- Hardhat (Node.js)
- MetaMask
- Polygon Amoy Testnet
- IPFS via web3.storage

## Assignments
1. **Assignment 1: Smart Contract Development**
   - Basic smart contract with clear functions and comments.
2. **Assignment 2: Polygon Deployment**
   - Deploy the contract to Polygon Amoy using Hardhat.
3. **Assignment 3: Web Interface + MetaMask**
   - Minimal frontend for MetaMask connection and contract interaction.
4. **Assignment 4: IPFS Integration**
   - Upload/retrieve files on IPFS using web3.storage.
5. **Assignment 5: DAO Smart Contract**
   - DAO contract with proposal, voting, and execution workflow.

## How to Run

### Common Setup
1. Install Node.js (LTS) and npm.
2. Install Hardhat in each assignment folder that needs it:
   ```bash
   npm init -y
   npm install --save-dev hardhat
   npx hardhat
   ```

### Assignment 1
```bash
cd assignment-1
npx hardhat compile
```

### Assignment 2
```bash
cd assignment-2
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npx hardhat compile
npx hardhat run scripts/deploy.js --network amoy
```

### Assignment 3
```bash
cd assignment-3
python3 -m http.server 8080
```
Open `http://localhost:8080` and connect MetaMask.

### Assignment 4
```bash
cd assignment-4
npm install
node ipfs-upload.js
node ipfs-fetch.js
```

### Assignment 5
```bash
cd assignment-5
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npx hardhat compile
```

## Polygon Amoy Testnet Info
- Network name: Polygon Amoy
- RPC URL: https://rpc-amoy.polygon.technology/
- Chain ID: 80002
- Currency symbol: MATIC
- Block explorer: https://amoy.polygonscan.com/
- Faucet: https://faucet.polygon.technology/

## Screenshot Checklist
- Add screenshots inside each assignment folder under a `screenshots/` directory.
- Use clear names as specified in each assignment README.
