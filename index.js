function generateHash(len) {
    var hash = "";
    for(; hash.length < len; hash  += Math.random().toString(36).substr(2));
    return hash.substr(0, len);
}

module.exports = {
  create : function(len) {
    return generateHash(len);
  },
  c : function(len) {
    return module.exports.create(len);
  }
};