class StringCalculator {
    add(numbers) {
      if (numbers === "") {
        return 0;
      } else if (numbers.includes(",")) {
        const nums = numbers.split(/,|\n/).map(num => parseInt(num));
        return nums.reduce((acc, curr) => acc + curr, 0);
      } else {
        return parseInt(numbers);
      }
    }
  }
  
  describe('StringCalculator', () => {
    it('should return 0 for an empty string', () => {
      const calculator = new StringCalculator();
      expect(calculator.add("")).toBe(0);
    });
  
    it('should return the number itself for a single number', () => {
      const calculator = new StringCalculator();
      expect(calculator.add("1")).toBe(1);
    });
  
    it('should return the sum of two numbers', () => {
      const calculator = new StringCalculator();
      expect(calculator.add("1,5")).toBe(6);
    });
  
    it('should handle new lines between numbers', () => {
      const calculator = new StringCalculator();
      expect(calculator.add("1\n2,3")).toBe(6);
    });
  });
