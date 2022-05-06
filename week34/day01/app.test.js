const { removeSnames, divide } = require("./app");

describe("Tests for a function which removes strings starting with letter 'S' (Uppercase) from an Array of strings", () => {
  test("Should remove all 'S' strings", () => {
    let testArray = ["Harish", "Suresh", "Amith", "S", "Scene"];
    let expectedArray = ["Harish", "Amith"];
    expect(removeSnames(testArray)).toEqual(expectedArray);
  });

  test("Should not remove any other strings", () => {
    let testArray = ["String", "Stocks", "Singer", "Iron", "Spider", "Science"];
    expect(removeSnames(testArray)).toContain("Iron");
  });

  test("Should remove starting with 'S' (case insensitive)", () => {
    let testArray = ["strike", "Spring", "Sprite", "Iron", "range", "random"];
    let expectedArray = ["strike", "Iron", "range", "random"];
    expect(removeSnames(testArray)).toEqual(expectedArray);
  });
});

describe("Tests for divide function.", () => {
  test("Should throw an error if second argument is 0", () => {
    let numerator = 7;
    let denominator = 0;
    expect(() => {
      divide(numerator, denominator);
    }).toThrow("Divide by Zero Error!");
  });

  test("Should return a number if arguments are number (except 0)", () => {
    let numerator = 7;
    let denominator = 7;
    let result = divide(numerator, denominator);
    expect(typeof result).toBe("number");
  });

  test("Should return a number greater than 1 if the second argument is less than the first argument", () => {
    let numerator = 10;
    let denominator = 6;
    let result = divide(numerator, denominator);
    expect(result).toBeGreaterThan(1);
  });

  test("Should return a number less than 1 if the second argument is greater than the first argument", () => {
    let numerator = 4;
    let denominator = 8;
    let result = divide(numerator, denominator);
    expect(result).toBeLessThan(1);
  });
});
