const {
  START,
  PLUS,
  MINUS,
  MULT,
  NUMBER,
  POWER,
  EQUAL,
  VARIABLE,
  END_OF_INPUT,
} = require("./tokens");

module.exports = {
  [START]: [NUMBER],
  [NUMBER]: [MULT, EQUAL, END_OF_INPUT],
  [VARIABLE]: [PLUS, MINUS, POWER],
  [MULT]: [VARIABLE],
  [PLUS]: [NUMBER],
  [MINUS]: [NUMBER],
  [EQUAL]: [NUMBER],
};
