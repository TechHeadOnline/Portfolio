let tower, tileMap, placeable, start, end, node, enemies, cursor, projectile
let tileSize = 32
let lives = 100
let gold = 60;
let score = 0
let wave = 0
let levelCount = 0
let selectedTower = 'A'
let waveButton;
let cheat, bg
function preload() {
  bg = loadImage('bg.png')
}
function setup() {
  createCanvas(700, 704);
  background(255);
  allSprites.tileSize = tileSize;
  allSprites.rotationLock = true;


  waveButton = createButton('Start Wave');
  waveButton.mousePressed(startWave);
  cheat = createButton('Cheat Wave');
  cheat.mousePressed(cheatFunc);
  tower = new Group()
  tower.collider = 'k'
  tower.image = 'tower 1.png'
  tower.type = 'A'//added attribute 

  placeable = new Group()
  placeable.tile = '1'
  placeable.w = 1
  placeable.h = 1
  placeable.color = 'green'
  placeable.collider = 'n'
  placeable.visible = false;

  start = new Group()
  start.tile = 's'
  start.visible = false
  end = new Group()
  end.tile = 'f'
  end.visible = false
  node = new Group()
  node.w = 1
  node.h = 1
  node.collider = 'n'

  enemies = new Group()
  enemies.w = 1;
  enemies.h = 1;
  enemies.counter = 0
  enemies.collider = 'k'
  enemies.health = 1
  enemies.moveSpeed = 0.05//added attribute

  projectile = new Group()
  projectile.radius = 0.3
  projectile.collider = 'n'
  projectile.life = 100
  tileMap = new Tiles(
    [
      "111111.s1111111111",
      "111111..1111111111",
      "111111..1111111111",
      "111111..1111111111",
      "111111..1111111111",
      "111111..1111111111",
      "111111..1111111111",
      "111111.......11111",
      "111111.......11111",
      "11111111111..11111",
      "11111111111..11111",
      "1............11111",
      "1............11111",
      "1..111111111111111",
      "1..111111111111111",
      "1..111111111111111",
      "1..111111111111111",
      "1.......1111111111",
      "1........111111111",
      "11111....111111111",
      "1111111..111111111",
      "1111111.f111111111",
    ], 1, 1, 1, 1)
  var matrix = [
    //0,0
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  ];
  var grid = new PF.Grid(matrix);
  var finder = new PF.AStarFinder();
  a = start[0].x - 1
  b = start[0].y - 1
  c = end[0].x - 1
  d = end[0].y - 1
  path = finder.findPath(a, b, c, d, grid);

  for (p of path) {
    let n = new node.Sprite((p[0]) + 1, (p[1]) + 1)
    n.visible = false;
  }
  setInterval(spawn, 500)
  setInterval(towerShoot, 200)
  setInterval(frostShoot, 2000)
  cursor = new Sprite(1, 1)
  cursor.collider = 'n'

  //new section type for towers
  frostTower = new tower.Group()
  frostTower.color = 'blue'
  frostTower.type = 'F'
  frostTower.image = "tower 2.png"
  frostTowerButton = new Sprite()
  frostTowerButton.w = 2
  frostTowerButton.h = 2
  frostTowerButton.text = 'frost'

  
  arrowTowerButton = new Sprite()
  arrowTowerButton.w = 2
  arrowTowerButton.h = 2
  arrowTowerButton.text = 'arrow'
}
function spawn() {
  if (wave >= 1 && levelCount < wave * 20) { // added this line so it keeps spawning bigger waves changed >=
    levelCount += 1
    let e = new enemies.Sprite(8, 1, 1)
    e.health = floor(random(1, wave))
  }
}
function draw() {
  clear()
  buttonSelect()
  placeTower()

  if (wave > 0) {
    enemyMove()
    killEnemies()
  }
  image(bg, 15, 15)
  allSprites.draw()
  drawHUD()
  hideCursor()


}
function buttonSelect() {
  if (mouse.pressed() && cursor.overlapping(frostTowerButton) > 0) {
    selectedTower = 'F'
    console.log('select frost')
  }
  else if (mouse.pressed() && cursor.overlapping(arrowTowerButton) > 0) {
    selectedTower = 'A'
    console.log('select arrow')
  }
}
function hideCursor() {
  if (cursor.x > 18) {
    cursor.visible = false
  }
  else {
    cursor.visible = true
  }

}
function startWave() {
  levelCount = 0// added

  if (enemies.length == 0) {
    wave += 1;
  }
}
function killEnemies() {
  //to remove faster
  for (e of enemies) {
    if (e.health <= 0) {
      e.remove()
      gold+=10
    }
  }
  // to check collision
  for (p of projectile) {
    for (e of enemies) {
      if (e.health <= 0) {
        e.remove()
      }
      if (p.overlaps(e)) {
        switch (p.type) {
          case 'F':
            if (p.overlapping(enemies) > 0) {

              e.moveSpeed = 0.01;//??
              score += 1
            }
            break;
          case 'B':
            break;
          default:
            if (p.overlaps(e)) {

              e.health -= 0.2;
              p.remove()
             
              score += 1
            }

        }
      }
    }
  }
}
function placeTower() {
  cursor.x = floor(mouse.x / tileSize)
  cursor.y = floor(mouse.y / tileSize)
  let t;
  if (cursor.overlapping(placeable) && mouse.released() && !cursor.overlapping(tower) && gold >= 30) {
    switch (selectedTower) {
      case 'F':
        t = new frostTower.Sprite(cursor.x, cursor.y)
        t.type = selectedTower
        gold -= 30
        break;

      case 'A':
        t = new tower.Sprite(cursor.x, cursor.y)
        t.type = selectedTower
        gold -= 10
        break;
    }

  }
  else if (cursor.overlapping(placeable)) {
    cursor.color = "blue"
  }
  else {
    cursor.color = "red"
  }

}
function towerShoot() {
  for (t of tower) {
    if (t.type == 'A') {
      if (enemies[0]) {
        t.rotation = t.angleTo(enemies[0])
      }

      if (enemies[0]) {
        //need to add in a check for ammo type?
        let p = new projectile.Sprite(t.x, t.y)
        p.type = t.type//added#
        p.radius = 0.1
        let dir = closest()
        if (dir) {
          p.direction = p.angleTo(closest())

        }
        p.speed = 0.01
      }
    }
  }
}


