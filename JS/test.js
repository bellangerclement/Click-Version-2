const firstButton = document.getElementById("generateButton");
firstButton.textContent = "Si tu es un Yost Clik on me";
firstButton.addEventListener("click", buttonGenerate);

function buttonGenerate(event) {
  player.play();
}

const player = document.querySelector("#audioPlayer");
