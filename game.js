const stage = document.querySelector("#stage");
const sceneBackground = document.querySelector("#sceneBackground");
const cutscene = document.querySelector("#cutscene");
const cutsceneVideo = document.querySelector("#cutsceneVideo");
const titleScreen = document.querySelector("#titleScreen");
const startPrompt = document.querySelector("#startPrompt");
const titleBackground = document.querySelector(".title-background");
const titleLogo = document.querySelector(".title-logo");
const shootingStar = document.querySelector("#shootingStar");
const titleLayers = document.querySelectorAll(".title-layer");
const encounterWipe = document.querySelector("#encounterWipe");
const hud = document.querySelector(".hud");
const portraitFrame = document.querySelector("#portraitFrame");
const portrait = document.querySelector("#portrait");
const stageCharacter = document.querySelector("#stageCharacter");
const stageCharacterSheet = document.querySelector("#stageCharacterSheet");
const overheadPrompt = document.querySelector("#overheadPrompt");
const debugPanel = document.querySelector("#debugPanel");
const debugOutput = document.querySelector("#debugOutput");
const copyTuning = document.querySelector("#copyTuning");
const debugMainPanel = document.querySelector("#debugMainPanel");
const debugMainOutput = document.querySelector("#debugMainOutput");
const copyMainTuning = document.querySelector("#copyMainTuning");
const debugWalkPanel = document.querySelector("#debugWalkPanel");
const debugWalkOutput = document.querySelector("#debugWalkOutput");
const copyWalkTuning = document.querySelector("#copyWalkTuning");
const debugAreaLayer = document.querySelector("#debugAreaLayer");
const debugMoveBounds = document.querySelector("#debugMoveBounds");
const debugInteractionBlocks = document.querySelector("#debugInteractionBlocks");
const addInteractionBlock = document.querySelector("#addInteractionBlock");
const blockControls = document.querySelector("#blockControls");
const speaker = document.querySelector("#speaker");
const dialogue = document.querySelector("#dialogue");
const choices = document.querySelector("#choices");
const advancePrompt = document.querySelector("#advancePrompt");
const advancePromptFrames = document.querySelectorAll(".advance-prompt-frame");

let currentSceneId = story.start;
let hasStarted = false;
let canStart = false;
let isCutscenePlaying = false;
let walkMode = null;
let walkAnimationFrame = null;
let interactionLockedUntil = 0;
const heldKeys = new Set();
const keyPressOrder = new Map();
let keyPressCounter = 0;

const wipeColumns = 16;
const wipeRows = 9;

const characters = {
  bina: {
    portrait: "./assets/images/characters/bina-portrait.png",
    sprite: "./assets/images/characters/bina-sprite.png",
    walk: {
      sideSheet: "./assets/images/characters/bina-walk-side-1.png",
      upSheet: "./assets/images/characters/bina-walk-up-1.png",
      downSheet: "./assets/images/characters/bina-walk-down-1.png"
    }
  },
  pyong: {
    portrait: "./assets/images/characters/pyong-portrait.png",
    sprite: "./assets/images/characters/pyong-sprite.png"
  }
};

const sceneBackgrounds = {
  room: "./assets/images/scene-room.png",
  roof: "./assets/images/scene-roof.png",
  crash: "./assets/images/scene-roof.png",
  alien: "./assets/images/scene-roof.png"
};

const tuning = {
  stageX: 49,
  stageY: 36,
  stageSize: 13.8,
  portraitX: 48,
  portraitY: 23,
  portraitZoom: 170,
  dialogueOpacity: 0,
  dialogueWidth: 83,
  dialogueHeight: 0,
  advancePromptX: 96,
  advancePromptY: 84,
  advancePromptSize: 7.7
};

const mainTuning = {
  titleX: 20,
  titleY: 22,
  titleSize: 48,
  shootingStarX: 35,
  shootingStarY: 12,
  shootingStarSize: 10.6,
  shootingStarMoveX: 160,
  shootingStarMoveY: 120,
  promptX: 50,
  promptY: 5.08,
  promptSize: 27,
  titleCharacterX: 52,
  titleCharacterY: 72,
  titleCharacterSize: 19.5,
  cigaretteLightX: 55,
  cigaretteLightY: 59,
  cigaretteLightSize: 4.4,
  cigaretteSmokeX: 56,
  cigaretteSmokeY: 57,
  cigaretteSmokeSize: 5.95
};