function frostShoot() {
  for (t of tower) {
    if (enemies[0]) {
      if (t.type == 'F') {
        t.rotation = t.angleTo(enemies[0])
        if (enemies[0]) {
          //need to add in a check for ammo type?
          let p = new projectile.Sprite(t.x, t.y)
            p.radius = 0.5 
          p.type = t.type//added
          // p.direction = p.angleTo(enemies[0])
          let dir = closest()
          if (dir) {
            p.direction = p.angleTo(closest())

          }
          p.speed = 0.005
        }
      }
    }
  }
}

function enemyMove() {
  for (e of enemies) {
    
    switch (e.health) {
      case 2:
        // code block
        e.color = 'purple'
        break;
      case 3:
        // code block
        e.color = 'red'
        break;
      default:
        e.color = 'blue'
      //code block
    }
    if (node[e.counter]) {
      e.moveTo(node[e.counter], e.moveSpeed)//added
      if (e.overlapping(node[e.counter])) {
        node[e.counter].color = "red"
        e.counter += 1
      }
    }
    else {
      e.counter = 0
    }
    if (e.overlapping(end[0])) {
      lives -= e.health;
      e.remove()

    }
  }
}

function drawHUD() {
  //draws top right
  fill(255, 255, 255, 100)
  rect(1, 1, 100, 100)
  fill(0)
  textSize(20)
  text("Gold:" + gold, 2, 20)
  text("Lives:" + lives, 2, 40)
  text("Score:" + score, 2, 60)
  text("Wave:" + wave, 2, 80)
lives = floor(lives)
  //drawing sidePanel
  fill(0, 0, 0, 100)
  rect(600, 15, 100, height - 17)
  frostTowerButton.x = 20
  frostTowerButton.y = 5
  arrowTowerButton.x = 20
  arrowTowerButton.y = 8
  rectMode(CENTER);
  waveButton.position(frostTowerButton.x * tileSize - 20, 50);
  cheat.position(frostTowerButton.x * tileSize - 20, 100);
  rectMode(CORNER);
}
function cheatFunc() {
  wave = 5;
}
function closest(t, e) {
  for (to of tower) {
    for (en of enemies) {
      let dist1 = dist(to.x, to.y, enemies[0].x, enemies[0].y)
      let dist2 = dist(to.x, to.y, en.x, en.y)
      if (dist2 < dist1) {
        return en
      } else {
        return enemies[0]
      }
    }
  }
}