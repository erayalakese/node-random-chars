const crypto = require('crypto');

function generateHash(len) {
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const charSetLength = charSet.length;
    let hash = '';

    for (let i = 0; i < len; i++) {
        const randomBuffer = crypto.randomBytes(1);
        const randomIndex = randomBuffer[0] % charSetLength;
        hash += charSet[randomIndex];
    }

    return hash;
}

module.exports = {
  create : function(len) {
    return generateHash(len);
  },
  c : function(len) {
    return module.exports.create(len);
  }
};
