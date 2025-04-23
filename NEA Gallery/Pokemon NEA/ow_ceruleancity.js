// Overworld variables
let tileSize = 16;
let player;
let tilemapCerulean, tilemapR1;

let pokeFont;
let isTextOnScreen = false;
let textDialogue;

let saveButton, wipeButton, owBagButton
let isBagOpen = false;
let bag_fireStone, bag_waterStone, bag_thunderStone, bag_moonStone, bag_leafStone

// Battle variables
let battle = false;
let battleBg;

let playerPk, enemyPk, playerImg, enemyImg
let fightButton, battleButton1, battleButton2, battleButton3, battleButton4, bagButton1, bagButton2
let battleOver, battleWon

let tempPlayerDex, tempPlayerLvl, tempPlayerName, tempPlayerHP
let playerSelectedPoke

// Player data
let playerDisplayName;
let pokedollars;

let bag = {
    potions: 0,
    pokeballs: 0
}

// Player party
let poke1 = {
    species: "bulbasaur",
    level: 5,
    health: 100, // %
    xp: 0
}

let poke2 = {
    species: "",
    level: 0,
    health: 0, // %
    xp: 0
}

let poke3 = {
    species: "",
    level: 0,
    health: 0, // %
    xp: 0
}

let poke4 = {
    species: "",
    level: 0,
    health: 0, // %
    xp: 0
}

let poke5 = {
    species: "",
    level: 0,
    health: 0, // %
    xp: 0
}

let poke6 = {
    species: "",
    level: 0,
    health: 0, // %
    xp: 0
}

async function preload() {
    noCanvas(); // Prevents weird black square appearing above the screen
    // Load background scenery images
    bgCerulean = loadImage('Images/LocationBackgrounds/Cerulean City.png');
    bgR1 = loadImage('Images/LocationBackgrounds/Route 1.png')

    pokeFont = loadFont('PKMN RBYGSC.ttf');
}

async function playerSetup() {
    // To be ran when player is first created (if no save file exists)
    playerDisplayName = prompt("What is your name?")
    pokedollars = 0;
    player.x = 24 * tileSize;
    player.y = 11 * tileSize;

    bag = {
        potions: 5,
        pokeballs: 10
    }

    poke1 = {
        species: "bulbasaur",
        level: 10,
        health: 100, // %
        xp: 0
    }

    poke2 = {
        species: "",
        level: 0,
        health: 0, // %
        xp: 0
    }

    poke3 = {
        species: "",
        level: 0,
        health: 0, // %
        xp: 0
    }

    poke4 = {
        species: "",
        level: 0,
        health: 0, // %
        xp: 0
    }

    poke5 = {
        species: "",
        level: 0,
        health: 0, // %
        xp: 0
    }

    poke6 = {
        species: "",
        level: 0,
        health: 0, // %
        xp: 0
    }
}

async function saveGame() {
    // All information that needs to persist after the game is reset needs to be here
    localStorage.setItem('playerName', playerDisplayName)
    localStorage.setItem('pokedollars', pokedollars)
    localStorage.setItem('playerX', player.x)
    localStorage.setItem('playerY', player.y)

    let bagString = JSON.stringify(bag)
    localStorage.setItem('bag', bagString)

    // Player party
    let poke1String = JSON.stringify(poke1);
    localStorage.setItem('poke1', poke1String);
    let poke2String = JSON.stringify(poke2);
    localStorage.setItem('poke2', poke2String);
    let poke3String = JSON.stringify(poke3);
    localStorage.setItem('poke3', poke3String);
    let poke4String = JSON.stringify(poke4);
    localStorage.setItem('poke4', poke4String);
    let poke5String = JSON.stringify(poke5);
    localStorage.setItem('poke5', poke5String);
    let poke6String = JSON.stringify(poke6);
    localStorage.setItem('poke6', poke6String);
}

async function loadGame() {
    // Items in local storage get copied to the variables.
    playerDisplayName = localStorage.getItem('playerName');
    pokedollars = int(localStorage.getItem('pokedollars'));
    player.x = int(localStorage.getItem('playerX'))
    player.y = int(localStorage.getItem('playerY'))

    let storedBagString = localStorage.getItem('bag');
    bag = JSON.parse(storedBagString);

    // Player party
    let storedPoke1String = localStorage.getItem('poke1');
    poke1 = JSON.parse(storedPoke1String);
    let storedPoke2String = localStorage.getItem('poke2');
    poke2 = JSON.parse(storedPoke2String);
    let storedPoke3String = localStorage.getItem('poke3');
    poke3 = JSON.parse(storedPoke3String);
    let storedPoke4String = localStorage.getItem('poke4');
    poke4 = JSON.parse(storedPoke4String);
    let storedPoke5String = localStorage.getItem('poke5');
    poke5 = JSON.parse(storedPoke5String);
    let storedPoke6String = localStorage.getItem('poke6');
    poke6 = JSON.parse(storedPoke6String);
}