const walkTuning = {
  walkSize: 10.4,
  walkWidthScale: 85,
  walkHeightScale: 125,
  walkSpeed: 0.31,
  walkBoundLeft: 26,
  walkBoundRight: 73,
  walkBoundTop: 33,
  walkBoundBottom: 83
};

const interactionBlocks = [
  { x: 39, y: 28, width: 19, height: 13, text: "더이상 작업은 하고싶지 않아.." },
  { x: 68, y: 27, width: 7, height: 15, text: "냉장고에 먹을건 없어" },
  { x: 60, y: 55, width: 17, height: 31, text: "담배만 피고 자자" },
  { x: 46, y: 76, width: 10, height: 23, text: "밖에 나가자", next: "roof_intro" }
];

titleBackground.addEventListener("error", () => {
  titleBackground.hidden = true;
});

titleLogo.addEventListener("error", () => {
  titleLogo.classList.add("title-logo-missing");
});

shootingStar.addEventListener("error", () => {
  shootingStar.classList.add("shooting-star-missing");
});

titleLayers.forEach((layer) => {
  layer.addEventListener("error", () => {
    layer.classList.add("title-layer-missing");
  });
});

advancePromptFrames.forEach((frame) => {
  frame.addEventListener("error", () => {
    frame.classList.add("advance-prompt-missing");
  });
});

sceneBackground.addEventListener("error", () => {
  sceneBackground.classList.remove("scene-background-visible");
});

function buildEncounterWipe() {
  const centerRow = (wipeRows - 1) / 2;

  for (let row = 0; row < wipeRows; row += 1) {
    for (let column = 0; column < wipeColumns; column += 1) {
      const tile = document.createElement("span");
      const distanceFromRight = wipeColumns - 1 - column;
      const rowNoise = Math.abs(row - centerRow) * 18;
      const jitter = ((row * 37 + column * 19) % 7) * 24;
      const delay = distanceFromRight * 34 + rowNoise + jitter;

      tile.className = "wipe-tile";
      tile.style.animationDelay = `${delay}ms`;
      encounterWipe.append(tile);
    }
  }
}

function setStage(stageName) {
  stage.classList.toggle("stage-crash", stageName === "crash");
  stage.classList.toggle("stage-alien", stageName === "alien");
  setImage(sceneBackground, sceneBackgrounds[stageName], "scene-background-visible");
}

function setImage(image, src, visibleClass, onLoad, onError) {
  image.classList.remove(visibleClass);
  image.hidden = true;
  image.removeAttribute("src");

  if (!src) {
    return;
  }

  image.onload = () => {
    image.hidden = false;
    image.classList.add(visibleClass);
    onLoad?.();
  };
  image.onerror = () => {
    image.hidden = true;
    image.classList.remove(visibleClass);
    onError?.();
  };
  image.src = src;
}

function renderCharacter(characterId) {
  const character = characters[characterId];
  const hasCharacter = Boolean(character);

  stageCharacter.style.transform = "";
  stageCharacterSheet.classList.remove("stage-character-sheet-visible");
  hud.classList.toggle("hud-no-portrait", !hasCharacter);
  portraitFrame.classList.add("portrait-frame-hidden");
  setImage(
    portrait,
    character?.portrait,
    "portrait-visible",
    () => {
      portraitFrame.classList.remove("portrait-frame-hidden");
      hud.classList.remove("hud-no-portrait");
    },
    () => {
      portraitFrame.classList.add("portrait-frame-hidden");
      hud.classList.add("hud-no-portrait");
    }
  );
  setImage(stageCharacter, character?.sprite, "stage-character-visible");
}

function renderScene(sceneId) {
  stopWalkMode();
  const scene = story.scenes[sceneId];
  const sceneChoices = scene.choices ?? [];
  currentSceneId = sceneId;
  setStage(scene.stage);

  if (scene.video) {
    playCutscene(scene.video, scene.next);
    return;
  }

  if (scene.mode === "walk") {
    startWalkMode(scene);
    return;
  }

  speaker.textContent = scene.speaker;
  dialogue.textContent = scene.text;
  choices.replaceChildren();
  hud.classList.remove("hud-hidden");
  renderCharacter(scene.character);
  advancePrompt.classList.toggle("advance-prompt-hidden", sceneChoices.length > 0 || !scene.next);

  sceneChoices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = choice.text;
    button.addEventListener("click", () => renderScene(choice.next));
    choices.append(button);
  });
}

