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
const dialogueActors = document.querySelector("#dialogueActors");
const stageCharacter = document.querySelector("#stageCharacter");
const stageCharacterSheet = document.querySelector("#stageCharacterSheet");
const overheadPrompt = document.querySelector("#overheadPrompt");
const narrationPanel = document.querySelector("#narrationPanel");
const narrationText = document.querySelector("#narrationText");
const narrationChoices = document.querySelector("#narrationChoices");
const narrationPrompt = document.querySelector(".narration-prompt");
const debugPanel = document.querySelector("#debugPanel");
const debugPanelTab = document.querySelector("#debugPanelTab");
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
const debugAreasVisible = document.querySelector("#debugAreasVisible");
const addInteractionBlock = document.querySelector("#addInteractionBlock");
const removeInteractionBlock = document.querySelector("#removeInteractionBlock");
const debugBlockSelect = document.querySelector("#debugBlockSelect");
const debugBlockX = document.querySelector("#debugBlockX");
const debugBlockY = document.querySelector("#debugBlockY");
const debugBlockWidth = document.querySelector("#debugBlockWidth");
const debugBlockHeight = document.querySelector("#debugBlockHeight");
const debugBlockText = document.querySelector("#debugBlockText");
const debugBlockNext = document.querySelector("#debugBlockNext");
const speaker = document.querySelector("#speaker");
const dialogue = document.querySelector("#dialogue");
const choices = document.querySelector("#choices");
const advancePrompt = document.querySelector("#advancePrompt");
const advancePromptFrames = document.querySelectorAll(".advance-prompt-frame");
const saveControls = document.querySelector("#saveControls");
const saveModal = document.querySelector("#saveModal");
const saveModalTitle = document.querySelector("#saveModalTitle");
const saveModalClose = document.querySelector("#saveModalClose");
const saveSlots = document.querySelector("#saveSlots");
const savePages = document.querySelector("#savePages");
const autoModeButton = document.querySelector("#autoModeButton");
const schedulePanel = document.querySelector("#schedulePanel");
const scheduleTitle = document.querySelector("#scheduleTitle");
const scheduleSubtitle = document.querySelector("#scheduleSubtitle");
const scheduleStats = document.querySelector("#scheduleStats");
const scheduleBody = document.querySelector("#scheduleBody");
const scheduleLog = document.querySelector("#scheduleLog");
const scheduleClose = document.querySelector("#scheduleClose");
const scheduleMiniHud = document.querySelector("#scheduleMiniHud");
const miniDay = document.querySelector("#miniDay");
const miniTimeSlot = document.querySelector("#miniTimeSlot");
const miniMoney = document.querySelector("#miniMoney");
const miniFatigue = document.querySelector("#miniFatigue");
const scheduleStatusButton = document.querySelector("#scheduleStatusButton");

let currentSceneId = story.start;
const sceneHistory = [];
let typingTimer = null;
let typingTarget = null;
let typingFullText = "";
let typingComplete = null;
let saveMode = "save";
let savePage = 0;
let isAutoMode = false;
let autoAdvanceTimer = null;
let selectedDebugBlockIndex = 0;
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
let isScheduleMode = false;
let gameState = cloneScheduleState();
let currentScheduleLocationId = "room";
const heldKeys = new Set();
const keyPressOrder = new Map();
let keyPressCounter = 0;

const wipeColumns = 16;
const wipeRows = 9;
const textTypeInterval = 37;
const autoAdvanceDelay = 700;
const saveSlotCount = 18;
const saveSlotsPerPage = 6;
const saveKeyPrefix = "dankanbang-orion-save-";
const quickSaveKey = "dankanbang-orion-quick-save";

function applyUiVisibility() {
  document.body.classList.toggle("ui-hidden-mode", isUiHidden);
}

function clonePlainObject(value) {
  return JSON.parse(JSON.stringify(value));
}

function cloneScheduleState() {
  return clonePlainObject(scheduleData.initialState);
}

function normalizeScheduleState(state) {
  return {
    ...cloneScheduleState(),
    ...clonePlainObject(state ?? {}),
    parts: {
      ...scheduleData.initialState.parts,
      ...(state?.parts ?? {})
    },
    exploration: {
      ...scheduleData.initialState.exploration,
      ...(state?.exploration ?? {})
    },
    purchasedParts: {
      ...scheduleData.initialState.purchasedParts,
      ...(state?.purchasedParts ?? {})
    },
    flags: {
      ...scheduleData.initialState.flags,
      ...(state?.flags ?? {})
    }
  };
}

function timeSlotLabel(timeSlot = gameState.timeSlot) {
  return scheduleData.timeSlots.find((slot) => slot.id === timeSlot)?.label ?? timeSlot;
}

function clearAutoAdvance() {
  if (autoAdvanceTimer) {
    window.clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }
}

function setAutoMode(enabled) {
  isAutoMode = enabled;
  autoModeButton.classList.toggle("save-control-active", isAutoMode);
  if (!isAutoMode) {
    clearAutoAdvance();
  }
}

