class Comparer {
    constructor(correctNumber, guessedNumber) {
        this.correctNumber = correctNumber;
        this.guessedNumber = guessedNumber;
    }

    compare() {
        let message
        let ratio
        if (this.guessedNumber > this.correctNumber) {
            message = "Too big!!";
            ratio = this.guessedNumber/this.correctNumber;
        } else if (this.guessedNumber < this.correctNumber) {
            message = "too small :(";
            ratio = this.guessedNumber/this.correctNumber;
        } else {
            message = "correctomondo!";
            ratio = 1;
        }
        return [message, ratio];
    }
}