const story = {
  start: "prologue_title",
  scenes: {
    prologue_title: {
      speaker: "프롤로그",
      character: "bina",
      text: "별이 떨어지던 밤 - 지지 않는 별",
      stage: "room",
      next: "prologue_time"
    },
    prologue_time: {
      speaker: "나레이션",
      character: "bina",
      text: "새벽 두 시.",
      stage: "room",
      next: "prologue_monitor"
    },
    prologue_monitor: {
      speaker: "나레이션",
      character: "bina",
      text: "이빛나는 모니터에 얼굴을 파묻고 있었다. 화면에는 '패배'라는 글자가 붉게 빛나고 있었다.",
      stage: "room",
      next: "prologue_defeat"
    },
    prologue_defeat: {
      speaker: "나레이션",
      character: "bina",
      text: "오늘만 열두 번째였다.",
      stage: "room",
      next: "prologue_sigh"
    },
    prologue_sigh: {
      speaker: "이빛나",
      character: "bina",
      text: "하...",
      stage: "room",
      next: "prologue_losing"
    },
    prologue_losing: {
      speaker: "나레이션",
      character: "bina",
      text: "한숨이 저절로 나왔다. 게임에서조차 이기지 못하는 밤이었다.",
      stage: "room",
      next: "prologue_chair"
    },
    prologue_chair: {
      speaker: "나레이션",
      character: "bina",
      text: "빛나는 의자를 뒤로 밀고 천장을 올려다보았다.",
      stage: "room",
      next: "prologue_room"
    },
    prologue_room: {
      speaker: "나레이션",
      character: "bina",
      text: "금 간 천장, 누렇게 변색된 벽지, 책상 위에 쌓인 라면 봉지들. 단칸방의 풍경은 언제나 같았다.",
      stage: "room",
      next: "prologue_same"
    },
    prologue_same: {
      speaker: "나레이션",
      character: "bina",
      text: "변하는 건 없었다. 자신도 마찬가지였다.",
      stage: "room",
      next: "prologue_age"
    },
    prologue_age: {
      speaker: "나레이션",
      character: "bina",
      text: "스물여덟. 취업준비생 3년 차. 포트폴리오는 반쯤 완성된 채로 한 달째 멈춰 있었다.",
      stage: "room",
      next: "work_reluctant_1"
    },
    work_reluctant_1: {
      speaker: "나레이션",
      text: "빛나는 마우스를 잡았다. 손끝은 책상 위 먼지만큼이나 무거웠다.",
      stage: "room2",
      actors: [],
      next: "work_reluctant_2"
    },
    work_reluctant_2: {
      speaker: "이빛나",
      text: "하... 그래도 오랜만에 작업 좀 해볼까.",
      stage: "room2",
      actors: [],
      next: "work_reluctant_3"
    },
    work_reluctant_3: {
      speaker: "나레이션",
      text: "새 파일을 열자 빈 화면이 먼저 빛났다. 뭘 그려야 할지보다, 왜 해야 하는지가 먼저 막혔다.",
      stage: "room3",
      actors: [],
      next: "work_reluctant_4"
    },
    work_reluctant_4: {
      speaker: "이빛나",
      text: "일단 선 하나라도 긋자. 선 하나면... 한 거지 뭐.",
      stage: "room3",
      actors: [],
      next: "work_reluctant_5"
    },
    work_reluctant_5: {
      speaker: "이빛나",
      text: ".....",
      stage: "room4",
      actors: [],
      next: "work_reluctant_6"
    },
    work_reluctant_6: {
      speaker: "나레이션",
      text: "커서가 깜빡였다. 빛나도 같이 깜빡였다. 정신은 자꾸 침대 쪽으로 도망쳤다.",
      stage: "room4",
      actors: [],
      next: "work_reluctant_7"
    },
    work_reluctant_7: {
      speaker: "이빛나",
      text: "아, 진짜 하기 싫다. 근데 안 하면 더 싫어질 거잖아.",
      stage: "room5",
      actors: [],
      next: "work_reluctant_8"
    },
    work_reluctant_8: {
      speaker: "나레이션",
      text: "몇 번의 클릭과 몇 번의 한숨이 지나갔다. 결과물은 작았고, 피로는 쓸데없이 컸다.",
      stage: "room5",
      actors: [],
      next: "prologue_tomorrow"
    },
    prologue_tomorrow: {
      speaker: "이빛나",
      character: "bina",
      text: "내일 마저 해야지.",
      stage: "room",
      next: "prologue_empty_word"
    },
    prologue_empty_word: {
      speaker: "나레이션",
      character: "bina",
      text: "빛나는 스스로에게 말했다. 하지만 그 말이 얼마나 공허한지 본인이 가장 잘 알았다.",
      stage: "room",
      next: "prologue_repeated"
    },
    prologue_repeated: {
      speaker: "나레이션",
      character: "bina",
      text: "어제도, 그저께도, 지난달에도 같은 말을 했었다.",
      stage: "room",
      next: "prologue_fridge"
    },
    prologue_fridge: {
      speaker: "나레이션",
      character: "bina",
      text: "냉장고를 열어보았다. 유통기한이 이틀 지난 우유 하나와 쪼그라든 깻잎이 전부였다.",
      stage: "room",
      next: "prologue_hunger"
    },
    prologue_hunger: {
      speaker: "나레이션",
      character: "bina",
      text: "배가 고팠지만 밖에 나갈 기력은 없었다. 편의점까지 오 분 거리도 지금은 마라톤처럼 느껴졌다.",
      stage: "room",
      next: "prologue_smoke"
    },
    prologue_smoke: {
      speaker: "이빛나",
      character: "bina",
      text: "담배나 피워야겠다.",
      stage: "room",
      next: "room_before_roof"
    },
    room_before_roof: {
      character: "bina",
      stage: "room",
      mode: "walk",
      startX: 49,
      startY: 36,
      exit: {
        x: 82,
        next: "roof_door"
      },
      interactions: [
        {
          x: 38,
          y: 27,
          width: 20,
          height: 14,
          text: "포트폴리오는 반쯤 완성된 채로 한 달째 멈춰 있다. 오늘도 열어볼 용기가 나지 않는다."
        },
        {
          x: 68,
          y: 27,
          width: 7,
          height: 15,
          text: "유통기한이 이틀 지난 우유 하나와 쪼그라든 깻잎. 배는 고프지만 밖에 나갈 기력은 없다."
        },
        {
          x: 60,
          y: 55,
          width: 17,
          height: 31,
          text: "담배만 피고 자야겠다."
        },
        {
          x: 46,
          y: 76,
          width: 10,
          height: 23,
          text: "옥상으로 올라가자.",
          next: "roof_door"
        }
      ]
    },
    roof_door: {
      speaker: "나레이션",
      text: "빛나는 구겨진 담배갑을 집어 들고 옥상으로 향했다.",
      stage: "roof",
      next: "roof_stairs"
    },
    roof_stairs: {
      speaker: "나레이션",
      text: "낡은 건물의 계단은 삐걱거렸고, 옥상 문은 녹슬어서 열 때마다 괴성을 질렀다.",
      stage: "roof",
      next: "roof_breath"
    },
    roof_breath: {
      speaker: "나레이션",
      text: "하지만 이 시간의 옥상만큼은 빛나가 유일하게 숨을 쉴 수 있는 곳이었다.",
      stage: "roof",
      next: "roof_sky"
    },
    roof_sky: {
      speaker: "나레이션",
      text: "밤하늘은 맑았다.",
      stage: "roof",
      next: "roof_star"
    },
    roof_star: {
      speaker: "나레이션",
      text: "서울 한복판에서 별을 보기란 쉽지 않았다. 그런데 오늘은 이상하게 하나가 또렷하게 보였다.",
      stage: "roof",
      next: "roof_bright_star"
    },
    roof_bright_star: {
      speaker: "나레이션",
      text: "유난히 밝은 별. 빛나는 담배 연기를 내뱉으며 그 별을 바라보았다.",
      stage: "roof",
      next: "roof_wish"
    },
    roof_wish: {
      speaker: "이빛나",
      character: "bina",
      text: "나도 저렇게 빛날 수 있을까.",
      stage: "roof3",
      actors: [],
      next: "roof_mock"
    },
    roof_mock: {
      speaker: "이빛나",
      character: "bina",
      text: "웃기지도 않네. 이빛나가 빛나다니. 이름값 못 하는 것도 유전인가.",
      stage: "roof3",
      actors: [],
      next: "star_moves"
    },
    star_moves: {
      speaker: "나레이션",
      text: "그때였다. 별이 움직였다.",
      stage: "roof4",
      actors: [],
      next: "star_grows"
    },
    star_grows: {
      speaker: "나레이션",
      text: "처음에는 착각인 줄 알았다. 담배 연기가 시야를 흐리게 한 것인지, 수면 부족으로 환각을 보는 것인지 알 수 없었다.",
      stage: "roof5",
      actors: [],
      next: "star_grows_more"
    },
    star_grows_more: {
      speaker: "나레이션",
      text: "하지만 별은 분명히 커지고 있었다. 점점. 점점 더.",
      stage: "roof5",
      actors: [],
      next: "star_panic"
    },
    star_panic: {
      speaker: "이빛나",
      character: "bina",
      text: "뭐야...",
      stage: "roof5",
      actors: [],
      next: "star_fireball"
    },
    star_fireball: {
      speaker: "나레이션",
      text: "빛나는 담배를 떨어뜨렸다. 별은 이제 별이 아니었다. 그것은 불덩어리처럼 하늘을 가르며 다가오고 있었다.",
      stage: "roof6",
      actors: [],
      next: "star_frozen"
    },
    star_frozen: {
      speaker: "나레이션",
      text: "도망쳐야 했다. 머리로는 알았다. 하지만 몸이 움직이지 않았다.",
      stage: "roof6",
      actors: [],
      next: "star_end_thought"
    },
    star_end_thought: {
      speaker: "나레이션",
      text: "공포 때문인지, 아니면 어딘가에서 '이대로 끝나도 괜찮아'라는 생각이 스쳐 지나갔기 때문인지는 알 수 없었다.",
      stage: "roof6",
      actors: [],
      next: "crash_lands"
    },
    crash_lands: {
      speaker: "나레이션",
      text: "쾅!",
      stage: "crash",
      shake: { duration: 1000 },
      actors: ["bina", "starshipCrash"],
      next: "crash_after"
    },
    crash_after: {
      speaker: "나레이션",
      text: "굉음과 함께 옥상 바닥에 뭔가가 충돌했다. 빛나는 충격파에 밀려 넘어졌다.",
      stage: "crash",
      actors: ["bina", "starshipCrash"],
      next: "crash_smell"
    },
    crash_smell: {
      speaker: "나레이션",
      text: "먼지가 자욱하게 피어올랐고, 타는 냄새와 함께 이상하게 달콤한, 금속 같은 냄새가 코를 찔렀다.",
      stage: "crash",
      actors: ["bina", "starshipCrash"],
      next: "crash_bina_cough"
    },
    crash_bina_cough: {
      speaker: "이빛나",
      character: "bina",
      text: "으... 뭐야...",
      stage: "crash",
      actors: ["bina", "starshipCrash"],
      next: "crash_capsule"
    },
    crash_capsule: {
      speaker: "나레이션",
      text: "먼지가 걷히자, 옥상 한가운데에 거대한 구체가 박혀 있었다. 은빛으로 빛나는 그것은... 우주선?",
      stage: "alien",
      actors: ["bina", "starshipCrash"],
      next: "crash_capsule_size"
    },
    crash_capsule_size: {
      speaker: "나레이션",
      text: "그렇게 부르기엔 너무 작았다. 큰 캡슐 정도의 크기. 표면에는 알 수 없는 문양들이 새겨져 있었다.",
      stage: "alien",
      actors: ["bina", "starshipCrash"],
      next: "crash_capsule_glow"
    },
    crash_capsule_glow: {
      speaker: "나레이션",
      text: "그 문양들은 마치 살아있는 것처럼 천천히 빛을 내고 있었다.",
      stage: "alien",
      actors: ["bina", "starshipCrash"],
      next: "alien_door"
    },
    alien_door: {
      speaker: "나레이션",
      text: "그리고 그 캡슐의 문이 열렸다.",
      stage: "alien",
      actors: ["bina", "starshipCrash"],
      next: "alien_silhouette"
    },
    alien_silhouette: {
      speaker: "나레이션",
      text: "연기 사이로 실루엣이 나타났다. 빛나는 눈을 비볐다. 한 번. 두 번. 세 번.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "alien_appearance"
    },
    alien_appearance: {
      speaker: "나레이션",
      text: "거기 서 있는 것은 사람이었다. 아니, 사람처럼 보이는 무언가였다.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "alien_details"
    },
    alien_details: {
      speaker: "나레이션",
      text: "은빛 머리카락이 중력을 무시한 채 살랑거렸다. 피부는 희미하게 빛을 내고 있었고, 눈동자는 별처럼 반짝였다.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "alien_gem"
    },
    alien_gem: {
      speaker: "나레이션",
      text: "그리고 이마에 박힌 작은 보석은 방금 전 빛나가 올려다보던 별과 똑같은 빛을 내고 있었다.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "alien_mic"
    },
    alien_mic: {
      speaker: "???",
      character: "pyong",
      text: "아, 아, 마이크 테스트... 아니, 지구에는 마이크가 없나? 음, 음음...",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "alien_voice"
    },
    alien_voice: {
      speaker: "나레이션",
      text: "목청을 가다듬는 소리가 어딘가 어색했다.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "alien_name_long"
    },
    alien_name_long: {
      speaker: "???",
      character: "pyong",
      text: "나는 안드로메다 은하 제3성계 로열 하우스의 제17대 공주, M31-BN-7721-Ω-Σ...",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "alien_name_short"
    },
    alien_name_short: {
      speaker: "???",
      character: "pyong",
      text: "아니, 잠깐, 지구식 이름 체계로 바꿔야 하나? 에이, 복잡해. 그냥 뿅뿅이라고 불러.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "bina_silent"
    },
    bina_silent: {
      speaker: "이빛나",
      character: "bina",
      text: "...",
      stage: "alien",
      next: "pyong_greeting"
    },
    pyong_greeting: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "왜 그렇게 봐? 아, 도착 인사를 안 했구나. 음... 지구에선 뭐라고 하더라. 안녕? 하이? 곤니치와? 니하오? 어떤 언어권이지 여기?",
      stage: "alien",
      next: "bina_what"
    },
    bina_what: {
      speaker: "이빛나",
      character: "bina",
      text: "뭐... 뭐야 이게...",
      stage: "alien",
      next: "pyong_slow"
    },
    pyong_slow: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "아, 반응이 느리네. 혹시 지구인들은 정보 처리 속도가 느린 건가? 아니면 내 번역기가 오류가 났나?",
      stage: "alien",
      next: "pyong_cute"
    },
    pyong_cute: {
      speaker: "나레이션",
      text: "뿅뿅이라고 자칭한 존재가 고개를 갸웃거렸다. 그 모습은 이상하게도... 귀여웠다.",
      stage: "alien",
      next: "bina_more_crazy"
    },
    bina_more_crazy: {
      speaker: "나레이션",
      text: "빛나는 그런 생각을 한 자신이 더 미쳤다고 느꼈다.",
      stage: "alien",
      next: "bina_summary"
    },
    bina_summary: {
      speaker: "이빛나",
      character: "bina",
      text: "잠깐, 내가 정리할게. 지금 나는 담배를 피우러 옥상에 올라왔어. 별을 봤어. 그 별이 떨어졌어. 그리고 넌 그 별에서 나왔어. 맞아?",
      stage: "alien",
      next: "pyong_summary"
    },
    pyong_summary: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오, 요약 능력 있네. 맞아.",
      stage: "alien",
      next: "bina_alien"
    },
    bina_alien: {
      speaker: "이빛나",
      character: "bina",
      text: "그리고 넌 외계인이야?",
      stage: "alien",
      next: "pyong_royalty"
    },
    pyong_royalty: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "정확히는 차원 표류 사고로 이 행성에 불시착한 타은하계 로열티지만, 간단히 말하면 맞아.",
      stage: "alien",
      next: "bina_crazy"
    },
    bina_crazy: {
      speaker: "이빛나",
      character: "bina",
      text: "...미쳤네.",
      stage: "alien",
      next: "bina_sits"
    },
    bina_sits: {
      speaker: "나레이션",
      text: "빛나는 털썩 주저앉았다. 다리에 힘이 풀렸다. 외계인. 우주선. 공주. 그 어떤 단어도 현실로 느껴지지 않았다.",
      stage: "alien",
      next: "pyong_damage"
    },
    pyong_damage: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "지구인, 괜찮아? 혹시 착륙 충격파에 데미지를 입었어?",
      stage: "alien",
      next: "bina_name"
    },
    bina_name: {
      speaker: "이빛나",
      character: "bina",
      text: "...빛나.",
      stage: "alien",
      next: "pyong_name_question"
    },
    pyong_name_question: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응?",
      stage: "alien",
      next: "bina_name_full"
    },
    bina_name_full: {
      speaker: "이빛나",
      character: "bina",
      text: "이름. 이빛나야. 지구인 말고.",
      stage: "alien",
      next: "pyong_name_meaning"
    },
    pyong_name_meaning: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나? 빛나! 오, 이름 예쁘다. 빛이 나다. 좋은 의미네.",
      stage: "alien",
      next: "bina_name_value"
    },
    bina_name_value: {
      speaker: "이빛나",
      character: "bina",
      text: "예쁘긴. 이름값 못 하는 게 문제지.",
      stage: "alien",
      next: "bina_why_here"
    },
    bina_why_here: {
      speaker: "이빛나",
      character: "bina",
      text: "근데 너... 왜 하필 여기로 떨어진 거야? 지구에 다른 데도 많잖아.",
      stage: "alien",
      next: "pyong_signal"
    },
    pyong_signal: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "그게... 차원 항법 장치가 고장 났어. 목적지 설정 없이 가장 가까운 생명체 신호를 추적하게 되어 있거든.",
      stage: "alien",
      next: "bina_closest_question"
    },
    bina_closest_question: {
      speaker: "이빛나",
      character: "bina",
      text: "그래서?",
      stage: "alien",
      next: "pyong_closest"
    },
    pyong_closest: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "네가 가장 가까웠어. 정확히는 네 생명 신호가.",
      stage: "alien",
      next: "bina_closest"
    },
    bina_closest: {
      speaker: "이빛나",
      character: "bina",
      text: "하필 이 구역에서 가장 처량한 생명 신호한테 걸린 거구나.",
      stage: "alien",
      next: "pyong_what_pitiful"
    },
    pyong_what_pitiful: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "처량? 그게 무슨 뜻이야?",
      stage: "alien",
      next: "bina_no_star"
    },
    bina_no_star: {
      speaker: "이빛나",
      character: "bina",
      text: "그냥... 별 볼 일 없다는 뜻이야.",
      stage: "alien",
      next: "pyong_fading_star"
    },
    pyong_fading_star: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이상하다. 네 신호는 꽤 독특했는데. 마치... 꺼져가는 별 같았어. 아직 완전히 꺼지진 않은.",
      stage: "alien",
      next: "bina_stung"
    },
    bina_stung: {
      speaker: "나레이션",
      text: "빛나의 심장이 쿵 하고 내려앉았다. 꺼져가는 별. 그 표현이 가슴에 박혔다.",
      stage: "alien",
      next: "bina_stung_line"
    },
    bina_stung_line: {
      speaker: "이빛나",
      character: "bina",
      text: "...뭐, 그렇겠지.",
      stage: "alien",
      next: "bina_business"
    },
    bina_business: {
      speaker: "이빛나",
      character: "bina",
      text: "아무튼, 나한테 무슨 용건이야? 설마 지구 정복? 아니면 인류 대표랑 회담?",
      stage: "alien",
      next: "pyong_broken_ship"
    },
    pyong_broken_ship: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "우주선이 망가졌어. 수리해야 해.",
      stage: "alien",
      next: "bina_repair_why"
    },
    bina_repair_why: {
      speaker: "이빛나",
      character: "bina",
      text: "그걸 왜 나한테 말해?",
      stage: "alien",
      next: "pyong_help"
    },
    pyong_help: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "도와줘야 하니까.",
      stage: "alien",
      next: "bina_repair_me"
    },
    bina_repair_me: {
      speaker: "이빛나",
      character: "bina",
      text: "나? 내가? 우주선을? 미쳤어? 난 내 인생도 제대로 수리 못 하는데?",
      stage: "alien",
      next: "pyong_together"
    },
    pyong_together: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "괜찮아. 나도 내 인생 잘 모르거든. 같이 하면 되지 않을까?",
      stage: "alien",
      next: "bina_together"
    },
    bina_together: {
      speaker: "나레이션",
      text: "그 말에 빛나는 할 말을 잃었다. 같이 하면 된다.",
      stage: "alien",
      next: "bina_together_memory"
    },
    bina_together_memory: {
      speaker: "나레이션",
      text: "'같이'라는 단어는 빛나의 사전에서 오래전에 사라졌었다.",
      stage: "alien",
      next: "bina_serious"
    },
    bina_serious: {
      speaker: "이빛나",
      character: "bina",
      text: "...진심이야?",
      stage: "alien",
      next: "pyong_serious"
    },
    pyong_serious: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 진심이야.",
      stage: "alien",
      next: "pyong_hand"
    },
    pyong_hand: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "나 좀 도와줘, 빛나. 대신 나도 널 도울게. 뭘 도울 수 있을지는 모르겠지만.",
      stage: "alien",
      next: "bina_takes_hand"
    },
    bina_takes_hand: {
      speaker: "나레이션",
      text: "빛나는 그 손을 바라보았다. 말도 안 되는 상황이었다.",
      stage: "alien",
      next: "bina_funny_night"
    },
    bina_funny_night: {
      speaker: "나레이션",
      text: "하지만 이상하게도, 이 순간만큼은 조금 재미있었다. 아무것도 시작되지 않을 것 같던 밤에, 말도 안 되는 문제가 눈앞에 떨어진 것이다.",
      stage: "alien",
      next: "bina_grabs_hand"
    },
    bina_grabs_hand: {
      speaker: "나레이션",
      text: "빛나는 뿅뿅의 손을 잡았다.",
      stage: "alien",
      next: "bina_go_inside"
    },
    bina_go_inside: {
      speaker: "이빛나",
      character: "bina",
      text: "...일단 들어가자. 여기 춥거든.",
      stage: "alien",
      next: "pyong_inside"
    },
    pyong_inside: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오, 지구에도 실내 공간이 있구나! 좋아좋아, 가자!",
      stage: "alien",
      next: "bina_crazy_needed"
    },
    bina_crazy_needed: {
      speaker: "나레이션",
      text: "이건 분명 미친 짓이었다. 하지만 가끔은 미친 짓이 필요한 법이니까.",
      stage: "alien",
      next: "chapter1_title"
    },
    chapter1_title: {
      speaker: "1장",
      text: "낯선 손님",
      stage: "room",
      next: "chapter1_room_enter"
    },
    chapter1_room_enter: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "와, 여기가 네 거주 공간이야?",
      stage: "room",
      next: "chapter1_look_around"
    },
    chapter1_look_around: {
      speaker: "나레이션",
      text: "뿅뿅은 단칸방에 들어서자마자 눈을 반짝였다. 호기심 가득한 눈으로 이것저것을 둘러보았다.",
      stage: "room",
      next: "chapter1_small_room"
    },
    chapter1_small_room: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "작다. 아담하다고 해야 하나? 우리 은하에선 이 정도 크기면 애완동물 방 정도 될 것 같은데.",
      stage: "room",
      next: "chapter1_bina_reply"
    },
    chapter1_bina_reply: {
      speaker: "이빛나",
      character: "bina",
      text: "...네 은하에선 그렇겠지.",
      stage: "room",
      next: "chapter1_after_midnight"
    },
    chapter1_after_midnight: {
      speaker: "나레이션",
      text: "빛나는 피곤하게 대답하며 방 안으로 들어왔다. 새벽 세 시가 넘어가고 있었다. 몸은 지쳤지만 머리는 이상하게 맑았다.",
      stage: "room",
      next: "chapter1_ramen_bag"
    },
    chapter1_ramen_bag: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이게 뭐야?",
      stage: "room",
      next: "chapter1_ramen_answer"
    },
    chapter1_ramen_answer: {
      speaker: "이빛나",
      character: "bina",
      text: "먹는 거야.",
      stage: "room",
      next: "chapter1_how_eat"
    },
    chapter1_how_eat: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이걸 먹어? 어떻게?",
      stage: "room",
      next: "chapter1_boiled"
    },
    chapter1_boiled: {
      speaker: "이빛나",
      character: "bina",
      text: "물에 끓여서.",
      stage: "room",
      next: "chapter1_romantic"
    },
    chapter1_romantic: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오... 화학적 변환을 통한 식량 섭취구나. 원시적이지만 로맨틱하네.",
      stage: "room",
      next: "chapter1_sit_bed"
    },
    chapter1_sit_bed: {
      speaker: "나레이션",
      text: "빛나는 뭐라고 대답해야 할지 몰라서 그냥 침대에 털썩 앉았다.",
      stage: "room",
      next: "chapter1_situation"
    },
    chapter1_situation: {
      speaker: "이빛나",
      character: "bina",
      text: "일단 상황 정리 좀 하자. 넌 외계인이고, 우주선이 망가졌고, 내 도움이 필요하다. 맞아?",
      stage: "room6",
      actors: [],
      next: "chapter1_yes"
    },
    chapter1_yes: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응.",
      stage: "room6",
      actors: [],
      next: "chapter1_unemployed"
    },
    chapter1_unemployed: {
      speaker: "이빛나",
      character: "bina",
      text: "근데 내가 어떻게 우주선을 고쳐? 나 공대생도 아니고 그냥 백수야.",
      stage: "room6",
      actors: [],
      next: "chapter1_what_baeksu"
    },
    chapter1_what_baeksu: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "백수? 그게 뭔데?",
      stage: "room6",
      actors: [],
      next: "chapter1_baeksu_meaning"
    },
    chapter1_baeksu_meaning: {
      speaker: "이빛나",
      character: "bina",
      text: "일 안 하는 사람. 아무것도 안 하는 사람.",
      stage: "room6",
      actors: [],
      next: "chapter1_time"
    },
    chapter1_time: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오, 그럼 시간이 많다는 거네? 완벽해!",
      stage: "room6",
      actors: [],
      next: "chapter1_headache"
    },
    chapter1_headache: {
      speaker: "나레이션",
      text: "빛나는 머리를 감싸 쥐었다. 이 외계인은 긍정적인 게 아니라 그냥 맥락을 모르는 것 같았다.",
      stage: "room6",
      actors: [],
      next: "chapter1_what_to_do"
    },
    chapter1_what_to_do: {
      speaker: "이빛나",
      character: "bina",
      text: "아무튼, 구체적으로 뭘 어떻게 해야 하는데?",
      stage: "room6",
      actors: [],
      next: "chapter1_report"
    },
    chapter1_report: {
      speaker: "나레이션",
      text: "뿅뿅이 손가락을 튕겼다. 그러자 공중에 홀로그램이 떠올랐다. 빛나는 눈이 휘둥그레졌다.",
      stage: "room7",
      actors: [],
      next: "chapter1_this_is"
    },
    chapter1_this_is: {
      speaker: "이빛나",
      character: "bina",
      text: "이건...",
      stage: "room7",
      actors: [],
      next: "chapter1_damage_report"
    },
    chapter1_damage_report: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "내 함선의 손상 보고서야. 보면 알겠지만 핵심 부품 세 개가 망가졌어.",
      stage: "room7",
      actors: [],
      next: "chapter1_parts"
    },
    chapter1_parts: {
      speaker: "나레이션",
      text: "홀로그램에는 우주선의 구조가 입체적으로 표시되어 있었다. 그리고 빨간색으로 깜빡이는 부분이 세 군데 있었다.",
      stage: "room7",
      actors: [],
      next: "chapter1_part_names"
    },
    chapter1_part_names: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "첫 번째, 차원 항법 코어. 두 번째, 에너지 순환 회로. 세 번째, 통신 링크 모듈.",
      stage: "room7",
      actors: [],
      next: "chapter1_korean"
    },
    chapter1_korean: {
      speaker: "이빛나",
      character: "bina",
      text: "한국말로 해줄 수 있어?",
      stage: "room7",
      actors: [],
      next: "chapter1_simple_parts"
    },
    chapter1_simple_parts: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "음... 첫 번째는 우주선이 어디로 갈지 결정하는 머리, 두 번째는 우주선을 움직이게 하는 심장, 세 번째는 구조 신호를 보내는 입. 이 정도면 돼?",
      stage: "room7",
      actors: [],
      next: "chapter1_better"
    },
    chapter1_better: {
      speaker: "이빛나",
      character: "bina",
      text: "그래, 그게 낫다.",
      stage: "room7",
      actors: [],
      next: "chapter1_look_hologram"
    },
    chapter1_look_hologram: {
      speaker: "나레이션",
      text: "빛나는 홀로그램을 들여다보았다. 생전 처음 보는 기술이었지만, 이상하게 게임의 인터페이스처럼 직관적으로 느껴졌다.",
      stage: "room7",
      actors: [],
      next: "chapter1_how_fix"
    },
    chapter1_how_fix: {
      speaker: "이빛나",
      character: "bina",
      text: "근데 이걸 어떻게 고쳐? 지구에 차원 항법 코어 같은 거 없거든.",
      stage: "room7",
      actors: [],
      next: "chapter1_temp_fix"
    },
    chapter1_temp_fix: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "그래서 임시 수리를 해야 해.",
      stage: "room7",
      actors: [],
      next: "chapter1_temp_question"
    },
    chapter1_temp_question: {
      speaker: "이빛나",
      character: "bina",
      text: "임시 수리?",
      stage: "room7",
      actors: [],
      next: "chapter1_replace_parts"
    },
    chapter1_replace_parts: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 완벽히 같은 부품은 없어도, 비슷한 기능을 하는 물질로 대체할 수 있어. 내 기술력이면 지구 물건으로도 어느 정도 호환이 가능하거든.",
      stage: "room7",
      actors: [],
      next: "chapter1_keyboard"
    },
    chapter1_keyboard: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "예를 들면... 저기 저건 뭐야?",
      stage: "room",
      actors: [],
      camera: { x: 0, y: 70, zoom: 4.07, duration: 650 },
      next: "chapter1_keyboard_answer"
    },
    chapter1_keyboard_answer: {
      speaker: "이빛나",
      character: "bina",
      text: "키보드. 컴퓨터에 글자 입력하는 거.",
      stage: "room",
      actors: [],
      camera: { x: 0, y: 70, zoom: 4.07, duration: 650 },
      next: "chapter1_keyboard_signal"
    },
    chapter1_keyboard_signal: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오, 입력 장치! 신호 전달 체계가 있겠네. 저거 쓸 수 있을 것 같아.",
      stage: "room",
      actors: [],
      camera: { x: 0, y: 70, zoom: 4.07, duration: 650 },
      next: "chapter1_keyboard_broken"
    },
    chapter1_keyboard_broken: {
      speaker: "이빛나",
      character: "bina",
      text: "그 키보드 반은 고장 났는데.",
      stage: "room",
      actors: [],
      camera: { x: 0, y: 70, zoom: 4.07, duration: 650 },
      next: "chapter1_keyboard_good"
    },
    chapter1_keyboard_good: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오히려 좋아. 고장 난 부분의 회로가 노출되어 있으면 작업하기 편하거든.",
      stage: "room",
      actors: [],
      camera: { x: 0, y: 70, zoom: 4.07, duration: 650 },
      next: "chapter1_keyboard_laugh"
    },
    chapter1_keyboard_laugh: {
      speaker: "나레이션",
      text: "빛나는 어이없어서 웃음이 나왔다.",
      stage: "room",
      next: "chapter1_fix_with_keyboard"
    },
    chapter1_fix_with_keyboard: {
      speaker: "이빛나",
      character: "bina",
      text: "지금 그 우주선을 내 고장 난 키보드로 고치겠다는 거야?",
      stage: "room",
      next: "chapter1_why_not"
    },
    chapter1_why_not: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 왜, 안 돼?",
      stage: "room",
      next: "chapter1_maybe"
    },
    chapter1_maybe: {
      speaker: "이빛나",
      character: "bina",
      text: "...아니, 되긴 되겠지. 아마도.",
      stage: "room",
      next: "chapter1_sleep"
    },
    chapter1_sleep: {
      speaker: "이빛나",
      character: "bina",
      text: "좋아, 근데 오늘은 일단 자자. 나 진짜 피곤해.",
      stage: "room",
      next: "chapter1_no_sleep"
    },
    chapter1_no_sleep: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "자? 자는 게 뭔데?",
      stage: "room",
      next: "chapter1_sleep_question"
    },
    chapter1_sleep_question: {
      speaker: "나레이션",
      text: "빛나는 뿅뿅을 바라보았다. 설마.",
      stage: "room",
      next: "chapter1_no_sleep_species"
    },
    chapter1_no_sleep_species: {
      speaker: "이빛나",
      character: "bina",
      text: "너희 은하에선 안 자?",
      stage: "room",
      next: "chapter1_light_charge"
    },
    chapter1_light_charge: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "안 자. 에너지 충전은 빛으로 해. 광합성 비슷한 거랄까?",
      stage: "room",
      next: "chapter1_night"
    },
    chapter1_night: {
      speaker: "이빛나",
      character: "bina",
      text: "그럼 밤에는?",
      stage: "room",
      next: "chapter1_star_charge"
    },
    chapter1_star_charge: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "별빛으로 충전해. 근데 여기는 별빛이 너무 약해서 좀 힘들긴 해.",
      stage: "room",
      next: "chapter1_lamp"
    },
    chapter1_lamp: {
      speaker: "이빛나",
      character: "bina",
      text: "저기 창가에 서 있어봐. 가로등 빛이라도 있으니까.",
      stage: "room",
      next: "chapter1_artificial_light"
    },
    chapter1_artificial_light: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오, 인공 광원! 고마워, 빛나!",
      stage: "room",
      next: "chapter1_fun"
    },
    chapter1_fun: {
      speaker: "나레이션",
      text: "뿅뿅은 신나서 창가로 달려갔다. 그리고 가로등 빛을 받으며 만족스러운 표정을 지었다.",
      stage: "room",
      next: "chapter1_lie_down"
    },
    chapter1_lie_down: {
      speaker: "나레이션",
      text: "빛나는 침대에 누웠다. 천장을 바라보며 생각했다. 진짜 미쳤다.",
      stage: "room",
      next: "chapter1_fun_bina"
    },
    chapter1_fun_bina: {
      speaker: "이빛나",
      character: "bina",
      text: "그냥... 오랜만에 뭔가 재밌어서.",
      stage: "room",
      next: "chapter1_pyong_fun"
    },
    chapter1_pyong_fun: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "재밌어? 뭐가?",
      stage: "room",
      next: "chapter1_all_fun"
    },
    chapter1_all_fun: {
      speaker: "이빛나",
      character: "bina",
      text: "몰라. 그냥 다.",
      stage: "room",
      next: "chapter1_good_fun"
    },
    chapter1_good_fun: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "좋은 거네, 재밌는 건. 나도 지구가 재밌어.",
      stage: "room",
      next: "chapter1_dream"
    },
    chapter1_dream: {
      speaker: "나레이션",
      text: "빛나는 눈을 감았다. 내일 일어나면 이게 다 꿈이겠지. 하지만 어쩐지, 꿈이 아니었으면 좋겠다는 생각도 들었다.",
      stage: "room",
      next: "chapter1_morning"
    },
    chapter1_morning: {
      speaker: "나레이션",
      text: "아침 햇살이 창문을 통해 들어왔다. 빛나는 눈을 떴다. 익숙한 천장. 익숙한 벽지. 익숙한 라면 냄새.",
      stage: "room",
      next: "chapter1_dream_over"
    },
    chapter1_dream_over: {
      speaker: "나레이션",
      text: "역시 꿈이었구나. 빛나는 몸을 일으키며 생각했다.",
      stage: "room",
      next: "chapter1_still_here"
    },
    chapter1_still_here: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "일어났어?",
      stage: "room",
      next: "chapter1_real"
    },
    chapter1_real: {
      speaker: "이빛나",
      character: "bina",
      text: "너... 아직 있어?",
      stage: "room",
      next: "chapter1_where_to_go"
    },
    chapter1_where_to_go: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "당연하지. 어디 갈 데도 없는데.",
      stage: "room",
      next: "chapter1_reality"
    },
    chapter1_reality: {
      speaker: "나레이션",
      text: "꿈이 아니었다. 진짜였다.",
      stage: "room",
      next: "chapter1_really_alien"
    },
    chapter1_really_alien: {
      speaker: "이빛나",
      character: "bina",
      text: "...미쳤다.",
      stage: "room",
      next: "chapter1_slow_earthling"
    },
    chapter1_slow_earthling: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이제야 실감 나? 느리다, 지구인.",
      stage: "room",
      next: "chapter1_wash_face"
    },
    chapter1_wash_face: {
      speaker: "나레이션",
      text: "빛나는 세수라도 해야 할 것 같았다. 찬물로 얼굴을 씻고 거울을 보았다.",
      stage: "room",
      next: "chapter1_mirror"
    },
    chapter1_mirror: {
      speaker: "나레이션",
      text: "거울에 비친 얼굴은 평소와 같았다. 다크서클이 짙고, 피부가 푸석푸석하고, 생기라곤 찾아볼 수 없는 얼굴.",
      stage: "room",
      next: "chapter1_portfolio_file"
    },
    chapter1_portfolio_file: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나, 이거 뭐야?",
      stage: "room",
      next: "chapter1_dont_touch"
    },
    chapter1_dont_touch: {
      speaker: "이빛나",
      character: "bina",
      text: "그거... 건드리지 마.",
      stage: "room",
      next: "chapter1_pretty_art"
    },
    chapter1_pretty_art: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "뭔데? 그림이 많던데. 예쁘더라.",
      stage: "room",
      next: "chapter1_failure"
    },
    chapter1_failure: {
      speaker: "이빛나",
      character: "bina",
      text: "예쁘긴. 다 실패작이야.",
      stage: "room",
      next: "chapter1_why_failure"
    },
    chapter1_why_failure: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "실패작? 왜?",
      stage: "room",
      next: "chapter1_no_hire"
    },
    chapter1_no_hire: {
      speaker: "이빛나",
      character: "bina",
      text: "왜긴. 어디서도 안 뽑아주니까.",
      stage: "room",
      next: "chapter1_job"
    },
    chapter1_job: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "뽑아준다는 게 뭔데?",
      stage: "room",
      next: "chapter1_job_explain"
    },
    chapter1_job_explain: {
      speaker: "이빛나",
      character: "bina",
      text: "일. 직업. 돈 벌 수 있는 거. 너희 은하에선 그런 거 없어?",
      stage: "room",
      next: "chapter1_princess_no_work"
    },
    chapter1_princess_no_work: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "음... 비슷한 건 있어. 근데 우리 은하에선 공주는 일 안 해도 돼.",
      stage: "room",
      next: "chapter1_good_for_you"
    },
    chapter1_good_for_you: {
      speaker: "이빛나",
      character: "bina",
      text: "좋겠다.",
      stage: "room",
      next: "chapter1_sell"
    },
    chapter1_sell: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "근데 너, 그림 진짜 잘 그리던데. 왜 실패작이라고 해?",
      stage: "room",
      next: "chapter1_sell_answer"
    },
    chapter1_sell_answer: {
      speaker: "이빛나",
      character: "bina",
      text: "잘 그리는 게 중요한 게 아니라 잘 팔려야 하거든.",
      stage: "room",
      next: "chapter1_sell_more"
    },
    chapter1_sell_more: {
      speaker: "이빛나",
      character: "bina",
      text: "남들이 좋아해야 한다고. 남들이 돈을 내야 한다고. 내가 좋아하는 건 의미 없어.",
      stage: "room",
      next: "chapter1_earth_different"
    },
    chapter1_earth_different: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이상하다. 우리 은하에선 창작물은 창작자의 기쁨이 가장 중요한데. 남의 평가는 그다음이야.",
      stage: "room",
      next: "chapter1_cut_off"
    },
    chapter1_cut_off: {
      speaker: "이빛나",
      character: "bina",
      text: "여긴 지구야. 다르다고.",
      stage: "room",
      next: "chapter1_hungry"
    },
    chapter1_hungry: {
      speaker: "나레이션",
      text: "그때 빛나의 배에서 소리가 났다. 꼬르륵.",
      stage: "room",
      next: "chapter1_store"
    },
    chapter1_store: {
      speaker: "이빛나",
      character: "bina",
      text: "...배고프다.",
      stage: "room",
      next: "chapter1_food_need"
    },
    chapter1_food_need: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "밥? 밥 먹어야 해?",
      stage: "room",
      next: "chapter1_human_eat"
    },
    chapter1_human_eat: {
      speaker: "이빛나",
      character: "bina",
      text: "응. 인간은 안 먹으면 죽어.",
      stage: "room",
      next: "chapter1_weak"
    },
    chapter1_weak: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "헉, 그렇게 약해?",
      stage: "room",
      next: "chapter1_fridge_empty"
    },
    chapter1_fridge_empty: {
      speaker: "나레이션",
      text: "빛나는 냉장고를 열었다. 어제와 같았다. 상한 우유와 쪼그라든 깻잎.",
      stage: "room",
      next: "chapter1_store_go"
    },
    chapter1_store_go: {
      speaker: "이빛나",
      character: "bina",
      text: "나가야겠다. 편의점.",
      stage: "room",
      next: "chapter1_store_what"
    },
    chapter1_store_what: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "편의점? 뭔데?",
      stage: "room",
      next: "chapter1_store_explain"
    },
    chapter1_store_explain: {
      speaker: "이빛나",
      character: "bina",
      text: "먹을 거 파는 곳.",
      stage: "room",
      next: "chapter1_store_together"
    },
    chapter1_store_together: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오, 나도 가도 돼?",
      stage: "room",
      next: "chapter1_disguise"
    },
    chapter1_disguise: {
      speaker: "이빛나",
      character: "bina",
      text: "...그 모습으론 안 돼. 눈에 띄니까. 사람들이 이상하게 볼 거야.",
      stage: "room",
      next: "chapter1_disguise_question"
    },
    chapter1_disguise_question: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "그럼 어떡해?",
      stage: "room",
      next: "chapter1_disguise_answer"
    },
    chapter1_disguise_answer: {
      speaker: "이빛나",
      character: "bina",
      text: "변장해야지.",
      stage: "room",
      next: "chapter1_hoodie"
    },
    chapter1_hoodie: {
      speaker: "나레이션",
      text: "빛나는 옷장을 열었다. 오래된 옷들 중에서 후드티와 청바지를 꺼냈다.",
      stage: "room",
      next: "chapter1_wear_this"
    },
    chapter1_wear_this: {
      speaker: "이빛나",
      character: "bina",
      text: "이거 입어.",
      stage: "room",
      next: "chapter1_earth_clothes"
    },
    chapter1_earth_clothes: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이게 지구 의상이야? 촉감이 이상해. 폭신폭신하면서 까끌까끌해.",
      stage: "room",
      next: "chapter1_just_wear"
    },
    chapter1_just_wear: {
      speaker: "이빛나",
      character: "bina",
      text: "면이야. 그냥 입어.",
      stage: "room",
      next: "chapter1_mask"
    },
    chapter1_mask: {
      speaker: "나레이션",
      text: "후드를 쓰자 은빛 머리카락이 어느 정도 가려졌다. 하지만 여전히 빛나는 피부와 이마의 보석은 문제였다.",
      stage: "room",
      next: "chapter1_mask_line"
    },
    chapter1_mask_line: {
      speaker: "이빛나",
      character: "bina",
      text: "마스크도 써야겠다.",
      stage: "room",
      next: "chapter1_humanish"
    },
    chapter1_humanish: {
      speaker: "나레이션",
      text: "뿅뿅에게 마스크를 씌워주고 나서 보니, 어느 정도는 사람처럼 보였다. 이상하게 예쁜 사람.",
      stage: "room",
      next: "chapter1_mask_fun"
    },
    chapter1_mask_fun: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오, 이거 신기해! 얼굴에 뭔가 붙어 있는 느낌이야!",
      stage: "room",
      next: "chapter1_quiet"
    },
    chapter1_quiet: {
      speaker: "이빛나",
      character: "bina",
      text: "시끄럽게 굴지 마. 나가면.",
      stage: "room",
      next: "chapter1_store_trip"
    },
    chapter1_store_trip: {
      speaker: "나레이션",
      text: "빛나는 열쇠와 지갑을 챙겼다. 지갑 안에는 만 원짜리 한 장과 천 원짜리 몇 장이 전부였다.",
      stage: "room",
      next: "chapter1_stairs_down"
    },
    chapter1_stairs_down: {
      speaker: "나레이션",
      text: "문을 열고 밖으로 나왔다. 낡은 복도, 페인트가 벗겨진 벽, 형광등 하나가 깜빡이고 있었다.",
      stage: "room",
      next: "chapter1_building"
    },
    chapter1_building: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "여기가 네 건물이야?",
      stage: "room",
      next: "chapter1_rooftop_room"
    },
    chapter1_rooftop_room: {
      speaker: "이빛나",
      character: "bina",
      text: "응. 옥탑방. 건물 맨 위에 있는 방. 제일 싸.",
      stage: "room",
      next: "chapter1_daylight"
    },
    chapter1_daylight: {
      speaker: "나레이션",
      text: "밖으로 나오자 햇빛이 눈부셨다. 빛나는 눈을 찡그렸다. 요즘은 낮에 밖에 나오는 일이 거의 없었다.",
      stage: "room",
      next: "chapter1_sunlight"
    },
    chapter1_sunlight: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "와, 밝다! 좋아좋아, 햇빛 좋아!",
      stage: "room",
      next: "chapter1_people_watch"
    },
    chapter1_people_watch: {
      speaker: "이빛나",
      character: "bina",
      text: "조용히 해. 사람들 봐.",
      stage: "room",
      next: "chapter1_short_walk"
    },
    chapter1_short_walk: {
      speaker: "나레이션",
      text: "편의점까지 오 분 거리. 평소에는 마라톤처럼 느껴지던 거리였는데, 오늘은 이상하게 짧게 느껴졌다.",
      stage: "room",
      next: "chapter1_store_wonder"
    },
    chapter1_store_wonder: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "여기가 편의점? 물건이 엄청 많아!",
      stage: "room",
      next: "chapter1_questions"
    },
    chapter1_questions: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이건 뭐야?",
      stage: "room",
      next: "chapter1_snack"
    },
    chapter1_snack: {
      speaker: "이빛나",
      character: "bina",
      text: "과자. 간식이야.",
      stage: "room",
      next: "chapter1_more_questions"
    },
    chapter1_more_questions: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이건?",
      stage: "room",
      next: "chapter1_drink"
    },
    chapter1_drink: {
      speaker: "이빛나",
      character: "bina",
      text: "음료수.",
      stage: "room",
      next: "chapter1_stop"
    },
    chapter1_stop: {
      speaker: "이빛나",
      character: "bina",
      text: "...제발 그만해.",
      stage: "room",
      next: "chapter1_buy_food"
    },
    chapter1_buy_food: {
      speaker: "나레이션",
      text: "결국 컵라면 두 개와 삼각김밥 두 개를 골랐다. 그게 예산의 한계였다.",
      stage: "room",
      next: "chapter1_hotbar"
    },
    chapter1_hotbar: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나, 저건 뭐야? 막대에 뭔가 꽂혀 있어!",
      stage: "room",
      next: "chapter1_hotbar_answer"
    },
    chapter1_hotbar_answer: {
      speaker: "이빛나",
      character: "bina",
      text: "그건... 핫바. 고기 같은 거야.",
      stage: "room",
      next: "chapter1_want_hotbar"
    },
    chapter1_want_hotbar: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "먹고 싶어!",
      stage: "room",
      next: "chapter1_no_money"
    },
    chapter1_no_money: {
      speaker: "이빛나",
      character: "bina",
      text: "안 돼. 돈 없어.",
      stage: "room",
      next: "chapter1_money_question"
    },
    chapter1_money_question: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "돈?",
      stage: "room",
      next: "chapter1_money_explain"
    },
    chapter1_money_explain: {
      speaker: "이빛나",
      character: "bina",
      text: "이걸로 물건 사는 거야. 이게 없으면 못 사.",
      stage: "room",
      next: "chapter1_galaxy_free"
    },
    chapter1_galaxy_free: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이상하다. 우리 은하에선 필요한 건 그냥 가져가는데.",
      stage: "room",
      next: "chapter1_earth_different_store"
    },
    chapter1_earth_different_store: {
      speaker: "이빛나",
      character: "bina",
      text: "여긴 지구야. 다르다고.",
      stage: "room",
      next: "chapter1_next_time"
    },
    chapter1_next_time: {
      speaker: "이빛나",
      character: "bina",
      text: "핫바, 다음에 사줄게. 돈 생기면.",
      stage: "room",
      next: "chapter1_really"
    },
    chapter1_really: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "정말?",
      stage: "room",
      next: "chapter1_go_back"
    },
    chapter1_go_back: {
      speaker: "나레이션",
      text: "두 사람은 다시 옥탑방으로 향했다.",
      stage: "room",
      next: "chapter1_ramen"
    },
    chapter1_ramen: {
      speaker: "나레이션",
      text: "방에 돌아와서 컵라면을 끓였다. 뿅뿅은 신기한 듯 물이 끓는 과정을 지켜보았다.",
      stage: "room",
      next: "chapter1_water_boils"
    },
    chapter1_water_boils: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "와, 물이 보글보글해!",
      stage: "room",
      next: "chapter1_just_boiling"
    },
    chapter1_just_boiling: {
      speaker: "이빛나",
      character: "bina",
      text: "그냥 끓는 거야.",
      stage: "room",
      next: "chapter1_boiling_science"
    },
    chapter1_boiling_science: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "끓는다. 열로 인한 기화 현상이구나. 원시적이지만 효율적이네.",
      stage: "room",
      next: "chapter1_ramen_ready"
    },
    chapter1_ramen_ready: {
      speaker: "나레이션",
      text: "빛나는 대답 없이 컵라면에 물을 부었다. 삼 분 후, 뚜껑을 열었다.",
      stage: "room",
      next: "chapter1_try_ramen"
    },
    chapter1_try_ramen: {
      speaker: "이빛나",
      character: "bina",
      text: "자, 먹어봐.",
      stage: "room",
      next: "chapter1_ramen_taste"
    },
    chapter1_ramen_taste: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "맛있어!",
      stage: "room",
      next: "chapter1_really_good"
    },
    chapter1_really_good: {
      speaker: "이빛나",
      character: "bina",
      text: "그래?",
      stage: "room",
      next: "chapter1_ramen_texture"
    },
    chapter1_ramen_texture: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응! 이게 뭐야? 짜면서 뜨거우면서 쫄깃해!",
      stage: "room",
      next: "chapter1_easy_food"
    },
    chapter1_easy_food: {
      speaker: "이빛나",
      character: "bina",
      text: "라면이야. 지구에서 제일 쉬운 음식.",
      stage: "room",
      next: "chapter1_earth_best"
    },
    chapter1_earth_best: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "제일 쉬운 게 이렇게 맛있어? 지구 최고야!",
      stage: "room",
      next: "chapter1_quiet_meal"
    },
    chapter1_quiet_meal: {
      speaker: "나레이션",
      text: "조용한 식사였다. 하지만 이상하게 불편하지 않았다. 누군가와 함께 먹으니까 라면이 더 맛있게 느껴졌다.",
      stage: "room",
      next: "chapter1_thanks"
    },
    chapter1_thanks: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나. 고마워.",
      stage: "room",
      next: "chapter1_thanks_what"
    },
    chapter1_thanks_what: {
      speaker: "이빛나",
      character: "bina",
      text: "뭐가?",
      stage: "room",
      next: "chapter1_thanks_reason"
    },
    chapter1_thanks_reason: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "밥 같이 먹어줘서. 나, 지구에 아는 사람 없거든. 빛나밖에.",
      stage: "room",
      next: "chapter1_warm"
    },
    chapter1_warm: {
      speaker: "나레이션",
      text: "빛나는 뭐라고 대답해야 할지 몰랐다. 가슴 한쪽이 이상하게 따뜻해졌다.",
      stage: "room",
      next: "chapter1_portfolio_question"
    },
    chapter1_portfolio_question: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "그게 뭐야?",
      stage: "room",
      next: "chapter1_portfolio_answer"
    },
    chapter1_portfolio_answer: {
      speaker: "이빛나",
      character: "bina",
      text: "포트폴리오. 취업할 때 보여주는 거.",
      stage: "room",
      next: "chapter1_want_see"
    },
    chapter1_want_see: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오, 그림이다! 아까 본 거랑 비슷하네.",
      stage: "room",
      next: "chapter1_not_much"
    },
    chapter1_not_much: {
      speaker: "이빛나",
      character: "bina",
      text: "안 봐도 돼. 별 거 아니야.",
      stage: "room",
      next: "chapter1_why_draw"
    },
    chapter1_why_draw: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "왜 그림 그려?",
      stage: "room",
      next: "chapter1_why_draw_answer"
    },
    chapter1_why_draw_answer: {
      speaker: "이빛나",
      character: "bina",
      text: "...몰라.",
      stage: "room",
      next: "chapter1_molla"
    },
    chapter1_molla: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "몰라?",
      stage: "room",
      next: "chapter1_used_to_like"
    },
    chapter1_used_to_like: {
      speaker: "이빛나",
      character: "bina",
      text: "원래는 좋아했어. 그리는 거. 뭔가 만드는 거. 근데 지금은... 잘 모르겠어.",
      stage: "room",
      next: "chapter1_like_again"
    },
    chapter1_like_again: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "그럼 다시 좋아하게 되면 되지 않을까?",
      stage: "room",
      next: "chapter1_hard"
    },
    chapter1_hard: {
      speaker: "이빛나",
      character: "bina",
      text: "그게 쉬우면 안 힘들지.",
      stage: "room",
      next: "chapter1_why_hard"
    },
    chapter1_why_hard: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "왜 어려운데?",
      stage: "room",
      next: "chapter1_failures"
    },
    chapter1_failures: {
      speaker: "이빛나",
      character: "bina",
      text: "자꾸 실패하니까. 아무도 안 좋아해주니까. 내가 만든 거.",
      stage: "room",
      next: "chapter1_hate_self"
    },
    chapter1_hate_self: {
      speaker: "이빛나",
      character: "bina",
      text: "그러다 보니까 나도 싫어지더라고. 내가 만든 것도, 만드는 나 자신도.",
      stage: "room",
      next: "chapter1_pyong_failure"
    },
    chapter1_pyong_failure: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나, 나도 실패한 적 있어.",
      stage: "room",
      next: "chapter1_pyong_exam"
    },
    chapter1_pyong_exam: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "차원 항법 시험. 세 번 떨어졌어. 공주한테 필수인 시험인데.",
      stage: "room",
      next: "chapter1_princess_exam"
    },
    chapter1_princess_exam: {
      speaker: "이빛나",
      character: "bina",
      text: "공주도 시험 봐?",
      stage: "room",
      next: "chapter1_exam_hard"
    },
    chapter1_exam_hard: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 우리 은하에선 로열티도 자격증이 필요해. 나, 그때 진짜 힘들었어.",
      stage: "room",
      next: "chapter1_fourth"
    },
    chapter1_fourth: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "근데 네 번째에 붙었어. 포기 안 해서. 계속 했으니까.",
      stage: "room",
      next: "chapter1_bina_can"
    },
    chapter1_bina_can: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나도 할 수 있을 것 같아.",
      stage: "room",
      next: "chapter1_sparkle_art"
    },
    chapter1_sparkle_art: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "네 그림 봤을 때, 막 반짝반짝했거든. 완성 안 됐는데도.",
      stage: "room",
      next: "chapter1_thank_word"
    },
    chapter1_thank_word: {
      speaker: "이빛나",
      character: "bina",
      text: "...고마워. 그런 말 해줘서.",
      stage: "room",
      next: "chapter1_fact"
    },
    chapter1_fact: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "별거 아니야. 사실인데 뭘.",
      stage: "room",
      next: "chapter1_end"
    },
    chapter1_end: {
      speaker: "나레이션",
      text: "빛나는 화면을 다시 올렸다. 포트폴리오. 한 달째 멈춰 있던 파일. 오늘은... 조금만 해볼까. 그 생각이 문득 들었다. 오랜만에.",
      stage: "room",
      choices: [
        { text: "처음부터 다시", next: "prologue_title" }
      ]
    }
  }
};
