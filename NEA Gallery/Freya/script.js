//var socket = io.connect();
let ground, grass, leaf, tree, mushroomTrunk, mushroom, cloud, water, topSensor, bottomSensor, topJoint, bottomJoint, levelTiles
let tilemapCount = 0
let tilemaps = []
let tileSize = 18
let shieldActive = false;
let burrowed;
let burrowTime = 180
let checkx = 0;
let checky = 0;
let startPositions = [[50, 450],[570, 580], [90, 420]]
let bgColours = [[174, 227, 237], [249, 226, 188], [186, 216, 216]]
let levelTimer = 5
let coinDelay = 60
let state = 0
let tempStateG = 0
let tempStateP = 0
let tempStateM = 1
let PI = Math.PI
let pTest = false;
let projWidth, projHeight, projHyp, projExist
let projDelay = 0
let enemy2Hyp = 0
let mX, mY, grappleDist
let slowFall = true
let fallTimer = 120
let dataSent = false
let scores = [["", ""],["", ""],["", ""],["", ""],["", ""],["", ""]]
let pname 

function preload() {
    //Images
    bgImg = loadImage('assets/bg.png')
    bgDead = loadImage('assets/bgDead.png')

    sheet = loadImage('assets/playerSheet.png')
    heartsSheet = loadImage('assets/heartsSheet.png')
    shieldSheet = loadImage('assets/shield.png')
    enemy1Sheet = loadImage('assets/enemy1Sheet.png')
    enemy2Sheet = loadImage('assets/enemy2Sheet.png')
    enemy3Sheet = loadImage('assets/enemy3.png')
    checkpointSheet = loadImage('assets/checkpointSheet.png')
    coinSheet = loadImage('assets/coinSheet.png')

    grassSImg = loadImage('assets/grassS.png');
    grassLImg = loadImage('assets/grassL.png');
    grassRImg = loadImage('assets/grassR.png');
    grassTImg = loadImage('assets/grassT.png');
    grassELImg = loadImage('assets/grassEL.png');
    grassERImg = loadImage('assets/grassER.png');
    grassMImg = loadImage('assets/grassM.png');

    groundImg = loadImage('assets/ground.png')
    groundICLImg = loadImage('assets/groundICL.png')
    groundICRImg = loadImage('assets/groundICR.png')
    groundBImg = loadImage('assets/groundB.png')
    groundBCImg = loadImage('assets/groundBC.png')
    groundBLCImg = loadImage('assets/groundBLC.png')
    groundBRCImg = loadImage('assets/groundBRC.png')
    groundWLImg = loadImage('assets/groundWL.png')
    groundWRImg = loadImage('assets/groundWR.png')
    groundWMImg = loadImage('assets/groundWM.png')

    waterImg = loadImage('assets/water.png')
    waterTImg = loadImage('assets/waterT.png')
    waterFImg = loadImage('assets2/waterF.png')
    waterFBImg = loadImage('assets2/waterFB.png')

    trunkImg = loadImage('assets/trunk.png')
    trunkBImg = loadImage('assets/trunkB.png')
    leafTrunkImg = loadImage('assets/leafTrunk.png')

    leafImg = loadImage('assets/leaf.png')
    leafTImg = loadImage('assets/leafT.png')
    leafRCImg = loadImage('assets/leafRC.png')
    leafLCImg = loadImage('assets/leafLC.png')
    leafBLCImg = loadImage('assets/leafBLC.png')
    leafBRCImg = loadImage('assets/leafBRC.png')
    leafLImg = loadImage('assets/leafL.png')
    leafRImg = loadImage('assets/leafR.png')
    leafBImg = loadImage('assets/leafB.png')
    leafMImg = loadImage('assets/leafM.png')

    mushroomImg = loadImage('assets/mushroom.png')
    mushroomBImg = loadImage('assets/mushroomB.png')
    mushroomTImg = loadImage('assets/mushroomT.png')
    mushroomMImg = loadImage('assets/mushroomM.png')
    mushroomERImg = loadImage('assets/mushroomER.png')
    mushroomELImg = loadImage('assets/mushroomEL.png')

    cloudImg = loadImage('assets/cloud.png')
    cloudLImg = loadImage('assets/cloudL.png')
    cloudRImg = loadImage('assets/cloudR.png')
    cloudMImg = loadImage('assets/cloudM.png')

    spikesImg = loadImage('assets/spikes.png')

    checkBaseImg = loadImage('assets/checkBase.png')
    checkPoleImg = loadImage('assets/checkPole.png')
    checkFlagImg = loadImage('assets/checkFlag.png')

    pumpImg = loadImage('assets2/pumpkin.png')

    leaf2Img = loadImage('assets2/leaf.png')
    leafT2Img = loadImage('assets2/leafT.png')
    leafRC2Img = loadImage('assets2/leafRC.png')
    leafLC2Img = loadImage('assets2/leafLC.png')
    leafBLC2Img = loadImage('assets2/leafBLC.png')
    leafBRC2Img = loadImage('assets2/leafBRC.png')
    leafL2Img = loadImage('assets2/leafL.png')
    leafR2Img = loadImage('assets2/leafR.png')
    leafB2Img = loadImage('assets2/leafB.png')

    grass2Img = loadImage('assets2/grass.png');
    grassL2Img = loadImage('assets2/grassLC.png');
    grassR2Img = loadImage('assets2/grassRC.png');
    grassT2Img = loadImage('assets2/grassT.png');
    grassEL2Img = loadImage('assets2/grassEL.png');
    grassER2Img = loadImage('assets2/grassER.png');
    grassM2Img = loadImage('assets2/grassM.png');

    trunk2Img = loadImage('assets2/trunk.png')
    trunkB2Img = loadImage('assets2/trunkBA.png')
    trunkT2Img = loadImage('assets2/trunkT.png')
    trunkBRRImg = loadImage('assets2/trunkBRR.png')
    trunkBRLImg = loadImage('assets2/trunkBRL.png')
    branchLImg = loadImage('assets2/branchL.png');
    branchRImg = loadImage('assets2/branchR.png')

    ghouseImg = loadImage('assets2/ghouse.png')
    ghouseDImg = loadImage('assets2/ghouseD.png')
    ghouseDTImg = loadImage('assets2/ghouseDT.png')
    ghouseLCImg = loadImage('assets2/ghouseLC.png')
    ghouseRCImg = loadImage('assets2/ghouseRC.png')
    ghouseMImg = loadImage('assets2/ghouseM.png')

    hayImg = loadImage('assets2/hay.png')
    hayLImg = loadImage('assets2/hayL.png')
    hayRImg = loadImage('assets2/hayR.png')

    grass3Img = loadImage('assets3/grassM.png');
    grassL3Img = loadImage('assets3/grassEL.png');
    grassR3Img = loadImage('assets3/grassER.png');

    water3Img = loadImage('assets3/waterW.png')
    water3PImg = loadImage('assets3/waterP.png')
    water3Wmg = loadImage('assets3/water.png')

    suppImg = loadImage('assets3/supp.png')
    suppTImg = loadImage('assets3/suppT.png')

    beamImg = loadImage('assets3/beamM.png')
    beamELImg = loadImage('assets3/beamEL.png')
    beamERImg = loadImage('assets3/beamER.png')

    pipeAImg = loadImage('assets3/pipeA.png')
    pipeBLImg = loadImage('assets3/pipeBL.png')
    pipeBRImg = loadImage('assets3/pipeBR.png')
    pipeEImg = loadImage('assets3/pipeE.png')
    pipeSImg = loadImage('assets3/pipeS.png')

    barrelImg = loadImage('assets3/barrel.png')
    anchLImg = loadImage('assets3/anchL.png')
    anchRImg = loadImage('assets3/anchR.png')

    chainImg = loadImage('assets3/chain.png')
    chainTImg = loadImage('assets3/chainT.png')
    hookImg = loadImage('assets3/hook.png')
    //Sounds
    coinSound = loadSound('sounds/coin.mp3')
    deathSound = loadSound('sounds/death.wav')
    hitSound = loadSound('sounds/hit.ogg')
    jumpSound = loadSound('sounds/jump_03.wav')
    fireSound = loadSound('sounds/fire.wav')
    
    shieldSound = loadSound('sounds/shield.ogg')
   
}

