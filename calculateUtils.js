const add = (a = 0, b = 0) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return new Error("argument type error");
  }

  return a + b;
};

const subtract = (a = 0, b = 0) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return new Error("argument type error");
  }
  return a - b;
};

module.exports = { add, subtract };