function startWalkMode(scene) {
  const character = characters[scene.character];

  walkMode = {
    character,
    direction: "down",
    frame: 0,
    lastFrameTime: 0,
    nextSceneId: scene.exit?.next,
    exitX: scene.exit?.x ?? 82,
    activeBlockIndex: -1,
    interactionText: null,
    x: scene.startX ?? tuning.stageX,
    y: scene.startY ?? tuning.stageY
  };

  hud.classList.add("hud-hidden");
  renderCharacter(scene.character);
  stageCharacter.hidden = false;
  stageCharacterSheet.hidden = true;
  setStageCharacterPosition(walkMode.x, walkMode.y);
  setWalkSprite("down");
  walkAnimationFrame = window.requestAnimationFrame(updateWalkMode);
}

function stopWalkMode() {
  if (walkAnimationFrame) {
    window.cancelAnimationFrame(walkAnimationFrame);
    walkAnimationFrame = null;
  }

  walkMode = null;
  overheadPrompt.classList.remove("overhead-prompt-visible");
}

function setStageCharacterPosition(x, y) {
  document.documentElement.style.setProperty("--stage-character-x", `${x}%`);
  document.documentElement.style.setProperty("--stage-character-y", `${y}%`);
}

function movementAxis(negativeKeys, positiveKeys) {
  const negativePressed = negativeKeys.filter((key) => heldKeys.has(key));
  const positivePressed = positiveKeys.filter((key) => heldKeys.has(key));
  const negative = negativePressed.length > 0;
  const positive = positivePressed.length > 0;

  if (!negative && !positive) {
    return 0;
  }

  if (negative && positive) {
    const latestNegative = Math.max(...negativePressed.map((key) => keyPressOrder.get(key) ?? 0));
    const latestPositive = Math.max(...positivePressed.map((key) => keyPressOrder.get(key) ?? 0));
    return latestPositive > latestNegative ? 1 : -1;
  }

  return positive ? 1 : -1;
}

function setWalkSprite(direction) {
  if (!walkMode?.character?.walk) {
    return;
  }

  const sheetMap = {
    down: walkMode.character.walk.downSheet,
    left: walkMode.character.walk.sideSheet,
    side: walkMode.character.walk.sideSheet,
    up: walkMode.character.walk.upSheet
  };
  const sheet = sheetMap[direction];

  if (sheet) {
    const isSideSheet = direction === "side" || direction === "left";
    const frameCount = isSideSheet ? 4 : 2;
    const frame = walkMode.frame % frameCount;
    const column = isSideSheet ? frame % 2 : frame;
    const row = isSideSheet ? Math.floor(frame / 2) : 0;
    stageCharacter.hidden = true;
    stageCharacter.classList.remove("stage-character-visible");
    stageCharacterSheet.hidden = false;
    stageCharacterSheet.style.backgroundImage = `url("${sheet}")`;
    stageCharacterSheet.style.backgroundSize = isSideSheet ? "200% 200%" : "200% 100%";
    stageCharacterSheet.style.backgroundPosition = `${column * 100}% ${row * 100}%`;
    stageCharacterSheet.style.transform =
      direction === "side"
        ? "translate(-50%, -50%) scaleX(calc(var(--walk-scale-x) * -1)) scaleY(var(--walk-scale-y))"
        : "";
    stageCharacterSheet.classList.add("stage-character-sheet-visible");
    return;
  }

  stageCharacterSheet.hidden = true;
  stageCharacterSheet.classList.remove("stage-character-sheet-visible");
  const src = walkMode.character.sprite;
  stageCharacter.onerror = () => {
    stageCharacter.src = walkMode.character.sprite;
  };
  stageCharacter.src = src;
  stageCharacter.style.transform =
    direction === "left" ? "translate(-50%, -50%) scaleX(-1)" : "";
  stageCharacter.classList.add("stage-character-visible");
}