function setup() {
    setupMenu()
    dataSent = false
    // socket.on('sendscores', getHighScore);
    // socket.emit('request')
}

function tileSetup() {
    //The walkable group allows walkable tiles to be used collectively
    walkable = new Group()
    corner = new Group()
    block = new Group()

    ground = new walkable.Group();
    ground.collider = 's';
    ground.image = groundImg;
    ground.tile = 'b';
    ground.w = tileSize;
    ground.h = tileSize;
    ground.layer = 1

    groundN = new walkable.Group();
    groundN.collider = 'n';
    groundN.image = groundImg;
    groundN.tile = '0';
    groundN.w = tileSize;
    groundN.h = tileSize;
    groundN.layer = 1

    groundICL = new block.Group();
    groundICL.collider = 's';
    groundICL.image = groundICLImg;
    groundICL.tile = 'Z';
    groundICL.w = tileSize;
    groundICL.h = tileSize;
    groundICL.layer = 1

    groundICR = new block.Group();
    groundICR.collider = 's';
    groundICR.image = groundICRImg;
    groundICR.tile = 'X';
    groundICR.w = tileSize;
    groundICR.h = tileSize;
    groundICR.layer = 1

    groundBC = new block.Group();
    groundBC.collider = 's';
    groundBC.image = groundBCImg;
    groundBC.tile = 'B';
    groundBC.w = tileSize;
    groundBC.h = tileSize;
    groundBC.layer = 1

    groundB = new block.Group();
    groundB.collider = 's';
    groundB.image = groundBImg;
    groundB.tile = 'p';
    groundB.w = tileSize;
    groundB.h = tileSize;
    groundB.layer = 1

    groundBN = new block.Group();
    groundBN.collider = 'n';
    groundBN.image = groundBImg;
    groundBN.tile = '-';
    groundBN.w = tileSize;
    groundBN.h = tileSize;
    groundBN.layer = 1

    groundWL = new corner.Group();
    groundWL.collider = 's';
    groundWL.image = groundWLImg;
    groundWL.tile = 'A';
    groundWL.w = tileSize;
    groundWL.h = tileSize;
    groundWL.layer = 1

    groundWM = new block.Group();
    groundWM.collider = 's';
    groundWM.image = groundWMImg;
    groundWM.tile = 'Q';
    groundWM.w = tileSize;
    groundWM.h = tileSize;
    groundWM.layer = 1

    groundWR = new corner.Group();
    groundWR.collider = 's';
    groundWR.image = groundWRImg;
    groundWR.tile = 'S';
    groundWR.w = tileSize;
    groundWR.h = tileSize;
    groundWR.layer = 1

    groundBLC = new block.Group();
    groundBLC.collider = 's';
    groundBLC.image = groundBLCImg;
    groundBLC.tile = 'N';
    groundBLC.w = tileSize;
    groundBLC.h = tileSize;
    groundBLC.layer = 1

    groundBRC = new block.Group();
    groundBRC.collider = 's';
    groundBRC.image = groundBRCImg;
    groundBRC.tile = 'L';
    groundBRC.w = tileSize;
    groundBRC.h = tileSize;
    groundBRC.layer = 1

    groundBRN = new block.Group();
    groundBRN.collider = 'n';
    groundBRN.image = groundBRCImg;
    groundBRN.tile = '+';
    groundBRN.w = tileSize;
    groundBRN.h = tileSize;
    groundBRN.layer = 1

    grassS = new walkable.Group();
    grassS.collider = 's';
    grassS.image = grassSImg;
    grassS.tile = 'g';
    grassS.w = tileSize;
    grassS.h = tileSize;
    grassS.layer = 1

    grassL = new corner.Group();
    grassL.collider = 's';
    grassL.image = grassLImg;
    grassL.tile = 'G';
    grassL.w = tileSize;
    grassL.h = tileSize;
    grassL.layer = 1

    grassR = new corner.Group();
    grassR.collider = 's';
    grassR.image = grassRImg;
    grassR.tile = 'R';
    grassR.w = tileSize;
    grassR.h = tileSize;
    grassR.layer = 1

    grassT = new corner.Group();
    grassT.collider = 's';
    grassT.image = grassTImg;
    grassT.tile = 'T';
    grassT.w = tileSize;
    grassT.h = tileSize;
    grassT.layer = 1

    grassEL = new corner.Group();
    grassEL.collider = 's';
    grassEL.image = grassELImg;
    grassEL.tile = 'e';
    grassEL.w = tileSize;
    grassEL.h = tileSize;
    grassEL.layer = 1

    grassER = new corner.Group();
    grassER.collider = 's';
    grassER.image = grassERImg;
    grassER.tile = 'r';
    grassER.w = tileSize;
    grassER.h = tileSize;
    grassER.layer = 1

    grassM = new walkable.Group();
    grassM.collider = 's';
    grassM.image = grassMImg;
    grassM.tile = 's';
    grassM.w = tileSize;
    grassM.h = tileSize;
    grassM.layer = 1

    leaf = new Group();
    leaf.collider = 'n';
    leaf.image = leafImg;
    leaf.tile = 'l';
    leaf.w = tileSize;
    leaf.h = tileSize;
    leaf.layer = 1

    leafT = new Group();
    leafT.collider = 'n';
    leafT.image = leafTImg;
    leafT.tile = 'U';
    leafT.w = tileSize;
    leafT.h = tileSize;
    leafT.layer = 1

    leafRC = new Group();
    leafRC.collider = 'n';
    leafRC.image = leafRCImg;
    leafRC.tile = 'u';
    leafRC.w = tileSize;
    leafRC.h = tileSize;
    leafRC.layer = 1

    leafLC = new Group();
    leafLC.collider = 'n';
    leafLC.image = leafLCImg;
    leafLC.tile = 'o';
    leafLC.w = tileSize;
    leafLC.h = tileSize;
    leafLC.layer = 1

    leafBLC = new Group();
    leafBLC.collider = 'n';
    leafBLC.image = leafBLCImg;
    leafBLC.tile = 'q';
    leafBLC.w = tileSize;
    leafBLC.h = tileSize;
    leafBLC.layer = 1

    leafBRC = new Group();
    leafBRC.collider = 'n';
    leafBRC.image = leafBRCImg;
    leafBRC.tile = 'a';
    leafBRC.w = tileSize;
    leafBRC.h = tileSize;
    leafBRC.layer = 1

    leafL = new Group();
    leafL.collider = 'n';
    leafL.image = leafLImg;
    leafL.tile = 'f';
    leafL.w = tileSize;
    leafL.h = tileSize;
    leafL.layer = 1

    leafR = new Group();
    leafR.collider = 'n';
    leafR.image = leafRImg;
    leafR.tile = 'F';
    leafR.w = tileSize;
    leafR.h = tileSize;
    leafR.layer = 1

    leafB = new Group();
    leafB.collider = 'n';
    leafB.image = leafBImg;
    leafB.tile = 'D';
    leafB.w = tileSize;
    leafB.h = tileSize;
    leafB.layer = 1

    leafM = new Group();
    leafM.collider = 'n';
    leafM.image = leafMImg;
    leafM.tile = 'd';
    leafM.w = tileSize;
    leafM.h = tileSize;
    leafM.layer = 1

    leafTrunk = new Group();
    leafTrunk.collider = 'n';
    leafTrunk.image = leafTrunkImg;
    leafTrunk.tile = 'i';
    leafTrunk.w = tileSize;
    leafTrunk.h = tileSize;
    leafTrunk.layer = 1

    trunk = new Group();
    trunk.collider = 'n';
    trunk.image = trunkImg;
    trunk.tile = 't';
    trunk.w = tileSize;
    trunk.h = tileSize;
    trunk.layer = 1

    trunkB = new Group();
    trunkB.collider = 'n';
    trunkB.image = trunkBImg;
    trunkB.tile = 'P';
    trunkB.w = tileSize;
    trunkB.h = tileSize;
    trunkB.layer = 1

    trunkBRR = new Group();
    trunkBRR.collider = 'n';
    trunkBRR.image = trunkBRRImg;
    trunkBRR.tile = '1';
    trunkBRR.w = tileSize;
    trunkBRR.h = tileSize;
    trunkBRR.layer = 1

    trunkBRL = new Group();
    trunkBRL.collider = 'n';
    trunkBRL.image = trunkBRLImg;
    trunkBRL.tile = '2';
    trunkBRL.w = tileSize;
    trunkBRL.h = tileSize;
    trunkBRL.layer = 1

    branchL = new Group();
    branchL.collider = 'n';
    branchL.image = branchLImg;
    branchL.tile = '3';
    branchL.w = tileSize;
    branchL.h = tileSize;
    branchL.layer = 1

    branchR = new Group();
    branchR.collider = 'n';
    branchR.image = branchRImg;
    branchR.tile = '4';
    branchR.w = tileSize;
    branchR.h = tileSize;
    branchR.layer = 1

    cloudL = new walkable.Group();
    cloudL.collider = 's';
    cloudL.image = cloudLImg;
    cloudL.tile = 'k';
    cloudL.w = tileSize;
    cloudL.h = tileSize;
    cloudL.layer = 1

    cloudR = new walkable.Group();
    cloudR.collider = 's';
    cloudR.image = cloudRImg;
    cloudR.tile = 'V';
    cloudR.w = tileSize;
    cloudR.h = tileSize;
    cloudR.layer = 1

    cloudM = new walkable.Group();
    cloudM.collider = 's';
    cloudM.image = cloudMImg;
    cloudM.tile = 'C';
    cloudM.w = tileSize;
    cloudM.h = tileSize;
    cloudM.layer = 1

    cloud = new walkable.Group();
    cloud.collider = 's';
    cloud.image = cloudImg;
    cloud.tile = 'c';
    cloud.w = tileSize;
    cloud.h = tileSize;
    cloud.layer = 1

    mushroomTrunk = new Group();
    mushroomTrunk.collider = 'n';
    mushroomTrunk.image = mushroomImg;
    mushroomTrunk.tile = 'm';
    mushroomTrunk.w = tileSize;
    mushroomTrunk.h = tileSize;
    mushroomTrunk.layer = 1

    mushroomTrunkB = new Group();
    mushroomTrunkB.collider = 'n';
    mushroomTrunkB.image = mushroomBImg;
    mushroomTrunkB.tile = 'y';
    mushroomTrunkB.w = tileSize;
    mushroomTrunkB.h = tileSize;
    mushroomTrunkB.layer = 1

    mushroomTrunkT = new Group();
    mushroomTrunkT.collider = 's';
    mushroomTrunkT.image = mushroomTImg;
    mushroomTrunkT.tile = 'Y';
    mushroomTrunkT.w = tileSize;
    mushroomTrunkT.h = tileSize;
    mushroomTrunkT.layer = 1
    
    mushroom = new walkable.Group();
    mushroom.collider = 's';
    mushroom.image = mushroomMImg;
    mushroom.tile = 'M';
    mushroom.w = tileSize;
    mushroom.h = tileSize;
    mushroom.layer = 1

    mushroomER = new walkable.Group();
    mushroomER.collider = 's';
    mushroomER.image = mushroomERImg;
    mushroomER.tile = 'K';
    mushroomER.w = tileSize;
    mushroomER.h = tileSize;
    mushroomER.layer = 1

    mushroomEL = new walkable.Group();
    mushroomEL.collider = 's';
    mushroomEL.image = mushroomELImg;
    mushroomEL.tile = 'O';
    mushroomEL.w = tileSize;
    mushroomEL.h = tileSize;
    mushroomEL.layer = 1

    ghouse = new walkable.Group();
    ghouse.collider = 's'
    ghouse.image = ghouseImg
    ghouse.tile = '5'
    ghouse.w = tileSize
    ghouse.h = tileSize
    ghouse.layer = 1

    ghouseD = new walkable.Group();
    ghouseD.collider = 's'
    ghouseD.image = ghouseDImg
    ghouseD.tile = '6'
    ghouseD.w = tileSize
    ghouseD.h = tileSize
    ghouseD.layer = 1

    ghouseDT = new walkable.Group();
    ghouseDT.collider = 's'
    ghouseDT.image = ghouseDTImg
    ghouseDT.tile = '7'
    ghouseDT.w = tileSize
    ghouseDT.h = tileSize
    ghouseDT.layer = 1

    ghouseLC = new walkable.Group();
    ghouseLC.collider = 's'
    ghouseLC.image = ghouseLCImg
    ghouseLC.tile = '8'
    ghouseLC.w = tileSize
    ghouseLC.h = tileSize
    ghouseLC.layer = 1

    ghouseRC = new walkable.Group();
    ghouseRC.collider = 's'
    ghouseRC.image = ghouseRCImg
    ghouseRC.tile = '9'
    ghouseRC.w = tileSize
    ghouseRC.h = tileSize
    ghouseRC.layer = 1

    ghouseM = new walkable.Group();
    ghouseM.collider = 's'
    ghouseM.image = ghouseMImg
    ghouseM.tile = '@'
    ghouseM.w = tileSize
    ghouseM.h = tileSize
    ghouseM.layer = 1

    hay = new walkable.Group();
    hay.collider = 's'
    hay.image = hayImg
    hay.tile = '£'
    hay.w = tileSize
    hay.h = tileSize
    hay.layer = 1

    hayL = new walkable.Group();
    hayL.collider = 's'
    hayL.image = hayLImg
    hayL.tile = '$'
    hayL.w = tileSize
    hayL.h = tileSize
    hayL.layer = 1

    hayR = new walkable.Group();
    hayR.collider = 's'
    hayR.image = hayRImg
    hayR.tile = '%'
    hayR.w = tileSize
    hayR.h = tileSize
    hayR.layer = 1

    water = new Group();
    water.collider = 'n';
    water.image = waterImg;
    water.tile = 'W';
    water.w = tileSize;
    water.h = tileSize;

    waterT = new Group();
    waterT.collider = 'n';
    waterT.image = waterTImg;
    waterT.tile = 'w';
    waterT.w = tileSize;
    waterT.h = tileSize;

    waterF = new Group();
    waterF.collider = 'n';
    waterF.image = waterFImg;
    waterF.tile = '?';
    waterF.w = tileSize;
    waterF.h = tileSize;

    waterFB = new Group();
    waterFB.collider = 'n';
    waterFB.image = waterFBImg;
    waterFB.tile = '#';
    waterFB.w = tileSize;
    waterFB.h = tileSize;

    spikes = new walkable.Group();
    spikes.collider = 's';
    spikes.image = spikesImg;
    spikes.tile = 'I';
    spikes.w = tileSize-2;
    spikes.h = tileSize / 9;

    checkBase = new Group();
    checkBase.collider = 'n';
    checkBase.image = checkBaseImg;
    checkBase.tile = 'h';
    checkBase.w = tileSize;
    checkBase.h = tileSize;

    checkpoints = new Group();
    checkpoints.collider = 'n';
    checkpoints.tile = 'H'
    checkpoints.w = tileSize;
    checkpoints.h = tileSize;
    checkpoints.image = checkPoleImg

    end = new Group();
    end.collider = 'n';
    end.tile = '!'
    end.w = tileSize;
    end.h = tileSize;
    end.visible = false

    pump = new Group();
    pump.collider = 's';
    pump.image = pumpImg
    pump.tile = 'j';
    pump.w = tileSize;
    pump.h = tileSize;

    coins = new Group()
    coins.collider = 'n'
    coins.w = 12
    coins.h = 12
    coins.spriteSheet = coinSheet;
        coins.anis.frameDelay = 30;
        coins.addAnis({
            coin1: { row:0, frames:2},
        });
    coins.tile = '*'
}

