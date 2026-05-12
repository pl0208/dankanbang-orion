const stage = document.querySelector("#stage");
const sceneBackground = document.querySelector("#sceneBackground");
const cutscene = document.querySelector("#cutscene");
const cutsceneVideo = document.querySelector("#cutsceneVideo");
const titleScreen = document.querySelector("#titleScreen");
const startPrompt = document.querySelector("#startPrompt");
const stageJumpTabs = document.querySelector(".stage-jump-tabs");
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
const debugOutput = document.querySelector("#debugOutput");
const copyTuning = document.querySelector("#copyTuning");
const debugCharacter = document.querySelector("#debugCharacter");
const debugCharacterStage = document.querySelector("#debugCharacterStage");
const dialogueImageControls = document.querySelector("#dialogueImageControls");
const debugStageSprite = document.querySelector("#debugStageSprite");
const debugPortraitSprite = document.querySelector("#debugPortraitSprite");
const debugAreaLayer = document.querySelector("#debugAreaLayer");
const debugMoveBounds = document.querySelector("#debugMoveBounds");
const debugInteractionBlocks = document.querySelector("#debugInteractionBlocks");
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
let isUiHidden = false;
const heldKeys = new Set();
const keyPressOrder = new Map();
let keyPressCounter = 0;

const wipeColumns = 16;
const wipeRows = 9;

function applyUiVisibility() {
  document.body.classList.toggle("ui-hidden-mode", isUiHidden);
}

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
  },
  starship: {
    sprite: "./assets/images/starship-1.png"
  },
  starshipCrash: {
    sprite: "./assets/images/starship-2.png"
  },
  starshipOpen: {
    sprite: "./assets/images/starship-3.png"
  }
};

const characterImageOptions = [
  { label: "이빛나 기본 인게임", value: "./assets/images/characters/bina-sprite.png", type: "sprite" },
  { label: "이빛나 기본 인게임 1", value: "./assets/images/characters/bina-sprite-1.png", type: "sprite" },
  { label: "이빛나 추락 이후", value: "./assets/images/characters/bina-sprite-2.png", type: "sprite" },
  { label: "이빛나 걷기 좌우", value: "./assets/images/characters/bina-walk-side-1.png", type: "sprite" },
  { label: "이빛나 걷기 위", value: "./assets/images/characters/bina-walk-up-1.png", type: "sprite" },
  { label: "이빛나 걷기 아래", value: "./assets/images/characters/bina-walk-down-1.png", type: "sprite" },
  { label: "뿅뿅 기본 인게임", value: "./assets/images/characters/pyong-sprite.png", type: "sprite" },
  { label: "김철수 인게임 예정", value: "./assets/images/characters/cheolsu-sprite.png", type: "sprite" },
  { label: "별/우주선", value: "./assets/images/starship-1.png", type: "sprite" },
  { label: "추락한 별/우주선", value: "./assets/images/starship-2.png", type: "sprite" },
  { label: "열린 별/우주선", value: "./assets/images/starship-3.png", type: "sprite" },
  { label: "이빛나 기본 초상화", value: "./assets/images/characters/bina-portrait.png", type: "portrait" },
  { label: "뿅뿅 기본 초상화", value: "./assets/images/characters/pyong-portrait.png", type: "portrait" },
  { label: "김철수 초상화 예정", value: "./assets/images/characters/cheolsu-portrait.png", type: "portrait" }
];

const stageImageDefaults = {
  roof: {
    bina: { sprite: "./assets/images/characters/bina-sprite-1.png" }
  },
  roof2: {
    bina: { sprite: "./assets/images/characters/bina-sprite-1.png" }
  },
  crash: {
    bina: { sprite: "./assets/images/characters/bina-sprite-2.png" }
  },
  alien: {
    bina: { sprite: "./assets/images/characters/bina-sprite-2.png" }
  }
};

const sceneBackgrounds = {
  room: "./assets/images/scene-room.png",
  room2: "./assets/images/scene-room-2.png",
  room3: "./assets/images/scene-room-3.png",
  room4: "./assets/images/scene-room-4.png",
  room5: "./assets/images/scene-room-5.png",
  roof: "./assets/images/scene-roof.png",
  roof2: "./assets/images/scene-roof2.png",
  roof3: "./assets/images/scene-roof3.png",
  roof4: "./assets/images/scene-roof4.png",
  roof5: "./assets/images/scene-roof5.png",
  roof6: "./assets/images/scene-roof6.png",
  crash: "./assets/images/scene-roof2.png",
  alien: "./assets/images/scene-roof2.png"
};

