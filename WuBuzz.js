class WuBuzz {
  wuChant(value) {
    let message = "";

    for (let i = 1; i <= value; i++) {
      if (i % 3 === 0) {
        message += "Wu\n";
      } else if (i % 5 === 0) {
        message += "tang\n";
      } else if (i % 15 === 0) {
        /*
        Or can use
        else if (i % 3 === 0 && i % 5 === 0) {
        */
        message += "Wutangforever\n";
      } else {
        message += i + "\n";
      }
    }
    return message;
  }
}

module.exports = WuBuzz;

let fizzBuzz = function (min, max) {
  for (let i = min; i <= max; i++) {
    switch (0) {
      case i % 15:
        console.log("FizzBuzz");
        break;
      case i % 3:
        console.log("Fizz");
        break;
      case i % 5:
        console.log("Buzz");
        break;
      default:
        console.log(i);
        break;
    }
  }
};