function setupMenu() {
    createCanvas(384, 216, 'pixelated x4');
    background(bgImg);
    textSize(32);
    tileSetup();

    coinSound.setVolume(0.2)
    deathSound.setVolume(0.2)
    hitSound.setVolume(0.2)
    jumpSound.setVolume(0.2)
    fireSound.setVolume(0.2)
    shieldSound.setVolume(0.2)

    enemies1 = new Enemy1(enemy1Sheet)
    enemies2 = new Enemy2(enemy2Sheet)
    enemies3 = new Enemy3(enemy3Sheet)

    //Navigation bar buttons
    LoadButton = createButton('Load Game');
    LoadButton.class("button");
    LoadButton.position(width * 2.15, height * 1.5);

    NewButton = createButton('New Game');
    NewButton.class("button");
    NewButton.position(width * 2.15, height * 2);
    NewButton.mousePressed(newGame);

    HighscoreButton = createButton('Highscores');
    HighscoreButton.class("button");
    HighscoreButton.position(width * 2.13, height * 2.5);
    HighscoreButton.mousePressed(gotoHighscores);
    
    SettingsButton = createButton('Settings');
    SettingsButton.class("button");
    SettingsButton.position(width * 2.21, height * 3);
}

function setupGame() {
    createCanvas(384, 216, 'pixelated');
    //createCanvas(1252, 748);
    world.gravity.y = 10;
    player = new Player(startPositions[0][0], startPositions[0][1], sheet)
    player.player.friction = 10
    player.player.drag = 5
    hearts = new Hearts(player.player.x, player.player.y, heartsSheet);
    shield = new Shield(player.player.x, player.player.y, shieldSheet);
    levelSetup();

    //allSprites.debug = true
    // Player sensors
    let sensors = new Group();
    topSensor = new sensors.Sprite(player.player.x, player.player.y - 8)
    bottomSensor = new sensors.Sprite(player.player.x, player.player.y + player.player.h/2 - 1)
    leftSensor = new sensors.Sprite(player.player.x - player.player.w/2 + 1, player.player.y)
    rightSensor = new sensors.Sprite(player.player.x + player.player.w/2 - 1, player.player.y)

    topSensor.w = player.player.w/3
    topSensor.h = 2
    bottomSensor.w = player.player.w/1.5
    bottomSensor.h = 2
    leftSensor.w = 1;
    leftSensor.h = player.player.h/2
    rightSensor.w = 1;
    rightSensor.h = player.player.h/2

    bottomSensor.visible = false;
    topSensor.visible = false;
    leftSensor.visible = false;
    rightSensor.visible = false;

    bottomJoint = new GlueJoint(player.player, bottomSensor)
    topJoint = new GlueJoint(player.player, topSensor)
    leftJoint = new GlueJoint(player.player, leftSensor)
    rightJoint = new GlueJoint(player.player, rightSensor)
    topJoint.visible = false;
    bottomJoint.visible = false;
    leftJoint.visible = false;
    rightJoint.visible = false;
}

