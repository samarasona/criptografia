const crypto = require('crypto');
const CHAVE = 'abjdyoemfbey12579dfd5d4d1v3fvsdf'; // 32
const IV = "7arggffggfs7f8df"; // 16
const ALGORITMO = "aes-256-cbc";
const METODO_CRIPTOGRAFIA = 'hex';
const METODO_DESCRIPTOGRAFIA = 'hex';

const encrypt = ((text) =>  {
   let cipher = crypto.createCipheriv(ALGORITMO, CHAVE, IV);
   let encrypted = cipher.update(text, 'utf8', METODO_CRIPTOGRAFIA);
   encrypted += cipher.final(METODO_CRIPTOGRAFIA);
   return encrypted;
});

const decrypt = ((text) => {
   let decipher = crypto.createDecipheriv(ALGORITMO, CHAVE, IV);
   let decrypted = decipher.update(text, METODO_DESCRIPTOGRAFIA, 'utf8');
   return (decrypted + decipher.final('utf8'));
});

module.exports = {decrypt,encrypt}