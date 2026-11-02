const powerButton = document.querySelector("#power-button");
const machineMessage = document.querySelector("#machine-message");

powerButton.addEventListener("click", () => {
  powerButton.textContent = "Turning off...";
  powerButton.disabled = true;
  machineMessage.textContent = "You turned it on. The machine is turning it off again.";

  window.setTimeout(() => {
    powerButton.textContent = "Turn on";
    powerButton.disabled = false;
    powerButton.setAttribute("aria-pressed", "false");
    machineMessage.textContent = "The machine is off. Try again.";
  }, 900);
});