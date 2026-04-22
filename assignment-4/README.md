# Assignment 4: IPFS Integration

## Objective
Upload a file to IPFS and retrieve it using a CID.

## IPFS Service/Library
This assignment uses **web3.storage** (IPFS pinning and storage).

## How Files Are Stored & Retrieved
- `ipfs-upload.js` uploads `sample.txt` to IPFS and prints the CID.
- `ipfs-fetch.js` retrieves the file list for a CID and prints file info.

## Setup
1. Create a Web3.Storage account and API token.
2. Set environment variable:
   ```bash
   export WEB3_STORAGE_TOKEN=your_token_here
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Upload:
   ```bash
   node ipfs-upload.js
   ```
5. Paste CID into `ipfs-fetch.js` and run:
   ```bash
   node ipfs-fetch.js
   ```

## IPFS Hash Examples
```
<YOUR_CID_1>
<YOUR_CID_2>
```

## Screenshots
Create a `screenshots/` folder and add:
- `screenshots/upload-success.png`
- `screenshots/cid-link.png`
- `screenshots/event-page.png`