function updateWalkMode(timestamp) {
  if (!walkMode) {
    return;
  }

  let xAxis = movementAxis(["a", "arrowleft"], ["d", "arrowright"]);
  let yAxis = movementAxis(["w", "arrowup"], ["s", "arrowdown"]);
  if (walkMode.interactionText) {
    setWalkSprite(walkMode.direction);
    walkAnimationFrame = window.requestAnimationFrame(updateWalkMode);
    return;
  }

  const latestHorizontal = latestPressedOrder(["a", "arrowleft", "d", "arrowright"]);
  const latestVertical = latestPressedOrder(["w", "arrowup", "s", "arrowdown"]);

  if (xAxis !== 0 && yAxis !== 0) {
    if (latestHorizontal > latestVertical) {
      yAxis = 0;
    } else {
      xAxis = 0;
    }
  }

  const isMoving = xAxis !== 0 || yAxis !== 0;
  const speed = walkTuning.walkSpeed;

  if (isMoving) {
    walkMode.x = Math.max(
      walkTuning.walkBoundLeft,
      Math.min(walkTuning.walkBoundRight, walkMode.x + xAxis * speed)
    );
    walkMode.y = Math.max(
      walkTuning.walkBoundTop,
      Math.min(walkTuning.walkBoundBottom, walkMode.y + yAxis * speed)
    );

    if (xAxis < 0) {
      walkMode.direction = "left";
    } else if (xAxis > 0) {
      walkMode.direction = "side";
    } else if (yAxis < 0) {
      walkMode.direction = "up";
    } else if (yAxis > 0) {
      walkMode.direction = "down";
    }

    if (timestamp - walkMode.lastFrameTime > 140) {
      walkMode.frame += 1;
      walkMode.lastFrameTime = timestamp;
    }
  } else {
    walkMode.frame = 0;
  }

  setStageCharacterPosition(walkMode.x, walkMode.y);
  setWalkSprite(walkMode.direction);
  updateActiveInteractionBlock();

  if (walkMode.x >= walkMode.exitX && walkMode.nextSceneId) {
    const nextSceneId = walkMode.nextSceneId;
    stopWalkMode();
    heldKeys.clear();
    renderScene(nextSceneId);
    return;
  }

  walkAnimationFrame = window.requestAnimationFrame(updateWalkMode);
}

function updateActiveInteractionBlock() {
  if (!walkMode) {
    return;
  }

  walkMode.activeBlockIndex = interactionBlocks.findIndex((block) =>
    pointInBlock(walkMode.x, walkMode.y, block)
  );
  overheadPrompt.classList.toggle("overhead-prompt-visible", walkMode.activeBlockIndex >= 0);
}

function pointInBlock(x, y, block) {
  return x >= block.x && x <= block.x + block.width && y >= block.y && y <= block.y + block.height;
}

function interactWithActiveBlock() {
  if (!walkMode || walkMode.activeBlockIndex < 0) {
    return false;
  }

  if (performance.now() < interactionLockedUntil || walkMode.interactionText) {
    return false;
  }

  const block = interactionBlocks[walkMode.activeBlockIndex];
  walkMode.interactionText = block.text;
  hud.classList.remove("hud-hidden");
  speaker.textContent = "이빛나";
  dialogue.textContent = block.text;
  choices.replaceChildren();
  renderCharacter("bina");
  advancePrompt.classList.remove("advance-prompt-hidden");

  if (block.next) {
    walkMode.pendingNextSceneId = block.next;
  }

  return true;
}

function latestPressedOrder(keys) {
  return Math.max(0, ...keys.filter((key) => heldKeys.has(key)).map((key) => keyPressOrder.get(key) ?? 0));
}

function playCutscene(src, nextSceneId) {
  isCutscenePlaying = true;
  hud.classList.add("hud-hidden");
  stageCharacter.hidden = true;
  cutscene.classList.add("cutscene-active");
  cutsceneVideo.src = src;
  cutsceneVideo.currentTime = 0;

  const finishCutscene = () => {
    if (!isCutscenePlaying) {
      return;
    }

    isCutscenePlaying = false;
    cutsceneVideo.pause();
    cutsceneVideo.removeAttribute("src");
    cutsceneVideo.load();
    cutscene.classList.remove("cutscene-active");
    stageCharacter.hidden = false;

    if (nextSceneId) {
      renderScene(nextSceneId);
    }
  };

  cutsceneVideo.onended = finishCutscene;
  cutsceneVideo.onerror = finishCutscene;
  cutsceneVideo.play().catch(() => {
    finishCutscene();
  });
}

