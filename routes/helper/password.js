var crypto = require('crypto');

exports.setPassword = function(password){
	var cipher = {};
	cipher.salt = crypto.randomBytes(16).toString('hex');
	cipher.hash = crypto.pbkdf2Sync(password, salt, 1000, 64).toString('hex');
	return cipher;
};
/*
exports.validPassword = function(cipher) {
  var hash = crypto.pbkdf2Sync(cipher, this.salt, 1000, 64).toString('hex');

  return this.hash === hash;
};
*/