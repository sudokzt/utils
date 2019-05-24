const { add, subtract } = require("../utils/calculateUtils");

describe("calculateUtils - add", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("adds -1 + 1 to equal 0", () => {
    expect(add(-1, 1)).toBe(0);
  });

  test("adds (-1) + (-1) to equal -2", () => {
    expect(add(-1, -1)).toBe(-2);
  });

  test("adds ('hoge') + 1 to equal Error", () => {
    expect(add("hoge", 1)).toEqual(new Error("argument type error"));
  });

  test("adds 1 + ('hoge') to equal Error", () => {
    expect(add(1, "hoge")).toEqual(new Error("argument type error"));
  });

  test("adds 0x111 + 10 to equal Error", () => {
    expect(add(0x111, 10)).toBe(283);
  });
});

describe("calculateUtils - subtract", () => {
  test("subtracts 2 - 1 to equal", () => {
    expect(subtract(2, 1)).toBe(1);
  });

  // ........
});

// ....のように符号の入れ替わり付近や、例外についてのエラーを行う。