function advanceScene() {
  if (walkMode?.interactionText) {
    const nextSceneId = walkMode.pendingNextSceneId;
    walkMode.interactionText = null;
    walkMode.pendingNextSceneId = null;
    interactionLockedUntil = performance.now() + 1000;
    hud.classList.add("hud-hidden");

    if (nextSceneId) {
      stopWalkMode();
      heldKeys.clear();
      renderScene(nextSceneId);
    }

    return;
  }

  const scene = story.scenes[currentSceneId];

  if (!scene.next || scene.choices?.length) {
    return;
  }

  renderScene(scene.next);
}

function tuningText() {
  return [
    ":root {",
    `  --stage-character-x: ${tuning.stageX}%;`,
    `  --stage-character-y: ${tuning.stageY}%;`,
    `  --stage-character-size: ${tuning.stageSize}%;`,
    `  --portrait-x: ${tuning.portraitX}%;`,
    `  --portrait-y: ${tuning.portraitY}%;`,
    `  --portrait-zoom: ${tuning.portraitZoom}%;`,
    `  --dialogue-opacity: ${tuning.dialogueOpacity};`,
    `  --dialogue-width: ${tuning.dialogueWidth}%;`,
    `  --dialogue-min-height: ${tuning.dialogueHeight}px;`,
    `  --advance-prompt-x: ${tuning.advancePromptX}%;`,
    `  --advance-prompt-y: ${tuning.advancePromptY}%;`,
    `  --advance-prompt-size: ${tuning.advancePromptSize}%;`,
    "}"
  ].join("\n");
}

function applyTuning() {
  document.documentElement.style.setProperty("--stage-character-x", `${tuning.stageX}%`);
  document.documentElement.style.setProperty("--stage-character-y", `${tuning.stageY}%`);
  document.documentElement.style.setProperty("--stage-character-size", `${tuning.stageSize}%`);
  document.documentElement.style.setProperty("--portrait-x", `${tuning.portraitX}%`);
  document.documentElement.style.setProperty("--portrait-y", `${tuning.portraitY}%`);
  document.documentElement.style.setProperty("--portrait-zoom", `${tuning.portraitZoom}%`);
  document.documentElement.style.setProperty("--dialogue-opacity", tuning.dialogueOpacity);
  document.documentElement.style.setProperty("--dialogue-width", `${tuning.dialogueWidth}%`);
  document.documentElement.style.setProperty("--dialogue-min-height", `${tuning.dialogueHeight}px`);
  document.documentElement.style.setProperty("--advance-prompt-x", `${tuning.advancePromptX}%`);
  document.documentElement.style.setProperty("--advance-prompt-y", `${tuning.advancePromptY}%`);
  document.documentElement.style.setProperty(
    "--advance-prompt-size",
    `${tuning.advancePromptSize}%`
  );
  debugOutput.textContent = tuningText();
}

function setupDebugPanel() {
  const params = new URLSearchParams(window.location.search);
  const isDebug = params.get("debug") === "1";

  if (!isDebug) {
    return;
  }

  debugPanel.classList.add("debug-panel-visible");

  Object.keys(tuning).forEach((key) => {
    const input = document.querySelector(`#${key}`);
    input.value = tuning[key];
    input.addEventListener("input", () => {
      tuning[key] = Number(input.value);
      applyTuning();
    });
  });

  copyTuning.addEventListener("click", async () => {
    const text = tuningText();
    try {
      await navigator.clipboard.writeText(text);
      copyTuning.textContent = "Copied";
      window.setTimeout(() => {
        copyTuning.textContent = "Copy";
      }, 900);
    } catch {
      debugOutput.textContent = `${text}\n\nCopy failed. Select this text manually.`;
    }
  });

  applyTuning();
}