async function wipeSaveData() {
    // Clear everything in the save/load system for a fresh save
    localStorage.clear()

    localStorage.setItem('playerX', 384)
    localStorage.setItem('playerY', 176)
}

async function setup() {
    createCanvas(1280, 600);
    textFont(pokeFont);

    // Player setup
    player = new Sprite(16, 16);
    player.x = 24 * tileSize;
    player.y = 11 * tileSize;
    player.w = tileSize * 0.75;
    player.h = tileSize * 0.75;
    player.rotationLock = true;
    player.friction = 0;
    player.drag = 0;

    // Create buttons
    saveButton = createButton("Save Game");
    saveButton.position(5, 5);
    saveButton.size(250, 70);
    saveButton.mousePressed(saveGame);

    wipeButton = createButton("Erase Data");
    wipeButton.position(260, 5);
    wipeButton.size(125, 35);
    wipeButton.mousePressed(wipeSaveData);

    owBagButton = createButton("Bag");
    owBagButton.position(5, height - 75);
    owBagButton.size(250, 70);
    owBagButton.mousePressed(toggleBag);

    // Bag buttons
    bag_fireStone = createButton("Fire Stone");
    bag_fireStone.position(5, height - 115);
    bag_fireStone.size(125, 35);
    bag_fireStone.mousePressed(() => useEvolutionStone('fire_stone'));

    bag_waterStone = createButton("Water Stone");
    bag_waterStone.position(5, height - 155);
    bag_waterStone.size(125, 35);
    bag_waterStone.mousePressed(() => useEvolutionStone('water_stone'));

    bag_thunderStone = createButton("Thunder Stone");
    bag_thunderStone.position(5, height - 195);
    bag_thunderStone.size(125, 35);
    bag_thunderStone.mousePressed(() => useEvolutionStone('thunder_stone'));

    bag_moonStone = createButton("Moon Stone");
    bag_moonStone.position(5, height - 235);
    bag_moonStone.size(125, 35);
    bag_moonStone.mousePressed(() => useEvolutionStone('moon_stone'));

    bag_leafStone = createButton("Leaf Stone");
    bag_leafStone.position(5, height - 275);
    bag_leafStone.size(125, 35);
    bag_leafStone.mousePressed(() => useEvolutionStone('leaf_stone'));

    bag_fireStone.hide()
    bag_waterStone.hide()
    bag_thunderStone.hide()
    bag_moonStone.hide()
    bag_leafStone.hide()

    // Retrieving data
    loadGame()
    // If the player has no save data, then start from default positions
    if (localStorage.getItem('playerName') == null || localStorage.getItem('playerName') == "") {
        playerSetup()
    }
    console.log("You are", playerDisplayName, "with $" + pokedollars)

    // Tiles
    collider = new Group();
    collider.collider = 's';
    collider.w = tileSize;
    collider.h = tileSize;
    collider.visible = false;

    wall = new collider.Group();
    wall.tile = 'w';

    water = new collider.Group();
    water.tile = 'W';

    eventSpot = new collider.Group();
    eventSpot.tile = 'E';

    grass = new Group();
    grass.tile = 'g';
    grass.collider = 'n';
    grass.w = tileSize;
    grass.h = tileSize;
    grass.visible = false;

    door = new Group();
    door.tile = 'd';
    door.collider = 'n';
    door.w = tileSize;
    door.h = tileSize;

    // Tilemaps
    tilemapCerulean = new Tiles([
        "WWWWWWWWWWWWwWWWWwWWWWWWWWWWWW",
        "WWwwwwwwwwwww....wwwwwwwwwwwww",
        "WWwwwwwwwwwww....wwwwwwwwwwwww",
        "WWww.wwwwwww......www..wwwwwww",
        "WWww.wwww.................wwww",
        "WWww.wdww.................wwww",
        "WWww......................wwww",
        "WWww............wwwwwww...wwww",
        "WWww............wwwwwww....E..",
        "wwww......wwwwwwwwwwwww.......",
        "wwww......wwwwwwwwwwwww.......",
        "..........wwdwwwwwwdwww.......",
        "................E.............",
        "..........................wwww",
        "..........................wwww",
        "wwww......................wwww",
        "wwww.....wwwwwwww...wwwww.wwww",
        "wwww.....wwwwwwww...wwwww.wwww",
        "wwww.....wwwwwwww...wwwww.wwww",
        "wwww.....wwwdwwww...wwdww.wwww",
        "wwww......................wwww",
        "wwww......................wwww",
        "wwww......................wwww",
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    ], 0, 0, tileSize, tileSize)

    tilemapR1 = new Tiles([
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
        "wwwwwwww......w...............wggg..ggggggwww",
        "ww.ggg......ggwgg......ggg....wgg...wwwwggwww",
        "wwgggggwww.gggwggg....gggg....wggw..wwwww.www",
        "ww.ggggwwwww.ggggg...gggww......gw..wwwwwwwww",
        "....gggwwwww..gg....gggwwwww..wwww...wwwwwwww",
        ".....wwwwwwwg......gggwwwwwwwwwwww....www.www",
        ".....wwwwwwwggg.....gwwwwwwwwwwwww.....ww.www",
        ".....wwwwwwgggggg....wwwwwwwwww...........www",
        ".....wwwwwwggwwww.....wwwwwwwww...........www",
        ".....wwwwwwwwwwww........wwwww..wwwwwww...www",
        "ww...wwwwwwww.......wwww..ggg...w.........www",
        "ww...wwwwww..gg.....wwww.ggggg..w.gggg....www",
        "ww..........gggg....wwwwwwwwwwwwwgggggggggwww",
        "ww..........gggg....wwww.........gggggggggwww",
        "ww..........gggg..wwwwwwwwwww......ggggg.wwww",
        "ww..........gggg..wwwwwwwwww...ww...ww....www",
        "ww...........ggg..wwwwwwwwww.w.ww...www.wwwww",
        "ww...........gg...wwwwwwwwwwwwwww...wwwwwwwww",
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww......wwwwwww",
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww......wwwwwww",
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww....w.wwwwwww",
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww....w.wwwwwww"
    ], 480, 0, tileSize, tileSize)
}