const characters = {
  bina: {
    portrait: "./assets/images/characters/bina-portrait.png",
    sprite: "./assets/images/characters/bina-sprite.png",
    dialogueSprite: "./assets/images/characters/bina-portrait.png",
    walk: {
      sideSheet: "./assets/images/characters/bina-walk-side-1.png",
      upSheet: "./assets/images/characters/bina-walk-up-1.png",
      downSheet: "./assets/images/characters/bina-walk-down-1.png"
    }
  },
  pyong: {
    portrait: "./assets/images/characters/pyong-portrait.png",
    sprite: "./assets/images/characters/pyong-sprite.png",
    dialogueSprite: "./assets/images/characters/pyong-portrait.png"
  },
  cheolsu: {
    portrait: "./assets/images/characters/kim-portrait.png",
    sprite: "./assets/images/characters/kim-portrait.png",
    dialogueSprite: "./assets/images/characters/kim-portrait.png"
  },
  starship: {
    sprite: "./assets/images/starship-1.png"
  },
  starshipCrash: {
    sprite: "./assets/images/starship-2.png"
  },
  starshipOpen: {
    sprite: "./assets/images/starship-3.png"
  },
  cupramuen: {
    sprite: "./assets/images/cupramuen.png"
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

const scenePrefixImageDefaults = {
  chapter1_: {
    bina: { sprite: "./assets/images/characters/bina-sprite-2.png" }
  }
};

const sceneBackgrounds = {
  room: "./assets/images/scene-room.png",
  roomMorning: "./assets/images/scene-room-0.png",
  roomAfternoon: "./assets/images/scene-room-00.png",
  roomEvening: "./assets/images/scene-room-000.png",
  room2: "./assets/images/scene-room-2.png",
  room3: "./assets/images/scene-room-3.png",
  room4: "./assets/images/scene-room-4.png",
  room5: "./assets/images/scene-room-5.png",
  room6: "./assets/images/scene-room-6.png",
  room7: "./assets/images/scene-room-7.png",
  roof: "./assets/images/scene-roof.png",
  roof2: "./assets/images/scene-roof2.png",
  roof3: "./assets/images/scene-roof3.png",
  roof4: "./assets/images/scene-roof4.png",
  roof5: "./assets/images/scene-roof5.png",
  roof6: "./assets/images/scene-roof6.png",
  aptMorning: "./assets/images/scene-apt-1.png",
  aptAfternoon: "./assets/images/scene-apt-2.png",
  aptNight: "./assets/images/scene-apt-3.png",
  withU: "./assets/images/scene-withU.png",
  sanMorning: "./assets/images/scene-san-1.png",
  sanAfternoon: "./assets/images/scene-san-3.png",
  sanNight: "./assets/images/scene-san-2.png",
  crash: "./assets/images/scene-roof2.png",
  alien: "./assets/images/scene-roof2.png"
};

const dialogueCharacterIds = ["bina", "pyong", "cheolsu"];
const dialogueActorPositions = {
  bina: {
    activeX: 71,
    inactiveX: 72,
    y: 70,
    size: 24.7,
    focusScale: 2,
    mutedScale: 1.66,
    flipX: false
  },
  pyong: {
    activeX: 28,
    inactiveX: 29.5,
    y: 70,
    size: 22.8,
    focusScale: 2,
    mutedScale: 1.62,
    flipX: true
  },
  cheolsu: {
    activeX: 75,
    inactiveX: 85,
    y: 70,
    size: 23.75,
    focusScale: 1.08,
    mutedScale: 0.95,
    flipX: false
  }
};

const stageCameraDefaults = {
  room: { x: 0, y: 0, zoom: 1, duration: 650 },
  roomMorning: { x: 0, y: 0, zoom: 1, duration: 650 },
  roomAfternoon: { x: 0, y: 0, zoom: 1, duration: 650 },
  roomEvening: { x: 0, y: 0, zoom: 1, duration: 650 },
  room2: { x: 0, y: 0, zoom: 1, duration: 650 },
  room3: { x: 0, y: 0, zoom: 1, duration: 650 },
  room4: { x: 0, y: 0, zoom: 1, duration: 650 },
  room5: { x: 0, y: 0, zoom: 1, duration: 650 },
  room6: { x: 0, y: 0, zoom: 1, duration: 650 },
  room7: { x: 0, y: 0, zoom: 1, duration: 650 },
  roof: { x: 0, y: -12, zoom: 1, duration: 650 },
  roof2: { x: 0, y: -12, zoom: 1, duration: 650 },
  roof3: { x: 0, y: -12, zoom: 1, duration: 650 },
  roof4: { x: 0, y: -12, zoom: 1, duration: 650 },
  roof5: { x: 0, y: -12, zoom: 1, duration: 650 },
  roof6: { x: 0, y: -12, zoom: 1, duration: 650 },
  aptMorning: { x: 0, y: 0, zoom: 1, duration: 650 },
  aptAfternoon: { x: 0, y: 0, zoom: 1, duration: 650 },
  aptNight: { x: 0, y: 0, zoom: 1, duration: 650 },
  withU: { x: 0, y: 0, zoom: 1, duration: 650 },
  sanMorning: { x: 0, y: 0, zoom: 1, duration: 650 },
  sanAfternoon: { x: 0, y: 0, zoom: 1, duration: 650 },
  sanNight: { x: 0, y: 0, zoom: 1, duration: 650 },
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
  dialogueOpacity: 1,
  dialogueWidth: 100,
  dialogueHeight: 0,
  dialoguePadding: 16,
  dialogueX: 50,
  dialogueY: 4,
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
  },
  cupramuen: {
    stageX: 48,
    stageY: 66,
    stageSize: 8,
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
  chapter1_fun: {
    pyong: {
      stageX: 49,
      stageY: 37.9,
      stageSize: 13.5,
      stageScaleX: 95,
      stageScaleY: 103,
      portraitX: 50,
      portraitY: 11,
      portraitZoom: 170
    },
    bina: {
      stageX: 39,
      stageY: 53.5,
      stageSize: 15.3,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    }
  },
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
  crash_after: {
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
  crash_bina_cough: {
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
  crash_capsule_size: {
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
  crash_capsule_glow: {
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

const scenePrefixCharacterTunings = {
  chapter1_: {
    bina: {
      stageX: 39,
      stageY: 53.5,
      stageSize: 15.3,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    },
    pyong: {
      stageX: 58,
      stageY: 54.3,
      stageSize: 13.5,
      stageScaleX: 95,
      stageScaleY: 103,
      portraitX: 50,
      portraitY: 11,
      portraitZoom: 170
    },
    cupramuen: {
      stageX: 54,
      stageY: 58.2,
      stageSize: 4,
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
  roomMorning: { ...walkTuning },
  roomAfternoon: { ...walkTuning },
  roomEvening: { ...walkTuning },
  roof: { ...walkTuning },
  roof2: { ...walkTuning },
  roof3: { ...walkTuning },
  roof4: { ...walkTuning },
  roof5: { ...walkTuning },
  roof6: { ...walkTuning },
  aptMorning: { ...walkTuning },
  aptAfternoon: { ...walkTuning },
  aptNight: { ...walkTuning },
  withU: { ...walkTuning },
  sanMorning: { ...walkTuning },
  sanAfternoon: { ...walkTuning },
  sanNight: { ...walkTuning },
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
  const scenePrefix = Object.keys(scenePrefixCharacterTunings).find((prefix) => currentSceneId.startsWith(prefix));
  return sceneCharacterTunings[currentSceneId]?.[characterId] ?? progressionCharacterTuning(characterId) ?? scenePrefixCharacterTunings[scenePrefix]?.[characterId] ?? stageCharacterTunings[currentStageName]?.[characterId] ?? characterTunings[characterId] ?? characterTunings.bina;
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

  const scenePrefix = Object.keys(scenePrefixCharacterTunings).find((prefix) => currentSceneId.startsWith(prefix));
  if (scenePrefixCharacterTunings[scenePrefix]?.[characterId]) {
    return scenePrefixCharacterTunings[scenePrefix][characterId];
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
  const scenePrefix = Object.keys(scenePrefixImageDefaults).find((prefix) => sceneId.startsWith(prefix));
  return {
    ...(characters[characterId] ?? {}),
    ...(stageImageDefaults[stageName]?.[characterId] ?? {}),
    ...(scenePrefixImageDefaults[scenePrefix]?.[characterId] ?? {}),
    ...sceneImagesFor(characterId, sceneId)
  };
}

function sceneOrderIndex(sceneId = currentSceneId) {
  return Object.keys(story.scenes).indexOf(sceneId);
}

function isAtOrAfterScene(sceneId) {
  const currentIndex = sceneOrderIndex();
  const targetIndex = sceneOrderIndex(sceneId);
  return currentIndex >= 0 && targetIndex >= 0 && currentIndex >= targetIndex;
}

function progressionCharacterTuning(characterId) {
  if (!currentSceneId.startsWith("chapter1_")) {
    return null;
  }

  if (characterId === "bina" && isAtOrAfterScene("chapter1_keyboard_laugh")) {
    return {
      stageX: 69,
      stageY: 66.8,
      stageSize: 15.3,
      stageScaleX: 100,
      stageScaleY: 100,
      portraitX: 48,
      portraitY: 23,
      portraitZoom: 170
    };
  }

  if (characterId === "pyong" && isAtOrAfterScene("chapter1_fun")) {
    return {
      stageX: 49,
      stageY: 37.9,
      stageSize: 13.5,
      stageScaleX: 95,
      stageScaleY: 103,
      portraitX: 50,
      portraitY: 11,
      portraitZoom: 170
    };
  }

  return null;
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

function isChapter1CupRamenVisible() {
  if (!currentSceneId.startsWith("chapter1_")) {
    return false;
  }

  const sceneOrder = Object.keys(story.scenes);
  const currentIndex = sceneOrder.indexOf(currentSceneId);
  return (
    currentIndex >= sceneOrder.indexOf("chapter1_ramen_bag") &&
    currentIndex < sceneOrder.indexOf("chapter1_keyboard_laugh")
  );
}

function actorEntranceAnimation(actorId) {
  if (currentSceneId !== "chapter1_fun" || actorId !== "pyong") {
    return null;
  }

  return {
    fromX: 58,
    fromY: 54.3,
    duration: 1500
  };
}

function shouldFlipStageActor(actorId) {
  if (actorId === "pyong" && currentStageName === "alien") {
    return true;
  }

  if (actorId === "bina" && currentSceneId.startsWith("chapter1_")) {
    return isAtOrAfterScene("chapter1_keyboard_laugh");
  }

  return false;
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

  if (scene.stage?.startsWith("room") && currentSceneId.startsWith("chapter1_")) {
    return isChapter1CupRamenVisible() ? ["bina", "pyong", "cupramuen"] : ["bina", "pyong"];
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
    const shouldFlip = shouldFlipStageActor(actorId);
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

    const entrance = actorEntranceAnimation(actorId);
    if (entrance) {
      actor.animate(
        [
          {
            left: `${entrance.fromX}%`,
            top: `${entrance.fromY}%`,
            transform: `translate(-50%, -50%) scale(${scaleX * directionX}, ${scaleY})`
          },
          {
            left: `${(entrance.fromX + values.stageX) / 2}%`,
            top: `${Math.min(entrance.fromY, values.stageY) - 7}%`,
            transform: `translate(-50%, -50%) scale(${scaleX * directionX}, ${scaleY})`
          },
          {
            left: `${values.stageX}%`,
            top: `${values.stageY}%`,
            transform: `translate(-50%, -50%) scale(${scaleX * directionX}, ${scaleY})`
          }
        ],
        {
          duration: entrance.duration,
          easing: "cubic-bezier(0.22, 0.9, 0.24, 1)",
          fill: "both"
        }
      );
    }
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
  const renderPortrait = options.renderPortrait ?? false;

  if (!characterId) {
    return;
  }

  if (hasCharacter) {
    applyCharacterTuning(characterId);
    currentCharacterId = characterId;
  }

  stageCharacter.style.transform = "";
  stageCharacterSheet.classList.remove("stage-character-sheet-visible");
  hud.classList.toggle("hud-no-portrait", true);
  portraitFrame.classList.add("portrait-frame-hidden");
  portrait.classList.remove("portrait-visible");
  portrait.hidden = true;
  portrait.removeAttribute("src");

  if (renderPortrait) {
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
  }

  if (renderStageSprite) {
    setImage(stageCharacter, character?.sprite, "stage-character-visible");
  }
}

function clearTyping() {
  if (typingTimer) {
    window.clearInterval(typingTimer);
    typingTimer = null;
  }

  document.body.classList.remove("text-typing");
  typingTarget = null;
  typingFullText = "";
  typingComplete = null;
}

function isTypingText() {
  return Boolean(typingTimer);
}

function finishTyping() {
  if (!typingTarget) {
    return false;
  }

  const complete = typingComplete;
  if (typingTimer) {
    window.clearInterval(typingTimer);
    typingTimer = null;
  }

  document.body.classList.remove("text-typing");
  typingTarget.textContent = typingFullText;
  typingTarget = null;
  typingFullText = "";
  typingComplete = null;
  complete?.();
  return true;
}

function typeText(target, text, onComplete) {
  clearTyping();
  typingTarget = target;
  typingFullText = text ?? "";
  typingComplete = onComplete;
  target.textContent = "";
  document.body.classList.add("text-typing");

  if (!typingFullText) {
    finishTyping();
    return;
  }

  const characters = Array.from(typingFullText);
  const interval = textTypeInterval;
  let visibleLength = 0;

  typingTimer = window.setInterval(() => {
    visibleLength += 1;
    target.textContent = characters.slice(0, visibleLength).join("");

    if (visibleLength >= characters.length) {
      finishTyping();
    }
  }, interval);
}

function hideNarrationPanel() {
  clearTyping();
  narrationPanel.classList.add("narration-panel-hidden");
  narrationText.textContent = "";
  narrationChoices.replaceChildren();
  narrationPrompt?.classList.add("narration-prompt-hidden");
  hideDialogueMode();
}

function speakerCharacterId(value) {
  const normalized = String(value ?? "").toLowerCase();
  const map = {
    bina: "bina",
    "이빛나": "bina",
    pyong: "pyong",
    "뿅뿅": "pyong",
    kim: "cheolsu",
    cheolsu: "cheolsu",
    "김철수": "cheolsu"
  };
  return map[normalized] ?? null;
}

function speakerDisplayName(value) {
  const normalized = String(value ?? "").toLowerCase();
  const map = {
    bina: "이빛나",
    pyong: "뿅뿅",
    kim: "김철수",
    cheolsu: "김철수",
    narration: "나레이션"
  };
  return map[normalized] ?? value;
}

function isNarrationScene(scene) {
  return scene.type === "narration" || ["나레이션", "프롤로그", "1장", "narration"].includes(scene.speaker);
}

function dialogueCharactersForScene(scene, isNarration) {
  if (!shouldShowDialogueStanding(scene) || isNarration || scene.hideDialogueActors) {
    return [];
  }

  if (Array.isArray(scene.visibleCharacters)) {
    return scene.visibleCharacters.filter((id) => dialogueCharacterIds.includes(id));
  }

  return actorIdsForScene(scene).filter((id) => dialogueCharacterIds.includes(id));
}

function shouldShowDialogueStanding(scene) {
  if (isNarrationScene(scene) || scene.hideDialogueActors) {
    return false;
  }

  if (Array.isArray(scene.visibleCharacters)) {
    return scene.type === "dialogue" && scene.visibleCharacters.length >= 2;
  }

  return actorIdsForScene(scene).filter((id) => dialogueCharacterIds.includes(id)).length >= 2;
}

function focusCharacterForScene(scene, isNarration) {
  if (isNarration) {
    return null;
  }
  return scene.focusCharacter ?? speakerCharacterId(scene.speaker) ?? scene.character ?? null;
}

function renderDialogueActors(scene, isNarration) {
  const visibleCharacters = dialogueCharactersForScene(scene, isNarration);
  const focusCharacter = focusCharacterForScene(scene, isNarration);

  dialogueActors.replaceChildren();
  dialogueActors.classList.toggle("dialogue-actors-hidden", visibleCharacters.length === 0);
  stage.classList.toggle("stage-dialogue-mode", visibleCharacters.length > 0);
  stage.classList.toggle("stage-dialogue-standing-mode", visibleCharacters.length > 0);

  visibleCharacters.forEach((characterId) => {
    const character = characterImagesFor(characterId);
    const position = dialogueActorPositions[characterId];
    if (!character?.dialogueSprite || !position) {
      return;
    }

    const isFocused = focusCharacter === characterId;
    const actor = document.createElement("img");
    actor.className = [
      "dialogue-actor",
      `dialogue-actor-${characterId}`,
      isFocused ? "dialogue-actor-focused" : "dialogue-actor-muted",
      isNarration ? "dialogue-actor-narration" : ""
    ].filter(Boolean).join(" ");
    actor.src = character.dialogueSprite;
    actor.alt = "";
    actor.setAttribute("aria-hidden", "true");
    actor.style.left = `${isFocused ? position.activeX : position.inactiveX}%`;
    actor.style.top = `${position.y}%`;
    actor.style.width = `${position.size}%`;
    actor.style.setProperty("--dialogue-actor-scale", isFocused ? position.focusScale : position.mutedScale);
    actor.style.setProperty("--dialogue-actor-flip", position.flipX ? -1 : 1);
    dialogueActors.append(actor);
  });
}

function hideDialogueMode() {
  dialogueActors.replaceChildren();
  dialogueActors.classList.add("dialogue-actors-hidden");
  stage.classList.remove("stage-dialogue-mode");
  stage.classList.remove("stage-dialogue-standing-mode");
}

function showSceneChoices(sceneChoices, isCenteredText) {
  const choiceContainer = isCenteredText ? narrationChoices : choices;
  sceneChoices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = choice.text;
    button.addEventListener("click", () => {
      applyStoryEffects(choice.effects);
      renderScene(choice.next);
    });
    choiceContainer.append(button);
  });
}

function applyStoryEffects(effects = {}) {
  Object.entries(effects).forEach(([key, value]) => {
    if (key === "flag") {
      gameState.flags[value] = true;
      return;
    }

    if (key === "flags") {
      value.forEach((flag) => {
        gameState.flags[flag] = true;
      });
      return;
    }

    if (key === "routeFlag") {
      gameState.routeFlag = value;
      return;
    }

    if (key in gameState && typeof gameState[key] === "number") {
      const nextValue = gameState[key] + value;
      gameState[key] = ["money", "fatigue", "communicationProgress", "spaceshipProgress", "badEndingFlag"].includes(key)
        ? Math.max(0, nextValue)
        : nextValue;
      return;
    }

    gameState.flags[key] = value;
  });
}

function revealSceneControls(sceneChoices, scene, isCenteredText) {
  showSceneChoices(sceneChoices, isCenteredText);
  narrationPrompt?.classList.toggle(
    "narration-prompt-hidden",
    !isCenteredText || sceneChoices.length > 0 || !scene.next
  );
  advancePrompt.classList.toggle(
    "advance-prompt-hidden",
    isCenteredText || sceneChoices.length > 0 || !scene.next
  );
  scheduleAutoAdvance(sceneChoices, scene);
}

function scheduleAutoAdvance(sceneChoices, scene) {
  clearAutoAdvance();

  if (!isAutoMode || sceneChoices.length > 0 || !scene.next || walkMode || isCutscenePlaying) {
    return;
  }

  autoAdvanceTimer = window.setTimeout(() => {
    autoAdvanceTimer = null;
    advanceScene();
  }, autoAdvanceDelay);
}

function scheduleStatItems() {
  return [
    ["일차", `${gameState.day}일차 ${timeSlotLabel()}`],
    ["돈", `${gameState.money.toLocaleString("ko-KR")}원`],
    ["피로도", gameState.fatigue],
    ["이빛나 의지", gameState.binaWill],
    ["뿅뿅 신뢰도", gameState.pyongTrust],
    ["김철수 신뢰도", gameState.kimTrust],
    ["교신장치", `${gameState.communicationProgress}%`],
    ["우주선", `${gameState.spaceshipProgress}%`],
    ["배드 플래그", gameState.badEndingFlag],
    ["특수 부품", specialPartsLabel()],
    ["일반 부품", generalPartsLabel()]
  ];
}

function specialPartsLabel() {
  const labels = [];
  if (gameState.parts.starlightMetal) labels.push("별빛 금속");
  if (gameState.parts.galaxyJellyFilm) labels.push("반사 필름");
  if (gameState.parts.luminousStarflower) labels.push("야광별꽃");
  return labels.length ? labels.join(", ") : "없음";
}

function generalPartsLabel() {
  const parts = gameState.purchasedParts;
  const total = parts.electronics + parts.cable + parts.battery + parts.tools;
  return total > 0 ? `${total}개` : "없음";
}

function renderScheduleStats() {
  scheduleStats.replaceChildren();
  scheduleStatItems().forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "schedule-stat";
    item.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    scheduleStats.append(item);
  });
}

function refreshScheduleMiniHud() {
  miniDay.textContent = `${gameState.day}일차`;
  miniTimeSlot.textContent = timeSlotLabel();
  miniMoney.textContent = `${gameState.money.toLocaleString("ko-KR")}원`;
  miniFatigue.textContent = `피로 ${gameState.fatigue}`;
}

function setScheduleLog(message = "") {
  scheduleLog.textContent = message;
}

function setScheduleButtons(buttons) {
  scheduleBody.replaceChildren();
  buttons.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.text;
    button.disabled = Boolean(item.disabled);
    button.addEventListener("click", item.onClick);
    scheduleBody.append(button);
  });
}

function refreshSchedulePanel(subtitle, logMessage = "") {
  scheduleTitle.textContent = `${gameState.day}일차 ${timeSlotLabel()}`;
  scheduleSubtitle.textContent = subtitle;
  renderScheduleStats();
  setScheduleLog(logMessage);
  refreshScheduleMiniHud();
}

function scheduleLocation(locationId = currentScheduleLocationId) {
  return scheduleData.locations[locationId] ?? scheduleData.locations.room;
}

function scheduleWalkScene(locationId) {
  const location = scheduleLocation(locationId);
  const stageName = location.stagesByTime?.[gameState.timeSlot] ?? location.stage;
  return {
    character: "bina",
    stage: stageName,
    startX: location.startX,
    startY: location.startY,
    interactions: location.interactions.map((interaction) => ({
      ...interaction,
      text: interaction.prompt
    })),
    actors: location.actors ?? [],
    scheduleLocationId: locationId
  };
}

function startScheduleMode(logMessage = "2일차부터는 방에서 하루를 시작한다.") {
  if (gameState.day < 2) {
    gameState.day = 2;
    gameState.timeSlot = "morning";
    currentScheduleLocationId = "room";
  }
  startScheduleFieldMode(currentScheduleLocationId, scheduleOpeningMessage(logMessage));
}

function scheduleOpeningMessage(baseMessage) {
  const routeMessages = {
    stable_cohabitation: "뿅뿅은 어색하지만 자연스럽게 옥탑방 안에서 아침을 맞았다.",
    cautious_cohabitation: "빛나는 뿅뿅을 아직 경계하고 있다. 뿅뿅은 방 안 물건을 만지려다 자주 제지당한다.",
    distrust_route: "뿅뿅은 빛나를 경계한다. 초반에는 옥상 쪽에 머무르려 하고, 신뢰를 회복할 계기가 필요하다.",
    forced_reunion: "아침이 되자 뿅뿅은 옥탑방 문 앞에 쓰러지듯 기대 있었다. 결국 다시 마주칠 수밖에 없었다."
  };
  return [baseMessage, routeMessages[gameState.routeFlag]].filter(Boolean).join("\n\n");
}

function startScheduleFieldMode(locationId = currentScheduleLocationId, logMessage = "") {
  isScheduleMode = true;
  currentScheduleLocationId = gameState.timeSlot === "night" ? "room" : locationId;
  stopWalkMode();
  clearTyping();
  clearAutoAdvance();
  hideNarrationPanel();
  hud.classList.add("hud-hidden");
  schedulePanel.classList.add("schedule-panel-hidden");
  scheduleMiniHud.classList.remove("schedule-mini-hud-hidden");
  refreshScheduleMiniHud();
  startWalkMode(scheduleWalkScene(currentScheduleLocationId));
  if (logMessage) {
    setScheduleLog(logMessage);
  }
}

function renderScheduleActionChoices(logMessage = "이번 시간대에 할 행동을 고른다.") {
  refreshSchedulePanel("이번 시간대에 할 행동을 선택한다.", logMessage);
  setScheduleButtons([
    { text: "미니게임", onClick: renderMinigameChoices },
    { text: "알바", onClick: renderPartTimeResultChoices },
    { text: "탐색", onClick: renderExploreChoices },
    { text: "휴식", onClick: renderRestResultChoices }
  ]);
}

function renderMinigameChoices() {
  const available = scheduleData.minigames.filter((minigame) => gameState.day >= minigame.unlockDay);
  refreshSchedulePanel("어떤 미니게임을 할지 선택한다.", "현재는 임시 판정 버튼으로 결과를 고른다.");
  setScheduleButtons([
    ...available.map((minigame) => ({
      text: minigame.label,
      onClick: () => renderGradeChoices(minigame.label, (grade) => applyMinigameResult(minigame, grade))
    })),
    { text: "돌아가기", onClick: () => renderScheduleActionChoices("행동 선택으로 돌아왔다.") }
  ]);
}

function renderPartTimeResultChoices() {
  renderGradeChoices("편의점 바코드 알바", applyPartTimeResult);
}

function renderRestResultChoices() {
  renderGradeChoices("휴식", applyRestResult);
}

function renderExploreChoices() {
  const sites = Object.entries(scheduleData.exploreSites);
  refreshSchedulePanel("탐색할 장소를 선택한다.", "각 장소는 3단계 탐색을 완료하면 진엔딩 전용 부품을 얻는다.");
  setScheduleButtons([
    ...sites.map(([siteId, site]) => {
      const progress = gameState.exploration[site.progressKey];
      const complete = progress >= site.steps.length;
      return {
        text: `${site.label} (${Math.min(progress, site.steps.length)}/${site.steps.length})${complete ? " 완료" : ""}`,
        onClick: () => renderGradeChoices(site.label, (grade) => applyExploreResult(siteId, grade)),
        disabled: complete
      };
    }),
    { text: "돌아가기", onClick: () => renderScheduleActionChoices("행동 선택으로 돌아왔다.") }
  ]);
}

function renderGradeChoices(title, onResult) {
  schedulePanel.classList.remove("schedule-panel-hidden");
  refreshSchedulePanel(`${title} 결과를 선택한다.`, "실제 미니게임이 들어오기 전까지는 Great / Good / Miss 버튼으로 결과를 테스트한다.");
  setScheduleButtons(
    Object.entries(scheduleData.resultGrades).map(([grade, info]) => ({
      text: info.label,
      onClick: () => onResult(grade)
    }))
  );
}

function showScheduleMessage(title, message, buttons = []) {
  schedulePanel.classList.remove("schedule-panel-hidden");
  scheduleTitle.textContent = title;
  scheduleSubtitle.textContent = `${gameState.day}일차 ${timeSlotLabel()}`;
  renderScheduleStats();
  setScheduleLog(message);
  setScheduleButtons(buttons.length ? buttons : [
    { text: "닫기", onClick: closeSchedulePanel }
  ]);
}

function closeSchedulePanel() {
  schedulePanel.classList.add("schedule-panel-hidden");
  interactionLockedUntil = performance.now() + 300;
}

function showScheduleStatus() {
  showScheduleMessage(
    "상태창",
    [
      `탐색 진행도`,
      `건물: ${gameState.exploration.building}/3`,
      `편의점: ${gameState.exploration.convenienceStore}/3`,
      `뒷동산: ${gameState.exploration.hill}/3`,
      ``,
      `특수 부품: ${specialPartsLabel()}`,
      `일반 부품: ${generalPartsLabel()}`
    ].join("\n")
  );
}

function showMoveMenu() {
  if (gameState.timeSlot === "night") {
    showScheduleMessage("밤", "밤이 깊었다. 오늘은 더 나가지 말고 침대에서 자자.");
    return;
  }

  const locations = [
    ["building", "건물 내부"],
    ["convenienceStore", "편의점"],
    ["hill", "뒷동산"],
    ["room", "방으로 돌아가기"]
  ];
  showScheduleMessage(
    "장소 이동",
    "이동 자체는 시간을 소모하지 않는다.",
    locations.map(([locationId, label]) => ({
      text: label,
      onClick: () => startScheduleFieldMode(locationId)
    }))
  );
}

function showActionConfirm(interaction) {
  const action = interaction.action;
  const label = interaction.label ?? "상호작용";

  if (!action) {
    showScheduleMessage(label, interaction.prompt ?? interaction.text ?? "");
    return;
  }

  if (action.type === "move") {
    if (action.locationId) {
      startScheduleFieldMode(action.locationId);
      return;
    }
    showMoveMenu();
    return;
  }

  if (gameState.timeSlot === "night" && action.type !== "rest") {
    showScheduleMessage(label, "밤이 깊었다. 지금은 다른 일을 하기보다 침대에서 자야 할 것 같다.");
    return;
  }

  if (action.type === "talk") {
    showScheduleMessage(label, interaction.prompt ?? interaction.text ?? "");
    return;
  }

  const startAction = () => {
    if (action.type === "minigame") {
      const minigame = scheduleData.minigames.find((item) => item.id === action.minigameId);
      if (!minigame || gameState.day < minigame.unlockDay) {
        showScheduleMessage(label, `${minigame?.label ?? "이 행동"}은 아직 준비되지 않았다.`);
        return;
      }
      renderGradeChoices(minigame.label, (grade) => applyMinigameResult(minigame, grade));
      return;
    }

    if (action.type === "partTime") {
      renderPartTimeResultChoices();
      return;
    }

    if (action.type === "explore") {
      const site = scheduleData.exploreSites[action.siteId];
      const progress = gameState.exploration[site.progressKey];
      if (progress >= site.steps.length) {
        showScheduleMessage(site.label, `${site.rewardLabel}은 이미 확보했다.`);
        return;
      }
      renderGradeChoices(site.label, (grade) => applyExploreResult(action.siteId, grade));
      return;
    }

    if (action.type === "rest") {
      if (gameState.timeSlot === "night") {
        renderSleepConfirm();
        return;
      }
      renderRestResultChoices();
    }
  };

  showScheduleMessage(
    label,
    gameState.timeSlot === "night" && action.type === "rest"
      ? "오늘 하루를 마치고 잠들까?"
      : interaction.prompt ?? "이 행동을 실행할까?",
    [
    { text: "시작한다", onClick: startAction },
    { text: "그만둔다", onClick: closeSchedulePanel }
    ]
  );
}

function gradeAmount(grade, great, good, miss) {
  return { great, good, miss }[grade] ?? miss;
}

function applyMinigameResult(minigame, grade) {
  const amount = gradeAmount(grade, 3, 2, 1);
  gameState[minigame.stat] += amount;
  gameState.communicationProgress = Math.min(100, gameState.communicationProgress + gradeAmount(grade, 4, 3, 2));
  if (grade === "miss") {
    gameState.fatigue += 1;
  }
  advanceScheduleTime(`${minigame.label}: ${scheduleData.resultGrades[grade].label}\n${amount}만큼 성장했다.`);
}

function applyPartTimeResult(grade) {
  const money = gradeAmount(grade, 12000, 8000, 5000);
  gameState.money += money;
  addPurchasedPart();
  gameState.spaceshipProgress = Math.min(100, gameState.spaceshipProgress + gradeAmount(grade, 2, 1, 1));
  if (grade === "miss") {
    gameState.fatigue += 1;
  }
  advanceScheduleTime(`편의점 알바: ${scheduleData.resultGrades[grade].label}\n${money.toLocaleString("ko-KR")}원을 벌었다. Miss여도 오늘의 몫은 받았다.`);
}

function addPurchasedPart() {
  const keys = ["electronics", "cable", "battery", "tools"];
  const target = keys.reduce((lowest, key) =>
    gameState.purchasedParts[key] < gameState.purchasedParts[lowest] ? key : lowest
  , keys[0]);
  gameState.purchasedParts[target] += 1;
}

function applyExploreResult(siteId, grade) {
  const site = scheduleData.exploreSites[siteId];
  const progress = gameState.exploration[site.progressKey];
  const stepText = site.steps[progress] ?? `${site.label} 탐색은 이미 충분히 진행했다.`;
  gameState.exploration[site.progressKey] = Math.min(site.steps.length, progress + 1);
  gameState.communicationProgress = Math.min(100, gameState.communicationProgress + gradeAmount(grade, 3, 2, 1));
  gameState.spaceshipProgress = Math.min(100, gameState.spaceshipProgress + gradeAmount(grade, 2, 1, 1));
  if (siteId === "hill") {
    gameState.kimTrust += gradeAmount(grade, 2, 1, 1);
  }
  if (grade === "miss") {
    gameState.fatigue += 1;
  }

  let message = `${site.label} 탐색: ${scheduleData.resultGrades[grade].label}\n${stepText}`;
  if (gameState.exploration[site.progressKey] >= site.steps.length && !gameState.parts[site.rewardKey]) {
    gameState.parts[site.rewardKey] = true;
    message += `\n${site.rewardLabel}을 획득했다.`;
  }

  advanceScheduleTime(message);
}

function applyRestResult(grade) {
  const recovery = gradeAmount(grade, 4, 3, 2);
  gameState.fatigue = Math.max(0, gameState.fatigue - recovery);
  gameState.badEndingFlag = Math.max(0, gameState.badEndingFlag - (grade === "great" ? 1 : 0));
  advanceScheduleTime(`휴식: ${scheduleData.resultGrades[grade].label}\n피로도가 ${recovery}만큼 줄었다.`);
}

function renderSleepConfirm() {
  showScheduleMessage("잠들기", "오늘은 여기까지. 침대에 누워 하루를 마무리한다.", [
    { text: "잔다", onClick: () => renderDailySettlement("빛나는 침대에 몸을 눕혔다.") },
    { text: "아직", onClick: closeSchedulePanel }
  ]);
}

function advanceScheduleTime(message) {
  const index = scheduleData.timeSlots.findIndex((slot) => slot.id === gameState.timeSlot);
  if (index < scheduleData.timeSlots.length - 1) {
    gameState.timeSlot = scheduleData.timeSlots[index + 1].id;
    const reachedNight = gameState.timeSlot === "night";
    const nextLocationId = reachedNight ? "room" : currentScheduleLocationId;
    currentScheduleLocationId = nextLocationId;
    showScheduleMessage("시간 경과", `${message}\n\n${timeSlotLabel()}으로 넘어갔다.`, [
      {
        text: "계속",
        onClick: () => startScheduleFieldMode(
          nextLocationId,
          reachedNight ? "밤이 깊었다. 방으로 돌아왔다. 침대에서 자야 다음 날로 넘어간다." : ""
        )
      }
    ]);
    return;
  }

  renderDailySettlement(message);
}

function renderDailySettlement(message) {
  if (gameState.fatigue >= 10) {
    gameState.badEndingFlag += 1;
  }

  refreshSchedulePanel(`${gameState.day}일차 정산`, `${message}\n\n하루가 끝났다. 피로도가 너무 높으면 배드엔딩 위험이 조금씩 쌓인다.`);
  scheduleTitle.textContent = `${gameState.day}일차 정산`;
  const isFinalDay = gameState.day >= 30;
  setScheduleButtons([
    {
      text: isFinalDay ? "엔딩 확인" : "다음 날로",
      onClick: () => {
        if (isFinalDay) {
          renderEndingResult();
          return;
        }
        gameState.day += 1;
        gameState.timeSlot = "morning";
        startScheduleFieldMode("room", `${gameState.day}일차 아침이 밝았다.`);
      }
    }
  ]);
}

function endingForState() {
  if (gameState.badEndingFlag >= 5) {
    return scheduleData.endings.find((ending) => ending.id === "bad");
  }
  return scheduleData.endings.find((ending) => ending.condition(gameState));
}

function renderEndingResult() {
  const ending = endingForState();
  refreshSchedulePanel(`엔딩: ${ending.title}`, "30일이 끝났다. 누적된 선택과 부품 상태에 따라 엔딩이 결정됐다.");
  scheduleTitle.textContent = `엔딩: ${ending.title}`;
  setScheduleButtons([
    { text: "2일차부터 다시", onClick: resetScheduleMode },
    { text: "처음부터 다시", onClick: () => jumpToScene(story.start) }
  ]);
  setScheduleLog(`도달 엔딩: ${ending.title}\n돈 ${gameState.money.toLocaleString("ko-KR")}원 / 교신장치 ${gameState.communicationProgress}% / 우주선 ${gameState.spaceshipProgress}%\n특수 부품: ${specialPartsLabel()}`);
}

function resetScheduleMode() {
  gameState = cloneScheduleState();
  gameState.day = 2;
  gameState.timeSlot = "morning";
  currentScheduleLocationId = "room";
  startScheduleFieldMode("room", "2일차 아침으로 돌아왔다.");
}

function renderScene(sceneId, options = {}) {
  stopWalkMode();
  clearTyping();
  clearAutoAdvance();
  hideDialogueMode();
  schedulePanel.classList.add("schedule-panel-hidden");
  scheduleMiniHud.classList.add("schedule-mini-hud-hidden");
  isScheduleMode = false;
  const scene = story.scenes[sceneId];
  const sceneChoices = scene.choices ?? [];
  if (options.trackHistory !== false && currentSceneId && currentSceneId !== sceneId && story.scenes[currentSceneId]) {
    sceneHistory.push(currentSceneId);
  }
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

  if (scene.mode === "schedule") {
    startScheduleMode(scene.text);
    return;
  }

  const isNarration = isNarrationScene(scene);
  const isCenteredText = isNarration;
  choices.replaceChildren();
  narrationChoices.replaceChildren();
  narrationPanel.classList.toggle("narration-panel-hidden", !isCenteredText);
  narrationPrompt?.classList.add("narration-prompt-hidden");
  narrationText.textContent = "";
  hud.classList.toggle("hud-hidden", isCenteredText);

  speaker.textContent = isCenteredText ? "" : speakerDisplayName(scene.speaker);
  speaker.hidden = isCenteredText;
  dialogue.textContent = "";

  renderStageActors(actorIdsForScene(scene));
  renderDialogueActors(scene, isNarration);
  stageCharacter.hidden = true;
  stageCharacter.classList.remove("stage-character-visible");
  stageCharacterSheet.hidden = true;
  stageCharacterSheet.classList.remove("stage-character-sheet-visible");
  renderCharacter(scene.character, { renderStageSprite: false });
  advancePrompt.classList.add("advance-prompt-hidden");
  typeText(isCenteredText ? narrationText : dialogue, scene.text, () => {
    revealSceneControls(sceneChoices, scene, isCenteredText);
  });
}

function goBackScene() {
  if (walkMode && !walkMode.interactionText) {
    return false;
  }

  const previousSceneId = sceneHistory.pop();
  if (!previousSceneId || !story.scenes[previousSceneId]) {
    return false;
  }

  stopCutscene();
  stopWalkMode();
  clearAutoAdvance();
  heldKeys.clear();
  keyPressOrder.clear();
  interactionLockedUntil = performance.now() + 300;
  renderScene(previousSceneId, { trackHistory: false });
  return true;
}

function saveKey(slotIndex) {
  return `${saveKeyPrefix}${slotIndex}`;
}

function saveTimestamp() {
  return new Date().toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function createSaveData() {
  return {
    version: 2,
    sceneId: currentSceneId,
    sceneHistory: [...sceneHistory],
    gameState: normalizeScheduleState(gameState),
    isScheduleMode,
    scheduleLocationId: currentScheduleLocationId,
    isAutoMode,
    savedAt: saveTimestamp()
  };
}

function readSaveData(slotIndex) {
  const raw = window.localStorage.getItem(saveKey(slotIndex));
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeSaveData(slotIndex) {
  if (!story.scenes[currentSceneId]) {
    return false;
  }

  window.localStorage.setItem(saveKey(slotIndex), JSON.stringify(createSaveData()));
  return true;
}

function writeQuickSave() {
  if (!story.scenes[currentSceneId]) {
    return false;
  }

  window.localStorage.setItem(quickSaveKey, JSON.stringify(createSaveData()));
  return true;
}

function loadSaveData(data) {
  if (!data?.sceneId || !story.scenes[data.sceneId]) {
    return false;
  }

  hasStarted = true;
  canStart = true;
  stopCutscene();
  stopWalkMode();
  clearTyping();
  heldKeys.clear();
  keyPressOrder.clear();
  sceneHistory.length = 0;
  if (Array.isArray(data.sceneHistory)) {
    sceneHistory.push(...data.sceneHistory.filter((sceneId) => story.scenes[sceneId]));
  }
  gameState = normalizeScheduleState(data.gameState);
  isScheduleMode = Boolean(data.isScheduleMode);
  currentScheduleLocationId = data.scheduleLocationId ?? "room";
  setAutoMode(Boolean(data.isAutoMode));
  interactionLockedUntil = performance.now() + 300;
  titleScreen.classList.add("title-screen-hidden");
  encounterWipe.classList.remove("encounter-wipe-active", "encounter-wipe-exit");
  renderScene(data.sceneId, { trackHistory: false });
  return true;
}

function readQuickSave() {
  const raw = window.localStorage.getItem(quickSaveKey);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function closeSaveModal() {
  saveModal.classList.add("save-modal-hidden");
}

function renderSaveSlots() {
  saveSlots.replaceChildren();
  const startSlot = savePage * saveSlotsPerPage + 1;
  const endSlot = Math.min(saveSlotCount, startSlot + saveSlotsPerPage - 1);

  for (let slot = startSlot; slot <= endSlot; slot += 1) {
    const data = readSaveData(slot);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "save-slot";
    button.dataset.saveSlot = String(slot);
    button.innerHTML = data
      ? `<strong>SLOT ${slot}</strong><span>${data.savedAt}</span><span>${data.sceneId}</span>`
      : `<strong>SLOT ${slot}</strong><span>EMPTY</span>`;
    saveSlots.append(button);
  }

  savePages.querySelectorAll("[data-save-page]").forEach((button) => {
    button.classList.toggle("save-page-active", Number(button.dataset.savePage) === savePage);
  });
}

function openSaveModal(mode) {
  saveMode = mode;
  saveModalTitle.textContent = mode === "save" ? "SAVE" : "LODE";
  renderSaveSlots();
  saveModal.classList.remove("save-modal-hidden");
}

function handleSaveSlot(slotIndex) {
  if (saveMode === "save") {
    writeSaveData(slotIndex);
    renderSaveSlots();
    return;
  }

  const data = readSaveData(slotIndex);
  if (loadSaveData(data)) {
    closeSaveModal();
  }
}

function startWalkMode(scene) {
  const character = characters[scene.character];
  heldKeys.clear();
  keyPressOrder.clear();
  setStage(scene.stage);
  applySceneCamera(scene);
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
    scheduleLocationId: scene.scheduleLocationId,
    x: scene.startX ?? tuning.stageX,
    y: scene.startY ?? tuning.stageY
  };

  hud.classList.add("hud-hidden");
  renderStageActors(scene.actors ?? []);
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

  let xAxis = movementAxis(["arrowleft"], ["arrowright"]);
  let yAxis = movementAxis(["arrowup"], ["arrowdown"]);
  if (walkMode.interactionText || (isScheduleMode && !schedulePanel.classList.contains("schedule-panel-hidden"))) {
    setWalkSprite(walkMode.direction);
    walkAnimationFrame = window.requestAnimationFrame(updateWalkMode);
    return;
  }

  const latestHorizontal = latestPressedOrder(["arrowleft", "arrowright"]);
  const latestVertical = latestPressedOrder(["arrowup", "arrowdown"]);

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
  if (isScheduleMode && block.action) {
    showActionConfirm(block);
    return true;
  }

  clearTyping();
  walkMode.interactionText = block.text;
  hud.classList.remove("hud-hidden");
  speaker.textContent = block.speaker ?? "이빛나";
  dialogue.textContent = "";
  choices.replaceChildren();
  renderCharacter(block.character ?? "bina", { renderPortrait: false });
  setStageCharacterPosition(walkMode.x, walkMode.y);
  setWalkSprite(walkMode.direction);
  advancePrompt.classList.add("advance-prompt-hidden");
  typeText(dialogue, block.text, () => {
    advancePrompt.classList.remove("advance-prompt-hidden");
  });

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
  if (isTypingText()) {
    finishTyping();
    return;
  }

  clearAutoAdvance();

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

function walkTuningText() {
  const values = editableWalkTuning();
  return [
    `/* walkBounds: left ${values.walkBoundLeft}, right ${values.walkBoundRight}, top ${values.walkBoundTop}, bottom ${values.walkBoundBottom} */`,
    `/* interactionBlocks: ${JSON.stringify(interactionBlocks)} */`
  ].join("\n");
}

function syncWalkDebugControls() {
  const values = editableWalkTuning();
  ["walkBoundLeft", "walkBoundRight", "walkBoundTop", "walkBoundBottom"].forEach((key) => {
    const input = document.querySelector(`#${key}`);
    if (input) {
      input.value = values[key];
    }
  });
}

function applyWalkDebugControls() {
  const values = editableWalkTuning();
  ["walkBoundLeft", "walkBoundRight", "walkBoundTop", "walkBoundBottom"].forEach((key) => {
    const input = document.querySelector(`#${key}`);
    if (input) {
      values[key] = Number(input.value);
    }
  });
  Object.assign(walkTuning, values);
  renderDebugAreas();
  debugOutput.textContent = tuningText();
}

function selectedInteractionBlock() {
  return interactionBlocks[selectedDebugBlockIndex] ?? null;
}

function syncDebugBlockSelect() {
  debugBlockSelect.replaceChildren();
  interactionBlocks.forEach((_, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `Block ${index + 1}`;
    debugBlockSelect.append(option);
  });
  selectedDebugBlockIndex = Math.max(0, Math.min(selectedDebugBlockIndex, interactionBlocks.length - 1));
  debugBlockSelect.value = String(selectedDebugBlockIndex);
}

function syncDebugBlockControls() {
  syncDebugBlockSelect();
  const block = selectedInteractionBlock();
  if (!block) {
    return;
  }

  debugBlockX.value = block.x;
  debugBlockY.value = block.y;
  debugBlockWidth.value = block.width;
  debugBlockHeight.value = block.height;
  debugBlockText.value = block.text ?? "";
  debugBlockNext.value = block.next ?? "";
}

function applyDebugBlockControls() {
  const block = selectedInteractionBlock();
  if (!block) {
    return;
  }

  block.x = Number(debugBlockX.value);
  block.y = Number(debugBlockY.value);
  block.width = Number(debugBlockWidth.value);
  block.height = Number(debugBlockHeight.value);
  block.text = debugBlockText.value;
  if (debugBlockNext.value.trim()) {
    block.next = debugBlockNext.value.trim();
  } else {
    delete block.next;
  }
  renderDebugAreas();
  debugOutput.textContent = tuningText();
}

function renderDebugAreas() {
  if (!debugAreasVisible?.checked) {
    debugAreaLayer.classList.remove("debug-area-layer-visible");
    return;
  }

  const values = editableWalkTuning();
  debugAreaLayer.classList.add("debug-area-layer-visible");
  debugMoveBounds.style.left = `${values.walkBoundLeft}%`;
  debugMoveBounds.style.top = `${values.walkBoundTop}%`;
  debugMoveBounds.style.width = `${Math.max(0, values.walkBoundRight - values.walkBoundLeft)}%`;
  debugMoveBounds.style.height = `${Math.max(0, values.walkBoundBottom - values.walkBoundTop)}%`;
  debugInteractionBlocks.replaceChildren();
  interactionBlocks.forEach((block, index) => {
    const element = document.createElement("div");
    element.className = "debug-interaction-block";
    element.dataset.label = `${index + 1}`;
    element.style.left = `${block.x}%`;
    element.style.top = `${block.y}%`;
    element.style.width = `${block.width}%`;
    element.style.height = `${block.height}%`;
    debugInteractionBlocks.append(element);
  });
}

function setupAreaDebugControls() {
  if (!debugAreasVisible) {
    return;
  }

  debugAreasVisible.addEventListener("change", renderDebugAreas);
  ["walkBoundLeft", "walkBoundRight", "walkBoundTop", "walkBoundBottom"].forEach((key) => {
    document.querySelector(`#${key}`)?.addEventListener("input", applyWalkDebugControls);
  });
  debugBlockSelect.addEventListener("change", () => {
    selectedDebugBlockIndex = Number(debugBlockSelect.value);
    syncDebugBlockControls();
    renderDebugAreas();
  });
  [debugBlockX, debugBlockY, debugBlockWidth, debugBlockHeight, debugBlockText, debugBlockNext].forEach((input) => {
    input.addEventListener("input", applyDebugBlockControls);
  });
  addInteractionBlock.addEventListener("click", () => {
    interactionBlocks.push({ x: 45, y: 45, width: 10, height: 10, text: "" });
    selectedDebugBlockIndex = interactionBlocks.length - 1;
    syncDebugBlockControls();
    renderDebugAreas();
    debugOutput.textContent = tuningText();
  });
  removeInteractionBlock.addEventListener("click", () => {
    if (interactionBlocks.length <= 0) {
      return;
    }
    interactionBlocks.splice(selectedDebugBlockIndex, 1);
    selectedDebugBlockIndex = Math.max(0, selectedDebugBlockIndex - 1);
    syncDebugBlockControls();
    renderDebugAreas();
    debugOutput.textContent = tuningText();
  });
  syncWalkDebugControls();
  syncDebugBlockControls();
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

function activeDialogueStandingId() {
  const characterId = activeDebugCharacterId();
  return dialogueActorPositions[characterId] ? characterId : "bina";
}

function syncDialogueStandingControls() {
  const values = dialogueActorPositions[activeDialogueStandingId()];
  const fields = {
    dialogueActiveX: "activeX",
    dialogueInactiveX: "inactiveX",
    dialogueStandingY: "y",
    dialogueStandingSize: "size",
    dialogueFocusScale: "focusScale",
    dialogueMutedScale: "mutedScale"
  };

  Object.entries(fields).forEach(([inputId, key]) => {
    const input = document.querySelector(`#${inputId}`);
    if (input) {
      input.value = values[key];
    }
  });

  const flipInput = document.querySelector("#dialogueFlipX");
  if (flipInput) {
    flipInput.checked = Boolean(values.flipX);
  }
}

function applyDialogueStandingControls() {
  const values = dialogueActorPositions[activeDialogueStandingId()];
  const fields = {
    dialogueActiveX: "activeX",
    dialogueInactiveX: "inactiveX",
    dialogueStandingY: "y",
    dialogueStandingSize: "size",
    dialogueFocusScale: "focusScale",
    dialogueMutedScale: "mutedScale"
  };

  Object.entries(fields).forEach(([inputId, key]) => {
    const input = document.querySelector(`#${inputId}`);
    if (input) {
      values[key] = Number(input.value);
    }
  });

  const flipInput = document.querySelector("#dialogueFlipX");
  if (flipInput) {
    values.flipX = flipInput.checked;
  }

  const scene = story.scenes[currentSceneId];
  if (scene) {
    renderDialogueActors(scene, isNarrationScene(scene));
  }
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
  const dialogueStandingId = activeDialogueStandingId();
  const dialogueStandingValues = dialogueActorPositions[dialogueStandingId];
  const hasSceneTuning = Boolean(sceneCharacterTunings[currentSceneId]?.[characterId]);
  const scenePrefix = Object.keys(scenePrefixCharacterTunings).find((prefix) => currentSceneId.startsWith(prefix));
  const hasScenePrefixTuning = Boolean(scenePrefixCharacterTunings[scenePrefix]?.[characterId]);
  const tuningName = hasSceneTuning ? currentSceneId : hasScenePrefixTuning ? scenePrefix : editableStageName();

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
    `/* dialogue standing / ${dialogueStandingId} */`,
    `dialogueActorPositions.${dialogueStandingId}: {`,
    `  activeX: ${dialogueStandingValues.activeX},`,
    `  inactiveX: ${dialogueStandingValues.inactiveX},`,
    `  y: ${dialogueStandingValues.y},`,
    `  size: ${dialogueStandingValues.size},`,
    `  focusScale: ${dialogueStandingValues.focusScale},`,
    `  mutedScale: ${dialogueStandingValues.mutedScale},`,
    `  flipX: ${dialogueStandingValues.flipX}`,
    "}",
    "",
    ":root {",
    cameraTuningText(),
    `  --dialogue-opacity: ${tuning.dialogueOpacity};`,
    `  --dialogue-width: ${tuning.dialogueWidth}%;`,
    `  --dialogue-min-height: ${tuning.dialogueHeight}px;`,
    `  --dialogue-text-min-height: ${tuning.dialogueHeight}px;`,
    `  --dialogue-padding: ${tuning.dialoguePadding}px;`,
    `  --dialogue-x: ${tuning.dialogueX}%;`,
    `  --dialogue-bottom: calc((100vh - var(--scene-canvas-height)) / 2 + ${tuning.dialogueY}vh);`,
    `  --advance-prompt-x: ${tuning.advancePromptX}%;`,
    `  --advance-prompt-y: ${tuning.advancePromptY}%;`,
    `  --advance-prompt-size-ratio: ${tuning.advancePromptSize / 200};`,
    "}",
    "",
    walkTuningText()
  ].join("\n");
}

function applyTuning() {
  syncCharacterFromTuning(activeDebugCharacterId());
  applyDialogueStandingControls();
  applyCharacterTuning(activeDebugCharacterId());
  applyCameraTuning();
  refreshStageActors();
  renderDebugAreas();
  document.documentElement.style.setProperty("--dialogue-opacity", tuning.dialogueOpacity);
  document.documentElement.style.setProperty("--dialogue-width", `${tuning.dialogueWidth}%`);
  document.documentElement.style.setProperty("--dialogue-min-height", `${tuning.dialogueHeight}px`);
  document.documentElement.style.setProperty("--dialogue-text-min-height", `${tuning.dialogueHeight}px`);
  document.documentElement.style.setProperty("--dialogue-padding", `${tuning.dialoguePadding}px`);
  document.documentElement.style.setProperty("--dialogue-x", `${tuning.dialogueX}%`);
  document.documentElement.style.setProperty(
    "--dialogue-bottom",
    `calc((100vh - var(--scene-canvas-height)) / 2 + ${tuning.dialogueY}vh)`
  );
  document.documentElement.style.setProperty("--advance-prompt-x", `${tuning.advancePromptX}%`);
  document.documentElement.style.setProperty("--advance-prompt-y", `${tuning.advancePromptY}%`);
  document.documentElement.style.setProperty(
    "--advance-prompt-size-ratio",
    String(tuning.advancePromptSize / 200)
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
  debugPanel.classList.add("debug-panel-collapsed");
  stageJumpTabs.classList.add("stage-jump-tabs-visible");
  debugCharacterStage.value = currentStageName;
  debugCharacter.value = "bina";
  syncTuningFromCharacter(activeDebugCharacterId());
  setupCameraControls(debugPanel, applyTuning);

  debugCharacterStage.addEventListener("change", () => {
    syncTuningFromCharacter(activeDebugCharacterId());
    syncWalkDebugControls();
    applyTuning();
  });

  debugCharacter.addEventListener("change", () => {
    syncTuningFromCharacter(activeDebugCharacterId());
    syncDialogueStandingControls();
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

  [
    "dialogueActiveX",
    "dialogueInactiveX",
    "dialogueStandingY",
    "dialogueStandingSize",
    "dialogueFocusScale",
    "dialogueMutedScale"
  ].forEach((key) => {
    const input = document.querySelector(`#${key}`);
    input?.addEventListener("input", () => {
      applyDialogueStandingControls();
      debugOutput.textContent = tuningText();
    });
  });

  document.querySelector("#dialogueFlipX")?.addEventListener("change", () => {
    applyDialogueStandingControls();
    debugOutput.textContent = tuningText();
  });

  setupSceneImageControls();
  setupAreaDebugControls();

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

  debugPanelTab?.addEventListener("click", () => {
    const isCollapsed = debugPanel.classList.toggle("debug-panel-collapsed");
    debugPanelTab.setAttribute("aria-label", isCollapsed ? "디버그 패널 열기" : "디버그 패널 닫기");
  });

  syncDialogueStandingControls();
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

  if (!saveModal.classList.contains("save-modal-hidden")) {
    if (key === "escape") {
      closeSaveModal();
    }
    return;
  }

  if (!schedulePanel.classList.contains("schedule-panel-hidden") && key !== "s") {
    return;
  }

  if (key === "s") {
    event.preventDefault();
    isUiHidden = !isUiHidden;
    applyUiVisibility();
    return;
  }

  if (key === "d" && hasStarted && !event.repeat && (!walkMode || walkMode.interactionText)) {
    if (goBackScene()) {
      event.preventDefault();
      return;
    }
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
  gameState = cloneScheduleState();
  currentScheduleLocationId = "room";
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
  sceneHistory.length = 0;
  interactionLockedUntil = 0;
  titleScreen.classList.add("title-screen-hidden");
  encounterWipe.classList.remove("encounter-wipe-active", "encounter-wipe-exit");
  renderScene(sceneId, { trackHistory: false });
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

saveControls.addEventListener("click", (event) => {
  const button = event.target.closest("[data-save-action]");
  if (!button) {
    return;
  }

  event.preventDefault();
  const action = button.dataset.saveAction;

  if (action === "quick-save") {
    writeQuickSave();
    return;
  }

  if (action === "quick-load") {
    loadSaveData(readQuickSave());
    return;
  }

  if (action === "auto") {
    setAutoMode(!isAutoMode);
    if (isAutoMode && !isTypingText()) {
      const scene = story.scenes[currentSceneId];
      if (scene) {
        scheduleAutoAdvance(scene.choices ?? [], scene);
      }
    }
    return;
  }

  openSaveModal(action);
});

saveModalClose.addEventListener("click", closeSaveModal);

scheduleClose.addEventListener("click", closeSchedulePanel);
scheduleStatusButton.addEventListener("click", showScheduleStatus);

saveModal.addEventListener("click", (event) => {
  if (event.target === saveModal) {
    closeSaveModal();
  }
});

saveSlots.addEventListener("click", (event) => {
  const button = event.target.closest("[data-save-slot]");
  if (!button) {
    return;
  }

  handleSaveSlot(Number(button.dataset.saveSlot));
});

savePages.addEventListener("click", (event) => {
  const button = event.target.closest("[data-save-page]");
  if (!button) {
    return;
  }

  savePage = Number(button.dataset.savePage);
  renderSaveSlots();
});

dialogue.addEventListener("click", advanceScene);
advancePrompt.addEventListener("click", advanceScene);
narrationPanel.addEventListener("click", advanceScene);

setupDebugPanel();
setupDraggablePanel(debugPanel);
buildEncounterWipe();
renderScene(currentSceneId, { trackHistory: false });
