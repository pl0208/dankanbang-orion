const stage = document.querySelector("#stage");
const room = document.querySelector("#room");
const roof = document.querySelector("#roof");
const titleScreen = document.querySelector("#titleScreen");
const startPrompt = document.querySelector("#startPrompt");
const titleBackground = document.querySelector(".title-background");
const titleLogo = document.querySelector(".title-logo");
const speaker = document.querySelector("#speaker");
const dialogue = document.querySelector("#dialogue");
const choices = document.querySelector("#choices");

let currentSceneId = story.start;
let hasStarted = false;

titleBackground.addEventListener("error", () => {
  titleBackground.hidden = true;
});

titleLogo.addEventListener("error", () => {
  titleLogo.classList.add("title-logo-missing");
});

function setStage(stageName) {
  stage.classList.toggle("stage-crash", stageName === "crash");
  stage.classList.toggle("stage-alien", stageName === "alien");
  room.classList.toggle("room-hidden", stageName !== "room");
  roof.classList.toggle("roof-active", stageName !== "room");
}

function renderScene(sceneId) {
  const scene = story.scenes[sceneId];
  currentSceneId = sceneId;
  speaker.textContent = scene.speaker;
  dialogue.textContent = scene.text;
  choices.replaceChildren();
  setStage(scene.stage);

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = choice.text;
    button.addEventListener("click", () => renderScene(choice.next));
    choices.append(button);
  });
}

document.addEventListener("keydown", (event) => {
  if (!hasStarted && (event.key === "Enter" || event.key === " ")) {
    startGame();
    return;
  }

  if (!hasStarted) {
    return;
  }

  if (event.key !== "Enter") {
    return;
  }

  const scene = story.scenes[currentSceneId];
  if (scene.choices.length === 1) {
    renderScene(scene.choices[0].next);
  }
});

function startGame() {
  if (hasStarted) {
    return;
  }

  hasStarted = true;
  titleScreen.classList.add("title-screen-hidden");
}

titleScreen.addEventListener("click", startGame);
startPrompt.addEventListener("click", (event) => {
  event.stopPropagation();
  startGame();
});

renderScene(currentSceneId);
