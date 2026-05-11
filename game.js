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
const stageActors = document.querySelector("#stageActors");
const stageCharacter = document.querySelector("#stageCharacter");
const stageCharacterSheet = document.querySelector("#stageCharacterSheet");
const overheadPrompt = document.querySelector("#overheadPrompt");
const narrationPanel = document.querySelector("#narrationPanel");
const narrationText = document.querySelector("#narrationText");
const narrationChoices = document.querySelector("#narrationChoices");
const debugPanel = document.querySelector("#debugPanel");
const debugSwitcher = document.querySelector("#debugSwitcher");
const debugOutput = document.querySelector("#debugOutput");
const copyTuning = document.querySelector("#copyTuning");
const debugCharacter = document.querySelector("#debugCharacter");
const debugCharacterStage = document.querySelector("#debugCharacterStage");
const dialogueImageControls = document.querySelector("#dialogueImageControls");
const debugStageSprite = document.querySelector("#debugStageSprite");
const debugPortraitSprite = document.querySelector("#debugPortraitSprite");
const debugMainPanel = document.querySelector("#debugMainPanel");
const debugMainOutput = document.querySelector("#debugMainOutput");
const copyMainTuning = document.querySelector("#copyMainTuning");
const debugWalkPanel = document.querySelector("#debugWalkPanel");
const debugWalkOutput = document.querySelector("#debugWalkOutput");
const copyWalkTuning = document.querySelector("#copyWalkTuning");
const debugWalkStage = document.querySelector("#debugWalkStage");
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
let currentCharacterId = null;
let currentStageActorIds = [];
let currentStageName = "room";
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
  },
  cheolsu: {
    portrait: "./assets/images/characters/cheolsu-portrait.png",
    sprite: "./assets/images/characters/cheolsu-sprite.png"
  }
};

const characterImageOptions = [
  { label: "이빛나 기본 인게임", value: "./assets/images/characters/bina-sprite.png", type: "sprite" },
  { label: "이빛나 기본 인게임 1", value: "./assets/images/characters/bina-sprite-1.png", type: "sprite" },
  { label: "이빛나 걷기 좌우", value: "./assets/images/characters/bina-walk-side-1.png", type: "sprite" },
  { label: "이빛나 걷기 위", value: "./assets/images/characters/bina-walk-up-1.png", type: "sprite" },
  { label: "이빛나 걷기 아래", value: "./assets/images/characters/bina-walk-down-1.png", type: "sprite" },
  { label: "뿅뿅 기본 인게임", value: "./assets/images/characters/pyong-sprite.png", type: "sprite" },
  { label: "김철수 인게임 예정", value: "./assets/images/characters/cheolsu-sprite.png", type: "sprite" },
  { label: "이빛나 기본 초상화", value: "./assets/images/characters/bina-portrait.png", type: "portrait" },
  { label: "뿅뿅 기본 초상화", value: "./assets/images/characters/pyong-portrait.png", type: "portrait" },
  { label: "김철수 초상화 예정", value: "./assets/images/characters/cheolsu-portrait.png", type: "portrait" }
];

const stageImageDefaults = {
  roof: {
    bina: { sprite: "./assets/images/characters/bina-sprite-1.png" }
  },
  crash: {
    bina: { sprite: "./assets/images/characters/bina-sprite-1.png" }
  },
  alien: {
    bina: { sprite: "./assets/images/characters/bina-sprite-1.png" }
  }
};

const sceneBackgrounds = {
  room: "./assets/images/scene-room.png",
  roof: "./assets/images/scene-roof.png",
  crash: "./assets/images/scene-roof.png",
  alien: "./assets/images/scene-roof.png"
};

const stageCameraDefaults = {
  room: { x: 0, y: 0, zoom: 1, duration: 650 },
  roof: { x: 0, y: -12, zoom: 1, duration: 650 },
  crash: { x: 0, y: -12, zoom: 1, duration: 650 },
  alien: { x: 0, y: -12, zoom: 1, duration: 650 }
};

