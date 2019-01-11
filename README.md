# english-words-fe

> My priceless Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

# editor
pro quilll editor je potřeba přidat plugin a upravit nuxt.config.js viz https://github.com/surmon-china/vue-quill-editor/tree/master/examples/nuxt-ssr-example

Dobré na frontend:
https://www.npmjs.com/package/mongodb-stitch


lsof -nP -iTCP:3000
sudo kill -9 47162

# head + seo
https://www.npmjs.com/package/vue-head
https://github.com/nuxt/nuxt.js/issues/188

TODO:
- bootstrap - produkční prostředí
- smazat duplicitní slovíčka
- ukládání již existujícího slovíčka

#fuck
[https://cdnjs.com/libraries/twitter-bootstrap]
= cloudfare => lepší pokrití v evropě a americe
 - javascript, který načítám z cdn musí mít nataveno (crossorigin="anonymous")
 - integrity = kvůli zabezpečení
 - tree shaking = "sideEffects": false (in package.json)
 - bundle analyze = webpack-bundle-analyzer" ---  http://127.0.0.1:8888/
 - lang in html = head.bodyAttrs.lang="cs" && head.htmlAttrs.lang="cs" (nuxt.config.js)
 - VETUR - doplňek do code. Nastavit 4 mezery jako tab!!!!§
 - setTimeout = 
    - setTimeout(console.log('dd'), 8000)); // provede se hned a nečeká 8 vteřin
    - setTimeout(() => console.log('dd'), 8000)); // vyčká 8 vteřin

 #optimalizace Jarek
 https://www.fontsquirrel.com/tools/webfont-generator - pro generování všech variant
 https://jakearchibald.github.io/svgomg/ - minifikace svg