function setupPause() {
    //createCanvas(384, 216, 'pixelated x4');
    levelTiles.removeAll()
    player.player.remove()
    enemies1.enemy1.removeAll()
    hearts.hearts.remove()
    shield.shield.remove()
    //sensors.remove()
    background(bgImg);
    textSize(32);

    ContinueButton = createButton('Continue');
    ContinueButton.class("button");
    ContinueButton.position(width * 2.29, height * 2);
    ContinueButton.mousePressed(continueGame);

    BackButton = createButton('Main Menu');
    BackButton.class("button");
    BackButton.position(width * 2.24, height * 2.5);
    BackButton.mousePressed(mainMenu);
}

function setupHScores() {
    createCanvas(384, 216, 'pixelated x4');
    background(bgImg);
    textSize(32);

    BackButton = createButton('Back');
    BackButton.class("button");
    BackButton.position(width * 2.29, height * 3.5);
    BackButton.mousePressed(mainMenu);

}

function setupRetry() {
    levelTiles.removeAll()
    player.player.remove()
    enemies1.enemy1.removeAll()
    hearts.hearts.remove()
    shield.shield.remove()
    background(bgDead);
    textSize(32);

    RetryButton = createButton('Retry');
    RetryButton.class("button");
    RetryButton.position(width * 2.22, height * 2);
    RetryButton.mousePressed(retryGame);

    MenuButton = createButton('Menu');
    MenuButton.class("button");
    MenuButton.position(width * 2.22, height * 2.5);
    MenuButton.mousePressed(mainMenu);
}