function mainTuningText() {
  return [
    ":root {",
    `  --title-x: ${mainTuning.titleX}%;`,
    `  --title-y: ${mainTuning.titleY}%;`,
    `  --title-size: ${mainTuning.titleSize}%;`,
    `  --shooting-star-x: ${mainTuning.shootingStarX}%;`,
    `  --shooting-star-y: ${mainTuning.shootingStarY}%;`,
    `  --shooting-star-size: ${mainTuning.shootingStarSize}%;`,
    `  --shooting-star-move-x: ${mainTuning.shootingStarMoveX}%;`,
    `  --shooting-star-move-y: ${mainTuning.shootingStarMoveY}%;`,
    `  --prompt-x: ${mainTuning.promptX}%;`,
    `  --prompt-y: ${mainTuning.promptY}%;`,
    `  --prompt-size: ${mainTuning.promptSize}px;`,
    `  --title-character-x: ${mainTuning.titleCharacterX}%;`,
    `  --title-character-y: ${mainTuning.titleCharacterY}%;`,
    `  --title-character-size: ${mainTuning.titleCharacterSize}%;`,
    `  --cigarette-light-x: ${mainTuning.cigaretteLightX}%;`,
    `  --cigarette-light-y: ${mainTuning.cigaretteLightY}%;`,
    `  --cigarette-light-size: ${mainTuning.cigaretteLightSize}%;`,
    `  --cigarette-smoke-x: ${mainTuning.cigaretteSmokeX}%;`,
    `  --cigarette-smoke-y: ${mainTuning.cigaretteSmokeY}%;`,
    `  --cigarette-smoke-size: ${mainTuning.cigaretteSmokeSize}%;`,
    "}"
  ].join("\n");
}

function applyMainTuning() {
  document.documentElement.style.setProperty("--title-x", `${mainTuning.titleX}%`);
  document.documentElement.style.setProperty("--title-y", `${mainTuning.titleY}%`);
  document.documentElement.style.setProperty("--title-size", `${mainTuning.titleSize}%`);
  document.documentElement.style.setProperty("--shooting-star-x", `${mainTuning.shootingStarX}%`);
  document.documentElement.style.setProperty("--shooting-star-y", `${mainTuning.shootingStarY}%`);
  document.documentElement.style.setProperty(
    "--shooting-star-size",
    `${mainTuning.shootingStarSize}%`
  );
  document.documentElement.style.setProperty(
    "--shooting-star-move-x",
    `${mainTuning.shootingStarMoveX}%`
  );
  document.documentElement.style.setProperty(
    "--shooting-star-move-y",
    `${mainTuning.shootingStarMoveY}%`
  );
  document.documentElement.style.setProperty("--prompt-x", `${mainTuning.promptX}%`);
  document.documentElement.style.setProperty("--prompt-y", `${mainTuning.promptY}%`);
  document.documentElement.style.setProperty("--prompt-size", `${mainTuning.promptSize}px`);
  document.documentElement.style.setProperty(
    "--title-character-x",
    `${mainTuning.titleCharacterX}%`
  );
  document.documentElement.style.setProperty(
    "--title-character-y",
    `${mainTuning.titleCharacterY}%`
  );
  document.documentElement.style.setProperty(
    "--title-character-size",
    `${mainTuning.titleCharacterSize}%`
  );
  document.documentElement.style.setProperty(
    "--cigarette-light-x",
    `${mainTuning.cigaretteLightX}%`
  );
  document.documentElement.style.setProperty(
    "--cigarette-light-y",
    `${mainTuning.cigaretteLightY}%`
  );
  document.documentElement.style.setProperty(
    "--cigarette-light-size",
    `${mainTuning.cigaretteLightSize}%`
  );
  document.documentElement.style.setProperty(
    "--cigarette-smoke-x",
    `${mainTuning.cigaretteSmokeX}%`
  );
  document.documentElement.style.setProperty(
    "--cigarette-smoke-y",
    `${mainTuning.cigaretteSmokeY}%`
  );
  document.documentElement.style.setProperty(
    "--cigarette-smoke-size",
    `${mainTuning.cigaretteSmokeSize}%`
  );
  debugMainOutput.textContent = mainTuningText();
}

