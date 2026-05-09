const story = {
  start: "room_victory",
  scenes: {
    room_victory: {
      speaker: "이빛나",
      character: "bina",
      text: "크으~ 오늘도 케뤼~ 이 정도면 팀에서 전화 한 통쯤 와야 하는 거 아니냐고.",
      stage: "room",
      next: "room_afterglow"
    },
    room_afterglow: {
      speaker: "이빛나",
      character: "bina",
      text: "...게임만 열심히 하면 뭐하냐. 인생은 그대로인데.",
      stage: "room",
      next: "work_screen"
    },
    work_screen: {
      speaker: "이빛나",
      character: "bina",
      text: "에효. 오늘은 공쳤다. 작업이나 하다가 자야지.",
      stage: "room",
      next: "portfolio"
    },
    portfolio: {
      stage: "room",
      video: "./assets/videos/work-screen.mp4",
      next: "after_work_thought"
    },
    after_work_thought: {
      speaker: "이빛나",
      character: "bina",
      text: "이런 생각이나 하고 있네.",
      stage: "room",
      next: "smoke_decision"
    },
    smoke_decision: {
      speaker: "이빛나",
      character: "bina",
      text: "에휴. 담배나 펴야겠다.",
      stage: "room",
      next: "room_walk_to_roof"
    },
    room_walk_to_roof: {
      character: "bina",
      stage: "room",
      mode: "walk",
      startX: 49,
      startY: 36,
      exit: {
        x: 82,
        next: "roof_intro"
      }
    },
    name_project: {
      speaker: "이빛나",
      character: "bina",
      text: "프로젝트 이름... 아니, 됐다. 이름 붙이면 책임져야 할 것 같잖아.",
      stage: "room",
      next: "roof_intro"
    },
    roof_intro: {
      speaker: "이빛나",
      character: "bina",
      text: "그냥 빨리 끝났으면 좋겠다. 취준도, 인생도... 아니. 이런 생각이나 하고 있네.",
      stage: "roof",
      next: "star_seen"
    },
    star_seen: {
      speaker: "이빛나",
      character: "bina",
      text: "저 별만 유난히 밝네. 나도 저 별같이 빛나는 사람이 될 수 있을까?",
      stage: "roof",
      next: "star_moves"
    },
    star_moves: {
      speaker: "이빛나",
      character: "bina",
      text: "잠깐. 저 별... 내 쪽으로 오는 것 같은데?",
      stage: "crash",
      next: "crash_lands"
    },
    crash_lands: {
      speaker: "효과음",
      text: "콰앙! 옥상 바닥이 노란 빛으로 번지고, 타는 냄새와 달콤한 금속 냄새가 같이 올라온다.",
      stage: "crash",
      next: "alien_appears"
    },
    alien_appears: {
      speaker: "???",
      character: "pyong",
      text: "안녕! 그래서 나를 소개하자면! 나는...",
      stage: "alien",
      next: "alien_thinks"
    },
    alien_thinks: {
      speaker: "???",
      character: "pyong",
      text: "...",
      stage: "alien",
      next: "alien_name"
    },
    alien_name: {
      speaker: "???",
      character: "pyong",
      text: "아니거든?! 지구식 이름 체계를 고르는 중이야! 음... 뿅뿅이라고 불러!",
      stage: "alien",
      next: "hook"
    },
    hook: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "그럼 최악 아닌 이름을 네가 붙여줘. 대신 내 별, 아니 내 우주선 수리 좀 도와주고!",
      stage: "alien",
      choices: [
        { text: "우주선?", next: "ending_seed" },
        { text: "신고부터 할게", next: "call_police" }
      ]
    },
    call_police: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "지구 공권력은 차원 표류 사고를 처리할 권한이 없어! 아마도!",
      stage: "alien",
      next: "ending_seed"
    },
    ending_seed: {
      speaker: "이빛나",
      character: "bina",
      text: "내 인생도 수리 못 하는데 외계 우주선까지? ...근데 이상하게, 조금 재밌을 것 같다.",
      stage: "alien",
      choices: [{ text: "처음부터 다시", next: "room_victory" }]
    }
  }
};
