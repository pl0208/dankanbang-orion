const story = {
  start: "prologue_title",
  scenes: {
    day1_title: {
      speaker: "프롤로그",
      character: "bina",
      text: "별이 떨어지던 밤",
      stage: "room",
      next: "day1_room_intro"
    },
    day1_room_intro: {
      speaker: "나레이션",
      character: "bina",
      text: "새벽 두 시. 옥탑방 안은 모니터의 푸른빛만으로 겨우 밝아져 있었다.",
      stage: "room",
      next: "day1_room_detail"
    },
    day1_room_detail: {
      speaker: "나레이션",
      character: "bina",
      text: "낮에는 햇빛이 너무 세게 들고, 밤에는 바람 소리가 벽을 긁고 지나가는 방. 책상 위에는 먹다 남은 컵라면 용기와 구겨진 영수증, 그리고 한 달째 열려 있는 포트폴리오 파일이 놓여 있었다.",
      stage: "room",
      next: "day1_defeat"
    },
    day1_defeat: {
      speaker: "나레이션",
      character: "bina",
      text: "화면 중앙에는 붉은 글자가 떠 있었다. 패배. 오늘만 열두 번째였다.",
      stage: "room",
      next: "day1_bina_sigh"
    },
    day1_bina_sigh: {
      speaker: "이빛나",
      character: "bina",
      text: "하…… 게임에서도 지네. 진짜 대단하다, 이빛나. 현실에서도 지고, 게임에서도 지고.",
      stage: "room",
      next: "day1_room_narrow"
    },
    day1_room_narrow: {
      speaker: "나레이션",
      character: "bina",
      text: "빛나는 의자를 뒤로 밀었다. 작은 옥탑방 안에서 의자 바퀴가 바닥을 긁는 소리가 유난히 크게 울렸다.",
      stage: "room",
      next: "day1_room_shape"
    },
    day1_room_shape: {
      speaker: "나레이션",
      character: "bina",
      text: "방 한쪽에는 작은 냉장고, 반대편에는 접이식 침대, 그 사이에는 낡은 책상 하나가 겨우 들어가 있었다. 이 방은 늘 좁았다. 하지만 오늘따라 더 좁게 느껴졌다.",
      stage: "room",
      next: "day1_tomorrow"
    },
    day1_tomorrow: {
      speaker: "이빛나",
      character: "bina",
      text: "내일은 해야지.",
      stage: "room",
      next: "day1_empty_words"
    },
    day1_empty_words: {
      speaker: "나레이션",
      character: "bina",
      text: "그 말은 어제도 했다. 그저께도 했다. 지난달에도 했다. 이제는 스스로도 믿지 않는 말이었다.",
      stage: "room",
      choices: [
        { text: "포트폴리오 파일을 다시 열어본다", next: "day1_choice_portfolio", effects: { binaWill: 1, fatigue: 5, flag: "creative_attachment" } },
        { text: "게임을 한 판 더 한다", next: "day1_choice_game", effects: { binaWill: -1, fatigue: 10, flag: "avoidance" } },
        { text: "그냥 컴퓨터를 끈다", next: "day1_choice_off", effects: { fatigue: -5 } }
      ]
    },
    day1_choice_portfolio: {
      speaker: "나레이션",
      character: "bina",
      text: "빛나는 포트폴리오 파일을 다시 열었다. 화면에는 자신이 만든 캐릭터 이미지와 UI 시안들이 떠 있었다. 처음 만들 때는 분명 좋았다. 하지만 지금은 완성되지 않은 페이지들이 자신이 멈춰 있다는 증거처럼 보였다.",
      stage: "room",
      next: "day1_choice_portfolio_line"
    },
    day1_choice_portfolio_line: {
      speaker: "이빛나",
      character: "bina",
      text: "못 만든 건 아닌데…… 그렇다고 뽑힐 정도도 아니고. 내가 이걸 좋아해서 하는 건지, 안 하면 안 될 것 같아서 붙잡고 있는 건지 모르겠어.",
      stage: "room",
      next: "day1_fridge"
    },
    day1_choice_game: {
      speaker: "나레이션",
      character: "bina",
      text: "빛나는 다시 게임 시작 버튼을 눌렀다. 캐릭터는 움직였고, 적은 몰려왔다. 손가락은 익숙하게 움직였지만 집중은 되지 않았다. 3분 후, 화면에는 다시 붉은 글자가 떠올랐다.",
      stage: "room",
      next: "day1_choice_game_line"
    },
    day1_choice_game_line: {
      speaker: "이빛나",
      character: "bina",
      text: "아…… 그만해야 되는데.",
      stage: "room",
      next: "day1_fridge"
    },
    day1_choice_off: {
      speaker: "나레이션",
      character: "bina",
      text: "빛나는 아무 말 없이 컴퓨터를 껐다. 방 안이 갑자기 어두워졌다. 모니터의 빛이 사라지자, 옥탑방은 더 작고 낡아 보였다.",
      stage: "room",
      next: "day1_choice_off_line"
    },
    day1_choice_off_line: {
      speaker: "이빛나",
      character: "bina",
      text: "조용하네.",
      stage: "room",
      next: "day1_fridge"
    },
    day1_fridge: {
      speaker: "나레이션",
      character: "bina",
      text: "배에서 작은 소리가 났다. 빛나는 냉장고를 열었다. 안에는 유통기한이 지난 우유와 마른 깻잎 몇 장, 언제 샀는지 기억도 나지 않는 소스병뿐이었다.",
      stage: "room",
      next: "day1_fridge_line"
    },
    day1_fridge_line: {
      speaker: "이빛나",
      character: "bina",
      text: "와. 진수성찬. 담배나 피우자.",
      stage: "room",
      next: "day1_rooftop_door"
    },
    day1_rooftop_door: {
      speaker: "나레이션",
      character: "bina",
      text: "빛나는 현관문 옆에 놓인 슬리퍼를 대충 신었다. 문손잡이는 차가웠다. 끼이이익. 옥탑방 문이 열리자, 방 안의 텁텁한 공기 대신 차가운 밤공기가 밀려 들어왔다.",
      stage: "room",
      next: "day1_rooftop"
    },
    day1_rooftop: {
      speaker: "나레이션",
      character: "bina",
      text: "문 하나를 사이에 두고 세상이 달라졌다. 방 안은 좁고 답답했지만, 옥상은 이상할 정도로 넓게 느껴졌다.",
      stage: "roof",
      next: "day1_rooftop_detail"
    },
    day1_rooftop_detail: {
      speaker: "나레이션",
      character: "bina",
      text: "낡은 난간. 녹슨 물탱크. 널어놓은 빨래줄. 바닥에 남은 오래된 빗자국. 빛나가 담배를 피우러 나올 때마다 보는 풍경이었다.",
      stage: "roof",
      next: "day1_star"
    },
    day1_star: {
      speaker: "나레이션",
      character: "bina",
      text: "서울의 밤하늘은 언제나 흐릿했다. 그런데 오늘은 이상하게 별 하나가 보였다. 유난히 밝은 별.",
      stage: "roof3",
      actors: [],
      next: "day1_star_line"
    },
    day1_star_line: {
      speaker: "이빛나",
      character: "bina",
      text: "서울에서도 별이 보이네. 나도 저렇게 빛날 수 있을까.",
      stage: "roof3",
      actors: [],
      next: "day1_star_mock"
    },
    day1_star_mock: {
      speaker: "이빛나",
      character: "bina",
      text: "아니지. 이빛나가 빛나다니. 이름값 못 하는 것도 정도가 있지.",
      stage: "roof3",
      actors: [],
      next: "day1_star_moves"
    },
    day1_star_moves: {
      speaker: "나레이션",
      text: "그때였다. 별이 움직였다. 처음에는 착각인 줄 알았다. 하지만 별은 분명히 커지고 있었다. 조금씩. 아니, 빠르게.",
      stage: "roof4",
      actors: ["bina", "starship"],
      next: "day1_star_falls"
    },
    day1_star_falls: {
      speaker: "이빛나",
      character: "bina",
      text: "……뭐야?",
      stage: "roof5",
      actors: ["bina", "starship"],
      next: "day1_falling_choice"
    },
    day1_falling_choice: {
      speaker: "나레이션",
      text: "별은 이제 별이 아니었다. 불타는 무언가가 하늘을 가르며 옥탑방 옥상 쪽으로 떨어지고 있었다.",
      stage: "roof6",
      actors: ["bina", "starship"],
      choices: [
        { text: "바로 방 안으로 도망친다", next: "day1_fall_run", effects: { binaWill: 1, fatigue: 10, flag: "survival_instinct" } },
        { text: "몸이 굳어 움직이지 못한다", next: "day1_fall_freeze", effects: { binaWill: -1, fatigue: 15, badEndingFlag: 1, flag: "helplessness" } },
        { text: "휴대폰을 꺼내 촬영한다", next: "day1_fall_record", effects: { fatigue: 15, phoneCracked: true, ufoVideoRecorded: true } }
      ]
    },
    day1_fall_run: {
      speaker: "나레이션",
      text: "빛나는 본능적으로 몸을 돌렸다. 바로 뒤에는 옥탑방 문이 있었다. 하지만 손이 문고리에 닿기도 전에, 등 뒤의 빛은 이미 너무 가까워져 있었다.",
      stage: "roof6",
      actors: ["bina", "starship"],
      next: "day1_crash"
    },
    day1_fall_freeze: {
      speaker: "나레이션",
      text: "도망쳐야 한다. 방문은 바로 뒤에 있었다. 그런데 몸이 움직이지 않았다. 어쩌면 아주 잠깐, 이대로 끝나도 괜찮지 않을까 하는 생각이 스쳤기 때문일지도 몰랐다.",
      stage: "roof6",
      actors: ["bina", "starship"],
      next: "day1_crash"
    },
    day1_fall_record: {
      speaker: "나레이션",
      text: "빛나는 거의 반사적으로 휴대폰을 꺼냈다. 렌즈 안에서 별이 점점 커졌다. 다음 순간, 휴대폰은 손에서 튕겨 나갔다.",
      stage: "roof6",
      actors: ["bina", "starship"],
      next: "day1_crash"
    },
    day1_crash: {
      speaker: "나레이션",
      text: "쾅! 엄청난 굉음과 함께 옥상 바닥이 흔들렸다. 빛나는 충격파에 밀려 바닥에 쓰러졌다.",
      stage: "crash",
      actors: ["bina", "starshipCrash"],
      shake: true,
      next: "day1_capsule"
    },
    day1_capsule: {
      speaker: "나레이션",
      text: "먼지가 자욱했다. 타는 냄새가 났다. 그런데 이상하게도 쇠 냄새와 함께 달콤한 향이 섞여 있었다. 옥상 한가운데, 은빛 구체가 박혀 있었다.",
      stage: "crash",
      actors: ["bina", "starshipCrash"],
      next: "day1_capsule_line"
    },
    day1_capsule_line: {
      speaker: "이빛나",
      character: "bina",
      text: "……UFO?",
      stage: "crash",
      actors: ["bina", "starshipCrash"],
      next: "day1_pyong_appears"
    },
    day1_pyong_appears: {
      speaker: "나레이션",
      text: "그 순간, 캡슐의 문이 열렸다. 치이이익. 하얀 연기 사이로 작은 실루엣이 나타났다.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_pyong_test"
    },
    day1_pyong_test: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "아, 아. 수신 확인. 번역 모듈 작동 중. 여기는…… 어…… 바닥이네? 착륙 성공!",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_not_landing"
    },
    day1_not_landing: {
      speaker: "이빛나",
      character: "bina",
      text: "그건 착륙이 아니라 추락이야.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_pyong_intro"
    },
    day1_pyong_intro: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "나는 M32-BN. 안드로메다 은하계 로열 하우스의 제17대 공주 후보이자, 차원 항해 자격 3급 보유자이자……",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_short"
    },
    day1_short: {
      speaker: "이빛나",
      character: "bina",
      text: "잠깐. 다시. 짧게.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_alien"
    },
    day1_alien: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "외계인이야. 그냥 뿅뿅이라고 불러.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_deny"
    },
    day1_deny: {
      speaker: "이빛나",
      character: "bina",
      text: "미쳤네.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_signal"
    },
    day1_signal: {
      speaker: "이빛나",
      character: "bina",
      text: "그러니까 넌 외계인이고, 여기 추락했고, 지금 내 옥탑방 옥상에 우주선을 박아놨어. 왜 하필 여기야?",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_dying_star"
    },
    day1_dying_star: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "가장 가까운 생명 신호를 추적했어. 네 신호. 특이했어. 꺼져가는 별 같았어.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_dying_reaction"
    },
    day1_dying_reaction: {
      speaker: "나레이션",
      text: "빛나의 표정이 굳었다. 꺼져가는 별. 그 말은 이상하게 가슴에 박혔다.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      choices: [
        { text: "나에 대해 뭘 안다고 그래?", next: "day1_react_defensive", effects: { pyongTrust: -1, flag: "defensive_reaction" } },
        { text: "……그렇게 보여?", next: "day1_react_accept", effects: { binaWill: 1, pyongTrust: 1, flag: "accepts_dying_star_metaphor" } },
        { text: "웃기지 마. 난 그냥 백수야.", next: "day1_react_self", effects: { binaWill: 1, flag: "self_deprecation_shared" } }
      ]
    },
    day1_react_defensive: {
      speaker: "이빛나",
      character: "bina",
      text: "나에 대해 뭘 안다고 그래?",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_react_defensive_pyong"
    },
    day1_react_defensive_pyong: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "몰라. 모르니까 본 대로 말했어.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_help"
    },
    day1_react_accept: {
      speaker: "이빛나",
      character: "bina",
      text: "……그렇게 보여?",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_react_accept_pyong"
    },
    day1_react_accept_pyong: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 그런데 완전히 꺼진 별은 아니야. 완전히 꺼진 별은 신호도 못 보내.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_help"
    },
    day1_react_self: {
      speaker: "이빛나",
      character: "bina",
      text: "웃기지 마. 난 그냥 백수야. 일 안 하고, 돈 없고, 미래도 애매한 사람.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_react_self_pyong"
    },
    day1_react_self_pyong: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "그럼 시간이 많다는 뜻이야? 시간 많은 건 귀한 거야.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_help"
    },
    day1_help: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나. 나 도와줘. 우주선이 망가졌어. 수리해야 해.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_help_bina"
    },
    day1_help_bina: {
      speaker: "이빛나",
      character: "bina",
      text: "나는 내 인생도 못 고치는데, 우주선을 어떻게 고쳐.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_together"
    },
    day1_together: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "괜찮아. 나도 내 인생 잘 몰라. 같이 하면 되지 않을까?",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      choices: [
        { text: "손을 잡는다", next: "day1_hand_hold", effects: { binaWill: 1, pyongTrust: 2, routeFlag: "stable_cohabitation" } },
        { text: "일단 거리를 둔다", next: "day1_hand_distance", effects: { pyongTrust: 1, routeFlag: "cautious_cohabitation" } },
        { text: "신고하겠다고 말한다", next: "day1_hand_report", effects: { pyongTrust: -2, badEndingFlag: 1, routeFlag: "distrust_route" } },
        { text: "모른 척하고 방으로 들어간다", next: "day1_hand_leave", effects: { binaWill: -2, pyongTrust: -1, fatigue: 10, badEndingFlag: 1, routeFlag: "forced_reunion" } }
      ]
    },
    day1_hand_hold: {
      speaker: "이빛나",
      character: "bina",
      text: "……일단 들어가자. 아직 도와준다는 건 아니야.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_enter_room"
    },
    day1_hand_distance: {
      speaker: "이빛나",
      character: "bina",
      text: "잠깐. 너무 가까이 오지 마. 일단…… 들어와. 대신 이상한 짓 하지 마.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_enter_room"
    },
    day1_hand_report: {
      speaker: "이빛나",
      character: "bina",
      text: "이건 신고해야 돼. 경찰이든, 소방서든, 아무튼.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_report_pyong"
    },
    day1_report_pyong: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "그러면 나는 잡혀가? 그럼 싫어.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_enter_room"
    },
    day1_hand_leave: {
      speaker: "이빛나",
      character: "bina",
      text: "난 못 해. 나한테 그런 거 맡기지 마.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_leave_pyong"
    },
    day1_leave_pyong: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "그래도 네 신호는 아직 꺼지지 않았어.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "day1_enter_room"
    },
    day1_enter_room: {
      speaker: "나레이션",
      text: "옥탑방 문이 괴상한 소리를 내며 열렸다. 빛나는 먼저 방 안으로 들어갔다. 뿅뿅은 문턱 앞에서 잠깐 멈춰 섰다.",
      stage: "room",
      actors: ["bina", "pyong"],
      next: "day1_room_with_pyong"
    },
    day1_room_with_pyong: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "와. 여기가 네 거주 공간이야?",
      stage: "room",
      actors: ["bina", "pyong"],
      next: "day1_rooftop_room"
    },
    day1_rooftop_room: {
      speaker: "이빛나",
      character: "bina",
      text: "응. 옥탑방. 건물 맨 위에 있는 방. 싸고, 덥고, 춥고, 바람 많이 들고.",
      stage: "room",
      actors: ["bina", "pyong"],
      next: "day1_near_sky"
    },
    day1_near_sky: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "하늘이 가까운 방이네.",
      stage: "room",
      actors: ["bina", "pyong"],
      next: "day1_end_record"
    },
    day1_end_record: {
      speaker: "나레이션",
      text: "문이 닫혔다. 옥상에는 아직도 연기가 피어오르고 있었다. 그리고 이빛나는 아직 몰랐다. 하늘이 가까운 이 방에서, 자신의 한 달이 완전히 바뀌게 될 거라는 걸.",
      stage: "room",
      actors: ["bina", "pyong"],
      next: "day1_system_record"
    },
    day1_system_record: {
      speaker: "나레이션",
      text: "1일차가 종료되었습니다. 이빛나는 옥탑방 옥상에서 정체불명의 캡슐을 발견했고, 자칭 뿅뿅과 만났다. 뿅뿅은 이빛나를 꺼져가는 별이라고 표현했고, 구조 신호를 보내기 위한 도움을 요청했다.",
      stage: "room",
      actors: ["bina", "pyong"],
      next: "schedule_start"
    },
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
      text: "후드가 달린 초록색 보호복. 초록빛과 검은빛이 섞인 머리. 그리고 머리 위로 튀어나온 안테나 같은 장식.",
      stage: "alien",
      actors: ["bina", "starshipOpen", "pyong"],
      next: "alien_gem"
    },
    alien_gem: {
      speaker: "나레이션",
      text: "안테나 끝에서는 작은 빛이 희미하게 깜빡였다. 누가 봐도 평범한 사람은 아니었다. 문제는 그 모습이 무섭다기보다, 이상할 정도로 귀엽다는 점이었다.",
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
      text: "통신 장치가 망가졌어. 구조 신호를 보내야 해.",
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
      text: "나? 내가? 외계 교신기를? 미쳤어? 난 내 인생도 제대로 수리 못 하는데?",
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
      text: "일단 상황 정리 좀 하자. 넌 외계인이고, 여기 불시착했고, 구조 신호를 보내야 한다. 맞아?",
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
      text: "근데 내가 어떻게 외계 장치를 고쳐? 나 공대생도 아니고 그냥 백수야.",
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
      text: "내 함선의 손상 보고서야. 지금 제일 급한 건 통신 링크 모듈이야.",
      stage: "room7",
      actors: [],
      next: "chapter1_parts"
    },
    chapter1_parts: {
      speaker: "나레이션",
      text: "홀로그램에는 복잡한 구조가 떠올랐다. 그중 한 부분만 빨간색으로 깜빡이고 있었다.",
      stage: "room7",
      actors: [],
      next: "chapter1_part_names"
    },
    chapter1_part_names: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "통신 링크 모듈. 쉽게 말하면 구조 신호를 보내는 장치야.",
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
      text: "우주선을 완전히 고치는 건 지금은 무리야. 대신 구조 신호를 보내면 누군가 찾으러 올 수 있어. 이 정도면 돼?",
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
      text: "빛나는 홀로그램을 들여다보았다. 생전 처음 보는 기술이었지만, 이상하게 UI 시안처럼 화면 구조가 눈에 들어왔다.",
      stage: "room7",
      actors: [],
      next: "chapter1_how_fix"
    },
    chapter1_how_fix: {
      speaker: "이빛나",
      character: "bina",
      text: "근데 이걸 어떻게 고쳐? 지구에 외계 교신기 부품 같은 거 없거든.",
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
      text: "응. 완벽히 같은 부품은 없어도, 비슷한 기능을 하는 물건으로 임시 연결은 가능해. 특히 입력 회로가 있으면 좋아.",
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
      text: "오, 입력 장치! 신호 전달 체계가 있겠네. 교신기 수리에 쓸 수 있을지도 몰라.",
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
      text: "오히려 좋아. 고장 난 부분의 회로가 노출되어 있으면 확인하기 편하거든. 지금은 위치만 봐둘게.",
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
      text: "벌써 내 키보드 노리는 거야?",
      stage: "room",
      next: "chapter1_why_not"
    },
    chapter1_why_not: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 가능성 있어 보여.",
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
      actors: ["bina", "pyong"],
      next: "chapter1_lie_down"
    },
    chapter1_lie_down: {
      speaker: "나레이션",
      text: "빛나는 침대에 누웠다. 천장을 바라보며 생각했다. 진짜 미쳤다.",
      stage: "room",
      next: "chapter1_absurd_laugh"
    },
    chapter1_absurd_laugh: {
      speaker: "나레이션",
      text: "말도 안 되는 하루였다. 그런데 이상하게도, 그 어이없음이 자꾸 웃음으로 새어 나왔다.",
      stage: "room",
      next: "chapter1_why_laugh"
    },
    chapter1_why_laugh: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나, 왜 갑자기 웃어?",
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
      stage: "room8",
      actors: [],
      next: "chapter1_sleep_line_1"
    },
    chapter1_sleep_line_1: {
      speaker: "이빛나",
      character: "bina",
      text: "엉망진창인 하루였어.",
      stage: "room8",
      actors: [],
      sleepWipe: 16,
      next: "chapter1_sleep_line_2"
    },
    chapter1_sleep_line_2: {
      speaker: "이빛나",
      character: "bina",
      text: "다 꿈이겠지만... 꿈이 아니었으면...",
      stage: "room8",
      actors: [],
      sleepWipe: 32,
      next: "chapter1_sleep_line_3"
    },
    chapter1_sleep_line_3: {
      speaker: "이빛나",
      character: "bina",
      text: "좋겠... 다...",
      stage: "room8",
      actors: [],
      sleepWipe: 50,
      next: "chapter1_morning"
    },
    chapter1_morning: {
      speaker: "나레이션",
      text: "아침 햇살이 창문을 통해 들어왔다. 빛나는 눈을 떴다. 익숙한 천장. 익숙한 벽지. 익숙한 라면 냄새.",
      stage: "roomMorning",
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
      stage: "room9",
      actors: [],
      next: "chapter1_mirror"
    },
    chapter1_mirror: {
      speaker: "나레이션",
      text: "거울에 비친 얼굴은 평소와 같았다. 다크서클이 짙고, 피부가 푸석푸석하고, 생기라곤 찾아볼 수 없는 얼굴.",
      stage: "room9",
      actors: [],
      next: "chapter1_mirror_reality_1"
    },
    chapter1_mirror_reality_1: {
      speaker: "이빛나",
      character: "bina",
      text: "정말... 꿈이 아니구나.",
      stage: "room9",
      actors: [],
      next: "chapter1_mirror_reality_2"
    },
    chapter1_mirror_reality_2: {
      speaker: "이빛나",
      character: "bina",
      text: "그럼 어젯밤 일도, 저 외계인도... 전부 진짜라는 거네.",
      stage: "room9",
      actors: [],
      next: "chapter1_back_to_room"
    },
    chapter1_back_to_room: {
      speaker: "나레이션",
      text: "빛나는 젖은 얼굴을 대충 닦고 방으로 돌아왔다. 익숙한 좁은 공간이, 어제와는 조금 다르게 느껴졌다.",
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
      text: "빛나는 옷장을 뒤적였다. 하지만 뿅뿅에게 제대로 맞는 옷은 없었다. 애초에 문제는 사이즈가 아니었다.",
      stage: "room",
      next: "chapter1_wear_this"
    },
    chapter1_wear_this: {
      speaker: "이빛나",
      character: "bina",
      text: "초록색 보호복에, 머리 위 안테나에, 끝에서 반짝거리는 빛까지... 이걸 어떻게 숨겨.",
      stage: "room",
      next: "chapter1_earth_clothes"
    },
    chapter1_earth_clothes: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "숨겨야 해? 귀엽잖아.",
      stage: "room",
      next: "chapter1_just_wear"
    },
    chapter1_just_wear: {
      speaker: "이빛나",
      character: "bina",
      text: "귀엽긴 한데 편의점 가면 바로 신고당해.",
      stage: "room",
      next: "chapter1_mask"
    },
    chapter1_mask: {
      speaker: "나레이션",
      text: "결국 빛나는 커다란 후드 집업과 마스크를 가져왔다. 초록 보호복 위에 억지로 덧입히자 수상함이 조금 줄어들었다.",
      stage: "room10",
      actors: [],
      next: "chapter1_mask_line"
    },
    chapter1_mask_line: {
      speaker: "이빛나",
      character: "bina",
      text: "...정말 아주 조금.",
      stage: "room10",
      actors: [],
      next: "chapter1_humanish"
    },
    chapter1_humanish: {
      speaker: "나레이션",
      text: "마스크 아래로도 안테나 끝의 작은 빛이 희미하게 보였다. 사람처럼 보인다기보다는, 이상하게 완성도 높은 외계인 코스튬 같았다.",
      stage: "room10",
      actors: [],
      next: "chapter1_mask_fun"
    },
    chapter1_mask_fun: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오, 지구 위장 장비! 얼굴에 뭔가 붙어 있는 느낌이야!",
      stage: "room11",
      actors: [],
      next: "chapter1_quiet"
    },
    chapter1_quiet: {
      speaker: "이빛나",
      character: "bina",
      text: "나가면 조용히 해. 말하면 바로 안 들킬 것도 들킬 것 같으니까.",
      stage: "room11",
      actors: [],
      next: "chapter1_store_trip"
    },
    chapter1_store_trip: {
      speaker: "나레이션",
      text: "빛나는 열쇠와 지갑을 챙겼다. 지갑 안에는 만 원짜리 한 장과 천 원짜리 몇 장이 전부였다.",
      stage: "room11",
      actors: [],
      next: "chapter1_stairs_down"
    },
    chapter1_stairs_down: {
      speaker: "나레이션",
      text: "문을 열고 밖으로 나왔다. 낡은 복도, 페인트가 벗겨진 벽, 형광등 하나가 깜빡이고 있었다.",
      stage: "aptMorning",
      next: "chapter1_building"
    },
    chapter1_building: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "여기가 네 건물이야?",
      stage: "aptMorning",
      next: "chapter1_rooftop_room"
    },
    chapter1_rooftop_room: {
      speaker: "이빛나",
      character: "bina",
      text: "응. 옥탑방. 건물 맨 위에 있는 방. 제일 싸.",
      stage: "aptMorning",
      next: "chapter1_daylight"
    },
    chapter1_daylight: {
      speaker: "나레이션",
      text: "밖으로 나오자 햇빛이 눈부셨다. 빛나는 눈을 찡그렸다. 요즘은 낮에 밖에 나오는 일이 거의 없었다.",
      stage: "aptOutside",
      next: "chapter1_sunlight"
    },
    chapter1_sunlight: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "와, 밝다! 좋아좋아, 햇빛 좋아!",
      stage: "aptOutside",
      next: "chapter1_people_watch"
    },
    chapter1_people_watch: {
      speaker: "이빛나",
      character: "bina",
      text: "조용히 해. 사람들 봐.",
      stage: "aptOutside",
      next: "chapter1_short_walk"
    },
    chapter1_short_walk: {
      speaker: "나레이션",
      text: "편의점까지 오 분 거리. 평소에는 마라톤처럼 느껴지던 거리였는데, 오늘은 이상하게 짧게 느껴졌다.",
      stage: "aptOutside",
      next: "chapter1_store_wonder"
    },
    chapter1_store_wonder: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "여기가 편의점? 물건이 엄청 많아!",
      stage: "withU",
      next: "chapter1_questions"
    },
    chapter1_questions: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이건 뭐야?",
      stage: "withU1",
      actors: [],
      next: "chapter1_snack"
    },
    chapter1_snack: {
      speaker: "이빛나",
      character: "bina",
      text: "과자. 간식이야.",
      stage: "withU1",
      actors: [],
      next: "chapter1_more_questions"
    },
    chapter1_more_questions: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이건?",
      stage: "withU2",
      actors: [],
      next: "chapter1_drink"
    },
    chapter1_drink: {
      speaker: "이빛나",
      character: "bina",
      text: "음료수.",
      stage: "withU2",
      actors: [],
      next: "chapter1_stop"
    },
    chapter1_stop: {
      speaker: "이빛나",
      character: "bina",
      text: "...제발 그만해.",
      stage: "withU2",
      actors: [],
      next: "chapter1_buy_food"
    },
    chapter1_buy_food: {
      speaker: "나레이션",
      text: "결국 컵라면 두 개와 삼각김밥 두 개를 골랐다. 그게 예산의 한계였다.",
      stage: "withU",
      next: "chapter1_hotbar"
    },
    chapter1_hotbar: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나, 저건 뭐야? 막대에 뭔가 꽂혀 있어!",
      stage: "withU",
      next: "chapter1_hotbar_answer"
    },
    chapter1_hotbar_answer: {
      speaker: "이빛나",
      character: "bina",
      text: "그건... 핫바. 고기 같은 거야.",
      stage: "withU",
      next: "chapter1_want_hotbar"
    },
    chapter1_want_hotbar: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "먹고 싶어!",
      stage: "withU",
      next: "chapter1_no_money"
    },
    chapter1_no_money: {
      speaker: "이빛나",
      character: "bina",
      text: "안 돼. 돈 없어.",
      stage: "withU",
      next: "chapter1_money_question"
    },
    chapter1_money_question: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "돈?",
      stage: "withU",
      next: "chapter1_money_explain"
    },
    chapter1_money_explain: {
      speaker: "이빛나",
      character: "bina",
      text: "이걸로 물건 사는 거야. 이게 없으면 못 사.",
      stage: "withU",
      next: "chapter1_galaxy_free"
    },
    chapter1_galaxy_free: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이상하다. 우리 은하에선 필요한 건 그냥 가져가는데.",
      stage: "withU",
      next: "chapter1_earth_different_store"
    },
    chapter1_earth_different_store: {
      speaker: "이빛나",
      character: "bina",
      text: "여긴 지구야. 다르다고.",
      stage: "withU",
      next: "chapter1_next_time"
    },
    chapter1_next_time: {
      speaker: "이빛나",
      character: "bina",
      text: "핫바, 다음에 사줄게. 돈 생기면.",
      stage: "withU",
      next: "chapter1_really"
    },
    chapter1_really: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "정말?",
      stage: "withU",
      next: "chapter1_manager_spots_bina"
    },
    chapter1_manager_spots_bina: {
      speaker: "점장",
      text: "어? 빛나 씨?",
      stage: "withU3",
      actors: [],
      next: "chapter1_manager_greeting"
    },
    chapter1_manager_greeting: {
      speaker: "이빛나",
      character: "bina",
      text: "아, 안녕하세요.",
      stage: "withU3",
      actors: [],
      next: "chapter1_manager_shift"
    },
    chapter1_manager_shift: {
      speaker: "점장",
      text: "오늘 알바 날 아니잖아? 무슨 일 있어?",
      stage: "withU3",
      actors: [],
      next: "chapter1_food_reason"
    },
    chapter1_food_reason: {
      speaker: "이빛나",
      character: "bina",
      text: "아... 그냥 먹을 거 좀 사가려고요.",
      stage: "withU3",
      actors: [],
      next: "chapter1_manager_pyong"
    },
    chapter1_manager_pyong: {
      speaker: "나레이션",
      text: "점장의 시선이 빛나 옆에 선 뿅뿅에게 향했다. 커다란 후드와 마스크로 가렸는데도, 수상함은 완전히 사라지지 않았다.",
      stage: "withU3",
      camera: { x: -51, y: -1, zoom: 3.21, duration: 650 },
      actors: [],
      next: "chapter1_manager_kid"
    },
    chapter1_manager_kid: {
      speaker: "점장",
      text: "근데 옆에 꼬마는 누구야?",
      stage: "withU3",
      actors: [],
      next: "chapter1_cousin"
    },
    chapter1_cousin: {
      speaker: "이빛나",
      character: "bina",
      text: "사촌 동생이에요.",
      stage: "withU3",
      actors: [],
      next: "chapter1_pyong_cousin"
    },
    chapter1_pyong_cousin: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "사촌...?",
      stage: "withU3",
      actors: [],
      next: "chapter1_shy_cousin"
    },
    chapter1_shy_cousin: {
      speaker: "이빛나",
      character: "bina",
      text: "얘가 낯을 좀 가려요.",
      stage: "withU3",
      actors: [],
      next: "chapter1_manager_cute"
    },
    chapter1_manager_cute: {
      speaker: "점장",
      text: "하하, 귀엽네. 근데 빛나 씨, 다음 주부터 평일 오후 알바 자리 하나 비는데 혹시 더 들어올 생각 있어?",
      stage: "withU3",
      actors: [],
      next: "chapter1_bina_parttime_question"
    },
    chapter1_bina_parttime_question: {
      speaker: "이빛나",
      character: "bina",
      text: "네?",
      stage: "withU3",
      actors: [],
      next: "chapter1_manager_parttime_open"
    },
    chapter1_manager_parttime_open: {
      speaker: "점장",
      text: "원래 하던 애가 갑자기 그만둔다네. 혹시 시간 괜찮으면 생각해봐.",
      stage: "withU3",
      actors: [],
      next: "chapter1_parttime_thoughts"
    },
    chapter1_parttime_thoughts: {
      speaker: "나레이션",
      text: "빛나는 잠깐 말이 없었다. 월세. 식비. 포트폴리오 작업 비용. 그리고 옥상에 떨어진 외계 장치.",
      stage: "withU3",
      actors: [],
      next: "chapter1_think_parttime"
    },
    chapter1_think_parttime: {
      speaker: "이빛나",
      character: "bina",
      text: "...생각해볼게요.",
      stage: "withU3",
      actors: [],
      next: "chapter1_parttime_unlock"
    },
    chapter1_parttime_unlock: {
      speaker: "시스템",
      text: "편의점 알바가 해금되었습니다. 편의점 계산대와 상호작용하면 알바를 할 수 있습니다. 알바를 하면 돈을 벌 수 있습니다.",
      stage: "withU3",
      actors: [],
      effects: {
        flag: "partTimeJobUnlocked"
      },
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
      text: "방으로 돌아온 두 사람은 자연스럽게 컵라면에 물을 부었다. 어젯밤과 비슷한 풍경이었다.",
      stage: "room",
      next: "chapter1_water_boils"
    },
    chapter1_water_boils: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오늘도 그 지구 면 요리 먹는 거야?",
      stage: "room",
      next: "chapter1_just_boiling"
    },
    chapter1_just_boiling: {
      speaker: "이빛나",
      character: "bina",
      text: "응. 돈 없을 땐 이게 제일 무난하거든.",
      stage: "room",
      next: "chapter1_boiling_science"
    },
    chapter1_boiling_science: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "난 좋아. 이거 중독성 있어.",
      stage: "room",
      next: "chapter1_ramen_ready"
    },
    chapter1_ramen_ready: {
      speaker: "나레이션",
      text: "보글거리는 물소리와 함께 좁은 옥탑방 안에 익숙한 냄새가 퍼졌다. 어제보다 조금 덜 어색한 냄새였다.",
      stage: "room",
      next: "chapter1_quiet_meal"
    },
    chapter1_quiet_meal: {
      speaker: "나레이션",
      text: "짧은 식사가 끝났다. 특별할 것 없는 컵라면 한 끼였지만, 어젯밤처럼 낯설지는 않았다.",
      stage: "room",
      next: "chapter1_comm_check"
    },
    chapter1_comm_check: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나.",
      stage: "room",
      next: "chapter1_comm_why"
    },
    chapter1_comm_why: {
      speaker: "이빛나",
      character: "bina",
      text: "왜?",
      stage: "room",
      next: "chapter1_comm_device"
    },
    chapter1_comm_device: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "이제 교신 장치 확인해야 해.",
      stage: "room",
      next: "chapter1_comm_question"
    },
    chapter1_comm_question: {
      speaker: "이빛나",
      character: "bina",
      text: "교신 장치?",
      stage: "room",
      next: "chapter1_comm_signal"
    },
    chapter1_comm_signal: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 구조 신호를 보내는 장치.",
      stage: "room",
      next: "chapter1_comm_table"
    },
    chapter1_comm_table: {
      speaker: "나레이션",
      text: "뿅뿅은 작은 원형 장치를 테이블 위에 올렸다. 표면 일부는 타버린 듯 검게 그을려 있었다.",
      stage: "room",
      next: "chapter1_comm_module"
    },
    chapter1_comm_module: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "통신 링크 모듈. 쉽게 말하면 구조 요청을 보내는 입이야.",
      stage: "room",
      next: "chapter1_comm_contact"
    },
    chapter1_comm_contact: {
      speaker: "이빛나",
      character: "bina",
      text: "그럼 이거 고치면 너희 쪽에 연락할 수 있는 거야?",
      stage: "room",
      next: "chapter1_comm_limit"
    },
    chapter1_comm_limit: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 우주선을 완전히 고치는 건 지금은 무리야. 하지만 구조 요청 정도는 보낼 수 있을지도 몰라.",
      stage: "room",
      next: "chapter1_comm_first"
    },
    chapter1_comm_first: {
      speaker: "이빛나",
      character: "bina",
      text: "...그럼 일단 이거부터네.",
      stage: "room",
      next: "chapter1_comm_survive"
    },
    chapter1_comm_survive: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 살아남으려면 먼저 신호를 보내야 해.",
      stage: "room",
      effects: {
        flag: "communicatorRepairUnlocked"
      },
      next: "chapter1_keyboard_circuit"
    },
    chapter1_keyboard_circuit: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "그리고 이 장치에는 입력 회로가 필요해.",
      stage: "room",
      next: "chapter1_input_circuit"
    },
    chapter1_input_circuit: {
      speaker: "이빛나",
      character: "bina",
      text: "입력 회로?",
      stage: "room",
      next: "chapter1_signal_path"
    },
    chapter1_signal_path: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "신호를 정리해서 보내는 통로 같은 거야.",
      stage: "room",
      next: "chapter1_keyboard_look"
    },
    chapter1_keyboard_look: {
      speaker: "나레이션",
      text: "뿅뿅의 시선이 책상 위의 고장 난 키보드로 향했다.",
      stage: "room",
      next: "chapter1_keyboard_no_way"
    },
    chapter1_keyboard_no_way: {
      speaker: "이빛나",
      character: "bina",
      text: "설마.",
      stage: "room",
      next: "chapter1_keyboard_that"
    },
    chapter1_keyboard_that: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 저거.",
      stage: "room",
      next: "chapter1_keyboard_repair_question"
    },
    chapter1_keyboard_repair_question: {
      speaker: "이빛나",
      character: "bina",
      text: "진짜 내 키보드로 외계 교신기를 고친다고?",
      stage: "room",
      next: "chapter1_keyboard_praise"
    },
    chapter1_keyboard_praise: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "지구 키보드, 생각보다 훌륭해.",
      stage: "room",
      next: "chapter1_keyboard_anxiety"
    },
    chapter1_keyboard_anxiety: {
      speaker: "이빛나",
      character: "bina",
      text: "칭찬처럼 들리는데 왜 불안하지.",
      stage: "room",
      choices: [
        {
          text: "……해보자.",
          next: "chapter1_repair_accept",
          effects: { binaWill: 1, pyongTrust: 1, flag: "accepted_communicator_repair" }
        },
        {
          text: "진짜 될까?",
          next: "chapter1_repair_doubt",
          effects: { binaWill: 1, flag: "doubted_but_started" }
        },
        {
          text: "내 키보드 비싼 건데.",
          next: "chapter1_repair_joke",
          effects: { pyongTrust: 1, flag: "joked_about_keyboard" }
        }
      ]
    },
    chapter1_repair_accept: {
      speaker: "이빛나",
      character: "bina",
      text: "...해보자.",
      stage: "room",
      next: "chapter1_repair_accept_pyong"
    },
    chapter1_repair_accept_pyong: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 좋아. 빛나는 아직 안 꺼졌어.",
      stage: "room",
      next: "chapter1_repair_accept_bina"
    },
    chapter1_repair_accept_bina: {
      speaker: "이빛나",
      character: "bina",
      text: "그 말 자꾸 하지 마. 기분 이상하니까.",
      stage: "room",
      next: "chapter1_repair_start"
    },
    chapter1_repair_doubt: {
      speaker: "이빛나",
      character: "bina",
      text: "진짜 될까?",
      stage: "room",
      next: "chapter1_repair_doubt_pyong"
    },
    chapter1_repair_doubt_pyong: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "모르겠어. 근데 안 하면 더 모르잖아.",
      stage: "room",
      next: "chapter1_repair_doubt_narration"
    },
    chapter1_repair_doubt_narration: {
      speaker: "나레이션",
      text: "빛나는 잠깐 말문이 막혔다. 맞는 말이었다. 짜증나게.",
      stage: "room",
      next: "chapter1_repair_start"
    },
    chapter1_repair_joke: {
      speaker: "이빛나",
      character: "bina",
      text: "내 키보드 비싼 건데.",
      stage: "room",
      next: "chapter1_repair_joke_pyong"
    },
    chapter1_repair_joke_pyong: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "고장 났잖아.",
      stage: "room",
      next: "chapter1_repair_joke_bina"
    },
    chapter1_repair_joke_bina: {
      speaker: "이빛나",
      character: "bina",
      text: "그래도 내 거잖아.",
      stage: "room",
      next: "chapter1_repair_joke_pyong_careful"
    },
    chapter1_repair_joke_pyong_careful: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "그럼 더 조심히 쓸게.",
      stage: "room",
      next: "chapter1_repair_joke_bina_meaning"
    },
    chapter1_repair_joke_bina_meaning: {
      speaker: "이빛나",
      character: "bina",
      text: "분해하는 시점에서 이미 조심의 의미가 좀 사라졌는데.",
      stage: "room",
      next: "chapter1_repair_start"
    },
    chapter1_repair_start: {
      speaker: "나레이션",
      text: "뿅뿅은 키보드를 뒤집어 나사를 풀기 시작했다. 키캡 몇 개가 빠지고, 안쪽의 얇은 회로판이 드러났다.",
      stage: "room",
      next: "chapter1_repair_assist_order"
    },
    chapter1_repair_assist_order: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나. 내가 말하는 순서대로 부품 넘겨줘.",
      stage: "room",
      next: "chapter1_repair_no_experience"
    },
    chapter1_repair_no_experience: {
      speaker: "이빛나",
      character: "bina",
      text: "나 이런 거 해본 적 없는데.",
      stage: "room",
      next: "chapter1_repair_pyong_first"
    },
    chapter1_repair_pyong_first: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "나도 지구 키보드는 처음이야.",
      stage: "room",
      next: "chapter1_repair_responsibility"
    },
    chapter1_repair_responsibility: {
      speaker: "이빛나",
      character: "bina",
      text: "둘 다 초보면 누가 책임져?",
      stage: "room",
      next: "chapter1_repair_universe"
    },
    chapter1_repair_universe: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "우주가?",
      stage: "room",
      next: "chapter1_repair_tutorial"
    },
    chapter1_repair_tutorial: {
      speaker: "시스템",
      text: "수리 보조 미니게임이 활성화되었습니다. 이번 미니게임은 교신기 수리 튜토리얼입니다. 현재 프로토타입에서는 Great / Good / Miss 버튼으로 결과를 선택합니다.",
      stage: "room",
      effects: {
        flag: "repairMiniGameUnlocked"
      },
      choices: [
        {
          text: "Great",
          next: "chapter1_repair_great",
          effects: { pyongTrust: 3, communicationProgress: 5, fatigue: 1, timeSlot: "evening", flag: "repair_tutorial_great" }
        },
        {
          text: "Good",
          next: "chapter1_repair_good",
          effects: { pyongTrust: 2, communicationProgress: 3, fatigue: 1, timeSlot: "evening", flag: "repair_tutorial_good" }
        },
        {
          text: "Miss",
          next: "chapter1_repair_miss",
          effects: { pyongTrust: 1, communicationProgress: 1, fatigue: 2, timeSlot: "evening", flag: "repair_tutorial_miss" }
        }
      ]
    },
    chapter1_repair_great: {
      speaker: "나레이션",
      text: "빛나는 뿅뿅이 말하기도 전에 필요한 부품을 빠르게 찾아냈다.",
      stage: "room",
      next: "chapter1_repair_great_pyong"
    },
    chapter1_repair_great_pyong: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "오! 빛나 손 빠르다.",
      stage: "room",
      next: "chapter1_repair_great_bina"
    },
    chapter1_repair_great_bina: {
      speaker: "이빛나",
      character: "bina",
      text: "디자인 작업하다 보면 단축키랑 손놀림은 늘거든.",
      stage: "room",
      next: "chapter1_repair_great_pyong_help"
    },
    chapter1_repair_great_pyong_help: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "좋아. 엄청 도움 돼.",
      stage: "room",
      next: "chapter1_evening_wrap"
    },
    chapter1_repair_good: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 좋아. 이 정도면 연결 가능해.",
      stage: "room",
      next: "chapter1_repair_good_bina"
    },
    chapter1_repair_good_bina: {
      speaker: "이빛나",
      character: "bina",
      text: "\"이 정도면\"이 좀 불안한데.",
      stage: "room",
      next: "chapter1_repair_good_pyong"
    },
    chapter1_repair_good_pyong: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "완벽하지 않아도 신호는 보낼 수 있어.",
      stage: "room",
      next: "chapter1_repair_good_bina_ok"
    },
    chapter1_repair_good_bina_ok: {
      speaker: "이빛나",
      character: "bina",
      text: "그 말은 좀 좋네.",
      stage: "room",
      next: "chapter1_evening_wrap"
    },
    chapter1_repair_miss: {
      speaker: "나레이션",
      text: "빛나는 회로판 방향을 반대로 들고 있었다.",
      stage: "room",
      next: "chapter1_repair_miss_pyong"
    },
    chapter1_repair_miss_pyong: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "빛나. 그거 뒤집혔어.",
      stage: "room",
      next: "chapter1_repair_miss_bina"
    },
    chapter1_repair_miss_bina: {
      speaker: "이빛나",
      character: "bina",
      text: "아.",
      stage: "room",
      next: "chapter1_repair_miss_pyong_ok"
    },
    chapter1_repair_miss_pyong_ok: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "괜찮아. 처음엔 원래 많이 틀려. 그래도 조금은 연결됐어.",
      stage: "room",
      next: "chapter1_evening_wrap"
    },
    chapter1_evening_wrap: {
      speaker: "나레이션",
      text: "작업이 끝났을 때는 이미 해가 기울고 있었다. 옥탑방 안에는 키보드 부품과 공구들이 어지럽게 흩어져 있었다.",
      stage: "roomEvening",
      next: "chapter1_comm_glow"
    },
    chapter1_comm_glow: {
      speaker: "나레이션",
      text: "통신 링크 모듈은 여전히 그을린 채였지만, 아주 작게, 불규칙한 빛을 내고 있었다.",
      stage: "roomEvening",
      next: "chapter1_comm_glow_bina"
    },
    chapter1_comm_glow_bina: {
      speaker: "이빛나",
      character: "bina",
      text: "...방금 빛난 거야?",
      stage: "roomEvening",
      next: "chapter1_comm_alive"
    },
    chapter1_comm_alive: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 완전히 죽은 장치는 아니야.",
      stage: "roomEvening",
      next: "chapter1_fading_comm"
    },
    chapter1_fading_comm: {
      speaker: "이빛나",
      character: "bina",
      text: "꺼져가는 별 같네.",
      stage: "roomEvening",
      next: "chapter1_bina_silence"
    },
    chapter1_bina_silence: {
      speaker: "나레이션",
      text: "말하고 나서, 빛나는 괜히 입을 다물었다.",
      stage: "roomEvening",
      next: "chapter1_pyong_not_out"
    },
    chapter1_pyong_not_out: {
      speaker: "뿅뿅",
      character: "pyong",
      text: "응. 아직 완전히 꺼지진 않았어.",
      stage: "roomEvening",
      next: "chapter1_repair_reflection"
    },
    chapter1_repair_reflection: {
      speaker: "나레이션",
      text: "그 말이 이상하게 마음에 남았다. 포트폴리오도. 교신기도. 인생도. 전부 한 번에 고쳐지는 건 아니니까.",
      stage: "roomEvening",
      next: "chapter1_end"
    },
    chapter1_end: {
      speaker: "시스템",
      text: "2일차가 종료되었습니다. 오늘의 기록: 편의점 알바 가능성이 생겼다. 교신기 수리가 메인 목표로 등록되었다. 고장 난 키보드 회로를 활용해 교신기 수리를 시작했다. 첫 번째 수리 보조 미니게임을 진행했다.",
      stage: "roomEvening",
      choices: [
        { text: "3일차 시작", next: "schedule_start", effects: { set: { day: 3, timeSlot: "morning" } } },
        { text: "처음부터 다시", next: "prologue_title" }
      ]
    },
    schedule_start: {
      speaker: "시스템",
      text: "3일차부터는 직접 방과 장소를 이동하며 아침, 점심, 저녁, 밤마다 행동을 하나씩 선택한다. 초반 목표는 교신기를 수리해 구조 신호를 보내는 것이다.",
      stage: "room",
      mode: "schedule"
    }
  }
};
