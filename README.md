# 단칸방의 오리온

스토리 중심 콘솔 감성 어드벤처 게임 프로토타입입니다.

주인공 `이빛나`는 게임을 좋아하는 28살 취준생입니다. 서울의 단칸방에서 막막한 밤을 보내던 중, 옥상에 떨어진 별과 그 안에서 나온 외계 공주 `뿅뿅`을 만나게 됩니다.

## 현재 버전

- 브라우저에서 바로 실행되는 HTML/CSS/JavaScript 프로토타입
- 메인 화면, 타이틀 등장 연출, `PRESS TO START` 시작 입력
- 선택지 기반 도입부
- 단칸방, 옥상, 추락한 별, 외계인 등장 장면
- 외계인 조우 이후 옥상에서 우주선 핵심부를 살펴보는 수리 도입부

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

대화 진행 UI 스프라이트는 아래 경로와 파일명으로 넣으면 됩니다.

- `assets/images/ui/a-key-1.png`: A키 안내 1프레임
- `assets/images/ui/a-key-2.png`: A키 안내 2프레임

컷신 영상은 아래 경로와 파일명으로 넣으면 됩니다.

- `assets/videos/work-screen.mp4`: 작업 화면 장면에서 재생되는 5초 영상

## 실행 방법

`index.html` 파일을 브라우저로 열면 실행됩니다.

개발 중 스프라이트 위치를 조절하려면 로컬 서버 주소 뒤에 `?debug=1`을 붙여 엽니다.

예: `http://127.0.0.1:4173/?debug=1`

메인 화면 타이틀, 별똥별, 시작 문구를 조절하려면 `?debug=2`를 붙여 엽니다.

예: `http://127.0.0.1:4173/?debug=2`

이동 캐릭터 크기와 속도를 조절하려면 `?debug=3`을 붙여 엽니다.

예: `http://127.0.0.1:4173/?debug=3`

## 작업 메모

- 공식 설정 코드 후보: `M32-21E`
- 외계인 임시 이름: `뿅뿅`
- 후반 공개 설정: 다른 차원의 `이빛나`
- 핵심 목표: 우주선 수리를 도우며 주인공이 자기 이야기를 게임으로 만들기 시작하는 성장 서사