function levelSetup() {
    //This sets up the tilemap using the tiles created above
    tilemaps =[[
        "gR000eggR.......................................................",
        "bL0000Appr.......................................................",
        "S0000GL.........................................................",
        "S00--B...................................uUo....................",
        "L-+!!...uUo..............................fllo...................",
        ".!!....ulllUo............................qllF...................",
        "......ullllDa.............................qia...................",
        "......qDllF..............^.............H...t....................",
        "........qia.........................uoEh...t....................",
        "R..*.....t........................IulGggRI.t....................",
        "XggRI....t........................GggZbbXRIP....................",
        "bbbXR.d..t.......................eZbbbGRbXggRI..................",
        "bbbbSUlo.t...................kV...NbbeZXgRbbXgR...kCV...........",
        "bbbbXgRFIPI.......*.....*..........NbbApbprbbbXR................",
        "gRbbbbXggggR...kV...................AbBbBbpbbbbL........kCV.....",
        "bXggggRbbbbbR..........OMMYMMK......NbpbbL.AbbL...............II",
        "bbbbbbXrbbbbS....OMYMK....m..........Q.NS..NbS...............egg",
        "bbbbbpLbbbbbL......m......m..........B..B...AL................Ab",
        "bbbbSbbbbbbL.......m......m.................B............*I...Nb",
        "bbbbLbbbbbS........m...*..m.............................GgR....A",
        "bbbLbbbpppL........m...uo.m............................eZbS....N",
        "ppLbbbL......uo....m..ulF.m...............H.............NpL.....",
        "bbbbbS......ullo...yIGggRIy..........uo..Eh.....................",
        "ppbbbL.....ulllF..IGgZbbGggR........ullUGgggRI......GR..........",
        "..NpL......qllla.GggRbbbAbbL........flGgZbbbXgR....eZXr.........",
        ".......*....qia..NppLbbbNpL........IGgZbbbbbGgggR...NL....IT....",
        ".............t....NpppbbL..........GZbbbGggggRbbS........esL....",
        "!.....uo.....P........NL.......*.GggRbbbAbbbbSppL..TI...........",
        "gggREulF.....GR...............uo.NbbSbbbAbbbbSbS..GZgR..........",
        "bbbGggggR...GggRo..........I.ullo.NbSbbbAbbbbSbS..NppL.T..T.....",
        "bbbAbbbbS...AbbSlUo.......IGgggRF..AGRbbAbbbbSbS.......B..Nr....",
        "bGgRbbbbL...AbbGgggR.....GgRbbbXR..AASbbAbbbbSbS....*...........",
        "bAbSbbbS....AbbAbbbS.....NbGgRbbL..AASbbAbbbbSbbR..GgR..........",
        "bAbGgRbS....AbbAbbbS......AAbSbS...AASbbAbbbbSbbS..AbbgR.....GR.",
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
        "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"],

        [
        "................................................................",
        ".!..............................................................",
        "ggR.............................................................",
        "bbXr....kV......................................................",
        "bbL...........kV.............................................jGg",
        "bL...........................................H..............GgZb",
        "Q....................kV......................h............egZbbb",
        "B............................................T......GR.....Npbbb",
        ".............................kV.............GZR....GZL.......Nbb",
        "............................................AbS....AS.........Ab",
        "......................................kV....NbS....NS.........Nb",
        "........uUo...........uUo....................AL.....B..........Q",
        ".......ulllo..........fllo...................B.................B",
        ".......qllla.........ullla...........uUo........................",
        "........qia..........qDia.........c.ulllo.......................",
        "o........t.............14..........ulllllo...............Twwwwww",
        "lo.......P...........H32...........flllllF..............eSWWTWWW",
        "lF......GR..........Eh.t...........qDlllla...............B?ebggg",
        "lF.....eZXR.......GgggRP.............qiDa....kV...........?.Abbb",
        "ia......NbS......GZbZbXgR.............t...............kV..?.Abbb",
        "14.......AL.....GZbbbbbbS.............t...........c.......?.Nbbb",
        "t........B......NbbppbbbL............32...................?..Abb",
        "Pj...............AL..NbS............H.t...................?..Nbb",
        "gR...............B....NS............hEP.................uo?...Ab",
        "bL.....................B...........GggR......uo........ull?o..Ab",
        "B.........uUo....................GgZbbXgR...ullo......ulll?a..Ab",
        "...8@@@9..fllo...uUo.............NbbGRbbS..ullla......qDia?...Ab",
        "R..57555..qllF..ullF..............NbAXgRbR.qDia.........14?...Ab",
        "gR.56555...qia.ullla...............ANbbLbS...t......£...t.?...Ab",
        "bGggggggR...t..qllF................NbNSbbL...t.....$%...t.#..Gbb",
        "bAbbbbbbSR.32...qia.................AbBbS....t.£...$%£..PTwwwAbb",
        "bAGRbbbbSS..14...t.................GZbbbbR.$%P.$%..$%GgggZRWWAbb",
        "bAAXgRbbSS..t...32......&.........jAbbbbbXgggggggggggZbbbbbggbbb",
        "bAAbbSbbSXR.P....P..GggggggR......GZbGgggggggggRbbbbbbbbbbbbbbbb",
        "bAAbbSbbGgggggggggggZbbGgRbXgR...GZbGbbbbbbbbbbXgggggRbbbbbbbbbb",
        "bAAbbSbbAbbbGggggggggRbAbSbbbSkCVAbbAbbbbGggggggRbbbbSbbbbbbbbbb",],
        
        [
        "bbbbbbbbbbbbS......NbbbbbbbbbbbbbbbbbbbbbbbS......Abbbbbbbbbbbbb",
        "bbbbbbbbbbbbL.......AbbbbbbbbbbbbbbbbbbbbbbbR....Gbbbbbbbbbbbbbb",
        "bbbbbbbbbppL....^...NbbbbbbbbbbbbbbbbbppbbbbbK...BqNbbbbbbbbbbbb",
        "bbbbbpppL.q..........NbbbbbbbbbbbbbppLq.NpbbL4....a.qNpbbbbbbbbb",
        "bpppL..q..a..........qNpbbbbbbbbbpL...a...NL......a.a..Npbbbbbbb",
        "L......a.Ha..........a..NpbbbpppLq....a...q......OMMMK...Abbbbbb",
        ".......a.ha..........a..q.NbL..q.a....a...a.......q.......Nbbbbb",
        "......OMMMMK.........a..a..Q...a.a...OMMMMMK......a........Nbbbb",
        "..........q..........a..a..B...a.a......q.........a.........Abbb",
        "..........a..........a..a......a.a......a.........a.........Abbb",
        "..OMK.....a..........a..a.....OMMMK.....a.........a.........Nbbb",
        "...t......a.........OMMMMK..............a.........a..........Nbb",
        "...t......a.............................a.........a...........Nb",
        "...t......a.............................a.........a............A",
        ".i.t......a.............................a.........a............N",
        "OMMMMK....a.............................a.........a.............",
        ".t........c.............................a.........a.............",
        ".t..................&............H......a.........c.............",
        ".t...............OMMMMMK.......i.h......c.......................",
        ".t..................t.......OMMMMMK......................ullo...",
        ".t..................t..........t.........................U..Uull",
        ".t..................t..........t.........................U..UU£.",
        ".t..................t....^.....t........................Gggggggg",
        "ggR.................t..........t........................Abbbbbbb",
        "bbS.................t..........t.......................OAbbbbbbb",
        "bbS£..............E.t........H.t.......................3AbbGggRb",
        "GggggR..........GggggggR.....h.t.....................ullAbbAbbSb",
        "bbbbbS..........AbbbbbbS...GggggR....................U..AbbAbbSb",
        "bbbbGggR.......uAbbbbbbS£uoAbbbbS...............^...GgggbbbAbbSb",
        "bbbbAbbS.......UAbbbbGggggggRbbbS...................AbbbbbbAbbSb",
        "bbbbAbbS...GgR.UAbbbbAbbbbbbSbbbS...................AbbbbbbAbbSb",
        "bbbbAbbS...AbS.dAbbbbAbbbbbbSbbbSlo...............££AbbbbbbAbbSb",
        "GgRbAbbSwwwAbSw#AbbbbAbbbbbbSbbbS.d......E.......GgggRbbbbbAbbSb",
        "bbSbAbbSWWWAbSWWAbbbbAbbbbGgggRbSw#wwwwGgggR.....AbbbSbbbGgggRSb",
        "bbSbAbbSWWWAbSWWAbbbbAbbbbAbbbSbSWWWWWWAbbbSwwwwwAbbbSbbbAbbbSSb",
        "bbSbAbbSWWWAbSWWAbbbbAbbbbAbbbSbSWWWWWWAbbbSwwwwwAbbbSbbbAbbbSSb"]
    ]

    levelTiles = new Tiles (tilemaps[tilemapCount],
        9,
        9,
        tileSize-1,
        tileSize-1
        );
}

