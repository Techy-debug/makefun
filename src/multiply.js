function multiply(...args) {
  // is this function useful ?
  return args.reduce((acc, cur) => acc * cur, 1);
}

module.exports = multiply;
