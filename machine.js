const powerButton = document.querySelector("#power-button");
const machineMessage = document.querySelector("#machine-message");
const scoreOutput = document.querySelector("#score");
const timeOutput = document.querySelector("#time-left");

let score = 0;
let secondsLeft = 10;
let countdown;
let gameIsRunning = false;

function finishGame() {
  gameIsRunning = false;
  window.clearInterval(countdown);
  powerButton.textContent = "Play again";
  machineMessage.textContent = `The machine wins! You managed ${score} ${score === 1 ? "switch" : "switches"}.`;
  timeOutput.textContent = "Time is up.";
}

powerButton.addEventListener("click", () => {
  if (!gameIsRunning) {
    score = 0;
    secondsLeft = 10;
    gameIsRunning = true;
    scoreOutput.textContent = score;
    timeOutput.textContent = `${secondsLeft} seconds`;
    machineMessage.textContent = "Go! Keep switching it on!";
    powerButton.textContent = "Turn it on!";

    countdown = window.setInterval(() => {
      secondsLeft -= 1;
      timeOutput.textContent = `${secondsLeft} ${secondsLeft === 1 ? "second" : "seconds"}`;
      if (secondsLeft <= 0) finishGame();
    }, 1000);
    return;
  }

  score += 1;
  scoreOutput.textContent = score;
  machineMessage.textContent = "You turned it on. The machine turned it off again!";
});