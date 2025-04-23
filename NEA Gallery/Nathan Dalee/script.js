//const e = require("express");

let tilemap1 = [
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  "b....r...........................................b",
  "b....r......t...t...t....t.....t........t.....t..b",
  "b....r..t...................t.........h...h......b",
  "b....rr....t.........t...............rrrrrrr..t..b",
  "b.....r.......trrrrrrrr.t......t....tr..t..rt....b",
  "b.....rr...t...rt..t..rrrrrr........rr.....r...t.b",
  "b.t....r.......r..t...t..h.rt.......r......rrt...b",
  "b......rrrrr.t.r........t..rrrrrrr.tr....t.trr...b",
  "b.......r..rrrrr.............t..trrrrt.......r...b",
  "b...t...r.......t.....t.....................trrt.b",
  "b.......rr..t......t..........................r..b",
  "b........r...............t......t.......t.....r..b",
  "b........rr....t............t......t.......h..rrrb",
  "b.........rrr......t....t..................rrrr.hb",
  "b.t.......r.rrrr......h............h....rrrr.....b",
  "b.........r....rrrrrrrrrrrrrrrrrrrrrrrrrr........b",
  "b....h...rr.t...h..........r.................t..tb",
  "b..hrrrr.r.................rh........t...........b",
  "b....h.rrr................rr.....................b",
  "b........rt........t.....hr....................hrb",
  "b.......rr................r...............hr....rb",
  "b.......r....h..h........hrh.......h.......r...rrb",
  "b.......r.t..rrrr.........r...t....r.....hrrh..r.b",
  "b.......r...rr.h..........rr......rr......r...hr.b",
  "b.......rrrrr.............hrr....hr......hr....rhb",
  "b........r..h...............rrr...rh.h.h..rh.h.r.b",
  "b........r....................rrrrrrrrrrrrrrrrrrrb",
  "b..t.....r.........t...........r.h.h..r..h.h.r.h.b",
  "b........r...................h.rh....hr......r...b",
  "b........rr..............t...rrr......r.....hrrh.b",
  "b.......h.r.................hr.......rrh......r..b",
  "b...h.rrrrrr.t...............rh....t.r......rrrh.b",
  "b...rrrh...r.................r............hrr.r..b",
  "b.t........rr...............................h.r..b",
  "b...........rr...t...................t........rr.b",
  "b............rrrr....t....................t....r.b",
  "b.....hr........rrrr...........t...............r.b",
  "b......r........r..rrrrrrrrrrrrrrrrrrrr....h...r.b",
  "b......rh.......r........r..h....r..h.rrrrr....r.b",
  "b......rr.....rrr.......hrr....rrr........rrrrrrrb",
  "b.......r.h.rrrh..........r....r.........rr......b",
  "b.h...h.rrrrr........t...hr....rh........rh......b",
  "brrrrrrrr...r.............r....r.........r.......b",
  "b...........rr..........................hrrrr....b",
  "b...........hrr.............................r....b",
  "b.t...........r.............................h....b",
  "b........t....rh...t....t..t....t....t...........b",
  "b................................................b",
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
];

let tilemap2 = [
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  "b..rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr....b",
  "b..r...r.................r..................rr...b",
  "b.rr...r.................r...................r...b",
  "b.r....r.................r...................rr..b",
  "brr....r.................r....................r..b",
  "br.....r.................r..rrrrrrrr..........rr.b",
  "br.....r.................r.rr......rrr.........r.b",
  "br.....r...............rrrrr.........rr........r.b",
  "br.....rrr.............r.r............rr.......r.b",
  "br.......rr...........rr.r.............r.......r.b",
  "br........r..........rr..r.............rr...rrrrrb",
  "br........rrrrrrrrrrrr...r..............rrrrr...rb",
  "br.........r.............r...............r......rb",
  "br........rrr............r..............rr......rb",
  "br.......rr.rr...........r.............rr.......rb",
  "br......rr...rr..........r.............r........rb",
  "br.....rr.....rr.........r............rr........rb",
  "br....rr.......rr........r...........rr.........rb",
  "br....r.........r........r..........rr..........rb",
  "br...rr.........rr.......r..........r...........rb",
  "br...r...........rr......r..........r...........rb",
  "br...r............r......r.........rr...........rb",
  "br...r............r......r.........r............rb",
  "brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrb",
  "br....r............r.....r............r.........rb",
  "br....r............r.....r............r.........rb",
  "br....r............rr..rrr............r.........rb",
  "br....r.............r.rr.r............r.........rb",
  "br....rr............r.r..r............r.........rb",
  "br.....r............rrr..r............r.........rb",
  "br.....r..........rrr....r........rrrrrrrrrr....rb",
  "br.....r.........rr.r....r.....rrrr........rrrrrrb",
  "br.....r.......rrr..r....r...rrr................rb",
  "br.....r.....rrr....r....r.rrr..................rb",
  "br.....r.rrrrr......r....rrr....................rb",
  "brrrrrrrrr...r......rr...r......................rb",
  "br...........r.......rr..r......................rb",
  "br...........r........rrrr.....................rrb",
  "br...........r...........rrrrrrr...............r.b",
  "br...........r...........r.....rrr.............r.b",
  "br...........r...........r.......rr............r.b",
  "br...........r...........r........rr..........rr.b",
  "brr.........rr...........r.........rr........rr..b",
  "b.rr........r............r..........rrr.....rr...b",
  "b..rr......rr............r............rrr...r....b",
  "b...rrr....r.............r..............rrrrr....b",
  "b.....rrrr.r.............r..........rrrrr........b",
  "b........rrrrrrrrrrrrrrrrrrrrrrrrrrrr............b",
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
];

let tilemap3 = [
  "..................................................",
  "..................................................",
];

// Global Variables
let moveToHTP = false;
let startButton, HTPButton, backButton, information;
let player,
  game = false,
  tileSize = 50,
  timer = 5,
  tornadoStrength = 1;
  time = 0,
  stage = 0;
let currentTiles;
let weatherText;
let movementSpeed = 10,
  spawnSuccess = true,
  attemptingSpawn;
let stormChaser,
  spawnX,
  spawnY,
  enemies = [];
let maxEnemies = 10,
  lastDamageTime = 0,
  damageCooldown = 100;
let currentWave = 0,
  enemiesToSpawn = 10,
  enemiesRemaining = 0;