async function battle_start() {
    battle = true;

    // Draw background
    battleBg = new Sprite(16, 16)
    battleBg.x = camera.x;
    battleBg.y = camera.y;
    battleBg.collider = 'n';
    battleBg.w = width;
    battleBg.h = height;
    battleBg.rotationLock = true;
    battleBg.friction = 0;
    battleBg.drag = 0;

    // Hide overworld buttons
    owBagButton.hide()
    saveButton.hide()
    wipeButton.hide()

    bag_fireStone.hide()
    bag_waterStone.hide()
    bag_thunderStone.hide()
    bag_moonStone.hide()
    bag_leafStone.hide()

    battle_setup()
}

async function battle_setup() {
    // Player pokémon

    // Which pokémon to send into battle?
    if (poke1.health > 0) {
        tempPlayerName = poke1.species;
        tempPlayerLvl = poke1.level;
        tempPlayerHP = poke1.health;
        playerSelectedPoke = 1;
    } else if (poke2.health > 0) {
        tempPlayerName = poke2.species;
        tempPlayerLvl = poke2.level;
        tempPlayerHP = poke2.health;
        playerSelectedPoke = 2;
    } else if (poke3.health > 0) {
        tempPlayerName = poke3.species;
        tempPlayerLvl = poke3.level;
        tempPlayerHP = poke3.health;
        playerSelectedPoke = 3;
    } else if (poke4.health > 0) {
        tempPlayerName = poke4.species;
        tempPlayerLvl = poke4.level;
        tempPlayerHP = poke4.health;
        playerSelectedPoke = 4;
    } else if (poke5.health > 0) {
        tempPlayerName = poke5.species;
        tempPlayerLvl = poke5.level;
        tempPlayerHP = poke5.health;
        playerSelectedPoke = 5;
    } else if (poke6.health > 0) {
        tempPlayerName = poke6.species;
        tempPlayerLvl = poke6.level;
        tempPlayerHP = poke6.health;
        playerSelectedPoke = 6;
    } else {
        console.log("Your whole team fainted. They have been healed for you.")
        poke1.health = 100;
        poke2.health = 100;
        poke3.health = 100;
        poke4.health = 100;
        poke5.health = 100;
        poke6.health = 100;

        tempPlayerName = poke1.species;
        tempPlayerLvl = poke1.level;
        tempPlayerHP = poke1.health;
        playerSelectedPoke = 1;
    }

    let response = await fetch('JSONs/pokemon.json')
    let data = await response.json()

    let element = data.find(item => item.species === tempPlayerName);
    if (element) {
        tempPlayerDex = element.dexID;
    }

    // Starting the battle
    console.log(tempPlayerName, "#" + tempPlayerDex, "at Level", tempPlayerLvl, "Party:", playerSelectedPoke)

    tempPlayerImgStr = "Images/Pokemon/" + tempPlayerDex + ".png"
    tempPlayerImg = loadImage(tempPlayerImgStr)
    playerPk = new Pokemon(tempPlayerName, tempPlayerImg, tempPlayerLvl, tempPlayerHP, 'leer', 'bitter_malice', 'silver_wind', 'withdraw')

    tempPlayerDex = 0;
    tempPlayerLvl = 0;

    if (enemyPk == null) {
        enemyImg = loadImage('Images/Pokemon/1.png')
        enemyPk = new Pokemon('bulbasaur', enemyImg, 5, 100, 'tackle', 'growl', 'swords_dance', 'synthesis');
    }

    battle_playerPkTurn();
}

