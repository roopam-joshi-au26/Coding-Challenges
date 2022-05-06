function removeSnames(arr) {
  return arr.filter((string) => string[0] !== "S");
}

function divide(a, b) {
  if (b === 0) throw new Error("Divide by Zero Error!");
  return a / b;
}

module.exports = { removeSnames, divide };
