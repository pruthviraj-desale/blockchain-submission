import { Web3Storage, File } from "web3.storage";
import fs from "fs";

const token = process.env.WEB3_STORAGE_TOKEN;
if (!token) {
  throw new Error("Missing WEB3_STORAGE_TOKEN env var");
}

const client = new Web3Storage({ token });

const filePath = "./sample.txt";
const content = fs.readFileSync(filePath);
const files = [new File([content], "sample.txt")];

const cid = await client.put(files);
console.log("Uploaded. CID:", cid);
