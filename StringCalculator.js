module.exports = StringCalculator;

const readline = require('readline');

class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    } else if (numbers.includes(",")) {
      const nums = numbers.split(",").map(num => parseInt(num));
      return nums.reduce((acc, curr) => acc + curr, 0);
    } else {
      return parseInt(numbers);
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculator = new StringCalculator();

rl.question('Enter numbers separated by commas: ', (input) => {
  const result = calculator.add(input);
  console.log('The sum is: ', result);
  rl.close();
});


