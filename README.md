# 단칸방의 오리온

스토리 중심 콘솔 감성 어드벤처 게임 프로토타입입니다.

주인공 `이빛나`는 게임을 좋아하는 28살 취준생입니다. 서울의 단칸방에서 막막한 밤을 보내던 중, 옥상에 떨어진 별과 그 안에서 나온 외계 공주 `뿅뿅`을 만나게 됩니다.

## 현재 버전

- 브라우저에서 바로 실행되는 HTML/CSS/JavaScript 프로토타입
- 메인 화면, 타이틀 등장 연출, `PRESS TO START` 시작 입력
- V1 초안 기준 프롤로그와 1장 `낯선 손님` 대사 진행
- 단칸방 상호작용, 옥상 이동, 별 추락, 뿅뿅 첫 만남 장면
- 1장: 방 소개, 우주선 손상 보고, 아침, 편의점, 라면, 포트폴리오 대화

## 이미지 파일 위치

메인 화면 스프라이트는 아래 경로와 파일명으로 넣으면 됩니다.

- `assets/images/main-screen.png`: 처음부터 보이는 메인 화면 배경 스프라이트
- `assets/images/title.png`: 아래에서 위로 올라오며 서서히 나타나는 타이틀 스프라이트
- `assets/images/shooting-star.png`: 메인 화면을 가로지르는 별똥별 스프라이트
- `assets/images/title-bina-smoking.png`: 메인 화면 난간 흡연 주인공 스프라이트
- `assets/images/cigarette-light-1.png`: 담배불 1프레임
- `assets/images/cigarette-light-2.png`: 담배불 2프레임
- `assets/images/cigarette-smoke-1.png`: 담배연기 1프레임
- `assets/images/cigarette-smoke-2.png`: 담배연기 2프레임

캐릭터 스프라이트는 아래 경로와 파일명으로 넣으면 됩니다.

- `assets/images/characters/bina-portrait.png`: 이빛나 대화창 좌측 초상
- `assets/images/characters/bina-sprite.png`: 이빛나 인게임 스프라이트
- `assets/images/characters/bina-walk-side-1.png`: 이빛나 좌우 이동 4프레임 스프라이트 시트, 2열 x 2행
- `assets/images/characters/bina-walk-up-1.png`: 이빛나 위 이동 2프레임 스프라이트 시트, 2열 x 1행
- `assets/images/characters/bina-walk-down-1.png`: 이빛나 아래 이동 2프레임 스프라이트 시트, 2열 x 1행
- `assets/images/characters/pyong-portrait.png`: 뿅뿅 대화창 좌측 초상
- `assets/images/characters/pyong-sprite.png`: 뿅뿅 인게임 스프라이트

인게임 배경 이미지는 아래 경로와 파일명으로 넣으면 됩니다.

- `assets/images/scene-room.png`: 단칸방 배경
- `assets/images/scene-roof.png`: 옥상 배경
- `assets/images/scene-convenience-store.png`: 1장 편의점 배경
- `assets/images/scene-street-day.png`: 1장 낮 골목/편의점 이동 배경
- `assets/images/scene-ship-interior.png`: 2장 이후 우주선 내부 배경

추가하면 좋은 오브젝트/이벤트 스프라이트 후보는 아래와 같습니다.

- `assets/images/objects/defeat-screen.png`: 프롤로그 게임 패배 화면
- `assets/images/objects/alien-capsule.png`: 옥상에 떨어진 캡슐/우주선
- `assets/images/objects/hologram-report.png`: 우주선 손상 보고 홀로그램
- `assets/images/objects/portfolio-screen.png`: 빛나의 포트폴리오 화면
- `assets/images/objects/ramen-cup.png`: 라면 식사 장면 소품
- `assets/images/objects/hotbar.png`: 편의점 핫바 소품

추가 캐릭터 스프라이트 후보는 아래와 같습니다.

- `assets/images/characters/pyong-hoodie-portrait.png`: 변장한 뿅뿅 대화 초상
- `assets/images/characters/pyong-hoodie-sprite.png`: 변장한 뿅뿅 인게임 스프라이트
- `assets/images/characters/bina-room-portrait.png`: 피곤한 방 안 빛나 표정
- `assets/images/characters/bina-roof-portrait.png`: 옥상 흡연/독백용 빛나 표정

대화 진행 UI 스프라이트는 아래 경로와 파일명으로 넣으면 됩니다.

- `assets/images/ui/a-key-1.png`: A키 안내 1프레임
- `assets/images/ui/a-key-2.png`: A키 안내 2프레임

컷신 영상은 아래 경로와 파일명으로 넣으면 됩니다.

- `assets/videos/work-screen.mp4`: 작업 화면 장면에서 재생되는 5초 영상

## 실행 방법

`index.html` 파일을 브라우저로 열면 실행됩니다.

개발 중 조절 패널을 열려면 로컬 서버 주소 뒤에 `?debug=1`을 붙여 엽니다.

예: `http://127.0.0.1:4173/?debug=1`

디버그 공통 조절 항목:

- `?debug=1`: 캐릭터, 메인 화면, 이동/상호작용 디버그를 오른쪽 메뉴에서 전환하는 통합 디버그
- `Camera X`, `Camera Y`, `Camera Zoom`: 인게임 스테이지 카메라 위치와 줌
- `Camera Duration`: 다음 카메라 값으로 이동하는 시간(ms)
- Debug1 `Character`: 이빛나, 뿅뿅, 김철수의 인게임 좌표/크기/가로 세로 비율/대화 초상 위치를 캐릭터별로 조절
- Debug1 `Stage X Scale`, `Stage Y Scale`: 현재 선택한 캐릭터 스프라이트의 가로/세로 비율

스토리 장면마다 카메라 값을 고정하거나 천천히 이동시키려면 해당 scene에 `camera`를 추가합니다.

```js
camera: { x: 12, y: -10, zoom: 1.18, duration: 1400 }
```

대사 A에서 대사 B까지 카메라가 움직이는 연출은 대사를 별도 scene으로 나누고, B scene에 목표 카메라 값을 넣어 표현합니다.

## 작업 메모

- 공식 설정 코드 후보: `M32-21E`
- 외계인 임시 이름: `뿅뿅`
- 후반 공개 설정: 다른 차원의 `이빛나`
- 핵심 목표: 우주선 수리를 도우며 주인공이 자기 이야기를 게임으로 만들기 시작하는 성장 서사