const stageCameraDefaults = {
  room: { x: 0, y: 0, zoom: 1, duration: 650 },
  room2: { x: 0, y: 0, zoom: 1, duration: 650 },
  room3: { x: 0, y: 0, zoom: 1, duration: 650 },
  room4: { x: 0, y: 0, zoom: 1, duration: 650 },
  room5: { x: 0, y: 0, zoom: 1, duration: 650 },
  roof: { x: 0, y: -12, zoom: 1, duration: 650 },
  roof2: { x: 0, y: -12, zoom: 1, duration: 650 },
  roof3: { x: 0, y: -12, zoom: 1, duration: 650 },
  roof4: { x: 0, y: -12, zoom: 1, duration: 650 },
  roof5: { x: 0, y: -12, zoom: 1, duration: 650 },
  roof6: { x: 0, y: -12, zoom: 1, duration: 650 },
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
    portraitY: 11,
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
  },
  starship: {
    stageX: 61,
    stageY: 24,
    stageSize: 8,
    stageScaleX: 100,
    stageScaleY: 100,
    portraitX: 50,
    portraitY: 25,
    portraitZoom: 170
  },
  starshipCrash: {
    stageX: 44,
    stageY: 54,
    stageSize: 26,
    stageScaleX: 100,
    stageScaleY: 100,
    portraitX: 50,
    portraitY: 25,
    portraitZoom: 170
  },
  starshipOpen: {
    stageX: 24,
    stageY: 77.8,
    stageSize: 26,
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
      stageX: 54,
      stageY: 76.2,
      stageSize: 21.5,
      stageScaleX: 94,
      stageScaleY: 91,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    },
    pyong: {
      stageX: 39,
      stageY: 77.8,
      stageSize: 15.8,
      stageScaleX: 95,
      stageScaleY: 103,
      portraitX: 50,
      portraitY: 11,
      portraitZoom: 170
    }
  },
  roof3: {
    bina: {
      stageX: 54,
      stageY: 76.2,
      stageSize: 21.5,
      stageScaleX: 94,
      stageScaleY: 91,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    }
  },
  roof4: {
    bina: {
      stageX: 54,
      stageY: 76.2,
      stageSize: 21.5,
      stageScaleX: 94,
      stageScaleY: 91,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    },
    starship: {
      stageX: 36,
      stageY: 24,
      stageSize: 4,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  roof5: {
    bina: {
      stageX: 54,
      stageY: 76.2,
      stageSize: 21.5,
      stageScaleX: 94,
      stageScaleY: 91,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    },
    starship: {
      stageX: 32,
      stageY: 37.1,
      stageSize: 10.8,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  roof6: {
    bina: {
      stageX: 54,
      stageY: 76.2,
      stageSize: 21.5,
      stageScaleX: 94,
      stageScaleY: 91,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    },
    starship: {
      stageX: 28,
      stageY: 53.5,
      stageSize: 29.9,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  roof2: {
    bina: {
      stageX: 54,
      stageY: 76.2,
      stageSize: 21.5,
      stageScaleX: 94,
      stageScaleY: 91,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    },
    starship: {
      stageX: 36,
      stageY: 24,
      stageSize: 4,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  crash: {
    bina: {
      stageX: 56,
      stageY: 76.7,
      stageSize: 15.3,
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
      portraitY: 11,
      portraitZoom: 170
    },
    starshipCrash: {
      stageX: 44,
      stageY: 54,
      stageSize: 26,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    },
    starshipOpen: {
      stageX: 24,
      stageY: 77.8,
      stageSize: 26,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  alien: {
    bina: {
      stageX: 56,
      stageY: 76.7,
      stageSize: 15.3,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    },
    pyong: {
      stageX: 39,
      stageY: 77.8,
      stageSize: 15.8,
      stageScaleX: 95,
      stageScaleY: 103,
      portraitX: 50,
      portraitY: 11,
      portraitZoom: 170
    }
  }
};

const sceneCharacterTunings = {
  star_grows: {
    starship: {
      stageX: 32,
      stageY: 37.1,
      stageSize: 10.8,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  star_panic: {
    starship: {
      stageX: 32,
      stageY: 37.1,
      stageSize: 10.8,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  star_frozen: {
    starship: {
      stageX: 28,
      stageY: 53.5,
      stageSize: 29.9,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  crash_lands: {
    starshipCrash: {
      stageX: 24,
      stageY: 77.8,
      stageSize: 26,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  crash_smell: {
    starshipCrash: {
      stageX: 24,
      stageY: 77.8,
      stageSize: 26,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  crash_capsule: {
    starshipCrash: {
      stageX: 24,
      stageY: 77.8,
      stageSize: 26,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 50,
      portraitY: 25,
      portraitZoom: 170
    }
  },
  alien_door: {
    starshipCrash: {
      stageX: 24,
      stageY: 77.8,
      stageSize: 26,
      stageScaleX: 100,
      stageScaleY: 100,
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
  room2: { ...walkTuning },
  room3: { ...walkTuning },
  room4: { ...walkTuning },
  room5: { ...walkTuning },
  roof: { ...walkTuning },
  roof2: { ...walkTuning },
  roof3: { ...walkTuning },
  roof4: { ...walkTuning },
  roof5: { ...walkTuning },
  roof6: { ...walkTuning },
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
  stage.classList.toggle("stage-roof", ["roof", "roof2", "roof3", "roof4", "roof5", "roof6"].includes(stageName));
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
  return sceneCharacterTunings[currentSceneId]?.[characterId] ?? stageCharacterTunings[currentStageName]?.[characterId] ?? characterTunings[characterId] ?? characterTunings.bina;
}

function editableStageName() {
  return debugCharacterStage?.value ?? currentStageName;
}

function editableWalkStageName() {
  return currentStageName;
}

function editableCharacterTuning(characterId) {
  if (sceneCharacterTunings[currentSceneId]?.[characterId]) {
    return sceneCharacterTunings[currentSceneId][characterId];
  }

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
  if (scene.actors && scene.actors.length === 0) {
    return [];
  }

  if (scene.actors?.length) {
    return scene.actors;
  }

  if (scene.stage === "alien") {
    return ["bina", "starshipOpen", "pyong"];
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
    const scaleX = values.stageScaleX / 100;
    const scaleY = values.stageScaleY / 100;
    const shouldFlip = actorId === "pyong" && currentStageName === "alien";
    const directionX = shouldFlip ? -1 : 1;

    actor.className = "stage-actor";
    actor.src = character.sprite;
    actor.alt = "";
    actor.setAttribute("aria-hidden", "true");
    actor.style.left = `${values.stageX}%`;
    actor.style.top = `${values.stageY}%`;
    actor.style.width = `${values.stageSize}%`;
    actor.style.transform = `translate(-50%, -50%) scale(${scaleX * directionX}, ${scaleY})`;
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
  triggerSceneShake(scene);

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

  const isNarration = ["나레이션", "프롤로그", "1장"].includes(scene.speaker);
  const isCenteredText = isNarration;
  choices.replaceChildren();
  narrationChoices.replaceChildren();
  narrationPanel.classList.toggle("narration-panel-hidden", !isCenteredText);
  narrationText.textContent = isCenteredText ? scene.text : "";
  hud.classList.toggle("hud-hidden", isCenteredText);

  speaker.textContent = isCenteredText ? "" : scene.speaker;
  speaker.hidden = isCenteredText;
  dialogue.textContent = isCenteredText ? "" : scene.text;

  renderStageActors(actorIdsForScene(scene));
  stageCharacter.hidden = true;
  stageCharacter.classList.remove("stage-character-visible");
  stageCharacterSheet.hidden = true;
  stageCharacterSheet.classList.remove("stage-character-sheet-visible");
  renderCharacter(scene.character, { renderStageSprite: false });
  advancePrompt.classList.toggle(
    "advance-prompt-hidden",
    sceneChoices.length > 0 || !scene.next
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

function stopCutscene() {
  isCutscenePlaying = false;
  cutsceneVideo.pause();
  cutsceneVideo.onended = null;
  cutsceneVideo.onerror = null;
  cutsceneVideo.removeAttribute("src");
  cutsceneVideo.load();
  cutscene.classList.remove("cutscene-active");
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

function triggerSceneShake(scene) {
  if (!scene.shake) {
    stage.classList.remove("stage-shake");
    return;
  }

  stage.classList.remove("stage-shake");
  window.setTimeout(() => {
    stage.classList.add("stage-shake");
  }, 0);
  window.setTimeout(() => {
    stage.classList.remove("stage-shake");
  }, scene.shake.duration ?? 1000);
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
  const hasSceneTuning = Boolean(sceneCharacterTunings[currentSceneId]?.[characterId]);
  const tuningName = hasSceneTuning ? currentSceneId : editableStageName();

  return [
    `/* ${tuningName} / ${characterId} */`,
    `${tuningName}.${characterId}: {`,
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
  stageJumpTabs.classList.add("stage-jump-tabs-visible");
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

  if (key === "s") {
    event.preventDefault();
    isUiHidden = !isUiHidden;
    applyUiVisibility();
    return;
  }

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

function jumpToScene(sceneId) {
  if (!story.scenes[sceneId]) {
    return;
  }

  hasStarted = true;
  canStart = true;
  stopCutscene();
  stopWalkMode();
  heldKeys.clear();
  keyPressOrder.clear();
  interactionLockedUntil = 0;
  titleScreen.classList.add("title-screen-hidden");
  encounterWipe.classList.remove("encounter-wipe-active", "encounter-wipe-exit");
  renderScene(sceneId);
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

stageJumpTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-jump-scene]");
  if (!button) {
    return;
  }

  event.preventDefault();
  jumpToScene(button.dataset.jumpScene);
});

dialogue.addEventListener("click", advanceScene);
advancePrompt.addEventListener("click", advanceScene);
narrationPanel.addEventListener("click", advanceScene);

setupDebugPanel();
setupDraggablePanel(debugPanel);
buildEncounterWipe();
renderScene(currentSceneId);
