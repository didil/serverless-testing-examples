function concat(a, b) {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve(`${a} ${b}`));
  });
}

module.exports = {
  concat
};