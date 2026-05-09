const stage = document.querySelector("#stage");
const room = document.querySelector("#room");
const roof = document.querySelector("#roof");
const speaker = document.querySelector("#speaker");
const dialogue = document.querySelector("#dialogue");
const choices = document.querySelector("#choices");

let currentSceneId = story.start;

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
  if (event.key !== "Enter") {
    return;
  }

  const scene = story.scenes[currentSceneId];
  if (scene.choices.length === 1) {
    renderScene(scene.choices[0].next);
  }
});

renderScene(currentSceneId);