function setupMainDebugPanel() {
  const params = new URLSearchParams(window.location.search);
  const isDebug = params.get("debug") === "2" || params.get("debug") === "main";

  if (!isDebug) {
    return;
  }

  debugMainPanel.classList.add("debug-panel-visible");

  Object.keys(mainTuning).forEach((key) => {
    const input = document.querySelector(`#${key}`);
    input.value = mainTuning[key];
    input.addEventListener("input", () => {
      mainTuning[key] = Number(input.value);
      applyMainTuning();
    });
  });

  copyMainTuning.addEventListener("click", async () => {
    const text = mainTuningText();
    try {
      await navigator.clipboard.writeText(text);
      copyMainTuning.textContent = "Copied";
      window.setTimeout(() => {
        copyMainTuning.textContent = "Copy";
      }, 900);
    } catch {
      debugMainOutput.textContent = `${text}\n\nCopy failed. Select this text manually.`;
    }
  });

  applyMainTuning();
}

function walkTuningText() {
  return [
    ":root {",
    `  --walk-character-size: ${walkTuning.walkSize}%;`,
    `  --walk-scale-x: ${walkTuning.walkWidthScale / 100};`,
    `  --walk-scale-y: ${walkTuning.walkHeightScale / 100};`,
    `  /* walkSpeed: ${walkTuning.walkSpeed} */`,
    `  /* walkBounds: left ${walkTuning.walkBoundLeft}, right ${walkTuning.walkBoundRight}, top ${walkTuning.walkBoundTop}, bottom ${walkTuning.walkBoundBottom} */`,
    `  /* interactionBlocks: ${JSON.stringify(interactionBlocks)} */`,
    "}"
  ].join("\n");
}

function applyWalkTuning() {
  document.documentElement.style.setProperty("--walk-character-size", `${walkTuning.walkSize}%`);
  document.documentElement.style.setProperty("--walk-scale-x", walkTuning.walkWidthScale / 100);
  document.documentElement.style.setProperty("--walk-scale-y", walkTuning.walkHeightScale / 100);
  renderDebugAreas();
  debugWalkOutput.textContent = walkTuningText();
}

function renderDebugAreas() {
  const left = Math.min(walkTuning.walkBoundLeft, walkTuning.walkBoundRight);
  const right = Math.max(walkTuning.walkBoundLeft, walkTuning.walkBoundRight);
  const top = Math.min(walkTuning.walkBoundTop, walkTuning.walkBoundBottom);
  const bottom = Math.max(walkTuning.walkBoundTop, walkTuning.walkBoundBottom);

  debugMoveBounds.style.left = `${left}%`;
  debugMoveBounds.style.top = `${top}%`;
  debugMoveBounds.style.width = `${right - left}%`;
  debugMoveBounds.style.height = `${bottom - top}%`;
  debugInteractionBlocks.replaceChildren();

  interactionBlocks.forEach((block, index) => {
    const element = document.createElement("div");
    element.className = "debug-interaction-block";
    element.dataset.label = `Block ${index + 1}`;
    element.style.left = `${block.x}%`;
    element.style.top = `${block.y}%`;
    element.style.width = `${block.width}%`;
    element.style.height = `${block.height}%`;
    debugInteractionBlocks.append(element);
  });
}

function renderBlockControls() {
  blockControls.replaceChildren();

  interactionBlocks.forEach((block, index) => {
    const group = document.createElement("div");
    group.className = "debug-block-group";
    group.innerHTML = `
      <strong>Block ${index + 1}</strong>
      <label>X <input type="range" min="0" max="100" value="${block.x}" step="1" data-field="x" data-index="${index}" /></label>
      <label>Y <input type="range" min="0" max="100" value="${block.y}" step="1" data-field="y" data-index="${index}" /></label>
      <label>W <input type="range" min="1" max="100" value="${block.width}" step="1" data-field="width" data-index="${index}" /></label>
      <label>H <input type="range" min="1" max="100" value="${block.height}" step="1" data-field="height" data-index="${index}" /></label>
    `;
    blockControls.append(group);
  });

  blockControls.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      const block = interactionBlocks[Number(input.dataset.index)];
      block[input.dataset.field] = Number(input.value);
      applyWalkTuning();
    });
  });
}

