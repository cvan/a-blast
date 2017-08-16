importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/data/waves.js",
    "revision": "f789bab0bd79542cef1c837fbf7b8248"
  },
  {
    "url": "assets/fonts/mozillavr.fnt",
    "revision": "72e49d4cd2154e0659dba86b32a56d8b"
  },
  {
    "url": "assets/fonts/mozillavr.png",
    "revision": "13d1302828b1808b43eef637028509dc"
  },
  {
    "url": "assets/images/damage.png",
    "revision": "a08e62d1e67e26adf086980229cf672f"
  },
  {
    "url": "assets/images/decal0.png",
    "revision": "395dcf3164fae21142f5e682d54a5c2d"
  },
  {
    "url": "assets/images/decal1.png",
    "revision": "e962cc5e3772baa26774f08f3190ef48"
  },
  {
    "url": "assets/images/decal2.png",
    "revision": "41ae336b479f704f7875f9768df172d3"
  },
  {
    "url": "assets/images/enemy_diff.jpg",
    "revision": "9ddfebee6f4f0ce847ac7b89dc7cb270"
  },
  {
    "url": "assets/images/enemy_emissive_template.jpg",
    "revision": "b2e85b394298576348f582b0658af4de"
  },
  {
    "url": "assets/images/enemy_emissive0.jpg",
    "revision": "5cd0c061715f7da3f55690d7109a38f9"
  },
  {
    "url": "assets/images/enemy_emissive1.jpg",
    "revision": "a8fe6a882c4b74262bcc38261f6f23ee"
  },
  {
    "url": "assets/images/enemy_emissive2.jpg",
    "revision": "31daae38e85083a8374e69b4456b0170"
  },
  {
    "url": "assets/images/enemy_emissive3.jpg",
    "revision": "2b5fe041381d663781a1e395fe31de36"
  },
  {
    "url": "assets/images/enemy_spec.jpg",
    "revision": "b10b15313d5d2d627f56fb4e5c49d60a"
  },
  {
    "url": "assets/images/face_guide.png",
    "revision": "74ac80eb2046167486d32db2ff146c5a"
  },
  {
    "url": "assets/images/font.png",
    "revision": "f86cd3ae9e13bda2c4a2aabfe6abbcb4"
  },
  {
    "url": "assets/images/fx1.png",
    "revision": "bae4ade3e4f509756ec1f04fb9392de9"
  },
  {
    "url": "assets/images/fx2.png",
    "revision": "01205cb9cea595b0259dc783bbc1a4fb"
  },
  {
    "url": "assets/images/fx3.png",
    "revision": "c19416fb6c10bfd92882a10af19c431b"
  },
  {
    "url": "assets/images/fx4.png",
    "revision": "34668ea6ef0e4fd959e4358d0aa1212e"
  },
  {
    "url": "assets/images/fx5.png",
    "revision": "7d9f76e7033359fd1d8068cf2f2197c2"
  },
  {
    "url": "assets/images/fx6.png",
    "revision": "7a744d1148d57d401e5b33bf2c9a5970"
  },
  {
    "url": "assets/images/fx7.png",
    "revision": "0480d55cd39e278f9123c72e1fe540ab"
  },
  {
    "url": "assets/images/fx8.png",
    "revision": "9207e0fab4fc1dcc0b1fef835da4cad9"
  },
  {
    "url": "assets/images/grad.png",
    "revision": "8a8b3750d13ba6be6786dfadab7198fc"
  },
  {
    "url": "assets/images/gun_diff.jpg",
    "revision": "425b74b7563e3591ace1132da3a205fc"
  },
  {
    "url": "assets/images/gun_normal.png",
    "revision": "ad779be9001d88627977f9ec547616b6"
  },
  {
    "url": "assets/images/gun_spec.jpg",
    "revision": "2ab623f09ad5eac70281e8e49f2d2ba0"
  },
  {
    "url": "assets/images/menu.png",
    "revision": "e62594e0449c4ca5a0c9f9f6ff66a1b1"
  },
  {
    "url": "assets/images/set_diff.jpg",
    "revision": "d8dd5ca42884eda49436c4931f4effab"
  },
  {
    "url": "assets/images/sky.jpg",
    "revision": "6403cad1e258a70c36772ca4329cab8a"
  },
  {
    "url": "assets/models/border.json",
    "revision": "15bd876bee6b85af533c6679482e969e"
  },
  {
    "url": "assets/models/enemy-bullet.json",
    "revision": "5c512915fe06f6a0b22fa5410a3b4bdb"
  },
  {
    "url": "assets/models/enemy0.json",
    "revision": "8fca0f3e09526b98c6f837658e39360a"
  },
  {
    "url": "assets/models/enemy1.json",
    "revision": "db6a9f84e3c475723a3bad9b0cb5e96a"
  },
  {
    "url": "assets/models/enemy2.json",
    "revision": "a04327ec2747d64a2b708eabd8e7b5d3"
  },
  {
    "url": "assets/models/enemy3.json",
    "revision": "b34e8b7db90650e35699a5087fb92eff"
  },
  {
    "url": "assets/models/gameover.json",
    "revision": "dc40f74b91ed9f743b5503c3a8dcc287"
  },
  {
    "url": "assets/models/gun.json",
    "revision": "0f497891cb804b35f6bec3a865933e95"
  },
  {
    "url": "assets/models/logo.json",
    "revision": "ef5e9a6375fb090593d30aa2d5b1f355"
  },
  {
    "url": "assets/models/player-bullet.json",
    "revision": "8b9a621cf52be9998dca3dd001b97282"
  },
  {
    "url": "assets/models/restart.json",
    "revision": "214eb566cbb503bc8e0c8b8b0c174e34"
  },
  {
    "url": "assets/models/ring.json",
    "revision": "bcc4a1f1dc08e15b062e30055c843aa5"
  },
  {
    "url": "assets/models/welldone.json",
    "revision": "7eea7aff86a1668459f217b06df40f4b"
  },
  {
    "url": "assets/readme/a-blast-1s.gif",
    "revision": "de563a31a9c33329852771517008283f"
  },
  {
    "url": "assets/readme/gun.png",
    "revision": "23526468caeefa1875b469f423e41aea"
  },
  {
    "url": "assets/readme/mainmenu.png",
    "revision": "ffa2abce1f869b37f3ac8e5d79aaa5a7"
  },
  {
    "url": "assets/readme/mainmenu2.png",
    "revision": "dcf254c2092bd49f3390ce8451edf29e"
  },
  {
    "url": "assets/sounds/enemy0shoot.ogg",
    "revision": "dd4f2e78f0c50d072b7041945e55a056"
  },
  {
    "url": "assets/sounds/enemy1shoot.ogg",
    "revision": "3d0a727560d5d1e18cd2b44b396b57d0"
  },
  {
    "url": "assets/sounds/enemy2shoot.ogg",
    "revision": "eb6fa8c671c95a4052ce87b108047985"
  },
  {
    "url": "assets/sounds/enemy3shoot.ogg",
    "revision": "9639558eeef7463adf59e3b6a3802f44"
  },
  {
    "url": "assets/sounds/explosion0.ogg",
    "revision": "98d239842a3a1bdb58f71c2201f6c5ad"
  },
  {
    "url": "assets/sounds/explosion1.ogg",
    "revision": "dc010459fa6c795c4971351667d7f6c8"
  },
  {
    "url": "assets/sounds/explosion2.ogg",
    "revision": "9fc450f28e7bcfb687b977d37e7c3a7a"
  },
  {
    "url": "assets/sounds/explosion3.ogg",
    "revision": "390026c58bc6bf786e1a88296dd2b51f"
  },
  {
    "url": "assets/sounds/gun.ogg",
    "revision": "c5758de5c4391850856591ff6faf21b2"
  },
  {
    "url": "assets/sounds/hitbullet.ogg",
    "revision": "ad96c4ecc8d5df6a09e9cb9ae17b69b7"
  },
  {
    "url": "assets/sounds/hitwall.ogg",
    "revision": "d6fc5a1f188d9d6de32de097b064bad8"
  },
  {
    "url": "assets/sounds/hurt.ogg",
    "revision": "bad71d8c1dadc5433272adb5c72c3db6"
  },
  {
    "url": "assets/sounds/intro.ogg",
    "revision": "fcf5663a9136143c8b3f3ac7862fcbaf"
  },
  {
    "url": "assets/sounds/music.ogg",
    "revision": "573be04aec53761347629a4818404850"
  },
  {
    "url": "build/build.js",
    "revision": "a646651fd298163b120fe5a06f253a39"
  },
  {
    "url": "css/main.css",
    "revision": "8242963dc0820fc40ad58254b721a1b4"
  },
  {
    "url": "vendor/aframe-bmfont-component.js",
    "revision": "96e26b53ba4086b23b1ca29e965c4434"
  },
  {
    "url": "vendor/aframe-bmfont-component.min.js",
    "revision": "727ea38edefb6b5375a678d03b810f1a"
  },
  {
    "url": "vendor/aframe-bmfont-text-component.min.js",
    "revision": "380c0e1a138152e6abbf0da7460fe121"
  },
  {
    "url": "vendor/aframe-master.min.js",
    "revision": "3d0f00a3039d4b8797a7afcc950ea77a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
