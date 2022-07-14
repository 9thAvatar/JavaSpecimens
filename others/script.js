let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let message3 = document.getElementById("message3");
let secretNumber = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;
let guessedNumbers = [];
function play() {
    let user_guess = document.getElementById("guess").value;
    if (user_guess > 100) {
        alert("Number is above 100. Try again.");
    }

    else {
        numberOfGuesses += 1;
        guessedNumbers.push(user_guess);

        if (user_guess < secretNumber) {
            message1.innerHTML = "Number of guesses: " + numberOfGuesses;
            message3.innerHTML = "Your guess is less than the secret number";
            message2.innerHTML = "Guessed numbers are: " + guessedNumbers;
        }

        else if (user_guess > secretNumber) {
            message1.innerHTML = "Number of Guesses: " + numberOfGuesses;
            message3.innerHTML = "Your guess is more than the secret number";
            message2.innerHTML = "Guessed numbers are: " + guessedNumbers;
        }

        else if (user_guess == secretNumber) {
            message1.innerHTML = "You guessed it in " + numberOfGuesses + " guesses";
            message3.innerHTML = "Congrats, you won the game!!";
            message2.innerHTML = "Guessed numbers are: " + guessedNumbers;
            document.getElementById("my_btn").disabled = true;
        }
    }
}