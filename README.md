# 📖 경복궁 별빛야행 README
<div align='center'>
 <img src='https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/955ae141-efe6-49af-8ec5-72237742194d'>
</div>
- 배포 URL : https://kyuleee.github.io/Gyeongbokgung-Starlight-Tour

<br/><br/>

<div align='left'>
 <img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"> 
 <img alt="Css3" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"> 
 <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"> 
 <img alt="react" src ="https://img.shields.io/badge/React-61DAFB?&style=for-the-badge&logo=React&logoColor=white"> 
 <img alt="Node.js" src ="https://img.shields.io/badge/Node.js-339933?&style=for-the-badge&logo=nodedotjs&logoColor=white"> 
 <img alt="npm" src ="https://img.shields.io/badge/npm-CB3837?&style=for-the-badge&logo=npm&logoColor=white"> 
 <img alt="three.js" src ="https://img.shields.io/badge/three-000000?&style=for-the-badge&logo=threedotjs&logoColor=white"> 
</div>
## 프로젝트 소개

- 별빛야행은 경복궁에서 열리는 별빛야행 축제를 소개하는 사이트입니다.
- 별빛야행 사이트는 PWA형태로 제작되었습니다.
- 메인 페이지에 경복궁 3D 모델을 넣어 현대적이고 창의적인 이미지를 투영하여 사용자들에게 더 긍정적인 인상을 주고 있습니다.
- 별빛야행이라는 주제와 어울리게 별이 쏟아지는 듯한 배경을 3D로 제작하여 사용자의 눈길을 끌어냈습니다.
- 영어 다국어 지원


<br>

## 팀원 구성

<div align="center">

