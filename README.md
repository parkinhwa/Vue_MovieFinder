## Movie Finder with Vue
[![Netlify Status](https://api.netlify.com/api/v1/badges/0e7fb811-cb56-47a7-a641-ba6831e05650/deploy-status)](https://app.netlify.com/sites/fastidious-snickerdoodle-3a9c1c/deploys)

👉 [Movie Finder 링크](https://main--fastidious-snickerdoodle-3a9c1c.netlify.app/)

![ezgif com-gif-maker (11)](https://user-images.githubusercontent.com/65644486/170838805-894eb18c-6f1d-46ac-9cfb-bf4fd52154ed.gif)


### 프로젝트 구조

```
Vue_MovieFinder
├─ .gitignore
├─ .netlify
│  └─ edge-functions-import-map.json
├─ functions
│  ├─ moviedetail.js
│  └─ movielist.js
├─ netlify.toml
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ img
│  │  │  └─ bg-mobile-fallback.jpg
│  │  └─ mp4
│  │     └─ bg.mp4
│  ├─ components
│  │  ├─ Modal.vue
│  │  └─ Skelotons.vue
│  ├─ css
│  │  └─ styles.css
│  ├─ index.html
│  ├─ main.js
│  ├─ routes
│  │  ├─ index.js
│  │  ├─ MainPage.vue
│  │  ├─ NotFound.vue
│  │  └─ SearchPage.vue
│  └─ store
│     ├─ index.js
│     └─ movies.js
├─ static
│  └─ _redirects
└─ webpack.config.js

```
**assets** 

    - 이미지 데이터 
**component** 

    - Modal : 영화 세부정보를 보여줍니다.
    - Skelotons: Modal의 loading 중 화면을 보여줍니다.
**routes**

    - MainPage: 메인페이지 입니다.
    - NotFoundPage: 404 에러 페이지 입니다.
    - SearchPage: 검색결과를 가져오고 검색이 가능한 페이지입니다.  
**store**

    - movies: fetch로 api 연동해서 검색 결과와 영화 정보를 가져옵니다.

