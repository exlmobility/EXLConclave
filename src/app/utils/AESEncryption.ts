


declare var CryptoJS;

function encrypt(message) {


    var key = CryptoJS.enc.Utf8.parse('8080808080808080');
    var iv = CryptoJS.enc.Utf8.parse('8080808080808080');

    var encryptedMessage = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(message), key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encryptedMessage.toString();

}

export var AES = {
    encrypt: encrypt
}