async function randomEncounter(location) {
    if (location == "route_1") {
        let randomPokeDecider = random()
        switch (true) {
            case (randomPokeDecider < 0.227): // Caterpie 22.7%
                enemyImg = loadImage('Images/Pokemon/10.png')
                enemyPk = new Pokemon('caterpie', enemyImg, Math.ceil(Math.random() * (4 - 2) + 2), 100, 'tackle', 'take_down', 'egg_bomb', 'growl');
                break;
            case (randomPokeDecider < 0.454): // Weedle 22.7%
                enemyImg = loadImage('Images/Pokemon/13.png')
                enemyPk = new Pokemon('weedle', enemyImg, Math.ceil(Math.random() * (4 - 2) + 2), 100, 'tackle', 'take_down', 'egg_bomb', 'growl');
                break;
            case (randomPokeDecider < 0.636): // Pidgey 18.2%
                enemyImg = loadImage('Images/Pokemon/16.png')
                enemyPk = new Pokemon('pidgey', enemyImg, Math.ceil(Math.random() * (4 - 2) + 2), 100, 'tackle', 'take_down', 'egg_bomb', 'growl');
                break;
            case (randomPokeDecider < 0.772): // Rattata 13.6%
                enemyImg = loadImage('Images/Pokemon/19.png')
                enemyPk = new Pokemon('rattata', enemyImg, Math.ceil(Math.random() * (4 - 2) + 2), 100, 'tackle', 'take_down', 'egg_bomb', 'growl');
                break;
            case (randomPokeDecider < 0.886): // Spearow 11.4%
                enemyImg = loadImage('Images/Pokemon/21.png')
                enemyPk = new Pokemon('spearow', enemyImg, Math.ceil(Math.random() * (4 - 2) + 2), 100, 'tackle', 'take_down', 'egg_bomb', 'growl');
                break;
            case (randomPokeDecider < 0.954): // Clefairy 6.8%
                enemyImg = loadImage('Images/Pokemon/35.png')
                enemyPk = new Pokemon('clefairy', enemyImg, Math.ceil(Math.random() * (4 - 2) + 2), 100, 'tackle', 'take_down', 'egg_bomb', 'growl');
                break;
            case (randomPokeDecider < 0.981): // Eevee 2.7%
                enemyImg = loadImage('Images/Pokemon/133.png')
                enemyPk = new Pokemon('eevee', enemyImg, Math.ceil(Math.random() * (4 - 2) + 2), 100, 'tackle', 'take_down', 'egg_bomb', 'growl');
                break;
            case (randomPokeDecider < 1): // Pikachu 1.9%
                enemyImg = loadImage('Images/Pokemon/25.png')
                enemyPk = new Pokemon('pikachu', enemyImg, Math.ceil(Math.random() * (4 - 2) + 2), 100, 'tackle', 'take_down', 'egg_bomb', 'growl');
                break;
        }
        battle_start()
    }
}

async function battle_playerPkTurn() {
    // Check stats
    playerPk.hp = Math.ceil(playerPk.hp);
    playerPk.atk *= playerPk.updateStats(playerPk.atkBoost)
    playerPk.def *= playerPk.updateStats(playerPk.defBoost)
    playerPk.spa *= playerPk.updateStats(playerPk.spaBoost)
    playerPk.spd *= playerPk.updateStats(playerPk.spdBoost)
    playerPk.spe *= playerPk.updateStats(playerPk.speBoost)

    // Select a move
    battle_checkFainted()
    battle_createFightButtons()
}