function setupWalkDebugPanel() {
  const params = new URLSearchParams(window.location.search);
  const isDebug = params.get("debug") === "3" || params.get("debug") === "walk";

  if (!isDebug) {
    return;
  }

  debugWalkPanel.classList.add("debug-panel-visible");
  debugAreaLayer.classList.add("debug-area-layer-visible");

  Object.keys(walkTuning).forEach((key) => {
    const input = document.querySelector(`#${key}`);
    input.value = walkTuning[key];
    input.addEventListener("input", () => {
      walkTuning[key] = Number(input.value);
      applyWalkTuning();
    });
  });

  copyWalkTuning.addEventListener("click", async () => {
    const text = walkTuningText();
    try {
      await navigator.clipboard.writeText(text);
      copyWalkTuning.textContent = "Copied";
      window.setTimeout(() => {
        copyWalkTuning.textContent = "Copy";
      }, 900);
    } catch {
      debugWalkOutput.textContent = `${text}\n\nCopy failed. Select this text manually.`;
    }
  });

  addInteractionBlock.addEventListener("click", () => {
    interactionBlocks.push({ x: 45, y: 45, width: 10, height: 10 });
    renderBlockControls();
    applyWalkTuning();
  });

  renderBlockControls();
  applyWalkTuning();
}

function setupDraggablePanel(panel) {
  const handle = panel.querySelector("[data-drag-handle]");
  let drag = null;

  handle.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) {
      return;
    }

    const rect = panel.getBoundingClientRect();
    drag = {
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top
    };
    panel.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove", (event) => {
    if (!drag) {
      return;
    }

    const x = Math.max(0, Math.min(window.innerWidth - panel.offsetWidth, event.clientX - drag.offsetX));
    const y = Math.max(0, Math.min(window.innerHeight - panel.offsetHeight, event.clientY - drag.offsetY));
    panel.style.left = `${x}px`;
    panel.style.top = `${y}px`;
    panel.style.right = "auto";
  });

  handle.addEventListener("pointerup", (event) => {
    drag = null;
    panel.releasePointerCapture(event.pointerId);
  });
}

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (walkMode?.interactionText && (key === "a" || key === "enter")) {
    advanceScene();
    return;
  }

  if (
    walkMode &&
    key === "a" &&
    walkMode.activeBlockIndex >= 0 &&
    performance.now() >= interactionLockedUntil
  ) {
    interactWithActiveBlock();
    return;
  }

  if (!heldKeys.has(key)) {
    keyPressCounter += 1;
    keyPressOrder.set(key, keyPressCounter);
  }
  heldKeys.add(key);

  if (!hasStarted && (event.key === "Enter" || event.key === " ")) {
    startGame();
    return;
  }

  if (!hasStarted) {
    return;
  }

  if (isCutscenePlaying || walkMode) {
    return;
  }

  if (event.key !== "Enter" && event.key.toLowerCase() !== "a") {
    return;
  }

  advanceScene();
});

document.addEventListener("keyup", (event) => {
  const key = event.key.toLowerCase();
  heldKeys.delete(key);
  keyPressOrder.delete(key);
});

function startGame() {
  if (hasStarted || !canStart) {
    return;
  }

  hasStarted = true;
  encounterWipe.classList.add("encounter-wipe-active");

  window.setTimeout(() => {
    titleScreen.classList.add("title-screen-hidden");
    encounterWipe.classList.remove("encounter-wipe-active");
    encounterWipe.classList.add("encounter-wipe-exit");
  }, 900);

  window.setTimeout(() => {
    encounterWipe.classList.remove("encounter-wipe-exit");
  }, 1960);
}

startPrompt.addEventListener("animationend", (event) => {
  if (event.animationName !== "promptRise") {
    return;
  }

  canStart = true;
  startPrompt.classList.add("start-prompt-ready");
});

titleScreen.addEventListener("click", startGame);
startPrompt.addEventListener("click", (event) => {
  event.stopPropagation();
  startGame();
});

dialogue.addEventListener("click", advanceScene);
advancePrompt.addEventListener("click", advanceScene);

setupDebugPanel();
setupMainDebugPanel();
setupWalkDebugPanel();
setupDraggablePanel(debugPanel);
setupDraggablePanel(debugMainPanel);
setupDraggablePanel(debugWalkPanel);
buildEncounterWipe();
renderScene(currentSceneId);