function draw() {
    if(state == 0) {
        if(tempStateM == 0) {
            setupMenu()
            tempStateM = 1
        }
        tempStateG = 0
        tempStateP = 0
        tempStateR = 0
        tempStateH = 0
        drawMenu()
    }
    else if(state == 1) {
        if(tempStateG == 0) {
            setupGame()
            tempStateG = 1
        }
        drawGame()
        tempStateP = 0
        tempStateM = 0
        tempStateR = 0
        tempStateH = 0
    }
    else if(state == 2) {
        if(tempStateP == 0) {
            setupPause()
            tempStateP = 1
        }
        tempStateG = 0
        tempStateM = 0
        tempStateR = 0
        tempStateH = 0
        drawPause()
    }
    else if(state == 3) {
        if(tempStateR == 0) {
            setupRetry()
            tempStateR = 1
        }
        tempStateG = 0
        tempStateM = 0
        tempStateP = 0
        tempStateH = 0
        drawRetry()
    }
    else if(state == 4) {
        if(tempStateH == 0) {
            setupHScores()
            tempStateH = 1
        }
        tempStateG = 0
        tempStateM = 0
        tempStateP = 0
        tempStateR = 0
        drawHScores()
    }
    //console.log(state + " " + tempStateG)
}

function drawMenu() {
    text("CLIFFHANGER", width*0.25, height*0.15)
}

function drawRetry() {
    text("YOU HAVE DIED", width*0.2, height*0.15)
    if(!dataSent) {
       pname = prompt("Enter your name:")
       alert("Your score was " + player.score * (tilemapCount + 1))
       send(pname, player.score*(tilemapCount+1), 1, 1)
       dataSent = true
    }
    
}

function drawGame() {
    clear();
    SettingsButton.remove()
    HighscoreButton.remove()
    NewButton.remove()
    LoadButton.remove()
    //background(174, 227, 237);
    //background(249, 226, 188);
    background(bgColours[tilemapCount][0], bgColours[tilemapCount][1], bgColours[tilemapCount][2])
    textSize(16)
    //text(player.score, width*0.93, height*0.1)
    //background(255)

    if(player.lives == 0) {
        state = 3
    }

    player.show();
    player.move();
    player.useDash();

    fixHearts(player.player.x, player.player.y);
    hearts.show(player.lives);

    fixShield(player.player.x, player.player.y);
    shield.show()
    shield.cooldown()
    shield.use()
    shieldActive = shield.returnActive();

    moveEnemies();
    lockOn();

    preventBounce();
    doubleJump();
    preventDoubleDash();
    overlapCheckpoint();
    collectPumpkin();
    collectCoin();
    useSlowFall();
    trackPlayer()
    resetSensors()

    touchWater();
    touchSpikes();

    openMenu();

    // Checking if the player has reached the end of the level
    if(player.player.overlapping(end)) {
        // Increments the tile map and resets player and enemies
        levelTimer -= 1
        //console.log(levelTimer)
        if(levelTimer == 0) {
            tilemapCount += 1
            player.player.x = startPositions[tilemapCount][0]
            player.player.y = startPositions[tilemapCount][1]
            for(e of enemies1.enemy1) {
                e.remove()

            }
            for(d of enemies2.enemy2) {
                d.remove()
                projectile.remove()
                
            }
            levelTiles.remove()
            player.resetSpawn(startPositions[tilemapCount][0], startPositions[tilemapCount][1])
            player.checkpoint = 0
            changeTiles()
            levelSetup()
            resetSensors()
            levelTimer = 5
        }
        
            
    }
    if(player.player.lives == 0){
        tilemapCount = 0
    }

    //console.log(player.player.y)
}

function drawPause() {
    text("PAUSED", width*0.37, height*0.15)
    
}

function drawHScores() {
    text("HIGHSCORES", width*0.28, height*0.15)

    SettingsButton.remove()
    HighscoreButton.remove()
    NewButton.remove()
    LoadButton.remove()

    name1Button = createButton(scores[0][0]);
    name1Button.class("button1");
    name1Button.position(width * 1.95, height * 1.1);

    score1Button = createButton(scores[0][1]);
    score1Button.class("button1");
    score1Button.position(width * 2.85, height * 1.1);

    name2Button = createButton(scores[1][0]);
    name2Button.class("button1");
    name2Button.position(width * 1.95, height * 1.4);

    score2Button = createButton(scores[1][1]);
    score2Button.class("button1");
    score2Button.position(width * 2.85, height * 1.4);

    name3Button = createButton(scores[2][0]);
    name3Button.class("button1");
    name3Button.position(width * 1.95, height * 1.7);

    score3Button = createButton(scores[2][1]);
    score3Button.class("button1");
    score3Button.position(width * 2.85, height * 1.7);

    name4Button = createButton(scores[3][0]);
    name4Button.class("button1");
    name4Button.position(width * 1.95, height * 2);

    score4Button = createButton(scores[3][1]);
    score4Button.class("button1");
    score4Button.position(width * 2.85, height * 2);

    name5Button = createButton(scores[4][0]);
    name5Button.class("button1");
    name5Button.position(width * 1.95, height * 2.3);

    score5Button = createButton(scores[4][1]);
    score5Button.class("button1");
    score5Button.position(width * 2.85, height * 2.3);

    name6Button = createButton(scores[5][0]);
    name6Button.class("button1");
    name6Button.position(width * 1.95, height *2.6);

    score6Button = createButton(scores[5][1]);
    score6Button.class("button1");
    score6Button.position(width * 2.85, height * 2.6);
}

