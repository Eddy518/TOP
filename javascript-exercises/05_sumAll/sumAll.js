const sumAll = function (num1, num2) {
  if (
    num1 > 0 &&
    num2 > 0 &&
    typeof num1 === "number" &&
    typeof num2 === "number "
  ) {
    let total = 0;
    if (num2 > num1) {
      for (let i = num1; i <= num2; i++) {
        total += i;
      }
    } else if (num1 > num2) {
      for (let i = num2; i <= num1; i++) {
        total += i;
      }
    }
    return total;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
