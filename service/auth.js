const jwt = require("jsonwebtoken");
const scratekey = "Chanchalsenx";

function setUser(user) {
  const payload = {
    _id: user._id,
    _mail: user.email,
    _Password: user.password,
  };
  return jwt.sign(payload, scratekey);
}

function getUser(token) {
  if (!token) return null;
  try {
    // help to project over server to crash when user provide invalid token
    return jwt.verify(token, scratekey);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
