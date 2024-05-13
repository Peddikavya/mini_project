const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const random_number = Math.floor(Math.random() * 25) + 1;
let chances = 5;
function startGame() {
    console.log("Welcome to the Number Guessing Game!");
    console.log("You have 5 chances to guess the number between 1 and 25.");
    function promptGuess() {
        if (chances > 0) {
            rl.question("Enter your guess: ", (input) => {
                const guess = parseInt(input);

                if (isNaN(guess) || guess < 1 || guess > 100) {
                    console.log("Please enter a valid number between 1 and 100.");
                    promptGuess();
                    return;
                }
                if (guess === random_number) {
                    console.log("Congratulations! You guessed the correct number.");
                    rl.close();
                    return;
                } else if (guess < random_number) {
                    console.log("Selected number is less. Increase it.");
                } else {
                    console.log("Selected number is high. Decrease it.");
                }
                chances--;
                console.log("You have " + chances + " chances left.");
                promptGuess();
            });
        } else {
            console.log("Sorry, you've run out of chances. The correct number was " + random_number + ".");
            rl.close();
        }
    }
    promptGuess();
}
startGame();
