const lib = require("./lib");
const tokens = require("./tokens");

function createToken(type, value) {
  return {
    type,
    value,
  };
}

function nextToken(str) {
  if (lib.isNumber(str)) {
    return createToken(tokens.NUMBER, lib.parseNumber(str));
  } else if (lib.isPlus(str)) {
    return createToken(tokens.PLUS, "+");
  } else if (lib.isMult(str)) {
    return createToken(tokens.MULT, "*");
  } else if (lib.isMinus(str)) {
    return createToken(tokens.MINUS, "-");
  } else if (lib.isPower(str)) {
    return createToken(tokens.POWER, "^");
  } else if (lib.isEqual(str)) {
    return createToken(tokens.EQUAL, "=");
  } else if (lib.isEOI(str)) {
    return createToken(tokens.END_OF_INPUT, "EOI");
  }

  return null;
}

module.exports = function lexer(str) {
  const tokens = [];

  str = str.trim();
  while (str.length > 0) {
    str = str.trimStart();
    const token = nextToken(str);

    if (token) {
      str = str.substr(token.value.toString().length);
      tokens.push(token);
    } else {
      break;
    }
  }

  return tokens;
};