async function battle_enemyPkTurn() {
    // Check stats
    enemyPk.hp = Math.ceil(enemyPk.hp);
    enemyPk.atk *= enemyPk.updateStats(enemyPk.atkBoost)
    enemyPk.def *= enemyPk.updateStats(enemyPk.defBoost)
    enemyPk.spa *= enemyPk.updateStats(enemyPk.spaBoost)
    enemyPk.spd *= enemyPk.updateStats(enemyPk.spdBoost)
    enemyPk.spe *= enemyPk.updateStats(enemyPk.speBoost)

    battle_removeButtons()
    battle_checkFainted()

    // Select a move
    let randomMoveDecider = random()
    if (battle == true) {
        switch (true) {
            case (randomMoveDecider < 0.5):
                enemyPk.battleMove(enemyPk.move1, enemyPk, playerPk);
                battle_playerPkTurn();
                break;
            case (randomMoveDecider < 0.67):
                enemyPk.battleMove(enemyPk.move2, enemyPk, playerPk);
                battle_playerPkTurn();
                break;
            case (randomMoveDecider < 0.73):
                enemyPk.battleMove(enemyPk.move3, enemyPk, playerPk);
                battle_playerPkTurn();
                break;
            case (randomMoveDecider <= 1):
                enemyPk.battleMove(enemyPk.move4, enemyPk, playerPk);
                battle_playerPkTurn();
                break;
        }
    }
}

async function battle_createFightButtons() {
    if (battle == true) {
        fightButton = createButton("Fight");
        fightButton.position(1000, 420);
        fightButton.size(250, 70);
        fightButton.mousePressed(battle_fightButtonPressed);

        bagButton = createButton("Bag");
        bagButton.position(1000, 500)
        bagButton.size(250, 70)
        bagButton.mousePressed(battle_bagButtonPressed);
    }
}

async function battle_fightButtonPressed() {
    // Create buttons for battle moves
    if (battle == true) {
        battleButton1 = createButton(playerPk.move1);
        battleButton2 = createButton(playerPk.move2);
        battleButton3 = createButton(playerPk.move3);
        battleButton4 = createButton(playerPk.move4);

        battleButton1.position(1000, 260)
        battleButton1.size(250, 70)
        battleButton1.mousePressed(function () {
            playerPk.battleMove(playerPk.move1, playerPk, enemyPk);
            battle_removeButtons();
            battle_enemyPkTurn();
        })

        battleButton2.position(1000, 340)
        battleButton2.size(250, 70)
        battleButton2.mousePressed(function () {
            playerPk.battleMove(playerPk.move2, playerPk, enemyPk);
            battle_removeButtons();
            battle_enemyPkTurn();
        })

        battleButton3.position(1000, 420)
        battleButton3.size(250, 70)
        battleButton3.mousePressed(function () {
            playerPk.battleMove(playerPk.move3, playerPk, enemyPk);
            battle_removeButtons();
            battle_enemyPkTurn();
        })

        battleButton4.position(1000, 500)
        battleButton4.size(250, 70)
        battleButton4.mousePressed(function () {
            playerPk.battleMove(playerPk.move4, playerPk, enemyPk);
            battle_removeButtons();
            battle_enemyPkTurn();
        })
    }
}

