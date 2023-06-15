
const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;