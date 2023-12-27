# 📖 경복궁 별빛야행 README
<div align='center'>
 <img src='https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/955ae141-efe6-49af-8ec5-72237742194d'>
</div>
<br/>
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
- 별빛야행 사이트는 PWA 형태로 제작되었습니다.
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
<img src='https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/57dff321-30f8-4bf9-a639-c1e13fbf0c0d' width='400px' height='auto' alt='별빛야행 정보구조도1'><br>
<img src='https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/10483e82-c669-4344-8313-4fae629f268c' width='400px' height='auto' alt='별빛야행 정보구조도2'>

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


## 5. 개발 기간

### 개발 기간

- 전체 개발 기간 : 2023-10-11 ~ 2023-11-13
- 벤치마킹, 자료조사, 설계, 레이아웃, 디자인 : 2023-10-11 ~ 2023-10-22
- 코드 분담 및 개인 개발 : 2023-10-23 ~ 2023-11-07
- 완성본 취합 및 테스트 , 코드 리뷰 & 평가 & 수정 / ppt 제작 : 2023-11-08 ~ 2023-11-12
- 최종 : 2023-11-13 (1달)
<br>

<br>

## 6. 페이지별 기능(민규리)
![조원comm](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/ad56c8d0-972c-42bf-bc69-fae3144126b9)
![별빛야행소개 ](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/2af5d1a7-6040-408a-af91-5b693f97d230)
![메인sec2](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/81a4bfef-c2d3-49b8-9152-ac1348576cc0)
![다국어](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/b83f1b5a-788b-4c9e-8575-893851ce5e28)
![로그인](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/145549d9-9365-4364-ad81-c591d6e73780)


### [초기화면]
- blender로 제작한 3d 별빛야행 text

| 인트로 3D text |
|----------|
|![조원1](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/d2e0085f-63c5-4304-8533-7a93ca7912cd)|

<br>

### [다국어]
- i18next는 자바스크립트에서 국제화 프레임워크로 쓰인다. Node.js, PHP, iOS, Android 및 기타 플랫폼과 함께 i18next를 사용할 수도 있다.

| 다국어 지원 |
|----------|
|![다국어](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/b83f1b5a-788b-4c9e-8575-893851ce5e28)|

<br>

### [MAIN Section 02]
- 원페이지 가로 스크롤로 제작하여 데스크탑과 노트북 환경에서 깔끔한 맛이 있습니다.

| 메인페이지 sec2 |
|----------|
|![메인sec2](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/81a4bfef-c2d3-49b8-9152-ac1348576cc0)|

<br>


### [별빛야행 소개]

#### 1. AOS & 카카오 MAP API
- REACT AOS 라이브러리 사용하여 정보를 동적으로 전달할 수 있게 FADE 애니메이션 효과를 주었습니다.
- 카카오 MAP API를 연결하여 화면상에 지도를 나타냈습니다.
- 위치 정보 제공에 동의하면 실시간 현위치도 알 수 있습니다.
- 경복궁 위치를 기본값으로 설정해놨습니다.

| 별빛야행 소개 |
|----------|
|![별빛야행소개 ](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/2af5d1a7-6040-408a-af91-5b693f97d230)|


<br>
### [커뮤니티]

#### 1. 글 등록, 삭제, 상세페이지
- 문의사항 페이지에 글을 입력하면 공지사항 페이지에 글이 등록됩니다.
- 해당 게시물을 누르면 상세페이지로 이동하게 됩니다.
- 목록 버튼을 누르면 공지사항 페이지로 이동하게 됩니다.
- 삭제 버튼을 누르면 해당 게시물이 삭제됩니다.

| 게시글 |
|----------|
|![조원comm](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/ad56c8d0-972c-42bf-bc69-fae3144126b9)|


<br>
### [로그인, 회원가입]
- 회원가입 버튼 클릭시 alert 회원축하 메시지
- jsx, css3 제작

| 로그인 & 회원가입 |
|----------|
|![로그인](https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour/assets/118513511/145549d9-9365-4364-ad81-c591d6e73780)|

<br>


## 7. 프로젝트 후기

### 🍊 민규리

정말 좋은 팀원들을 만나서 협업 과정 자체가 즐거웠다. 자유롭게 의견과 지식을 나눌 수 있는 분위기였고 개인적으로도 친해질 수 있는 계기가 된 것 같다. 공식적인 PM이 없어도 각자의 맡은 분야에서 적극적으로 행동했기에 원활하게 진행될 수 있었다. 
하지만 첫 번째 팀 프로젝트인 만큼 협업도구 github 사용이 익숙지 못해 깃허브를 이용해서 코드 리뷰를 진행하는 대신 주 2-3회 팀원들끼리 코드 리뷰와 회의를 진행해 소통을 이루어냈다.
카카오 로그인 api를 이용하여 로그인 기능 구현에 대해 더 알아보고 싶지만 프로젝트 진행을 위해 일단 넘어갔다. 이외에도 다른 기술 원리와 사용법을 완벽하게 이해하고 적용하면 좋겠지만 현실은 그렇지 않았다. 다행히 열심히 메모를 해둔 덕분에 언제든지 다시 그 순간으로 되돌아가서 공부하고 연습해 볼 수 있다. 지금은 바로 2차 프로젝트를 시작해서 여유가 없지만 나중이라도 반드시 시간을 내서 비어있는 부분을 채워야겠다.