async function battle_bagButtonPressed() {
    if (battle == true) {
        bagButton1 = createButton("Potion: " + bag.potions);
        bagButton2 = createButton("Pokéball: " + bag.pokeballs);

        // Potion button
        bagButton1.position(865, 520)
        bagButton1.size(125, 50)
        bagButton1.mousePressed(function () {
            if (bag.potions >= 1) {
                if (playerPk.hp < playerPk.maxHP) {
                    bag.potions -= 1;
                    console.log("You used a Potion on", playerPk.displayName)
                    if (playerPk.hp + 20 <= playerPk.maxHP) {
                        playerPk.hp += 20;
                    } else {
                        playerPk.hp = playerPk.maxHP;
                    }
                    battle_removeButtons();
                    battle_enemyPkTurn();
                }
                else {
                    console.log(playerPk.displayName, "is on max health! A potion would have no effect.")
                }
            } else {
                console.log("You have no Potions!");
            }
        })

        // Pokeball button
        bagButton2.position(865, 460)
        bagButton2.size(125, 50)
        bagButton2.mousePressed(function () {
            if (bag.pokeballs >= 1) {
                bag.pokeballs -= 1;

                let randomDidBallWork = random()
                if (randomDidBallWork > 0) { // Chance of pokémon being caught (100%)
                    // Does player have a full party or is there space?
                    if (poke2.species == "") { // If no pokémon in slot, then caught pokémon goes there
                        poke2.species = enemyPk.species;
                        poke2.level = enemyPk.level;
                        poke2.health = (enemyPk.hp / enemyPk.maxHP) * 100
                        battle_removeButtons();
                        battle_stopBattle();
                    } else if (poke3.species == "") {
                        poke3.species = enemyPk.species;
                        poke3.level = enemyPk.level;
                        poke3.health = (enemyPk.hp / enemyPk.maxHP) * 100
                        battle_removeButtons();
                        battle_stopBattle();
                    } else if (poke4.species == "") {
                        poke4.species = enemyPk.species;
                        poke4.level = enemyPk.level;
                        poke4.health = (enemyPk.hp / enemyPk.maxHP) * 100
                        battle_removeButtons();
                        battle_stopBattle();
                    } else if (poke5.species == "") {
                        poke5.species = enemyPk.species;
                        poke5.level = enemyPk.level;
                        poke5.health = (enemyPk.hp / enemyPk.maxHP) * 100
                        battle_removeButtons();
                        battle_stopBattle();
                    } else if (poke6.species == "") {
                        poke6.species = enemyPk.species;
                        poke6.level = enemyPk.level;
                        poke6.health = (enemyPk.hp / enemyPk.maxHP) * 100
                        battle_removeButtons();
                        battle_stopBattle();
                    } else {
                        console.log("Your party is full! You cannot catch another Pokémon.")
                        bag.pokeballs += 1; // Don't lose a ball for a pokémon you can't catch
                    }
                } else {
                    battle_removeButtons();
                    battle_enemyPkTurn();
                }
            } else {
                battle_removeButtons();
                console.log("You have no Pokéballs!");
            }
            console.log("You threw a Pokéball. You have", bag.pokeballs, "Pokéballs remaining.")
        })
    }
}

async function battle_removeButtons() {
    fightButton.remove()
    bagButton.remove()

    battleButton1.remove()
    battleButton2.remove()
    battleButton3.remove()
    battleButton4.remove()

    bagButton1.remove()
    bagButton2.remove()
}

async function battle_checkFainted() {
    if (enemyPk.hp <= 0) {
        console.log(">>> You win!")
        pokedollars = int(pokedollars) + 20;
        console.log("You now have $" + pokedollars)
        battleWon = true;
        battle_stopBattle();
    }
    else if (playerPk.hp <= 0) {
        console.log(">>> You lose!")
        battleWon = false;
        battle_stopBattle();
    }
}

async function battle_stopBattle() {
    // Show overworld buttons again
    owBagButton.show()
    saveButton.show()
    wipeButton.show()

    // Apply HP to save data & give XP where necessary
    switch (true) {
        case (playerSelectedPoke == 1): // Poke1
            poke1.health = (playerPk.hp / playerPk.maxHP) * 100;
            if (battleWon == true) {
                poke1.xp += enemyPk.level;
                if (poke1.xp >= 10) {
                    pokeLevelUp(poke1)
                }
            }
            break;
        case (playerSelectedPoke == 2): // Poke2
            poke2.health = (playerPk.hp / playerPk.maxHP) * 100;
            if (battleWon == true) {
                poke2.xp += enemyPk.level;
                if (poke2.xp >= 10) {
                    pokeLevelUp(poke2)
                }
            }
            break;
        case (playerSelectedPoke == 3): // Poke3
            poke3.health = (playerPk.hp / playerPk.maxHP) * 100;
            if (battleWon == true) {
                poke3.xp += enemyPk.level;
                if (poke3.xp >= 10) {
                    pokeLevelUp(poke3)
                }
            }
            break;
        case (playerSelectedPoke == 4): // Poke4
            poke4.health = (playerPk.hp / playerPk.maxHP) * 100;
            if (battleWon == true) {
                poke4.xp += enemyPk.level;
                if (poke4.xp >= 10) {
                    pokeLevelUp(poke4)
                }
            }
            break;
        case (playerSelectedPoke == 5): // Poke5
            poke5.health = (playerPk.hp / playerPk.maxHP) * 100;
            if (battleWon == true) {
                poke5.xp += enemyPk.level;
                if (poke5.xp >= 10) {
                    pokeLevelUp(poke5)
                }
            }
            break;
        case (playerSelectedPoke == 6): // Poke6
            poke6.health = (playerPk.hp / playerPk.maxHP) * 100;
            if (battleWon == true) {
                poke6.xp += enemyPk.level;
                if (poke6.xp >= 10) {
                    pokeLevelUp(poke6)
                }
            }
            break;
    }

    battle_removeButtons();
    battleBg.remove();
    battle = false;
}

