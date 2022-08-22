'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f25c0e16edcfa664981e345470323d1d",
"index.html": "cfd8f9eac540a9f5839cf14f8dd3e84a",
"/": "276ef2c240e9cedceb169daca046d638",
"main.dart.js": "050fc6d278240b54a47127107c40ed8f",
"Laurielis177.github.io/version.json": "f25c0e16edcfa664981e345470323d1d",
"Laurielis177.github.io/index.html": "276ef2c240e9cedceb169daca046d638",
"Laurielis177.github.io/LICENSE": "86d3f3a95c324c9479bd8986968f4327",
"Laurielis177.github.io/main.dart.js": "5f553a1e2b336f7d21d788f73f7fffaf",
"Laurielis177.github.io/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"Laurielis177.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Laurielis177.github.io/_config.yml": "72a4878cd37b3f2b976c0b8a8a35dd94",
"Laurielis177.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Laurielis177.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Laurielis177.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"Laurielis177.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Laurielis177.github.io/manifest.json": "d0964d2741f70f18c59864b807f08431",
"Laurielis177.github.io/.git/gitahead/index/prox": "9212f4fd3a4266a73319591b4dca1f5d",
"Laurielis177.github.io/.git/gitahead/index/post": "9c084c85f0a01bd6d194016a3dcf8df9",
"Laurielis177.github.io/.git/gitahead/index/ids": "e4a2e8db3aef4f549880bcc8a3db81a5",
"Laurielis177.github.io/.git/gitahead/index/version": "9e688c58a5487b8eaf69c9e1005ad0bf",
"Laurielis177.github.io/.git/gitahead/index/dict": "d8cb5ef78aeb82d433d29ec7e420a73c",
"Laurielis177.github.io/.git/config": "953790da1ddd70789919e3f5e01384ca",
"Laurielis177.github.io/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"Laurielis177.github.io/.git/objects/32/60b5a71081eb75f27133760d28652fca45a80f": "0ea92b24d9ef6287b6e9d9eaefaebbad",
"Laurielis177.github.io/.git/objects/56/0dbed50a4418efed1ace969a7d6513f613af26": "719d36aeb17e3b6b9b11283c95f7735f",
"Laurielis177.github.io/.git/objects/d9/e5d6da2e520b5ed6c4f6f47849133e057a8527": "b5697882dce08ea2f23c89d3e6ab2782",
"Laurielis177.github.io/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"Laurielis177.github.io/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"Laurielis177.github.io/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"Laurielis177.github.io/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"Laurielis177.github.io/.git/objects/pack/pack-203a7bfc218914da83090eea583d4c5b650fed09.pack": "9a6298a93ab8765e52aa17b3a3fecd75",
"Laurielis177.github.io/.git/objects/pack/pack-203a7bfc218914da83090eea583d4c5b650fed09.idx": "38829a78984ce199b6fa4c77c961f7ad",
"Laurielis177.github.io/.git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
"Laurielis177.github.io/.git/objects/87/268396f13aad6889ce9f6dee16348be8ebd719": "129dad490d30697126d00a87a1ca4e76",
"Laurielis177.github.io/.git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
"Laurielis177.github.io/.git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
"Laurielis177.github.io/.git/objects/7b/cfcb22e9bcb0d980f9bc30a73d391574593168": "1fac04a2a18e8b7d9f56dcb3955a701c",
"Laurielis177.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"Laurielis177.github.io/.git/objects/7e/addb8154864d83cbb171ce2dc86a262fa8a9f2": "6ac61b314333ca188badef7a004546dd",
"Laurielis177.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"Laurielis177.github.io/.git/objects/07/7ef5f2fb6f5b34ea8eda4503181d8030e97648": "a5a8b9a50e4668b04c4d665dd77d3a6f",
"Laurielis177.github.io/.git/objects/09/165797b69a01c1b8d45c632f653c76e8edaef0": "ad2fc446d25fa773f695f1d48f060443",
"Laurielis177.github.io/.git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
"Laurielis177.github.io/.git/objects/37/7aa76a00d21930539e0c62f6216874d8987e15": "ad2cd8eab67b8b76b3608b6ae265d070",
"Laurielis177.github.io/.git/objects/08/c84ec5d84b1ee18e626fb0bf9b36e8deb4e168": "f67b57f2ab381448db6163cf217548e5",
"Laurielis177.github.io/.git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
"Laurielis177.github.io/.git/objects/b8/8bbdc76b18661608e211ba9fa95a9146ad92d3": "0beec76643ed5eff947881c91a56ce44",
"Laurielis177.github.io/.git/objects/d5/bd3db920fdd121d4f4b1d1b60754c2538a4958": "1aac0ca507d82e7008bdf2c00104b9fc",
"Laurielis177.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"Laurielis177.github.io/.git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
"Laurielis177.github.io/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"Laurielis177.github.io/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"Laurielis177.github.io/.git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
"Laurielis177.github.io/.git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
"Laurielis177.github.io/.git/objects/fa/d2b4e4a4f79dcb0a22d87f2efcc96b8aa34f16": "c2d7f9828b50e8e4c69fbc098355a74f",
"Laurielis177.github.io/.git/objects/ff/755c7812ec9b540b1e0570e6fed12273ece012": "fbf438ad1c3bbb9e911c988db098a825",
"Laurielis177.github.io/.git/objects/ce/a8b27133ad63c6241466c173828ce813ec8aab": "784b423a896f2b5ecb5179b186700502",
"Laurielis177.github.io/.git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
"Laurielis177.github.io/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"Laurielis177.github.io/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"Laurielis177.github.io/.git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
"Laurielis177.github.io/.git/objects/8b/44e9154567ab2657413838f1efa3eaa77efc33": "b1c52828d1926e2304ee13ffc3f69b7d",
"Laurielis177.github.io/.git/objects/25/9a24e4d2e66db04470a6b8362a89452328583e": "75f1f45d1ee5168ec257dd78db6b156e",
"Laurielis177.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"Laurielis177.github.io/.git/info/exclude": "d718c267464b76000574e4fb4d9cbafd",
"Laurielis177.github.io/.git/logs/HEAD": "a8970e5a5dbc8fd3cecc97f5d8029b4a",
"Laurielis177.github.io/.git/logs/refs/heads/main": "64813e71247ccae948068befe7149d58",
"Laurielis177.github.io/.git/logs/refs/remotes/origin/main": "413131e1c31dee5822251f7116dc21b6",
"Laurielis177.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Laurielis177.github.io/.git/hooks/README.sample": "d82bea07313becc69a9abcb4556a924f",
"Laurielis177.github.io/.git/refs/heads/main": "1b6e3c5b682f8213bf449dabfed2c883",
"Laurielis177.github.io/.git/refs/remotes/origin/main": "1b6e3c5b682f8213bf449dabfed2c883",
"Laurielis177.github.io/.git/index": "71ff96ab2217adeadce96a1968db7430",
"Laurielis177.github.io/.git/FETCH_HEAD": "14b8efeff5ae0aacb63c7dc7fc7983cb",
"Laurielis177.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"Laurielis177.github.io/assets/NOTICES": "fb9e9695eff13a72ecc9316559bef51f",
"Laurielis177.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"Laurielis177.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"Laurielis177.github.io/assets/shaders/ink_sparkle.frag": "4225f3edfdf9acd625a73aaca92dde4d",
"Laurielis177.github.io/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"Laurielis177.github.io/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"Laurielis177.github.io/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"Laurielis177.github.io/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"Laurielis177.github.io/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d0964d2741f70f18c59864b807f08431",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "fb9e9695eff13a72ecc9316559bef51f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4225f3edfdf9acd625a73aaca92dde4d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