| **민규리(장비)** | **조성민(팀장/유비)** | **전완진(관우)** | 
| :------: |  :------: | :------: | 
| [<img src="https://avatars.githubusercontent.com/u/106502312?v=4" height=150 width=150> <br/> @kyuleee](https://github.com/kyuleee) | [<img src="https://github.com/kyuleee/docsuri/assets/118513511/b8981a9e-a03f-47e8-a776-6766e385901a" height=150 width=150> <br/> @CuteSungMin](https://github.com/CuteSungMin)  | [<img src="https://github.com/kyuleee/docsuri/assets/118513511/9c975c20-8414-472d-b0d2-9f990040c392" height=150 width=150> <br/> @jeonwanjin](https://github.com/jeonwanjin) |
</div>

<br>

## 1. 개발 환경

- 사용한 프레임워크 & 언어 : JSX, javascript, CSS3, node.js, npm, React, three.js
- 협업 툴, 버전 관리 : Github
- 디자인 : [Figma](https://www.figma.com/file/m57smaTc5OhMeQscw94g66/%EC%A1%B0%EC%9B%90%EA%B2%B0%EC%9D%98?type=design&node-id=103-8&mode=design&t=6THmCqlTc0UW21zB-0)
- 사용프로그램 : vscode, Blender, illustrator, photoshop, 3ds Max
- 사용 패키지 :  React-router-dom , gh-pages, three.js, kakao map API, react-i18next
<br>


## 2. 채택한 개발 기술과 브랜치 전략

### React

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.

### 브랜치 전략

- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, feature 브랜치로 나누어 개발을 하였습니다.
    - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **develop** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
    - **feature** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

## 3. 프로젝트 구조
![조원정구](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/10483e82-c669-4344-8313-4fae629f268c)

<br>

## 4. 역할 분담

### 🍊민규리

- **UI 및 기능**
    - 페이지 : 별빛야행 소개, 공지사항, 공지사항 상세, 문의사항, 로그인, 회원가입
    - 컴포넌트 : 메인 SECTION3, FOOTER 컴포넌트
    - 기능 : 다국어 지원
    - 디자인 : 메인 인트로 3d text (별빛야행 3d 모델)

<br>
    
### 👻조성민

- **UI 및 기능**
    - 페이지 : 경복궁 행사, 로딩 페이지, three.js 궁
    - 컴포넌트 : header, section 1, section 5, footer


<br>

### 😎전완진

- **UI 및 기능**
    - 페이지 : 메인프로그램, faq, 갤러리, 회원가입, three.js 궁 / 별 배경
    - 컴포넌트 : 메인 section 2, section 4
    - 디자인 : 메인 인트로 경복궁 3d 모델

<br>


## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2023-11-13 ~ 2023-12-15
- 프로젝트 주제 선정 ,벤치마킹 사이트 선정 및 레이아웃 구상 : 2023-11-13 ~ 2023-11-15
- Figma 디자인 작업 및 3D 모델링, 작업환경 구성 : 2023-11-16 ~ 2023-11-22
- 코딩 분담 작업 및 코드 컨벤션 : 2023-11-23 ~ 2023-12-12
- 최종 완성 및 ppt 제작 : 2023-12-13 ~ 2023-12-15
<br>

<img src='https://github.com/kyuleee/docsuri/assets/118513511/6597a21a-659b-4a04-9199-14f52a1b45a4' width='500px' height='auto'/>
<br>

### 작업 관리

- GitHub Desktop를 사용하여 코드를 관리했습니다.
- 주간회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 개발 회의록을 작성했습니다.

<br>

## 6. 페이지별 기능(민규리)

### [초기화면]
- 초기에 필요한 자원을 불러오고 설정하는데 시간이 걸립니다.
- 로딩 페이지를 통해 이러한 기술적인 처리 시간을 숨겨 사용자 경험을 개선할 수 있었습니다. 

| 초기화면 |
|----------|
|![독수리 로딩](https://github.com/kyuleee/docsuri/assets/118513511/8ca21e5b-5233-4ece-9327-a74eaedf3140)|

<br>

### [Header 기능]
- session storage 사용자 정보 여부 확인
- 로그인이 되어 있지 않은 경우 : SNS 로그인 페이지
- 로그인이 되어 있는 경우 : 마이페이지

| 마이페이지 icon |
|----------|
|![로그인기능](https://github.com/kyuleee/docsuri/assets/118513511/6d266d6a-3117-45ea-bee4-6bab603e1f5a)|

<br>

### [마이페이지]
- 로그인 페이지의 유효성 검사를 통과해야 진입할 수 있습니다.
- 마이페이지에 필요한 프로필 사진, 사용자 이름, 계정 ID, password, 학년, 학교를 넘겨받습니다.
- 프로필 사진은 등록하지 않을 경우 기본 이미지가 등록됩니다.
- 로그인 버튼 클릭 시 id 또는 비밀번호가 일치하지 않을 경우에는 마이페이지로 이동하지 못하며, 로그인에 성공하면 마이페이지로 이동합니다.
- 로그아웃시 세션 저장소의 토큰 값과 사용자 정보를 삭제하고 로그인 페이지로 이동합니다.

| 마이페이지 & 로그인 & 회원가입 |
|----------|
|![마이페이지](https://github.com/kyuleee/docsuri/assets/118513511/e4ca2e78-a305-4e5a-a0db-a9a690e4fe2f)|

<br>


### [게시글]

#### 1. 수다학 & 검색 기능
- 글이 입력하면 하단에 글이 업로드 됩니다.
- 타 유저의 게시글에 모달 버튼을 통해 댓글을 작성할 수 있습니다.
- 댓글 수는 실시간으로 페이지에 반영됩니다.
- 댓글 포함된 단어를 검색할 수 있습니다.
- 검색 아이콘 클릭 시 검색어와 일치하는 글을 검색할 수 있습니다.

| 게시글 |
|----------|
|![수다학](https://github.com/kyuleee/docsuri/assets/118513511/9ba4db2d-c9e2-47cc-b74f-7f5db505863a)|


<br>

 ![조원1](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/d2e0085f-63c5-4304-8533-7a93ca7912cd)

## 7. 프로젝트 후기

### 🍊 민규리

팀 프로젝트 팀장으로서 일을 하면서 많은 도전과 성취를 맛보게 되었습니다. 먼저 도전적인 일정과 업무 분배에서부터 시작해서, 팀원들의 다양한 의견과 아이디어를 조화롭게 결합하는 것까지, 다양한 측면에서의 역할이 팀장으로서 주어진 것 같습니다. 전반적으로, 팀 프로젝트 팀장으로서의 경험은 제게 리더십, 협업, 문제 해결능력을 향상시킬 수 있는 소중한 기회였습니다. 이런 경험을 통해 배운 것들은 앞으로의 여러 일상에서도 큰 도움이 될 것 같습니다.


<br>

### 👻 강민구

고생 많으셨습니다. 너무 뜻 깊은 시간이었고 많은 걸 배웠습니다. 모두 성공하실 실력들을 가진 것 같습니다. 


<br>

### 😎 김정은

개인적으로 이번 프로젝트는 많은 것들을 배우고 익힐 수 있는 시간이었던 것 같습니다. 작게나마 도움이 되기 위해 노력하고 공부하다보니 개인 역량까지 향상된 것 같아 뿌듯하네요^^ 모든 팀원분들 정말 고생들 많으셨고 도움 감사했습니다.


<br>

### 🐬 박진수

최적화 및 데이터 전달에 대해서 깊게 생각할 수 있었고 개발을 진행함에 있어서 보다 수월한 방식을 추구할 수 있으리라 기대합니다.