async function pokeLevelUp(pokemon) {
    pokemon.level += 1;
    pokemon.xp = 0;

    // Pokemon evolves?
    fetch('JSONs/evolutions.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let element = data.find(item => item.evolves_from === pokemon.species);
            if (element) {
                if (element.evolves_by == 'level' && element.evolve_detail <= pokemon.level) {
                    pokemon.species = element.evolves_into;
                }
            }
        })
}

async function pokemonSelector() {
    let response = await fetch('JSONs/pokemon.json')
    let data = await response.json()

    // Fetch from my JSON file
    let element = data.find(item => item.species === tempPlayerName);
    if (element) {
        tempPlayerDex = element.dexID;
        return element.dexID;
    } else {
        return "Not found"
    }
}

async function toggleBag() {
    if (isBagOpen == false) {
        isBagOpen = true;
        bag_fireStone.show()
        bag_waterStone.show()
        bag_thunderStone.show()
        bag_moonStone.show()
        bag_leafStone.show()
    } else {
        isBagOpen = false;
        bag_fireStone.hide()
        bag_waterStone.hide()
        bag_thunderStone.hide()
        bag_moonStone.hide()
        bag_leafStone.hide()
    }
}

async function useEvolutionStone(stone) {
    // Check all 6 pokémon in the party to see if they work
    stoneEvolution(stone, poke1)
    stoneEvolution(stone, poke2)
    stoneEvolution(stone, poke3)
    stoneEvolution(stone, poke4)
    stoneEvolution(stone, poke5)
    stoneEvolution(stone, poke6)
}

async function stoneEvolution(stone, pokemon) {
    // The Eevee exception (split evos aren't supported by main code)
    if (pokemon.species == 'eevee') {
        if (stone == 'water_stone') {
            pokemon.species = 'vaporeon';
        }
        else if (stone == 'thunder_stone') {
            pokemon.species = 'jolteon';
        }
        else if (stone == 'fire_stone') {
            pokemon.species = 'flareon';
        }
    } else {
        // Use stone attribute & JSON file to find out which pokémon can evolve with that stone
        fetch('JSONs/evolutions.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let element = data.find(item => item.evolves_from === pokemon.species);
                console.log(element.evolves_from, pokemon.species)
                if (element) {
                    if (element.evolves_by == 'item' && element.evolve_detail == stone) {
                        console.log("Evolve!")
                        pokemon.species = element.evolves_into;
                        console.log(element.evolves_into)
                    }
                }
            })
    }
    console.log(pokemon);
}

function keyPressed() {
    if (keyCode == 13) { // Press Enter to clear dialogue
        isTextOnScreen = false;
        textDialogue = "";
    }

    if (battle == false && isTextOnScreen == false) {
        let newX = player.x;
        let newY = player.y;

        if (keyCode == LEFT_ARROW) {
            newX -= tileSize;
        }
        if (keyCode == RIGHT_ARROW) {
            newX += tileSize;
        }
        if (keyCode == UP_ARROW) {
            newY -= tileSize;
        }
        if (keyCode == DOWN_ARROW) {
            newY += tileSize;
        }

        if (!isColliding(newX, newY)) {
            player.x = newX;
            player.y = newY;
        }

        if (isEventTile(newX, newY) == 'door') {
            enterDoor()
        }

        if (isEventTile(newX, newY) == 'grass') {
            let grassRandomChance = random();
            let location = findLocation(newX, newY);
            if (grassRandomChance < 0.25) {
                console.log("Encounter on", location)
                randomEncounter(location)
            }
        }
        if (keyCode == 69) { // Press E to trigger adjacent event
            if (isEventTile(player.x + tileSize, player.y) == 'event') {
                runEvent(player.x + tileSize, player.y)
            } else if (isEventTile(player.x - tileSize, player.y) == 'event') {
                runEvent(player.x - tileSize, player.y)
            } else if (isEventTile(player.x, player.y - tileSize) == 'event') {
                runEvent(player.x, player.y - tileSize)
            } else if (isEventTile(player.x, player.y + tileSize) == 'event') {
                runEvent(player.x, player.y + tileSize)
            }
        }
    }
}

