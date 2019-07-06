const NodeRSA = require('node-rsa');

const key = new NodeRSA({ b: 32 });
const privateKey = key.exportKey("pkcs1-private-der").toString("hex");
const publicKey = key.exportKey("pkcs8-public-der").toString("hex");
const address = "0x" + publicKey.substring(28);
console.log("PrivKey: " + privateKey);
console.log("PubKey: " + publicKey);
console.log("Address: " + address);