// Function to change the images of all the tiles to
// the appropriate tiles for the current level
function changeTiles() {
    if(tilemapCount == 1) {
        leaf.image = leaf2Img
        leafT.image = leafT2Img
        leafB.image = leafB2Img
        leafBLC.image = leafBLC2Img
        leafBRC.image = leafBRC2Img
        leafL.image = leafL2Img
        leafLC.image = leafRC2Img
        leafR.image = leafR2Img
        leafRC.image = leafLC2Img

        grassS.image = grass2Img
        grassL.image = grassL2Img
        grassR.image = grassR2Img
        grassEL.image = grassEL2Img
        grassER.image = grassER2Img
        grassM.image = grassM2Img
        grassT.image = grassT2Img

        trunk.image = trunk2Img
        trunkB.image = trunkB2Img
        leafTrunk.image = trunkT2Img
    }
    if(tilemapCount == 2) {
        grassS.image = grass3Img
        grassL.image = grassL3Img
        grassR.image = grassR3Img

        water.image = water3Img
        waterT.image = water3Wmg
        waterFB.image = water3PImg

        trunk.img = suppImg
        leafTrunk.img = suppTImg

        mushroom.img = beamImg
        mushroomEL.img = beamELImg
        mushroomER.img = beamERImg

        leaf.img = pipeAImg
        leafT.img = pipeSImg
        leafLC.img = pipeBLImg
        leafRC.img = pipeBRImg
        leafM.img = pipeEImg

        hay.img = barrelImg
        branchL.img = anchLImg
        branchR.img = anchRImg

        leafBLC.img = chainTImg
        leafBRC.img = chainImg
        cloud.img = hookImg
    }
}

//Function to fix the hearts to the top left corner
function fixHearts(xPos, yPos) {
    if(xPos <= 196) {
        hearts.hearts.x = 35
    }
    else if(xPos >= 896) {
        hearts.hearts.x = 736
    }
    else {
        if(kb.pressing('a') && kb.pressing('d')) {
            hearts.hearts.x = xPos -  160
        }
        else if(kb.pressing('d')) {
            hearts.hearts.x = xPos - 160
        }
        else if(kb.pressing('a')) {
            hearts.hearts.x = xPos - 160
        }
        else {
            hearts.hearts.x = xPos -  160
        }
    }
    if(yPos >= 505) { 
        hearts.hearts.y = 410
    }
    else if(yPos <= 110) {
        hearts.hearts.y = 15
    }
    else {
        hearts.hearts.y = yPos - 95
    }
}

//Function to fix the shield icon to the bottom left corner
function fixShield(xPos, yPos) {
    if(xPos <= 196) {
        shield.shield.x = 17
    }
    else if(xPos >= 896) {
        shield.shield.x = 718
    }
    else {
        if(kb.pressing('a') && kb.pressing('d')) {
            shield.shield.x = xPos -  178
        }
        else if(kb.pressing('d')) {
            shield.shield.x = xPos - 178
        }
        else if(kb.pressing('a')) {
            shield.shield.x = xPos - 178
        }
        else {
            shield.shield.x = xPos -  178
        }
    }
    if(yPos >= 505) {
        shield.shield.y = 600
    }
    else if(yPos <= 110) {
        shield.shield.y = 205
    }
    else {
        shield.shield.y = yPos + 95
    }
}

//Stops the player fromo bouncing when they land on a walkable tile
function preventBounce() {
    if((bottomSensor.colliding(walkable) || bottomSensor.colliding(corner))) {
        //player.player.vel.y = 0;
    }
}

//Prevents the player from jumping multiple times
function doubleJump() {
    // Checks if the player is in the air, and performs another jump if they have only jumped once
    if((!bottomSensor.colliding(walkable) || !bottomSensor.colliding(corner)) && player.doubleJump) {
        if(kb.presses(' ')) {
            player.player.vel.y -= 8
            player.doubleJump = false;
            jumpSound.play()
        }
    }
    // Resets the double jump ability upon landing
    else if(bottomSensor.colliding(walkable) || bottomSensor.colliding(corner)) {
        player.doubleJump = true
        if(kb.presses(' ')) {
            player.player.vel.y -= 8
            jumpSound.play()
        }
    // Ensures that the player gains speed as they fall
    else if(!(bottomSensor.colliding(walkable) || bottomSensor.colliding(corner))){
        player.player.vel.y += 0.5
    }
    }
}

//Prevents the player from dashing multiple times while in the air
function preventDoubleDash() {
    if((bottomSensor.colliding(walkable) || bottomSensor.colliding(corner))) {
        player.dash = true;
    }
}

//Kills the player if they touch the water
function touchWater() {
    if(player.player.y > 620) {
        player.trueHit(checkx, checky);
        hitSound.play()
        resetSensors()
    }
}

//Kills the player if they touch the spikes
function touchSpikes() {
    if(player.player.collides(spikes)){
        player.hit(shieldActive, checkx, checky, shieldSound, hitSound)
        hitSound.play()
        resetSensors()
    }
}

function openMenu() {
    if(kb.presses('Escape')) {
        state = 2
    }
}

// Check if the player is touching a checkpoint and changes the spawn location
function overlapCheckpoint() {
    for (c of checkpoints) {
        if (bottomSensor.overlaps(c)) {
            if(c.image != checkFlagImg) {
                player.checkpoint += 1
                c.image = checkFlagImg
                checkx = c.x
                checky = c.y
            }
        }
    }
}

// Resets all of the player sensors to mitigate bugs
function resetSensors() {
    topSensor.x = player.player.x
    bottomSensor.x = player.player.x
    leftSensor.x = player.player.x - player.player.w/2 + 1
    rightSensor.x = player.player.x + player.player.w/2 - 1
    topSensor.y = player.player.y - 8
    bottomSensor.y = player.player.y + player.player.h/2 - 1
    leftSensor.y = player.player.y
    rightSensor.y = player.player.y
}

// Function to move and burrow the enemies
function moveEnemies() {
    let burrowNum = Math.floor(Math.random() * 200);
    let tempS = -1
    //Iterates through each enemy on the level
    for(e of enemies1.enemy1) {
        touchEnemies()

        //Begins the burrow state if burrowNum is equal to 5
        if(burrowNum == 5 && burrowTime > 0) {
            burrowed = true
            e.ani = 'burrow'
        }

        //Ensures the enemy remains still while burrowed and counts down
        if(burrowed) {
            burrowTime -= 1;
            if(burrowTime == 0) {
                burrowed = false;
                burrowTime = 180
            }
            e.collider = 's'
        }
        
        //Moves the enemy depending on their direction
        else {
            e.collider = 'd'
            e.ani = 'move1'
            //Movement
            if(e.direction == 0) {
                tempS = 1
            }
            else if(e.direction == 180) {
                tempS = -1
            }
            if(e.collides(corner)) {
                if(e.direction == 180) {
                    e.direction = 0
                    e.mirror.x = true
                }
                else if(e.direction == 0) {
                    e.direction = 180
                    e.mirror.x = false
                }
            }
            e.x += (enemies1.speed * 0.9) * tempS
        }
    
    }
}

