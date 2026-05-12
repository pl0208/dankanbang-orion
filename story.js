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
      text: "새벽 두 시. 이빛나는 모니터에 얼굴을 파묻고 있었다.",
      stage: "room",
      next: "prologue_defeat"
    },
    prologue_defeat: {
      speaker: "나레이션",
      character: "bina",
      text: "화면에는 '패배'라는 글자가 붉게 빛나고 있었다. 오늘만 열두 번째였다.",
      stage: "room",
      next: "prologue_sigh"
    },
    prologue_sigh: {
      speaker: "이빛나",
      character: "bina",
      text: "하...",
      stage: "room",
      next: "prologue_room"
    },
    prologue_room: {
      speaker: "나레이션",
      character: "bina",
      text: "금 간 천장, 누렇게 변색된 벽지, 책상 위에 쌓인 라면 봉지들. 단칸방의 풍경은 언제나 같았다.",
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
      text: "그 말이 얼마나 공허한지 본인이 가장 잘 알았다. 어제도, 그저께도, 지난달에도 같은 말을 했었다.",
      stage: "room",
      next: "prologue_smoke"
    },
    prologue_smoke: {
      speaker: "이빛나",
      character: "bina",
      text: "에휴... 담배나 피고 와야겠다.",
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
      text: "낡은 건물의 계단은 삐걱거렸고, 옥상 문은 녹슬어서 열 때마다 괴성을 질렀다.",
      stage: "roof",
      next: "roof_breath"
    },
    roof_breath: {
      speaker: "나레이션",
      text: "하지만 이 시간의 옥상만큼은 빛나가 유일하게 숨을 쉴 수 있는 곳이었다.",
      stage: "roof",
      next: "roof_star"
    },
    roof_star: {
      speaker: "나레이션",
      text: "서울 한복판에서 별을 보기란 쉽지 않았다. 그런데 오늘은 이상하게 하나가 또렷하게 보였다.",
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
      text: "처음에는 착각인 줄 알았다. 하지만 별은 분명히 커지고 있었다. 점점. 점점 더.",
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
      next: "star_frozen"
    },
    star_frozen: {
      speaker: "나레이션",
      text: "도망쳐야 했다. 하지만 몸이 움직이지 않았다.",
      stage: "roof6",
      actors: [],
      next: "crash_lands"
    },
    crash_lands: {
      speaker: "나레이션",
      text: "쾅! 굉음과 함께 옥상 바닥에 무언가가 충돌했다.",
      stage: "crash",
      shake: { duration: 1000 },
      actors: ["bina", "starshipCrash"],
      next: "crash_smell"
    },
    crash_smell: {
      speaker: "나레이션",
      text: "먼지가 자욱하게 피어올랐고, 타는 냄새와 함께 이상하게 달콤한 금속 냄새가 코를 찔렀다.",
      stage: "crash",
      actors: ["bina", "starshipCrash"],
      next: "crash_capsule"
    },
    crash_capsule: {
      speaker: "나레이션",
      text: "옥상 한가운데에 은빛 구체가 박혀 있었다. 큰 캡슐 정도의 크기. 표면의 문양은 살아있는 것처럼 천천히 빛났다.",
      stage: "alien",
      actors: ["bina", "starshipCrash"],
      next: "alien_door"
    },
    alien_door: {
      speaker: "나레이션",
      text: "그리고 그 캡슐의 문이 열렸다.",
      stage: "alien",
      actors: ["bina", "starshipCrash"],
      next: "alien_mic"
    },
    alien_mic: {
      speaker: "???",
      character: "pyong",
      text: "아, 아, 마이크 테스트... 아니, 지구에는 마이크가 없나? 음, 음음...",
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
      text: "아니, 잠깐. 지구식 이름 체계로 바꿔야 하나? 에이, 복잡해. 그냥 뿅뿅이라고 불러.",
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
      text: "왜 그렇게 봐? 아, 도착 인사를 안 했구나. 안녕? 하이? 곤니치와? 니하오? 어떤 언어권이지 여기?",
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
      next: "bina_summary"
    },
    bina_summary: {
      speaker: "이빛나",
      character: "bina",
      text: "잠깐, 내가 정리할게. 난 담배를 피우러 옥상에 올라왔고, 별을 봤고, 그 별이 떨어졌고, 넌 그 별에서 나왔어. 맞아?",
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
      text: "...빛나. 이름. 이빛나야. 지구인 말고.",
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
      text: "차원 항법 장치가 고장 났어. 목적지 설정 없이 가장 가까운 생명체 신호를 추적하게 되어 있거든.",
      stage: "alien",
      next: "bina_closest"
    },
    bina_closest: {
      speaker: "이빛나",
      character: "bina",
      text: "하필 이 구역에서 가장 처량한 생명 신호한테 걸린 거구나.",
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
      text: "'같이'라는 단어는 빛나의 사전에서 오래전에 사라졌었다.",
      stage: "alien",
      next: "pyong_hand"
    },
    pyong_hand: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "나 좀 도와줘, 빛나. 대신 나도 널 도울게. 뭘 도울 수 있을지는 모르겠지만.",
      stage: "alien",
      choices: [
        { text: "손을 잡는다", next: "bina_takes_hand" },
        { text: "일단 들어가자", next: "bina_takes_hand" }
      ]
    },
    bina_takes_hand: {
      speaker: "나레이션",
      text: "빛나는 뿅뿅의 손을 잡았다. 이상하게도, 이 순간만큼은 조금 재미있었다.",
      stage: "alien",
      next: "bina_go_inside"
    },
    bina_go_inside: {
      speaker: "이빛나",
      character: "bina",
      text: "...일단 들어가자. 여기 춥거든.",
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
      text: "먹는 거야. 물에 끓여서.",
      stage: "room",
      next: "chapter1_romantic"
    },
    chapter1_romantic: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오... 화학적 변환을 통한 식량 섭취구나. 원시적이지만 로맨틱하네.",
      stage: "room",
      next: "chapter1_situation"
    },
    chapter1_situation: {
      speaker: "이빛나",
      character: "bina",
      text: "일단 상황 정리 좀 하자. 넌 외계인이고, 우주선이 망가졌고, 내 도움이 필요하다. 맞아?",
      stage: "room",
      next: "chapter1_yes"
    },
    chapter1_yes: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응.",
      stage: "room",
      next: "chapter1_unemployed"
    },
    chapter1_unemployed: {
      speaker: "이빛나",
      character: "bina",
      text: "근데 내가 어떻게 우주선을 고쳐? 나 공대생도 아니고 그냥 백수야.",
      stage: "room",
      next: "chapter1_time"
    },
    chapter1_time: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "백수? 일 안 하는 사람? 그럼 시간이 많다는 거네? 완벽해!",
      stage: "room",
      next: "chapter1_report"
    },
    chapter1_report: {
      speaker: "나레이션",
      text: "뿅뿅이 손가락을 튕기자 공중에 홀로그램이 떠올랐다. 우주선의 손상 보고서였다.",
      stage: "room",
      next: "chapter1_parts"
    },
    chapter1_parts: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "핵심 부품 세 개가 망가졌어. 차원 항법 코어, 에너지 순환 회로, 통신 링크 모듈.",
      stage: "room",
      next: "chapter1_korean"
    },
    chapter1_korean: {
      speaker: "이빛나",
      character: "bina",
      text: "한국말로 해줄 수 있어?",
      stage: "room",
      next: "chapter1_simple_parts"
    },
    chapter1_simple_parts: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "우주선이 어디로 갈지 결정하는 머리, 움직이게 하는 심장, 구조 신호를 보내는 입. 이 정도면 돼?",
      stage: "room",
      next: "chapter1_keyboard"
    },
    chapter1_keyboard: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "저건 뭐야?",
      stage: "room",
      next: "chapter1_keyboard_answer"
    },
    chapter1_keyboard_answer: {
      speaker: "이빛나",
      character: "bina",
      text: "키보드. 컴퓨터에 글자 입력하는 거. 반은 고장 났고.",
      stage: "room",
      next: "chapter1_keyboard_good"
    },
    chapter1_keyboard_good: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오히려 좋아. 고장 난 부분의 회로가 노출되어 있으면 작업하기 편하거든.",
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
      next: "chapter1_light_charge"
    },
    chapter1_light_charge: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "우리는 빛으로 에너지 충전해. 별빛으로도 돼. 근데 여기는 별빛이 너무 약해서 좀 힘들긴 해.",
      stage: "room",
      next: "chapter1_lamp"
    },
    chapter1_lamp: {
      speaker: "이빛나",
      character: "bina",
      text: "저기 창가에 서 있어봐. 가로등 빛이라도 있으니까.",
      stage: "room",
      next: "chapter1_fun"
    },
    chapter1_fun: {
      speaker: "나레이션",
      text: "빛나는 침대에 누워 천장을 바라보았다. 외계인이 내 방에 있다. 우주선을 고쳐달라고 한다. 웃음이 났다.",
      stage: "room",
      next: "chapter1_fun_bina"
    },
    chapter1_fun_bina: {
      speaker: "이빛나",
      character: "bina",
      text: "그냥... 오랜만에 뭔가 재밌어서.",
      stage: "room",
      next: "chapter1_morning"
    },
    chapter1_morning: {
      speaker: "나레이션",
      text: "아침 햇살이 창문을 통해 들어왔다. 빛나는 눈을 떴다.",
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
      next: "chapter1_portfolio_file"
    },
    chapter1_portfolio_file: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나, 이거 뭐야? 그림이 많던데. 예쁘더라.",
      stage: "room",
      next: "chapter1_dont_touch"
    },
    chapter1_dont_touch: {
      speaker: "이빛나",
      character: "bina",
      text: "그거... 건드리지 마. 예쁘긴. 다 실패작이야.",
      stage: "room",
      next: "chapter1_failure"
    },
    chapter1_failure: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "실패작? 왜?",
      stage: "room",
      next: "chapter1_sell"
    },
    chapter1_sell: {
      speaker: "이빛나",
      character: "bina",
      text: "잘 그리는 게 중요한 게 아니라 잘 팔려야 하거든. 남들이 좋아해야 한다고.",
      stage: "room",
      next: "chapter1_hungry"
    },
    chapter1_hungry: {
      speaker: "나레이션",
      text: "그때 빛나의 배에서 소리가 났다.",
      stage: "room",
      next: "chapter1_store"
    },
    chapter1_store: {
      speaker: "이빛나",
      character: "bina",
      text: "...배고프다. 나가야겠다. 편의점.",
      stage: "room",
      next: "chapter1_disguise"
    },
    chapter1_disguise: {
      speaker: "나레이션",
      text: "빛나는 뿅뿅에게 후드티와 마스크를 씌웠다. 은빛 머리카락이 조금 삐져나왔지만, 어쨌든 사람처럼 보였다.",
      stage: "room",
      next: "chapter1_store_trip"
    },
    chapter1_store_trip: {
      speaker: "나레이션",
      text: "편의점까지 오 분 거리. 평소에는 마라톤처럼 느껴지던 길이 오늘은 이상하게 짧게 느껴졌다.",
      stage: "room",
      next: "chapter1_store_wonder"
    },
    chapter1_store_wonder: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "여기가 편의점? 물건이 엄청 많아! 이건 뭐야? 이건? 이건?",
      stage: "room",
      next: "chapter1_stop"
    },
    chapter1_stop: {
      speaker: "이빛나",
      character: "bina",
      text: "...제발 그만해.",
      stage: "room",
      next: "chapter1_hotbar"
    },
    chapter1_hotbar: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나, 저건 뭐야? 막대에 뭔가 꽂혀 있어!",
      stage: "room",
      next: "chapter1_no_money"
    },
    chapter1_no_money: {
      speaker: "이빛나",
      character: "bina",
      text: "핫바. 고기 같은 거야. 먹고 싶어? 안 돼. 돈 없어.",
      stage: "room",
      next: "chapter1_next_time"
    },
    chapter1_next_time: {
      speaker: "이빛나",
      character: "bina",
      text: "다음에 사줄게. 돈 생기면.",
      stage: "room",
      next: "chapter1_ramen"
    },
    chapter1_ramen: {
      speaker: "나레이션",
      text: "방에 돌아와서 컵라면을 끓였다. 뿅뿅은 신기한 듯 물이 끓는 과정을 지켜보았다.",
      stage: "room",
      next: "chapter1_ramen_taste"
    },
    chapter1_ramen_taste: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "맛있어! 짜면서 뜨거우면서 쫄깃해!",
      stage: "room",
      next: "chapter1_easy_food"
    },
    chapter1_easy_food: {
      speaker: "이빛나",
      character: "bina",
      text: "라면이야. 지구에서 제일 쉬운 음식.",
      stage: "room",
      next: "chapter1_thanks"
    },
    chapter1_thanks: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나. 고마워. 밥 같이 먹어줘서. 나, 지구에 아는 사람 없거든. 빛나밖에.",
      stage: "room",
      next: "chapter1_portfolio_question"
    },
    chapter1_portfolio_question: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "그게 뭐야? 포트폴리오? 왜 그림 그려?",
      stage: "room",
      next: "chapter1_why_draw"
    },
    chapter1_why_draw: {
      speaker: "이빛나",
      character: "bina",
      text: "몰라. 원래는 좋아했어. 그리는 거. 뭔가 만드는 거. 근데 지금은... 잘 모르겠어.",
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
      text: "그게 쉬우면 안 힘들지. 자꾸 실패하니까. 내가 만든 것도, 만드는 나 자신도 싫어지더라고.",
      stage: "room",
      next: "chapter1_pyong_failure"
    },
    chapter1_pyong_failure: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "나도 실패한 적 있어. 차원 항법 시험. 세 번 떨어졌어. 공주한테 필수인 시험인데.",
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
      text: "빛나도 할 수 있을 것 같아. 네 그림 봤을 때, 막 반짝반짝했거든. 완성 안 됐는데도.",
      stage: "room",
      next: "chapter1_thank_word"
    },
    chapter1_thank_word: {
      speaker: "이빛나",
      character: "bina",
      text: "...고마워. 그런 말 해줘서.",
      stage: "room",
      next: "chapter1_end"
    },
    chapter1_end: {
      speaker: "나레이션",
      text: "빛나는 한 달째 멈춰 있던 포트폴리오 화면을 다시 올렸다. 오늘은... 조금만 해볼까.",
      stage: "room",
      choices: [
        { text: "처음부터 다시", next: "prologue_title" }
      ]
    }
  }
};
