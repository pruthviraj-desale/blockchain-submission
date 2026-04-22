# Assignment 3: Web Interface + MetaMask

## Objective
Create a simple frontend that connects to MetaMask and interacts with the deployed contract.

## How the Frontend Connects
The app uses `ethers.js` in the browser to access `window.ethereum`. Once MetaMask is connected, it creates a signer and contract instance.

## MetaMask Usage
- User clicks **Connect MetaMask**.
- MetaMask prompts account connection.
- On success, the contract instance is created with the connected signer.

## Setup
1. Update `app.js` with your contract address:
   - Replace `<YOUR_CONTRACT_ADDRESS>`
2. Run a local server:
   ```bash
   python3 -m http.server 8080
   ```
3. Open `http://localhost:8080`.

## Screenshots
Create a `screenshots/` folder and add:
- `screenshots/wallet-connect.png`
- `screenshots/transaction-executed.png`