// Function to determine who takes damage during player/enemy contact
function touchEnemies() {
    if((leftSensor.collides(e)) || (rightSensor.collides(e))) {
        if(!burrowed) {
            player.hit(shieldActive, checkx, checky, shieldSound, hitSound)
            console.log('side')
            resetSensors()
        }
    }
    else if(bottomSensor.collides(e)) {
        if(burrowed) {
            player.hit(shieldActive, checkx, checky, shieldSound, hitSound)
            console.log('burrow hit')
            resetSensors()
        }
        else {
            console.log('top')
            e.remove()
            player.score += 1
        }
    }
}

// Function to fire a projectile towards the player
function lockOn() {
    for(d of enemies2.enemy2) {
        enemy2Hyp = calcDist(player.player.x, d.x, player.player.y, d.y)
        d.opp = d.y - player.player.y
        // Checks if the distance between player and enemy is less than 150 and if the player is above the enemy#
        if((player.player.y < d.y) && (enemy2Hyp <= 150)) {

            // Determines the angle between the player and the enemy
            if(player.player.x > d.x) {
                d.mirror.x = true
                d.adj = player.player.x - d.x
                d.angle = -Math.atan(d.opp/d.adj) * (180/PI);
            }
            else if(player.player.x < d.x){
                d.mirror.x = false
                d.adj = d.x - player.player.x 
                d.angle = Math.atan(d.opp/d.adj) * (180/PI) +180
            }

            // Fires a projectile if their isn't one already and the cooldown has ended
            if(!pTest && projDelay <= 0) {
                projectile = new Sprite(d.x, d.y-10, 3)
                //projectile.w = 3
                //projectile.h = 3
                projectile.color = 'red'
                projectile.collider = 'n'
                pTest = true
                projExist = true
                d.fireAngle = d.angle
                projDelay = 60
                fireSound.play()
            }
            
        }
        if(projExist) {
            // Move projectile at the defined angle
            projectile.move(100, d.fireAngle, 2)
            projHyp = calcDist(projectile.x, d.x, projectile.y, d.y)
            // Removes the projectile if it collides with a tile or travels too far
            if(projectile.overlaps(corner) || projectile.overlaps(walkable) || projectile.overlaps(block) || projHyp > 150) {
                projectile.remove()
                pTest = false
                projExist = false
            }
            // Removes the enemy and a life if the projectile hits the player
            else if(projectile.overlaps(player.player)) {
                projectile.remove()
                player.hit(shieldActive, checkx, checky, shieldSound, hitSound)
                pTest = false
                projExist = false
            }
        }
        projDelay -= 1
    }
}

// Function to calculate the distance between two sprites
function calcDist(pX, dX, pY ,dY) {
    if(pX > dX) {
        projWidth = pX - dX
    }
    else {
        projWidth = dX - pX
    }
    if(pY > dY) {
        projHeight = pY - dY
    }
    else {
        projHeight = dY - pY
    }
    let pHyp = Math.sqrt((projWidth**2) + (projHeight**2))
    return pHyp
}

// Function to give the player points when collecting a pumpkin
function collectPumpkin() {
    for(p of pump) {
        if(bottomSensor.collides(p) || leftSensor.collides(p) || rightSensor.collides(p)) {
            p.remove()
            player.score += 1
            coinSound.play()
        }
    }
}

// Function to give the player points when collecting a coin
function collectCoin() {
    for(c of coins) {
        if(player.player.overlaps(c)) {
            c.remove()
            player.score += 1
            coinSound.play()
        }
    }
}

function newGame() {
    state = 1
}

function retryGame() {
    RetryButton.remove()
    MenuButton.remove()
    state = 1
   // socket.emit('request')
}

function mainMenu() {
    window.open("index.html", "_self")
}

function gotoHighscores() {
    state = 4
}

function continueGame() {
    state = 1
    ContinueButton.remove()
    BackButton.remove()
}

function useSlowFall() {
    //Check if player is touching tiles
    if((!bottomSensor.colliding(walkable) || !bottomSensor.colliding(corner))) {
        //Check if r key is pressed
            if(kb.pressing('r') && slowFall) {
                console.log("r pressed, slowfall active")
                //Reduce world gravity
                world.gravity.y = 5;
                //Decrement timer every frame
                fallTimer -= 1
                //After 2 seconds, stop slowfall
                if(fallTimer <= 0) {
                    slowFall = false
                }
            }
            else{
                //Reset world gravity
                world.gravity.y = 10;
            }
        }
    //Reset timer when landing
    if((bottomSensor.colliding(walkable) || bottomSensor.colliding(corner))){
        slowFall = true
        fallTimer = 120
    }
}

function trackPlayer() {
    for(e of enemies3.enemy3) {
        enemy3Hyp = calcDist(player.player.x, e.x, player.player.y, e.y)
        e.opp = e.y - player.player.y
        // Checks if the distance between player and enemy is less than 150
        if((enemy3Hyp <= 150)) {

            // Determines the angle between the player and the enemy
            if(player.player.x > e.x) {
                e.mirror.x = true
                e.adj = player.player.x - e.x
                e.angle = -Math.atan(e.opp/e.adj) * (180/PI);
            }
            else if(player.player.x < e.x){
                e.mirror.x = false
                e.adj = e.x - player.player.x 
                e.angle = Math.atan(e.opp/e.adj) * (180/PI) +180
            }
            //Moves the enemy towards the player using the angle
            if(!e.colliding(walkable) && !e.colliding(corner)) {
                e.move(100, e.angle, enemies3.speed)
            }
            else {
                if(player.player.y > e.y) {
                    e.move(100, e.angle - 90, enemies3.speed)
                }
                else if(player.player.y < e.y) {
                    e.move(100, e.angle + 90, enemies3.speed)
                }
            }
    
        }
        //Check if enemy hits player
        if(e.collides(player.player)) {
            player.hit(shieldActive, checkx, checky, shieldSound, hitSound)
            e.remove()
            player.score += 1
        }
    }
}

function send(name, score, checkpoint, level) {
    data = {
        name: name,
        score: score,
        checkpoint: checkpoint,
        level: level,
    };
    //socket.emit('insert', data);
}

function getHighScore(data) {
    if(data)
    for(let i=0; i<data.length; i++) {
        let textdisplay = data[i].Name + ":" + data[i].Score;
        console.log(data[i].Score + " " + data[i].Name)
    // highscores.push(textdisplay)
        scores[i][0] = data[i].Name
        scores[i][1] = data[i].Score
        console.log(scores)
    }
}