const tuning = {
  stageX: 49,
  stageY: 36,
  stageSize: 13.8,
  stageScaleX: 100,
  stageScaleY: 100,
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

const characterTunings = {
  bina: {
    stageX: 49,
    stageY: 36,
    stageSize: 13.8,
    stageScaleX: 100,
    stageScaleY: 100,
    portraitX: 48,
    portraitY: 23,
    portraitZoom: 170
  },
  pyong: {
    stageX: 58,
    stageY: 50,
    stageSize: 15,
    stageScaleX: 100,
    stageScaleY: 100,
    portraitX: 50,
    portraitY: 25,
    portraitZoom: 170
  },
  cheolsu: {
    stageX: 44,
    stageY: 50,
    stageSize: 16,
    stageScaleX: 100,
    stageScaleY: 100,
    portraitX: 50,
    portraitY: 25,
    portraitZoom: 170
  }
};

const stageCharacterTunings = {
  roof: {
    bina: {
      stageX: 32,
      stageY: 75.9,
      stageSize: 17.8,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    },
    pyong: {
      stageX: 47,
      stageY: 75.9,
      stageSize: 15.8,
      stageScaleX: 95,
      stageScaleY: 103,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  crash: {
    bina: {
      stageX: 32,
      stageY: 75.9,
      stageSize: 17.8,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    },
    pyong: {
      stageX: 47,
      stageY: 75.9,
      stageSize: 15.8,
      stageScaleX: 95,
      stageScaleY: 103,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  alien: {
    bina: {
      stageX: 32,
      stageY: 75.9,
      stageSize: 17.8,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    },
    pyong: {
      stageX: 47,
      stageY: 75.9,
      stageSize: 15.8,
      stageScaleX: 95,
      stageScaleY: 103,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  }
};

const sceneImageTunings = {};

const cameraTuning = {
  cameraX: 0,
  cameraY: 0,
  cameraZoom: 1,
  cameraDuration: 650
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

const stageWalkTunings = {
  room: { ...walkTuning },
  roof: { ...walkTuning },
  crash: { ...walkTuning },
  alien: { ...walkTuning }
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
  currentStageName = stageName;
  if (debugCharacterStage) {
    debugCharacterStage.value = stageName;
  }
  if (debugWalkStage) {
    debugWalkStage.value = stageName;
  }
  stage.classList.toggle("stage-roof", stageName === "roof");
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

function getCharacterTuning(characterId) {
  return stageCharacterTunings[currentStageName]?.[characterId] ?? characterTunings[characterId] ?? characterTunings.bina;
}

function editableStageName() {
  return debugCharacterStage?.value ?? currentStageName;
}

function editableWalkStageName() {
  return debugWalkStage?.value ?? currentStageName;
}

function editableCharacterTuning(characterId) {
  const stageName = editableStageName();
  stageCharacterTunings[stageName] ??= {};
  stageCharacterTunings[stageName][characterId] ??= {
    ...(characterTunings[characterId] ?? characterTunings.bina)
  };
  return stageCharacterTunings[stageName][characterId];
}

function editableWalkTuning() {
  const stageName = editableWalkStageName();
  stageWalkTunings[stageName] ??= { ...walkTuning };
  return stageWalkTunings[stageName];
}

function sceneImagesFor(characterId, sceneId = currentSceneId) {
  return sceneImageTunings[sceneId]?.[characterId] ?? {};
}

function characterImagesFor(characterId, stageName = currentStageName, sceneId = currentSceneId) {
  return {
    ...(characters[characterId] ?? {}),
    ...(stageImageDefaults[stageName]?.[characterId] ?? {}),
    ...sceneImagesFor(characterId, sceneId)
  };
}

function editableSceneImages(characterId, sceneId = currentSceneId) {
  sceneImageTunings[sceneId] ??= {};
  sceneImageTunings[sceneId][characterId] ??= {};
  return sceneImageTunings[sceneId][characterId];
}

function applyCharacterTuning(characterId) {
  const values = getCharacterTuning(characterId);
  document.documentElement.style.setProperty("--stage-character-x", `${values.stageX}%`);
  document.documentElement.style.setProperty("--stage-character-y", `${values.stageY}%`);
  document.documentElement.style.setProperty("--stage-character-size", `${values.stageSize}%`);
  document.documentElement.style.setProperty(
    "--stage-character-scale-x",
    values.stageScaleX / 100
  );
  document.documentElement.style.setProperty(
    "--stage-character-scale-y",
    values.stageScaleY / 100
  );
  document.documentElement.style.setProperty("--portrait-x", `${values.portraitX}%`);
  document.documentElement.style.setProperty("--portrait-y", `${values.portraitY}%`);
  document.documentElement.style.setProperty("--portrait-zoom", `${values.portraitZoom}%`);
}

function actorIdsForScene(scene) {
  if (scene.actors?.length) {
    return scene.actors;
  }

  if (scene.stage === "alien") {
    return ["bina", "pyong"];
  }

  if (scene.character) {
    return [scene.character];
  }

  return currentCharacterId ? [currentCharacterId] : [];
}

function renderStageActors(actorIds = []) {
  currentStageActorIds = [...actorIds];
  stageActors.replaceChildren();
  stageActors.hidden = actorIds.length === 0;

  actorIds.forEach((actorId) => {
    const character = characterImagesFor(actorId);
    if (!character?.sprite) {
      return;
    }

    const values = getCharacterTuning(actorId);
    const actor = document.createElement("img");
    actor.className = "stage-actor";
    actor.src = character.sprite;
    actor.alt = "";
    actor.setAttribute("aria-hidden", "true");
    actor.style.left = `${values.stageX}%`;
    actor.style.top = `${values.stageY}%`;
    actor.style.width = `${values.stageSize}%`;
    actor.style.transform = `translate(-50%, -50%) scale(${values.stageScaleX / 100}, ${values.stageScaleY / 100})`;
    stageActors.append(actor);
  });
}

function clearStageActors() {
  currentStageActorIds = [];
  stageActors.replaceChildren();
  stageActors.hidden = true;
}

function refreshStageActors() {
  if (currentStageActorIds.length > 0) {
    renderStageActors(currentStageActorIds);
  }
}

function renderCharacter(characterId, options = {}) {
  const character = characterImagesFor(characterId);
  const hasCharacter = Boolean(character);
  const renderStageSprite = options.renderStageSprite ?? true;

  if (!characterId) {
    return;
  }

  if (hasCharacter) {
    applyCharacterTuning(characterId);
    currentCharacterId = characterId;
  }

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

  if (renderStageSprite) {
    setImage(stageCharacter, character?.sprite, "stage-character-visible");
  }
}

function hideNarrationPanel() {
  narrationPanel.classList.add("narration-panel-hidden");
  narrationText.textContent = "";
  narrationChoices.replaceChildren();
}

function renderScene(sceneId) {
  stopWalkMode();
  const scene = story.scenes[sceneId];
  const sceneChoices = scene.choices ?? [];
  currentSceneId = sceneId;
  syncSceneImageControls();
  setStage(scene.stage);
  applySceneCamera(scene);

  if (scene.video) {
    hideNarrationPanel();
    playCutscene(scene.video, scene.next);
    return;
  }

  if (scene.mode === "walk") {
    hideNarrationPanel();
    clearStageActors();
    startWalkMode(scene);
    return;
  }

  const isNarration = scene.speaker === "나레이션";
  const isCenteredText = isNarration;
  choices.replaceChildren();
  narrationChoices.replaceChildren();
  narrationPanel.classList.toggle("narration-panel-hidden", !isCenteredText);
  narrationText.textContent = isCenteredText ? scene.text : "";
  hud.classList.toggle("hud-hidden", isCenteredText);

  if (!isCenteredText) {
    speaker.textContent = scene.speaker;
    speaker.hidden = false;
    dialogue.textContent = scene.text;
  }

  renderStageActors(actorIdsForScene(scene));
  stageCharacter.hidden = true;
  stageCharacter.classList.remove("stage-character-visible");
  stageCharacterSheet.hidden = true;
  stageCharacterSheet.classList.remove("stage-character-sheet-visible");
  renderCharacter(scene.character, { renderStageSprite: false });
  advancePrompt.classList.toggle(
    "advance-prompt-hidden",
    isCenteredText || sceneChoices.length > 0 || !scene.next
  );

  sceneChoices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = choice.text;
    button.addEventListener("click", () => renderScene(choice.next));
    if (isCenteredText) {
      narrationChoices.append(button);
    } else {
      choices.append(button);
    }
  });
}

function startWalkMode(scene) {
  const character = characters[scene.character];
  heldKeys.clear();
  keyPressOrder.clear();
  Object.assign(walkTuning, stageWalkTunings[scene.stage] ?? walkTuning);

  walkMode = {
    character,
    direction: "down",
    frame: 0,
    lastFrameTime: 0,
    nextSceneId: scene.exit?.next,
    exitX: scene.exit?.x ?? 82,
    activeBlockIndex: -1,
    interactionText: null,
    interactions: scene.interactions ?? interactionBlocks,
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

  walkMode.activeBlockIndex = walkMode.interactions.findIndex((block) =>
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

  const block = walkMode.interactions[walkMode.activeBlockIndex];
  walkMode.interactionText = block.text;
  hud.classList.remove("hud-hidden");
  speaker.textContent = block.speaker ?? "이빛나";
  dialogue.textContent = block.text;
  choices.replaceChildren();
  renderCharacter(block.character ?? "bina");
  setStageCharacterPosition(walkMode.x, walkMode.y);
  setWalkSprite(walkMode.direction);
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

  if (scene.choices?.length) {
    return;
  }

  if (!scene.next) {
    hideNarrationPanel();
    return;
  }

  renderScene(scene.next);
}

function cameraTuningText() {
  return [
    `  --camera-x: ${cameraTuning.cameraX}%;`,
    `  --camera-y: ${cameraTuning.cameraY}%;`,
    `  --camera-zoom: ${cameraTuning.cameraZoom};`,
    `  --camera-duration: ${cameraTuning.cameraDuration}ms;`
  ].join("\n");
}

function applyCameraTuning() {
  document.documentElement.style.setProperty("--camera-x", `${cameraTuning.cameraX}%`);
  document.documentElement.style.setProperty("--camera-y", `${cameraTuning.cameraY}%`);
  document.documentElement.style.setProperty("--camera-zoom", cameraTuning.cameraZoom);
  document.documentElement.style.setProperty("--camera-duration", `${cameraTuning.cameraDuration}ms`);
  document.querySelectorAll("[data-camera-field]").forEach((input) => {
    input.value = cameraTuning[input.dataset.cameraField];
  });
}

function applySceneCamera(scene) {
  const camera = scene.camera ?? stageCameraDefaults[scene.stage];

  if (!camera) {
    return;
  }

  cameraTuning.cameraX = camera.x ?? cameraTuning.cameraX;
  cameraTuning.cameraY = camera.y ?? cameraTuning.cameraY;
  cameraTuning.cameraZoom = camera.zoom ?? cameraTuning.cameraZoom;
  cameraTuning.cameraDuration = camera.duration ?? cameraTuning.cameraDuration;
  applyCameraTuning();
}

function setupCameraControls(panel, onChange) {
  panel.querySelectorAll("[data-camera-field]").forEach((input) => {
    const key = input.dataset.cameraField;
    input.value = cameraTuning[key];
    input.addEventListener("input", () => {
      cameraTuning[key] = Number(input.value);
      applyCameraTuning();
      onChange?.();
    });
  });
}

function activeDebugCharacterId() {
  return debugCharacter?.value ?? "bina";
}

function syncTuningFromCharacter(characterId) {
  const values = editableCharacterTuning(characterId);
  ["stageX", "stageY", "stageSize", "stageScaleX", "stageScaleY", "portraitX", "portraitY", "portraitZoom"].forEach(
    (key) => {
      tuning[key] = values[key];
      const input = document.querySelector(`#${key}`);
      if (input) {
        input.value = values[key];
      }
    }
  );
}

function syncCharacterFromTuning(characterId) {
  const values = editableCharacterTuning(characterId);
  ["stageX", "stageY", "stageSize", "stageScaleX", "stageScaleY", "portraitX", "portraitY", "portraitZoom"].forEach(
    (key) => {
      values[key] = tuning[key];
    }
  );
}

function tuningText() {
  const characterId = activeDebugCharacterId();
  const characterValues = editableCharacterTuning(characterId);
  const stageName = editableStageName();

  return [
    `/* ${stageName} / ${characterId} */`,
    `${stageName}.${characterId}: {`,
    `  stageX: ${characterValues.stageX},`,
    `  stageY: ${characterValues.stageY},`,
    `  stageSize: ${characterValues.stageSize},`,
    `  stageScaleX: ${characterValues.stageScaleX},`,
    `  stageScaleY: ${characterValues.stageScaleY},`,
    `  portraitX: ${characterValues.portraitX},`,
    `  portraitY: ${characterValues.portraitY},`,
    `  portraitZoom: ${characterValues.portraitZoom}`,
    "}",
    "",
    ":root {",
    cameraTuningText(),
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
  syncCharacterFromTuning(activeDebugCharacterId());
  applyCharacterTuning(activeDebugCharacterId());
  applyCameraTuning();
  refreshStageActors();
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
  debugCharacterStage.value = currentStageName;
  syncTuningFromCharacter(activeDebugCharacterId());
  setupCameraControls(debugPanel, applyTuning);

  debugCharacterStage.addEventListener("change", () => {
    syncTuningFromCharacter(activeDebugCharacterId());
    applyTuning();
  });

  debugCharacter.addEventListener("change", () => {
    syncTuningFromCharacter(activeDebugCharacterId());
    syncSceneImageControls();
    applyTuning();
  });

  Object.keys(tuning).forEach((key) => {
    const input = document.querySelector(`#${key}`);
    input.value = tuning[key];
    input.addEventListener("input", () => {
      tuning[key] = Number(input.value);
      applyTuning();
    });
  });

  setupSceneImageControls();

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
    cameraTuningText(),
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
  applyCameraTuning();
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
  const isDebug = params.get("debug") === "1";

  if (!isDebug) {
    return;
  }

  debugMainPanel.classList.add("debug-panel-visible");
  setupCameraControls(debugMainPanel, applyMainTuning);

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
  const stageName = editableWalkStageName();
  const values = editableWalkTuning();

  return [
    `/* ${stageName} 이동 설정 */`,
    `${stageName}: {`,
    `  walkSize: ${values.walkSize},`,
    `  walkWidthScale: ${values.walkWidthScale},`,
    `  walkHeightScale: ${values.walkHeightScale},`,
    `  walkSpeed: ${values.walkSpeed},`,
    `  walkBoundLeft: ${values.walkBoundLeft},`,
    `  walkBoundRight: ${values.walkBoundRight},`,
    `  walkBoundTop: ${values.walkBoundTop},`,
    `  walkBoundBottom: ${values.walkBoundBottom}`,
    "}",
    "",
    ":root {",
    cameraTuningText(),
    `  --walk-character-size: ${values.walkSize}%;`,
    `  --walk-scale-x: ${values.walkWidthScale / 100};`,
    `  --walk-scale-y: ${values.walkHeightScale / 100};`,
    `  /* walkSpeed: ${values.walkSpeed} */`,
    `  /* walkBounds: left ${values.walkBoundLeft}, right ${values.walkBoundRight}, top ${values.walkBoundTop}, bottom ${values.walkBoundBottom} */`,
    `  /* interactionBlocks: ${JSON.stringify(interactionBlocks)} */`,
    "}"
  ].join("\n");
}

function syncWalkInputsFromStage() {
  const values = editableWalkTuning();
  Object.keys(walkTuning).forEach((key) => {
    walkTuning[key] = values[key];
    const input = document.querySelector(`#${key}`);
    if (input) {
      input.value = values[key];
    }
  });
}

function syncWalkStageFromInputs() {
  const values = editableWalkTuning();
  Object.keys(walkTuning).forEach((key) => {
    values[key] = walkTuning[key];
  });
}

function applyWalkTuning() {
  syncWalkStageFromInputs();
  applyCameraTuning();
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
      <strong>블록 ${index + 1}</strong>
      <label>블록 X <input type="range" min="0" max="100" value="${block.x}" step="1" data-field="x" data-index="${index}" /></label>
      <label>블록 Y <input type="range" min="0" max="100" value="${block.y}" step="1" data-field="y" data-index="${index}" /></label>
      <label>블록 너비 <input type="range" min="1" max="100" value="${block.width}" step="1" data-field="width" data-index="${index}" /></label>
      <label>블록 높이 <input type="range" min="1" max="100" value="${block.height}" step="1" data-field="height" data-index="${index}" /></label>
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
  const isDebug = params.get("debug") === "1";

  if (!isDebug) {
    return;
  }

  debugWalkPanel.classList.add("debug-panel-visible");
  debugWalkStage.value = currentStageName;
  syncWalkInputsFromStage();
  setupCameraControls(debugWalkPanel, applyWalkTuning);

  debugWalkStage.addEventListener("change", () => {
    syncWalkInputsFromStage();
    applyWalkTuning();
  });

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

function fillImageSelect(select, type) {
  select.replaceChildren();
  characterImageOptions
    .filter((option) => option.type === type)
    .forEach((option) => {
      const element = document.createElement("option");
      element.value = option.value;
      element.textContent = option.label;
      select.append(element);
    });
}

function setSelectValue(select, value) {
  const hasOption = [...select.options].some((option) => option.value === value);

  if (!hasOption && value) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = `${value} (직접 지정됨)`;
    select.append(option);
  }

  select.value = value;
}

function sceneImageTuningText() {
  const characterId = activeDebugCharacterId();
  const images = editableSceneImages(characterId);

  return [
    `/* ${currentSceneId} / ${characterId} 이미지 */`,
    `${currentSceneId}.${characterId}: {`,
    `  sprite: "${images.sprite}",`,
    `  portrait: "${images.portrait}"`,
    "}"
  ].join("\n");
}

function syncSceneImageControls() {
  if (!debugStageSprite || debugStageSprite.options.length === 0) {
    return;
  }

  const characterId = activeDebugCharacterId();
  const sceneImages = sceneImagesFor(characterId);
  const resolvedImages = characterImagesFor(characterId);
  setSelectValue(debugStageSprite, sceneImages.sprite ?? resolvedImages.sprite);
  setSelectValue(debugPortraitSprite, sceneImages.portrait ?? resolvedImages.portrait);
}

function applySceneImageTuning() {
  const images = editableSceneImages(activeDebugCharacterId());
  images.sprite = debugStageSprite.value;
  images.portrait = debugPortraitSprite.value;
  refreshStageActors();

  if (currentCharacterId === activeDebugCharacterId()) {
    renderCharacter(currentCharacterId, { renderStageSprite: false });
  }

  debugOutput.textContent = `${tuningText()}\n\n${sceneImageTuningText()}`;
}

function setupSceneImageControls() {
  fillImageSelect(debugStageSprite, "sprite");
  fillImageSelect(debugPortraitSprite, "portrait");
  dialogueImageControls.classList.add("dialogue-image-controls-visible");
  syncSceneImageControls();
  debugStageSprite.addEventListener("change", applySceneImageTuning);
  debugPortraitSprite.addEventListener("change", applySceneImageTuning);
}

function setupDebugSwitcher() {
  const params = new URLSearchParams(window.location.search);

  if (params.get("debug") !== "1") {
    return;
  }

  const panels = {
    debugPanel,
    debugMainPanel,
    debugWalkPanel
  };

  const showPanel = (targetId) => {
    Object.entries(panels).forEach(([id, panel]) => {
      panel.classList.toggle("debug-panel-visible", id === targetId);
    });
    debugAreaLayer.classList.toggle("debug-area-layer-visible", targetId === "debugWalkPanel");

    debugSwitcher.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("debug-switcher-active", button.dataset.debugTarget === targetId);
    });
  };

  debugSwitcher.classList.add("debug-switcher-visible");
  debugSwitcher.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => showPanel(button.dataset.debugTarget));
  });
  showPanel("debugPanel");
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
  const isAdvanceKey = key === "a" || key === "enter" || key === " ";
  const isNarrationVisible = !narrationPanel.classList.contains("narration-panel-hidden");

  if (isNarrationVisible && isAdvanceKey) {
    event.preventDefault();
    heldKeys.clear();
    keyPressOrder.clear();
    advanceScene();
    return;
  }

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
narrationPanel.addEventListener("click", advanceScene);

setupDebugPanel();
setupMainDebugPanel();
setupWalkDebugPanel();
setupDebugSwitcher();
setupDraggablePanel(debugPanel);
setupDraggablePanel(debugMainPanel);
setupDraggablePanel(debugWalkPanel);
buildEncounterWipe();
renderScene(currentSceneId);
