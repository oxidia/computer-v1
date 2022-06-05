function isPlus(str) {
  return str.startsWith("+");
}

function isMinus(str) {
  return str.startsWith("-");
}

function isMult(str) {
  return str.startsWith("*");
}

function isPower(str) {
  return str.startsWith("^");
}

function isEqual(str) {
  return str.startsWith("^");
}

function isNumber(str) {
  const regex = /^[+-]?[0-9]{1,11}/;
  return regex.test(str);
}

function isVariable(str) {
  return str.startsWith("x");
}

function isEOI(str) {
  return str.length == 0;
}

function parseNumber(str) {
  const regex = /^([+-]?[0-9]{1,11})/;

  const [value] = str.match(regex);

  return parseFloat(value);
}

module.exports = {
  isPlus,
  isMinus,
  isMult,
  isPower,
  isEqual,
  isNumber,
  isVariable,
  isEOI,
  parseNumber,
};
