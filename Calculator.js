class Calculator {
    constructor(numbers, operation) {
        this.numbers = numbers;
        this.operation = operation;
    }

    calculate() {
        const number1 = this.numbers[0];
        const number2 = this.numbers[1];
        let result;

        switch (this.operation) {
            case "+":
                result = number1 + number2;
                break;
            case "-":
                result = number1 - number2;
                break;
            case "*":
                result = number1 * number2;
                break;
            case "/":
                result = number1 / number2;
                break;
            default:
                result = NaN;
        }

        return result;
    }
}