function isColliding(x, y) {
    let tileX = Math.floor(x / tileSize);
    let tileY = Math.floor(y / tileSize);
    let tempTile = null;

    // Search in tilemap for Cerulean City
    for (let i = 0; i < tilemapCerulean.length; i++) {
        let tile = tilemapCerulean[i];
        if (tile.x === tileX * tileSize && tile.y === tileY * tileSize) {
            tempTile = tile;
            break;
        }
    }

    // If not found in tilemap for Cerulean City, search in tilemap for Route 1
    if (tempTile == null) {
        for (let j = 0; j < tilemapR1.length; j++) {
            let tile = tilemapR1[j];
            if (tile.x === tileX * tileSize && tile.y === tileY * tileSize) {
                tempTile = tile;
                break;
            }
        }
    }

    console.log("Tile at " + tileX + ", " + tileY + " is " + tempTile);
    if (tempTile && (tempTile.tile === "w" || tempTile.tile === "W" || tempTile.tile === "E")) {
        return true;
    }
}

function findLocation(x, y) {
    let tileX = Math.floor(x / tileSize);
    let tileY = Math.floor(y / tileSize);
    let output = null;

    // Search in tilemap for Cerulean City
    for (let i = 0; i < tilemapCerulean.length; i++) {
        let tile = tilemapCerulean[i];
        if (tile.x === tileX * tileSize && tile.y === tileY * tileSize) {
            output = 'cerulean_city';
            break;
        }
    }

    // If not found in tilemap for Cerulean City, search in tilemap for Route 1
    if (output == null) {
        for (let j = 0; j < tilemapR1.length; j++) {
            let tile = tilemapR1[j];
            if (tile.x === tileX * tileSize && tile.y === tileY * tileSize) {
                output = 'route_1';
                break;
            }
        }
    }
    return output;
}

function isEventTile(x, y) {
    let tileX = floor(x / tileSize);
    let tileY = floor(y / tileSize);
    let tempTile;

    // Search in tilemap for Cerulean City
    for (let i = 0; i < tilemapCerulean.length; i++) {
        let tile = tilemapCerulean[i];
        if (tile.x === tileX * tileSize && tile.y === tileY * tileSize) {
            tempTile = tile;
            break;
        }
    }

    // If not found in tilemap for Cerulean City, search in tilemap for Route 1
    if (tempTile == null) {
        for (let j = 0; j < tilemapR1.length; j++) {
            let tile = tilemapR1[j];
            if (tile.x === tileX * tileSize && tile.y === tileY * tileSize) {
                tempTile = tile;
                break;
            }
        }
    }

    if (tempTile && (tempTile.tile === "d")) {
        return 'door';
    } else if (tempTile && (tempTile.tile === "E")) {
        return 'event';
    } else if (tempTile && (tempTile.tile === "g")) {
        return 'grass';
    }
}

function enterDoor() {
    console.log("Enter the door")
    player.y += tileSize;
}

function runEvent(x, y) {
    if (x == 27 * tileSize && y == 8 * tileSize) { // Eastern sign
        showText("CERULEAN CITY\nRoute 1 to the East")
    }
}

function showText(words) {
    while (isTextOnScreen == false) {
        isTextOnScreen = true;
        textDialogue = words;
    }
}

function roundPlayerXY() {
    let xTemp = player.x / tileSize
    xTemp = floor(xTemp);
    player.x = xTemp * tileSize;

    let yTemp = player.y / tileSize
    yTemp = floor(yTemp);
    player.y = yTemp * tileSize;
}

function draw() {
    background(220);

    // Location images
    camera.on();
    imageMode(CORNER)
    image(bgCerulean, -7, -7, 480, 400);
    image(bgR1, 472, -7, 720, 400);

    camera.x = player.x;
    camera.y = player.y;
    camera.zoom = 3;
    allSprites.draw()
    camera.off();
    roundPlayerXY();

    if (isTextOnScreen == true) {
        fill(255)
        rectMode(CENTER)
        rect(width / 2, 515, width - 100, 150);

        fill(0)
        textSize(32)
        textAlign(CENTER, CENTER)
        text(textDialogue, width / 2, 515)
    }

    if (battle == true) {
        if (playerPk) {
            playerPk.show(140, 450)
        }
        if (enemyPk) {
            enemyPk.show(1140, 150)
        }
    }
}