importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0dcb2eb00640d3c9d613.js",
    "revision": "e187bea978be87b2d4086cde876d098b"
  },
  {
    "url": "/_nuxt/1c7af93b370b2387c235.js",
    "revision": "1dd507c6269f04554b2aaf2f2e4590c3"
  },
  {
    "url": "/_nuxt/216294ec1f8e475935b1.js",
    "revision": "5ebd1b0c80d2f64915865e06d768a872"
  },
  {
    "url": "/_nuxt/46c62c351e4d2230c952.js",
    "revision": "fa8b946ef0be83f7694b03ebf9ddc52c"
  },
  {
    "url": "/_nuxt/59f82ed1f1c80bb6e106.js",
    "revision": "dd8726a5a7092f2857423e9d1ada6205"
  },
  {
    "url": "/_nuxt/5c0ffa1b9361dc540b65.js",
    "revision": "298227bdbb3ccd2aea59d8b491e3bcb7"
  },
  {
    "url": "/_nuxt/6381902f29523a4f418b.js",
    "revision": "edc6dfcbc22b0f0ef99b303abfb215d1"
  },
  {
    "url": "/_nuxt/7eb572d8357c58444814.js",
    "revision": "716993ad554baddef750c562e3da317c"
  },
  {
    "url": "/_nuxt/87cefba3dca9632cc749.js",
    "revision": "f39901a9892ee90e382881496e6c9764"
  },
  {
    "url": "/_nuxt/cb3d8faa18d0ba2781bf.js",
    "revision": "f6911304938302545ffa711729d6913f"
  },
  {
    "url": "/_nuxt/ccb87e1f85692e10e1f0.js",
    "revision": "2e5106e2b03e6c5405d78da51d899830"
  },
  {
    "url": "/_nuxt/ceb521fea87fb901fe96.js",
    "revision": "bac4d3779663d38a89ec53c76d113e0c"
  },
  {
    "url": "/_nuxt/e8e8f7b3d11629cb2155.js",
    "revision": "751edf120609336daf22626552f13ee6"
  },
  {
    "url": "/_nuxt/ee1357c3e2a0a28c90b0.js",
    "revision": "9b0c5a5b6f8f91c3ef59d3867ca71070"
  },
  {
    "url": "/_nuxt/f597bd4ca1186a18e437.js",
    "revision": "a8768d279c0c397af402b9f3ca3fb546"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
