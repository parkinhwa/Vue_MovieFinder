## Movie Finder with Vue
[![Netlify Status](https://api.netlify.com/api/v1/badges/0e7fb811-cb56-47a7-a641-ba6831e05650/deploy-status)](https://app.netlify.com/sites/fastidious-snickerdoodle-3a9c1c/deploys)

π [Movie Finder λ§ν¬](https://main--fastidious-snickerdoodle-3a9c1c.netlify.app/)

![ezgif com-gif-maker (11)](https://user-images.githubusercontent.com/65644486/170838805-894eb18c-6f1d-46ac-9cfb-bf4fd52154ed.gif)


### νλ‘μ νΈ κ΅¬μ‘°

```
Vue_MovieFinder
ββ .gitignore
ββ .netlify
β  ββ edge-functions-import-map.json
ββ functions
β  ββ moviedetail.js
β  ββ movielist.js
ββ netlify.toml
ββ package-lock.json
ββ package.json
ββ README.md
ββ src
β  ββ App.vue
β  ββ assets
β  β  ββ img
β  β  β  ββ bg-mobile-fallback.jpg
β  β  ββ mp4
β  β     ββ bg.mp4
β  ββ components
β  β  ββ Modal.vue
β  β  ββ Skelotons.vue
β  ββ css
β  β  ββ styles.css
β  ββ index.html
β  ββ main.js
β  ββ routes
β  β  ββ index.js
β  β  ββ MainPage.vue
β  β  ββ NotFound.vue
β  β  ββ SearchPage.vue
β  ββ store
β     ββ index.js
β     ββ movies.js
ββ static
β  ββ _redirects
ββ webpack.config.js

```
**assets** 

    - μ΄λ―Έμ§ λ°μ΄ν° 
**component** 

    - Modal : μν μΈλΆμ λ³΄λ₯Ό λ³΄μ¬μ€λλ€.
    - Skelotons: Modalμ loading μ€ νλ©΄μ λ³΄μ¬μ€λλ€.
**routes**

    - MainPage: λ©μΈνμ΄μ§ μλλ€.
    - NotFoundPage: 404 μλ¬ νμ΄μ§ μλλ€.
    - SearchPage: κ²μκ²°κ³Όλ₯Ό κ°μ Έμ€κ³  κ²μμ΄ κ°λ₯ν νμ΄μ§μλλ€.  
**store**

    - movies: fetchλ‘ api μ°λν΄μ κ²μ κ²°κ³Όμ μν μ λ³΄λ₯Ό κ°μ Έμ΅λλ€.

