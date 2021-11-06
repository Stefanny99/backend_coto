const Crypto = require("crypto-js");
const KEY = "lsm20!FINANzas#20";

export const encrypt = (text) => Crypto.AES.encrypt(text, KEY).toString();

export const decrypt = (text) => {
  const bytes = Crypto.AES.decrypt(text, KEY);
  return bytes.toString(Crypto.enc.Utf8);
};
