import { Web3Storage } from "web3.storage";

const token = process.env.WEB3_STORAGE_TOKEN;
if (!token) {
  throw new Error("Missing WEB3_STORAGE_TOKEN env var");
}

const client = new Web3Storage({ token });
const cid = "<YOUR_CID_HERE>";

const res = await client.get(cid);
if (!res.ok) {
  throw new Error(`Failed to get ${cid}`);
}

const files = await res.files();
for (const file of files) {
  console.log(`${file.name} - ${file.size} bytes`);
}
