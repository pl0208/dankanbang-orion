const scheduleData = {
  initialState: {
    day: 2,
    timeSlot: "morning",
    money: 0,
    fatigue: 0,
    binaWill: 0,
    pyongTrust: 0,
    kimTrust: 0,
    communicationProgress: 0,
    spaceshipProgress: 0,
    badEndingFlag: 0,
    routeFlag: "",
    flags: {},
    parts: {
      starlightMetal: false,
      galaxyJellyFilm: false,
      luminousStarflower: false
    },
    exploration: {
      building: 0,
      convenienceStore: 0,
      hill: 0
    },
    purchasedParts: {
      electronics: 0,
      cable: 0,
      battery: 0,
      tools: 0
    }
  },
  timeSlots: [
    { id: "morning", label: "아침" },
    { id: "afternoon", label: "점심" },
    { id: "evening", label: "저녁" },
    { id: "night", label: "밤" }
  ],
  actions: [
    { id: "minigame", label: "미니게임" },
    { id: "partTime", label: "알바" },
    { id: "explore", label: "탐색" },
    { id: "rest", label: "휴식" }
  ],
  locations: {
    room: {
      label: "방",
      stage: "room",
      stagesByTime: {
        morning: "roomMorning",
        afternoon: "roomAfternoon",
        evening: "roomEvening",
        night: "room"
      },
      startX: 49,
      startY: 58,
      actors: ["pyong"],
      interactions: [
        {
          id: "desk",
          label: "작업 책상",
          x: 38,
          y: 27,
          width: 20,
          height: 14,
          prompt: "포트폴리오 작업을 할까?",
          action: { type: "minigame", minigameId: "binaWill" }
        },
        {
          id: "pyong",
          label: "뿅뿅",
          x: 52,
          y: 35,
          width: 13,
          height: 22,
          prompt: "뿅뿅과 수리 연습을 할까?",
          action: { type: "minigame", minigameId: "pyongTrust" }
        },
        {
          id: "door",
          label: "문",
          x: 46,
          y: 76,
          width: 10,
          height: 23,
          prompt: "어디로 이동할까?",
          action: { type: "move" }
        },
        {
          id: "bed",
          label: "침대",
          x: 60,
          y: 55,
          width: 17,
          height: 31,
          prompt: "잠깐 쉴까?",
          action: { type: "rest" }
        }
      ]
    },
    building: {
      label: "건물 내부",
      stage: "aptMorning",
      stagesByTime: {
        morning: "aptMorning",
        afternoon: "aptAfternoon",
        evening: "aptNight",
        night: "aptNight"
      },
      startX: 49,
      startY: 64,
      actors: [],
      interactions: [
        {
          id: "kid",
          label: "꼬마 NPC",
          x: 34,
          y: 52,
          width: 13,
          height: 18,
          prompt: "꼬마와 건물 안을 살펴볼까?",
          action: { type: "explore", siteId: "building" }
        },
        {
          id: "stairs",
          label: "계단/옥상 입구",
          x: 58,
          y: 45,
          width: 14,
          height: 22,
          prompt: "옥상 쪽을 확인했다. 아직은 우주선 흔적이 남아 있다.",
          action: { type: "talk" }
        },
        {
          id: "shard",
          label: "빛나는 조각",
          x: 64,
          y: 68,
          width: 12,
          height: 13,
          prompt: "반짝이는 조각을 조사할까?",
          action: { type: "explore", siteId: "building" }
        },
        {
          id: "return",
          label: "방으로 돌아가기",
          x: 45,
          y: 79,
          width: 12,
          height: 10,
          prompt: "방으로 돌아갈까?",
          action: { type: "move", locationId: "room" }
        }
      ]
    },
    convenienceStore: {
      label: "편의점",
      stage: "withU",
      stagesByTime: {
        morning: "withU",
        afternoon: "withU",
        evening: "withU",
        night: "withU"
      },
      startX: 49,
      startY: 64,
      actors: [],
      interactions: [
        {
          id: "counter",
          label: "점장/계산대",
          x: 38,
          y: 42,
          width: 18,
          height: 16,
          prompt: "편의점 바코드 알바를 시작할까?",
          action: { type: "partTime" }
        },
        {
          id: "shelf",
          label: "진열대",
          x: 60,
          y: 38,
          width: 17,
          height: 22,
          prompt: "진열대를 살펴볼까?",
          action: { type: "explore", siteId: "convenienceStore" }
        },
        {
          id: "limited",
          label: "한정판매 상품대",
          x: 59,
          y: 66,
          width: 18,
          height: 14,
          prompt: "은하젤리 스타라이트 에디션을 확인할까?",
          action: { type: "explore", siteId: "convenienceStore" }
        },
        {
          id: "return",
          label: "방으로 돌아가기",
          x: 45,
          y: 79,
          width: 12,
          height: 10,
          prompt: "방으로 돌아갈까?",
          action: { type: "move", locationId: "room" }
        }
      ]
    },
    hill: {
      label: "뒷동산",
      stage: "sanMorning",
      stagesByTime: {
        morning: "sanMorning",
        afternoon: "sanAfternoon",
        evening: "sanNight",
        night: "sanNight"
      },
      startX: 49,
      startY: 64,
      actors: ["cheolsu"],
      interactions: [
        {
          id: "kim",
          label: "김철수 NPC",
          x: 36,
          y: 53,
          width: 14,
          height: 20,
          prompt: "김철수와 오컬트 조사를 할까?",
          action: { type: "minigame", minigameId: "kimTrust" }
        },
        {
          id: "map",
          label: "이상한 지도",
          x: 55,
          y: 44,
          width: 15,
          height: 15,
          prompt: "이상한 지도를 따라가 볼까?",
          action: { type: "explore", siteId: "hill" }
        },
        {
          id: "plant",
          label: "빛나는 식물",
          x: 62,
          y: 67,
          width: 14,
          height: 14,
          prompt: "빛나는 식물을 조사할까?",
          action: { type: "explore", siteId: "hill" }
        },
        {
          id: "return",
          label: "방으로 돌아가기",
          x: 45,
          y: 79,
          width: 12,
          height: 10,
          prompt: "방으로 돌아갈까?",
          action: { type: "move", locationId: "room" }
        }
      ]
    }
  },
  minigames: [
    { id: "binaWill", label: "이빛나 의지 미니게임", stat: "binaWill", unlockDay: 2 },
    { id: "pyongTrust", label: "뿅뿅 신뢰도 미니게임", stat: "pyongTrust", unlockDay: 3 },
    { id: "kimTrust", label: "김철수 신뢰도 미니게임", stat: "kimTrust", unlockDay: 5 }
  ],
  resultGrades: {
    great: { label: "Great" },
    good: { label: "Good" },
    miss: { label: "Miss" }
  },
  exploreSites: {
    building: {
      label: "건물",
      progressKey: "building",
      rewardKey: "starlightMetal",
      rewardLabel: "별빛 금속 조각",
      steps: [
        "건물 안 꼬마가 옥상 근처에서 반짝이는 조각을 가지고 있는 걸 발견했다.",
        "꼬마와 우주 괴물 놀이를 하며 조금 더 가까워졌다.",
        "꼬마가 별빛 금속 조각을 넘겨줬다."
      ]
    },
    convenienceStore: {
      label: "편의점",
      progressKey: "convenienceStore",
      rewardKey: "galaxyJellyFilm",
      rewardLabel: "은하젤리 반사 필름",
      steps: [
        "한정판매 은하젤리 스타라이트 에디션 입고 정보를 확인했다.",
        "손님 응대와 진열을 도우며 점장의 눈에 들었다.",
        "점장이 은하젤리 반사 필름을 넘겨줬다."
      ]
    },
    hill: {
      label: "뒷동산",
      progressKey: "hill",
      rewardKey: "luminousStarflower",
      rewardLabel: "야광별꽃",
      steps: [
        "김철수가 이상한 뒷동산 지도를 가져왔다.",
        "밤에 빛나는 식물 흔적을 확인했다.",
        "야광별꽃을 채집했다."
      ]
    }
  },
  endings: [
    {
      id: "true",
      title: "서로를 밝힌 별",
      condition: (state) =>
        state.money >= 50000 &&
        state.binaWill >= 10 &&
        state.pyongTrust >= 10 &&
        state.kimTrust >= 10 &&
        state.parts.starlightMetal &&
        state.parts.galaxyJellyFilm &&
        state.parts.luminousStarflower &&
        state.spaceshipProgress >= 100
    },
    {
      id: "good",
      title: "다시 빛나는 별",
      condition: (state) =>
        state.communicationProgress >= 100 &&
        state.pyongTrust >= 8 &&
        state.binaWill >= 8
    },
    {
      id: "normal",
      title: "지구에 남은 별",
      condition: (state) =>
        state.communicationProgress >= 60 &&
        state.pyongTrust >= 6
    },
    {
      id: "bad",
      title: "꺼져버린 별",
      condition: () => true
    }
  ]
};