let coinCounter = 0;
let gameOver = false;
let runMM = false;
let postdeathCorrection = false;
let tree, tiles1, tiles2;
let spinimg;
let homepage;
let home;
let treeimg;
let houseimg;
let carimg;
let spawnspinimg;
let homeplay;
let homehow;
let playscreen;
let gobackHTP;
let HTP;
let gameoverimg;
let gameoverGlowup;
let gameoverGlowmm;
let frameCounter = 0;
let startCounting = false;
let HTPchecker = false;
let upgradebaseMenu;
let upgradeChecker = false;
let upgradeOne = 0;
let upgradetwo = 0;
let upgradethree = 0;
let upgradefour = 0;
let tornadoScale = 1;
let onlyOnce = false;
let sizeSurgeActive = false;
let upthreerunOnce = false;
let speedPerk = 1.0;
let speedPerkActive = false;
let upgradeMenuButton;
let mainMenuButton;
let floorb;
let font;
// PATHFINDING STUFF

let path, grid, node, movingSprite;
let path2, grid2;
let movementS = 5;
let trafficDirect = 0;


let matrix = [
  [
    1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  [
    1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
  ],
  [
    1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
  ],
  [
    1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
  ],
  [
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
  ],
  [
    1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1,
    0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
    0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1,
  ],
  [
    1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
  ],
  [
    1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
  ],
  [
    1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  ],
  [
    1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
];

const spawnTimer = new Timer();

function pathFinding() {
  node = new Group();
  node.radius = 10;
  node.collider = "n";
  console.log(trafficDirect, "++++");
  if (trafficDirect == 0) {
    grid = new PF.Grid(matrix);
    let finder = new PF.AStarFinder();
    path = finder.findPath(floor(3), floor(1), 44, 45, grid);
    for (p of path) {
      let n = new node.Sprite(p[0] * 50, p[1] * 50);
      n.visible = false;
      console.log("donedone");
    }
  } else if (trafficDirect == 1) {
    grid = new PF.Grid(matrix);
    let finder = new PF.AStarFinder();
    path = finder.findPath(floor(1), floor(43), 19, 27, grid);
    for (p of path) {
      let n = new node.Sprite(p[0] * 50, p[1] * 50);
      n.visible = false;
      console.log("donedone");
    }
  }
    else if (trafficDirect == 2) {
      grid = new PF.Grid(matrix);
      let finder = new PF.AStarFinder();
      path = finder.findPath(floor(46), floor(4), 31, 33, grid);
      for (p of path) {
        let n = new node.Sprite(p[0] * 50, p[1] * 50);
        n.visible = false;
        console.log("donedone");
      }
  }
    else if (trafficDirect == 3) {
      grid = new PF.Grid(matrix);
      let finder = new PF.AStarFinder();
      path = finder.findPath(floor(48), floor(33), 1, 37, grid);
      console.log(path)
      for (p of path) {
        let n = new node.Sprite(p[0] * 50, p[1] * 50);
        n.visible = false;
        console.log("donedone");
      }
  }
    else if (trafficDirect == 4) {
      grid = new PF.Grid(matrix);
      let finder = new PF.AStarFinder();
      path = finder.findPath(floor(1), floor(20), 35, 7, grid);
      for (p of path) {
        let n = new node.Sprite(p[0] * 50, p[1] * 50);
        n.visible = false;
        console.log("donedone");
      }
  }
  else if (trafficDirect == 5) {
    grid = new PF.Grid(matrix);
    let finder = new PF.AStarFinder();
    path = finder.findPath(floor(12), floor(48), 11, 13, grid);
    for (p of path) {
      let n = new node.Sprite(p[0] * 50, p[1] * 50);
      n.visible = false;
      console.log("donedone");
    }
  }
}

function moveAI(enemy, nodeGroup) {
  if (nodeGroup[enemy.counter]) {
    enemy.moveTo(nodeGroup[enemy.counter], movementS);
    if (enemy.overlaps(nodeGroup[enemy.counter])) {
      enemy.counter++;
    }
  } else {
    enemy.counter = 0;
  }

  if (enemy.counter >= nodeGroup.length) {
    enemy.remove();
    enemiesRemaining --;
    enemies.splice(enemies.indexOf(enemy), 1);
  }
}

function AIMovement() {
  for (let i = 0; i < enemies.length; i++) {
    moveAI(enemies[i], node);
  }
}

// function AIMovement(){
//   if (node[stormCh.counter]){
//     stormCh.moveTo(node[stormCh.counter], movementS)
//     if(stormCh.overlaps(node[stormCh.counter])){
//       stormCh.counter += 1;
//     }
//   }
//   else{
//     counter = 0;
//   }

//   if (node2[stormCh2.counter]){
//     stormCh2.moveTo(node2[stormCh2.counter], movementS)
//     if(stormCh2.overlaps(node2[stormCh2.counter])){
//       stormCh2.counter += 1;
//     }
//   }
//   else{
//     counter = 0;
//   }
// }

function preload() {
  spawnspinimg = loadImage("tornadospawnspin.png");
  homepage = loadImage("home screen2-2.png");
  homeplay = loadImage("home screen2-3.png");
  homehow = loadImage("home screen2-4.png");
  treeimg = loadImage("Tree Sprite.png");
  houseimg = loadImage("House Sprite UPDATED.png");
  carimg = loadImage("car1.png")
  playscreen = loadImage("playscreen.png");
  HTP = loadImage("home screen2-8.png");
  gobackHTP = loadImage("home screen2-9.png");
  upgradebaseMenu = loadImage("baseUpgrade.png");
  firstBuy = loadImage("firstBuy.png");
  secondBuy = loadImage("secondBuy.png");
  thirdBuy = loadImage("thirdBuy.png");
  fourthBuy = loadImage("fourthBuy.png");
  goHome = loadImage("gohome.png");
  gameoverGlowmm = loadImage("mainmenuGLOW.png");
  gameoverGlowup = loadImage("upgrademenuGLOW.png");
  gameoverimg = loadImage("gameover.png");
  font = loadFont("a.ttf");
}

// Setup Function
function setup() {
  textFont(font);
  createCanvas(windowWidth, windowHeight);
  mainMenu();
  createGroups();
  // stormChaser = new Group();
  // stormChaser.spriteSheet = carimg;
  // stormChaser.anis.frameDelay = 5;
  // stormChaser.addAnis({
  //   enemiesSpawn: { row: 0, frames: 4 },
  // })

  spriteParent = new Group();
  spriteParent.collider = "s";
  spriteParent.w = tileSize;
  spriteParent.h = tileSize;

  border = new spriteParent.Group();
  border.tile = "b";
  border.w = tileSize;
  border.h = tileSize;
  border.visible = false;
  border.color = color(0, 0, 255);

  road = new spriteParent.Group();
  road.tile = "r";
  road.w = 51;
  road.h = 51;
  road.debug = false;
  road.collider = "n";
  road.color = color(128, 128, 128);
  road.strokeWeight = 0;

  tree = new spriteParent.Group();
  tree.tile = "t";
  tree.w = 121;
  tree.h = 121;
  tree.collider = "k";
  // tree.debug = true;
  tree.scale = 0.5;
  tree.spriteSheet = treeimg;
  tree.anis.frameDelay = 5;
  tree.addAnis({
    treeSpawn: { row: 0, frames: 1 },
    treeDebarking: { row: 0, frames: 13 },
  });

  house = new spriteParent.Group();
  house.tile = "h";
  house.w = 121;
  house.h = 121;
  house.debug = false;
  house.scale = 0.5;
  house.color = color(100, 85, 100);
  house.spriteSheet = houseimg;
  house.anis.frameDelay = 7;
  house.addAnis({
    houseSpawn: { row: 0, frames: 1 },
    houseDestroyed: { row: 0, frames: 8 },
  });

  floorbb();
  
}

function floorbb() {
  let w = 50 * tileSize,
    h = 50 * tileSize;
  floorb = new Sprite(w / 2, h / 2);
  floorb.w = w;
  floorb.h = h;
  floorb.image = playscreen;
  floorb.collider = "n";
  floorb.visible = false;
  floorb.layer = -2;
}

// Main Menu
function mainMenu() {
  upgradeChecker = false;
  runMM = true;
  onlyOnce = false;
  startButton = new Sprite(620, 429, 620, height / 5, "k");
  startButton.color = "#0000ff";
  startButton.text = "Click to Play";
  startButton.textSize = height / 32;
  startButton.visible = true;
  startButton.opacity = 0.00000000000000000000000000000000000001;

  HTPButton = new Sprite(1728, 852, 335, 75, "k");
  HTPButton.text = "How to Play";
  HTPButton.textSize = height / 32;
  HTPButton.color = "#0000ff";
  HTPButton.opacity = 0.00000000000000000000000000000000000001;
}

const maxStrength = 100;
const strengthScale = 5;
function changePlayerStrength(scale) {
  if (stage === 1 && tornadoStrength < maxStrength) {
    tornadoStrength += Math.ceil(scale * tornadoScale * strengthScale);
    player.scale += (scale * tornadoScale) ** 0.5 / strengthScale;
  } else if (stage === 2 && tornadoStrength >= 10) {
    //tornadoStrength -= scale * tornadoScale;
    player.scale -= (player.scale - 1) / tornadoStrength;
  } else if (stage === 2 && tornadoStrength < 10) {
    player.scale -= player.scale / 15;
    console.log("running");
  } else {
    coinCounter += Math.ceil(scale);
  }
  console.log("->", player.scale.x, "x", player.scale.y);
}

function addCollisions() {
  player.overlaps(house, (p, h) => {
    h.changeAni("houseDestroyed");
    setTimeout(() => {
      h.remove();
      changePlayerStrength(0.1);
    }, 950);
  });
  player.overlaps(tree, (p, t) => {
    console.log("hit tree");
    t.changeAni("treeDebarking");
    setTimeout(() => {
      t.remove();
      changePlayerStrength(0.1);
    }, 1100);
  });
}

// Draw Loop
function draw() {
  spawnTimer.tick();
  back_Ground();
  how_PlayButton();


  if (startButton.mouse.hovering()) {
    background(homeplay);
  }
  if (HTPButton.mouse.hovering()) {
    background(homehow);
  }
  if (stage === 1 && tree.mouse.hovering()) {
    console.log("tree selected");
  }
  if (stage === 1 && house.mouse.hovering()) {
    console.log("house selected");
  }
  if (HTPchecker == true && backButton.mouse.hovering()) {
    background(gobackHTP);
  }
  if (upgradeChecker == true && firstUpgrade.mouse.hovering()) {
    background(firstBuy);
    fill(255, 215, 0);
    textSize(24);
    textAlign(LEFT, TOP);
    text("Coin Counter " + coinCounter, 1220, 120);
  }
  if (upgradeChecker == true && secondUpgrade.mouse.hovering()) {
    background(secondBuy);
    fill(255, 215, 0);
    textSize(24);
    textAlign(LEFT, TOP);
    text("Coin Counter " + coinCounter, 1220, 120);
  }
  if (upgradeChecker == true && thirdUpgrade.mouse.hovering()) {
    background(thirdBuy);
    fill(255, 215, 0);
    textSize(24);
    textAlign(LEFT, TOP);
    text("Coin Counter " + coinCounter, 1220, 120);
  }
  if (upgradeChecker == true && fourthUpgrade.mouse.hovering()) {
    background(fourthBuy);
    fill(255, 215, 0);
    textSize(24);
    textAlign(LEFT, TOP);
    text("Coin Counter " + coinCounter, 1220, 120);
  }
  if (upgradeChecker == true && returnMM.mouse.hovering()) {
    background(goHome);
    fill(255, 215, 0);
    textSize(24);
    textAlign(LEFT, TOP);
    text("Coin Counter " + coinCounter, 1220, 120);
  }
  if (gameOver == true && mainMenuButton.mouse.hovering()) {
    background(gameoverGlowmm);
  }
  if (gameOver == true && upgradeMenuButton.mouse.hovering()) {
    background(gameoverGlowup);
  }

  // UPGRADE ONE
  if (stage == 1 && upgradeOne == 1 && onlyOnce == false) {
    tornadoScale = 1;
    tornadoScale = tornadoScale * 1.25;
    onlyOnce = true;
  }
  if (stage == 1 && upgradeOne == 2 && onlyOnce == false) {
    tornadoScale = 1;
    tornadoScale = tornadoScale * 1.75;
    onlyOnce = true;
  }
  if (stage == 1 && upgradeOne == 3 && onlyOnce == false) {
    tornadoScale = 1;
    tornadoScale = tornadoScale * 2.5;
    onlyOnce = true;
  }
  if (stage == 1 && upgradeOne == 4 && onlyOnce == false) {
    tornadoScale = 1;
    tornadoScale = tornadoScale * 3.75;
    onlyOnce = true;
  }
  if (stage == 1 && upgradeOne == 5 && onlyOnce == false) {
    tornadoScale = 1;
    tornadoScale = tornadoScale * 5;
    onlyOnce = true;
  } else {
  }

  // UPGRADE TWO
  if (
    stage == 1 &&
    upgradetwo == 1 &&
    speedPerkActive == false &&
    kb.presses("q")
  ) {
    speedPerkActive = true;
    speedPerk = 1.1;
    console.log("running");
    setTimeout(() => {
      speedPerk = 1.0;
      setTimeout(() => {
        speedPerkActive = false;
      }, 5000);
    }, 2000);
  } else if (
    stage == 1 &&
    upgradetwo == 2 &&
    speedPerkActive == false &&
    kb.presses("q")
  ) {
    speedPerkActive = true;
    speedPerk = 1.3;
    setTimeout(() => {
      speedPerk = 1.0;
      setTimeout(() => {
        speedPerkActive = false;
      }, 5000);
    }, 2000);
  } else if (
    stage == 1 &&
    upgradetwo == 3 &&
    speedPerkActive == false &&
    kb.presses("q")
  ) {
    speedPerkActive = true;
    speedPerk = 1.6;
    setTimeout(() => {
      speedPerk = 1.0;
      setTimeout(() => {
        speedPerkActive = false;
      }, 5000);
    }, 2000);
  } else if (
    stage == 1 &&
    upgradetwo == 4 &&
    speedPerkActive == false &&
    kb.presses("q")
  ) {
    speedPerkActive = true;
    speedPerk = 2.0;
    setTimeout(() => {
      speedPerk = 1.0;
      setTimeout(() => {
        speedPerkActive = false;
      }, 5000);
    }, 2000);
  } else if (
    stage == 1 &&
    upgradetwo == 5 &&
    speedPerkActive == false &&
    kb.presses("q")
  ) {
    speedPerkActive = true;
    speedPerk = 2.5;
    setTimeout(() => {
      speedPerk = 1.0;
      setTimeout(() => {
        speedPerkActive = false;
      }, 5000);
    }, 2000);
  } else {
  }

  // UPGRADE THREE
  if (stage == 1 && upgradethree == 1 && upthreerunOnce == false) {
    timer = 10;
    upthreerunOnce = true;
  } else if (stage == 1 && upgradethree == 2 && upthreerunOnce == false) {
    timer = 15;
    upthreerunOnce = true;
  } else if (stage == 1 && upgradethree == 3 && upthreerunOnce == false) {
    timer = 20;
    upthreerunOnce = true;
  } else if (stage == 1 && upgradethree == 4 && upthreerunOnce == false) {
    timer = 25;
    upthreerunOnce = true;
  } else if (stage == 1 && upgradethree == 5 && upthreerunOnce == false) {
    timer = 30;
    upthreerunOnce = true;
  } else {
  }

  // UPGRADE FOUR
  if (
    stage == 1 &&
    upgradefour == 1 &&
    kb.presses("e") &&
    sizeSurgeActive == false &&
    timer > 5
  ) {
    sizeSurgeActive = true;
    player.scale = player.scale;
    setTimeout(() => {
      player.scale += 0.025;
      setTimeout(() => {
        player.scale += 0.05;
        setTimeout(() => {
          player.scale += 0.1;
        }, 100);
      }, 100);
    }, 100);
    setTimeout(() => {
      setTimeout(() => {
        player.scale -= 0.1;
        setTimeout(() => {
          player.scale -= 0.05;
          setTimeout(() => {
            player.scale -= 0.025;
          }, 100);
        }, 100);
      }, 100);
      setTimeout(() => {
        sizeSurgeActive = false;
      }, 5000);
    }, 5000);
  } else if (
    stage == 1 &&
    upgradefour == 2 &&
    kb.presses("e") &&
    sizeSurgeActive == false
  ) {
    sizeSurgeActive = true;
    player.scale = player.scale;
    setTimeout(() => {
      player.scale += 0.05;
      setTimeout(() => {
        player.scale += 0.1;
        setTimeout(() => {
          player.scale += 0.2;
        }, 100);
      }, 100);
    }, 100);
    setTimeout(() => {
      setTimeout(() => {
        player.scale -= 0.2;
        setTimeout(() => {
          player.scale -= 0.1;
          setTimeout(() => {
            player.scale -= 0.05;
          }, 100);
        }, 100);
      }, 100);
      setTimeout(() => {
        sizeSurgeActive = false;
      }, 5000);
    }, 5000);
  } else if (
    stage == 1 &&
    upgradefour == 3 &&
    kb.presses("e") &&
    sizeSurgeActive == false
  ) {
    sizeSurgeActive = true;
    setTimeout(() => {
      player.scale += 0.1;
      setTimeout(() => {
        player.scale += 0.2;
        setTimeout(() => {
          player.scale += 0.3;
        }, 100);
      }, 100);
    }, 100);
    setTimeout(() => {
      setTimeout(() => {
        player.scale -= 0.3;
        setTimeout(() => {
          player.scale -= 0.2;
          setTimeout(() => {
            player.scale -= 0.1;
          }, 100);
        }, 100);
      }, 100);
      setTimeout(() => {
        sizeSurgeActive = false;
      }, 5000);
    }, 5000);
  } else if (
    stage == 1 &&
    upgradefour == 4 &&
    kb.presses("e") &&
    sizeSurgeActive == false
  ) {
    sizeSurgeActive = true;
    player.scale = player.scale;
    setTimeout(() => {
      player.scale += 0.125;
      setTimeout(() => {
        player.scale += 0.275;
        setTimeout(() => {
          player.scale += 0.4;
        }, 100);
      }, 100);
    }, 100);
    setTimeout(() => {
      setTimeout(() => {
        player.scale -= 0.4;
        setTimeout(() => {
          player.scale -= 0.275;
          setTimeout(() => {
            player.scale -= 0.1;
          }, 100);
        }, 100);
      }, 100);
      setTimeout(() => {
        sizeSurgeActive = false;
      }, 5000);
    }, 5000);
  } else if (
    stage == 1 &&
    upgradefour == 5 &&
    kb.presses("e") &&
    sizeSurgeActive == false
  ) {
    sizeSurgeActive = true;
    player.scale = player.scale;
    setTimeout(() => {
      player.scale += 0.15;
      setTimeout(() => {
        player.scale += 0.35;
        setTimeout(() => {
          player.scale += 0.5;
        }, 100);
      }, 100);
    }, 100);
    setTimeout(() => {
      setTimeout(() => {
        player.scale -= 0.5;
        setTimeout(() => {
          player.scale -= 0.35;
          setTimeout(() => {
            player.scale -= 0.15;
          }, 100);
        }, 100);
      }, 100);
      setTimeout(() => {
        sizeSurgeActive = false;
      }, 5000);
    }, 5000);
  } else {
  }

  //UPGRADE MENU (GREEN BITS)
  if (upgradeChecker == true) {
    if (upgradeOne == 1) {
      first1lvl.opacity = 1;
    } else if (upgradeOne == 2) {
      first1lvl.opacity = 1;
      first2lvl.opacity = 1;
    } else if (upgradeOne == 3) {
      first1lvl.opacity = 1;
      first2lvl.opacity = 1;
      first3lvl.opacity = 1;
    } else if (upgradeOne == 4) {
      first1lvl.opacity = 1;
      first2lvl.opacity = 1;
      first3lvl.opacity = 1;
      first4lvl.opacity = 1;
    } else if (upgradeOne == 5) {
      first1lvl.opacity = 1;
      first2lvl.opacity = 1;
      first3lvl.opacity = 1;
      first4lvl.opacity = 1;
      first5lvl.opacity = 1;
    } else {
    }
    if (upgradetwo == 1) {
      second1lvl.opacity = 1;
    } else if (upgradetwo == 2) {
      second1lvl.opacity = 1;
      second2lvl.opacity = 1;
    } else if (upgradetwo == 3) {
      second1lvl.opacity = 1;
      second2lvl.opacity = 1;
      second3lvl.opacity = 1;
    } else if (upgradetwo == 4) {
      second1lvl.opacity = 1;
      second2lvl.opacity = 1;
      second3lvl.opacity = 1;
      second4lvl.opacity = 1;
    } else if (upgradetwo == 5) {
      second1lvl.opacity = 1;
      second2lvl.opacity = 1;
      second3lvl.opacity = 1;
      second4lvl.opacity = 1;
      second5lvl.opacity = 1;
    } else {
    }
    if (upgradethree == 1) {
      third1lvl.opacity = 1;
    } else if (upgradethree == 2) {
      third1lvl.opacity = 1;
      third2lvl.opacity = 1;
    } else if (upgradethree == 3) {
      third1lvl.opacity = 1;
      third2lvl.opacity = 1;
      third3lvl.opacity = 1;
    } else if (upgradethree == 4) {
      third1lvl.opacity = 1;
      third2lvl.opacity = 1;
      third3lvl.opacity = 1;
      third4lvl.opacity = 1;
    } else if (upgradethree == 5) {
      third1lvl.opacity = 1;
      third2lvl.opacity = 1;
      third3lvl.opacity = 1;
      third4lvl.opacity = 1;
      third5lvl.opacity = 1;
    } else {
    }
    if (upgradefour == 1) {
      fourth1lvl.opacity = 1;
    } else if (upgradefour == 2) {
      fourth1lvl.opacity = 1;
      fourth2lvl.opacity = 1;
    } else if (upgradefour == 3) {
      fourth1lvl.opacity = 1;
      fourth2lvl.opacity = 1;
      fourth3lvl.opacity = 1;
    } else if (upgradefour == 4) {
      fourth1lvl.opacity = 1;
      fourth2lvl.opacity = 1;
      fourth3lvl.opacity = 1;
      fourth4lvl.opacity = 1;
    } else if (upgradefour == 5) {
      fourth1lvl.opacity = 1;
      fourth2lvl.opacity = 1;
      fourth3lvl.opacity = 1;
      fourth4lvl.opacity = 1;
      fourth5lvl.opacity = 1;
    }
  }

  // MAIN MENU UPGRADE FUNCTIONALITY/BOUGHT

  if (
    upgradeChecker == true &&
    firstUpgrade.mouse.presses() &&
    coinCounter >= 20
  ) {
    if (upgradeOne == 0) {
      upgradeOne += 1;
      first1lvl.opacity = 1;
      coinCounter -= 20;
    } else if (upgradeOne == 1) {
      upgradeOne += 1;
      first2lvl.opacity = 1;
      coinCounter -= 20;
    } else if (upgradeOne == 2) {
      upgradeOne += 1;
      first3lvl.opacity = 1;
      coinCounter -= 20;
    } else if (upgradeOne == 3) {
      upgradeOne += 1;
      first4lvl.opacity = 1;
      coinCounter -= 20;
    } else if (upgradeOne == 4) {
      upgradeOne += 1;
      first5lvl.opacity = 1;
      coinCounter -= 20;
    }
  }

  if (
    upgradeChecker == true &&
    secondUpgrade.mouse.presses() &&
    coinCounter >= 50
  ) {
    if (upgradetwo == 0) {
      upgradetwo += 1;
      second1lvl.opacity = 1;
      coinCounter -= 50;
    } else if (upgradetwo == 1) {
      upgradetwo += 1;
      second2lvl.opacity = 1;
      coinCounter -= 50;
    } else if (upgradetwo == 2) {
      upgradetwo += 1;
      second3lvl.opacity = 1;
      coinCounter -= 50;
    } else if (upgradetwo == 3) {
      upgradetwo += 1;
      second4lvl.opacity = 1;
      coinCounter -= 50;
    } else if (upgradetwo == 4) {
      upgradetwo += 1;
      second5lvl.opacity = 1;
      coinCounter -= 50;
    }
  }

  if (
    upgradeChecker == true &&
    thirdUpgrade.mouse.presses() &&
    coinCounter >= 30
  ) {
    if (upgradethree == 0) {
      upgradethree += 1;
      third1lvl.opacity = 1;
      coinCounter -= 30;
    } else if (upgradethree == 1) {
      upgradethree += 1;
      third2lvl.opacity = 1;
      coinCounter -= 30;
    } else if (upgradethree == 2) {
      upgradethree += 1;
      third3lvl.opacity = 1;
      coinCounter -= 30;
    } else if (upgradethree == 3) {
      upgradethree += 1;
      third4lvl.opacity = 1;
      coinCounter -= 30;
    } else if (upgradethree == 4) {
      upgradethree += 1;
      third5lvl.opacity = 1;
      coinCounter -= 30;
    }
  }

  if (
    upgradeChecker == true &&
    fourthUpgrade.mouse.presses() &&
    coinCounter >= 70
  ) {
    if (upgradefour == 0) {
      upgradefour += 1;
      fourth1lvl.opacity = 1;
      coinCounter -= 70;
    } else if (upgradefour == 1) {
      upgradefour += 1;
      fourth2lvl.opacity = 1;
      coinCounter -= 70;
    } else if (upgradefour == 2) {
      upgradefour += 1;
      fourth3lvl.opacity = 1;
      coinCounter -= 70;
    } else if (upgradefour == 3) {
      upgradefour += 1;
      fourth4lvl.opacity = 1;
      coinCounter -= 70;
    } else if (upgradefour == 4) {
      upgradefour += 1;
      fourth5lvl.opacity = 1;
      coinCounter -= 70;
    }
  }

  camera.on();
  if (floorb && floorb.visible) floorb.draw();
  if (tiles1) tiles1.draw();
  if (tiles2) tiles2.draw(); // Draw if applicable
  camera.off();

  //console.log(enemies.length)
  if (stage === 1) {
    //console.log("stage 1 check")
    playerMovement();
    cameraControl();
  } else if (stage === 2) {
    //console.log("stage 2 check")
    playerMovement();
    cameraControl();
    chaserTowardsPlayer();
    AIMovement();
  }

  if (game) {
    displayCoinBalance();
    displayTornadoStrength();
  }
  if (runMM) {
    if (startButton.mouse.presses()) {
      cleanupMenu();
      stage = 1;
      mainGame();
      runMM = false;
    }
  }

  if (backButton && backButton.mouse.presses()) {
    goBack();
  }

  if (game) {
    textSize(20);
    time += deltaTime;
    fill(209, 0, 0);
    textAlign(LEFT, TOP);
    weatherText = text("Storm chasers incoming in " + timer, 20, 10);
    if (time >= 1000 && timer > 0) {
      timer--;
      time = 0;
    }
    if (timer === 1) {
      stage = 2;
      mainGame();
      addCollisions();
      timer = 0;
      time = 0;
    }
    displayCoinBalance();
  }

  if (tornadoStrength <= 0 && !gameOver) {
    gameOver = true;
    enemies.forEach((enemy) => {
      enemy.visible = false; // makes the sprite invisible
    });
    stage = 1;
    gameOverScreen();
  }

  if (gameOver && mainMenuButton && mainMenuButton.mouse.presses()) {
    resetEVERYTHING();
    mainMenu();
  }
  if (gameOver && upgradeMenuButton.mouse.presses()) {
    upgradeMenu();
  }
  if (upgradeChecker && returnMM.mouse.presses()) {
    resetEVERYTHING();
    mainMenu();
  }
}

// Helper Functions
function cleanupMenu() {
  startButton.remove();
  HTPButton.remove();
}

function back_Ground() {
  if (stage === 1 || stage === 2) {
    background(0);
    let bgX = -player.position.x + width / 2 - 1000;
    let bgY = -player.position.y + height / 2 - 1000;
    // image(playscreen, -camera.x, -camera.y, 0, 0);
  } else if (runMM == true && HTPchecker == false) {
    background(homepage);
  } else if (HTPchecker == true) {
    background(HTP);
  } else if (upgradeChecker == true) {
    background(upgradebaseMenu);
    fill(255, 215, 0); // Gold color for coins
    textSize(24); // Font size
    textAlign(LEFT, TOP); // Align text to the top-left corner
    text("Coin Counter " + coinCounter, 1220, 120);
  } else if (gameOver == true) {
    background(gameoverimg);
  } else {
  }
}

function how_PlayButton() {
  // to click the how to play button
  if (moveToHTP == false) {
    if (runMM) {
      if (HTPButton.mouse.presses()) {
        moveToHTP = true;
        startButton.remove();
        HTPButton.remove();
        createHowToPlay();
        HTPchecker = true;
      }
    }
  } else if (moveToHTP == true) {
  }
}

function createHowToPlay() {
  backButton = new Sprite(180, 850, 160, 135, "k");
  backButton.text = "Go Back";
  backButton.textSize = height / 32;
  backButton.opacity = 0.000000000000000000000000001;
}

function goBack() {
  // goback function to main menu
  backButton.remove();
  moveToHTP = false;
  HTPchecker = false;
  mainMenu();
}

function createGroups() {}

function createPlayer() {
  player = new Sprite(
    Math.floor(Math.random(50) * 2450),
    Math.floor(Math.random(50) * 2450),
    120,
    10,
    "d"
  );
  
  player.h = 120.4;
  player.w = 121;
  player.color = color(160, 160, 160);
  player.rotationLock = true;
  //player.debug = true;
  player.spriteSheet = spawnspinimg;
  player.anis.frameDelay = 5;
  player.addAnis({
    spawning: { row: 0, frames: 18 },
    spinning: { row: 1, frames: 15 },
  });
  player.changeAni(["spawning", "spinning"]);
  player.scale = 0.5;

  addCollisions();
}

function mainGame() {
  if (stage == 1) {
    createPlayer();
    startButton.remove();
    HTPButton.remove();

    tiles1 = new Tiles(tilemap1, 0, 0, tileSize, tileSize);
    floorb.visible = true;

    game = true;
  } else if (stage == 2) {
    speedPerk = 1;
    clearGroups1();

    tiles2 = new Tiles(tilemap2, 0, 0, tileSize, tileSize);
    floorb.visible = true;

    game = true;

    // Don't kill the player, just TP them
    player.x = 1250;
    player.y = 1200;

    startWave();
  }
}

function startWave() {
  enemiesRemaining = enemiesToSpawn; // Set the enemies left in the wave
  spawnEnemies();
}

function spawnEnemies() {
  if (gameOver || !game || stage !== 2) return; // Exit if the game is over or paused. Or enemies shouldn't spawn. That too.
  trafficDirect = Math.floor(random(0, 6))
  pathFinding();
  attemptingSpawn = true;
  for (let i = 0; i < enemiesToSpawn; i++) {
    spawnTimer.addOperation(createChaser, i * 40);
  }
  console.log("Creating", spawnTimer.operations, "enemies")
  attemptingSpawn = false;
}

function createChaser() {
  if (trafficDirect == 0){
    stormChaser = new Sprite(100, 50, 25 , 25, "d");
    stormChaser.image = carimg;
    stormChaser.color = color(255, 0, 0);
    stormChaser.rotationLock = true;
    enemies.push(stormChaser);
  }
  if (trafficDirect == 1){
    stormChaser = new Sprite(50, 2200, 25, 25, "d");
    stormChaser.image = carimg;
    stormChaser.color = color(255, 0, 0);
    stormChaser.rotationLock = true;
    enemies.push(stormChaser);
  }
  if (trafficDirect == 2){
    stormChaser = new Sprite(2300, 150, 25, 25, "d");
    stormChaser.image = carimg;
    stormChaser.color = color(255, 0, 0);
    stormChaser.rotationLock = true;
    enemies.push(stormChaser);
  }
  if (trafficDirect == 3){
    stormChaser = new Sprite(2400, 1700, 25 , 25, "d");
    stormChaser.image = carimg;
    stormChaser.color = color(255, 0, 0);
    stormChaser.rotationLock = true;
    enemies.push(stormChaser);
  }
  if (trafficDirect == 4){
    stormChaser = new Sprite(50, 950, 25 , 25, "d");
    stormChaser.image = carimg;
    stormChaser.color = color(255, 0, 0);
    stormChaser.rotationLock = true;
    enemies.push(stormChaser);
  }
  if (trafficDirect == 5){
    stormChaser = new Sprite(650, 2400, 25 , 25, "d");
    stormChaser.image = carimg;
    stormChaser.color = color(255, 0, 0);
    stormChaser.rotationLock = true;
    enemies.push(stormChaser);
  }
}

function playerMovement() {
  let baseSpeed = 6;
  let minSpeed = 2;
  let sizeFactor = player.w / tornadoStrength; // Calculate speed reduction based on player's size
  let speed = baseSpeed / sqrt(sizeFactor); // The larger the player the lower the speed will be

  speed = max(speed, minSpeed);

  if (kb.pressing("left") || kb.pressing("a")) {
    player.vel.x = -speed * speedPerk;
  } else if (kb.pressing("right") || kb.pressing("d")) {
    player.vel.x = speed * speedPerk;
  } else {
    player.vel.x = 0;
  }
  if (kb.pressing("up") || kb.pressing("w")) {
    player.vel.y = -speed * speedPerk;
  } else if (kb.pressing("down") || kb.pressing("s")) {
    player.vel.y = speed * speedPerk;
  } else {
    player.vel.y = 0;
  }
}

function cameraControl() {
  camera.x = player.x;
  camera.y = player.y;
  if (stage === 1) {
    let baseZoom = 4;
    let zoomFactor = 0.5 / player.scale; //works out the difference in players size
    let zoomLevel = baseZoom * zoomFactor; // works out what zoom level it should be at
    let minZoom = 0.35; // adds a minimum zoom level
    camera.zoom = max(zoomLevel, minZoom);
  } else if (stage === 2) {
  }
}

const maxWheelZoom = 3;
function mouseWheel(event) {
  if (stage === 2) {
    if (event.delta > 0) {
      if (camera.zoom < maxWheelZoom) camera.zoom += 0.1; // Zoom in
    } else {
      if (camera.zoom > 1 / maxWheelZoom) camera.zoom -= 0.1; // Zoom out
    }
    return false;
  }
}

function clearGroups1() {
  tiles1.remove();
  border.removeAll();
  floorb.visible = false;
}

function clearGroups2() {
  tiles2.remove();
  border.removeAll();
  floorb.visible = false;
}

// Function to move storm chasers toward the player and check for wave progress
function chaserTowardsPlayer() {
  if (gameOver || !game || stage !== 2) return;

  let enemySpeed = 5;

  // prevent multiple spawns
  if (attemptingSpawn) return;

  // spawn progress
  for (let i = enemies.length - 1; i >= 0; i--) {
    stormChaser = enemies[i];
    
    if (player.overlaps(stormChaser)) {
      let currentTime = millis();

      if (currentTime - lastDamageTime >= damageCooldown) {
        changePlayerStrength(-0.2);
        tornadoStrength -= 1;
        coinCounter += 1;

        stormChaser.remove(); // remove the enemy sprite

        // remove the enemy from the array

        if (postdeathCorrection == false) {
          enemies.splice(i, 1);
          console.log(enemies.length);
          console.log(attemptingSpawn);
          //console.log("spliced");
        } else {
          enemies.splice(i, 1);
          console.log(enemies.length);
          console.log(attemptingSpawn);
          //console.log("spliced");
        }
      }
    }
  }
  // spawn new enemies if none exist
  if (!(spawnTimer.hasQueued || enemies.length > 0 || attemptingSpawn)) {
    currentWave++;
    enemiesToSpawn += 1; // increases enemies per wave
    //console.log("enemy wave");
    attemptingSpawn = true;
    spawnEnemies();
  }
}

// Function to display tornado strength above the player
function displayTornadoStrength() {
  push(); // Save state
  if (game && !gameOver) {
    fill(255); // Set text color to white
    textSize(20); // Set text size
    textAlign(CENTER, CENTER); // Align text to middle
    playerTextHealth = text(
      "Tornado Strength " + tornadoStrength,
      width / 2,
      40
    ); // Display the strength
  }
  pop(); // Load state
}

function displayCoinBalance() {
  //simplest bit of code ever
  if (game && !gameOver) {
    fill(255, 215, 0); // Gold color for coins
    textSize(20); // Font size
    textAlign(RIGHT, TOP); // Align text to the top-left corner
    text("Coins " + coinCounter, 1720, 10); // Display coin counter at the top-left
  }
}

function gameOverScreen() {
  spawnTimer.cancelAll(); //Cancel additional spawns
  clearGroups2(); // clear TILEMAP2
  allSprites.remove();

  //tiles3 = new Tiles(tilemap3, 0, 0, tileSize, tileSize);

  enemies.forEach((enemy) => {
    if (enemy && enemy.remove) {
      enemy.remove();
    }
  });

  enemies = []; // Reset the enemies array

  if (player) player.remove(); // Remove the player sprite

  // Reset game variables
  game = false;
  stage = 0;

  // Clear the screen and display the Game Over text
  resizeCanvas(windowWidth, windowHeight);

  // Game Over Text
  camera.zoom = 1;
  // display button
  mainMenuButton = new Sprite(1215, 579, 343, 146, "k");
  mainMenuButton.opacity = 0.000000000000000001;
  upgradeMenuButton = new Sprite(545, 587, 343, 145, "k");
  upgradeMenuButton.opacity = 0.000000000000000001;
}

function upgradeMenu() {
  upgradeChecker = true;
  upgradeMenuButton.remove();
  mainMenuButton.remove();
  resizeCanvas(windowWidth, windowHeight);
  fill(255, 215, 0); // Gold color for coins
  textSize(24); // Font size
  textAlign(LEFT, TOP); // Align text to the top-left corner
  text("Coins: " + coinCounter, 20, 20);
  firstUpgrade = new Sprite(1524, 296, 150, 55, "k");
  firstUpgrade.opacity = 0.0000000000000000001;
  first1lvl = new Sprite(418.6, 284, 199, 32, "k");
  first1lvl.color = "#163919";
  first1lvl.opacity = 0.0000000000000000001;
  first2lvl = new Sprite(625.6, 284, 199, 32, "k");
  first2lvl.color = "#163919";
  first2lvl.opacity = 0.0000000000000000001;
  first3lvl = new Sprite(832.6, 284, 199, 32, "k");
  first3lvl.color = "#163919";
  first3lvl.opacity = 0.0000000000000000001;
  first4lvl = new Sprite(1039.6, 284, 199, 32, "k");
  first4lvl.color = "#163919";
  first4lvl.opacity = 0.0000000000000000001;
  first5lvl = new Sprite(1246.6, 284, 199, 32, "k");
  first5lvl.color = "#163919";
  first5lvl.opacity = 0.0000000000000000001;

  secondUpgrade = new Sprite(1524, 390, 150, 55, "k");
  secondUpgrade.opacity = 0.0000000000000000001;
  second1lvl = new Sprite(418.6, 375.5, 199, 32, "k");
  second1lvl.color = "#163919";
  second1lvl.opacity = 0.0000000000000000001;
  second2lvl = new Sprite(625.6, 375.5, 199, 32, "k");
  second2lvl.color = "#163919";
  second2lvl.opacity = 0.0000000000000000001;
  second3lvl = new Sprite(832.6, 375.5, 199, 32, "k");
  second3lvl.color = "#163919";
  second3lvl.opacity = 0.0000000000000000001;
  second4lvl = new Sprite(1039.6, 375.5, 199, 32, "k");
  second4lvl.color = "#163919";
  second4lvl.opacity = 0.0000000000000000001;
  second5lvl = new Sprite(1246.6, 375.5, 199, 32, "k");
  second5lvl.color = "#163919";
  second5lvl.opacity = 0.0000000000000000001;

  thirdUpgrade = new Sprite(1524, 484, 150, 55, "k");
  thirdUpgrade.opacity = 0.0000000000000000001;
  third1lvl = new Sprite(418.6, 467, 199, 32, "k");
  third1lvl.color = "#163919";
  third1lvl.opacity = 0.0000000000000000001;
  third2lvl = new Sprite(625.6, 467, 199, 32, "k");
  third2lvl.color = "#163919";
  third2lvl.opacity = 0.0000000000000000001;
  third3lvl = new Sprite(832.6, 467, 199, 32, "k");
  third3lvl.color = "#163919";
  third3lvl.opacity = 0.0000000000000000001;
  third4lvl = new Sprite(1039.6, 467, 199, 32, "k");
  third4lvl.color = "#163919";
  third4lvl.opacity = 0.0000000000000000001;
  third5lvl = new Sprite(1246.6, 467, 199, 32, "k");
  third5lvl.color = "#163919";
  third5lvl.opacity = 0.0000000000000000001;

  fourthUpgrade = new Sprite(1524, 578, 150, 55, "k");
  fourthUpgrade.opacity = 0.0000000000000000001;
  fourth1lvl = new Sprite(418.6, 559, 199, 32, "k");
  fourth1lvl.color = "#163919";
  fourth1lvl.opacity = 0.0000000000000000001;
  fourth2lvl = new Sprite(625.6, 559, 199, 32, "k");
  fourth2lvl.color = "#163919";
  fourth2lvl.opacity = 0.0000000000000000001;
  fourth3lvl = new Sprite(832.6, 559, 199, 32, "k");
  fourth3lvl.color = "#163919";
  fourth3lvl.opacity = 0.0000000000000000001;
  fourth4lvl = new Sprite(1039.6, 559, 199, 32, "k");
  fourth4lvl.color = "#163919";
  fourth4lvl.opacity = 0.0000000000000000001;
  fourth5lvl = new Sprite(1246.6, 559, 199, 32, "k");
  fourth5lvl.color = "#163919";
  fourth5lvl.opacity = 0.0000000000000000001;

  returnMM = new Sprite(1809, 95, 178, 145, "k");
  returnMM.opacity = 0.0000000000000000001;
}

function resetEVERYTHING() {
  moveToHTP = false;
  // startButton;
  // HTPButton;
  // backButton;
  // information;
  // player;
  upthreerunOnce = false;
  game = false;
  tileSize = 50;
  tornadoStrength = 1;
  time = 0;
  timer = 5;
  stage = 0;
  // currentTiles;
  // weatherText;
  movementSpeed = 10;
  spawnSuccess = true;
  // attemptingSpawn;                                //should put this seperately in a function
  // stormChaser;
  // spawnX;
  // spawnY;
  enemies = [];
  maxEnemies = 10;
  lastDamageTime = 0;
  damageCooldown = 100;
  currentWave = 0;
  enemiesToSpawn = 10;
  enemiesRemaining = 0;
  // coinCounter;
  // mainMenuButton;
  runMM = false;
  gameOver = false;
  clearGroups1();
  clearGroups2();
  allSprites.remove();
  floorbb();
  mainMenuButton.remove();
  postdeathCorrection = true;
  speedPerkActive = false;
}
