let path, grid, s, node
let counter = 0
let player;
function setup() {
  createCanvas(500, 500);
  background(0);

  p5.RenderStats = true
  s = new Sprite(225, 75)
  s.radius = 10
  let wall = new Group()
  wall.tile = '1'
  wall.w = 50
  wall.h = 50
  wall.collider = 's'

  player = new Sprite();
  player.radius = 10
  //Walkability matrix. Zero is walkable, One is not

  //var finder = new PF.DijkstraFinder();
  path = recalculate(3, 1, 1, 1);
  let t = new Tiles(
    [
      "1111111111",
      "1........1",
      "1.111111.1",
      "1.111111.1",
      "1.....11.1",
      "1.111.11.1",
      "1.111.11.1",
      "1.111.11.1",
      "1........1",
      "1111111111",
    ], 25, 25, 50, 50)

  node = new Group()
  node.visited = false;
  node.radius = 10
  node.collider = 'n'
  console.log(path)
  for (p of path) {

    let n = new node.Sprite((p[0] * 50) + 20, (p[1] * 50) + 20)
    n.visible = false;
    fill(0)
    rect((p[0] * 50) + 20, (p[1] * 50) + 20)
  }
  setInterval(adjustPath, 1000)
}

function draw() {
  clear()
  controls()
  enemyControls()
  if (mouse.presses()) {
    player.x = mouse.x
    player.y = mouse.y
  }

}
function controls() {
  if (kb.pressing('a')) {
    player.vel.x = -2
  }
  else if (kb.pressing('d')) {
    player.vel.x = 2
  }
  else if (kb.pressing('w')) {
    player.vel.y = -2
  }
  else if (kb.pressing('s')) {
    player.vel.y = 2
  }
  else {
    player.vel.x = 0
    player.vel.y = 0
  }
}
function enemyControls() {
  console.log(counter)
  if (node[counter]) {
    s.moveTo(node[counter], 1)
    if (s.overlaps(node[counter])) {
      counter += 1
    }
  }
  else {

    counter = 0
  }
}
function adjustPath() {
  let x = floor(player.x / 50)
  let y = floor(player.y / 50)

  let a = floor(s.x / 50)
  let b = floor(s.y / 50)
  path = recalculate(a, b, x, y);
  node.removeAll()
  counter = 0
  for (p of path) {
    let n = new node.Sprite((p[0] * 50) + 20, (p[1] * 50) + 20)
    //n.visible = true;
  }
}
function recalculate(a, b, c, d) {
  var matrix = [
    //0,0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
  var grid = new PF.Grid(matrix);
  var finder = new PF.AStarFinder();

  return path = finder.findPath(a, b, c, d, grid);
}