let player
let enemy1
let dog
let poison
let boss
let wallImg
let tileSize = 16
let lvl1
let lvl2
let bullet
let stick
let j
let moving = false
let cursor
let framecount = 0
 
let ammo = 50
let ammoBox
let addedAmmo = 20
let bandage
let healAmount = 20
let grenadeBox
let grenadeAmount = 3
let addedGrenade = 1
let poisonInterval
let explosion
let poisonTimer = 0
let gamePlaying = false
let score = 0
let startButton
function setup(){
    createCanvas(1000, 1000,)
    // p5play.renderStats = true;
    allSprites.pixelPerfect = true
	wall = new Group()
    wall.visible = false
    // wall.visible = true
	wall.w = tileSize
	wall.h = tileSize
	wall.tile = 'W'
    wall.collider = 'n'
    wall.isWall = true

    bullet = new Group()
    bullet.collider = 'd'
    bullet.speed = 17
    bullet.stroke = 'gold'
    bullet.layer = 1
    bullet.radius = 0.8
    bullet.life = 40

    ammoBox = new Group()
    ammoBox.w = 32
    ammoBox.h = 32
    ammoBox.collider = 'n'
    ammoBox.layer = 1
    ammoBox.d = 15
    ammoBox.image = ammoBoxImg

    grenadeBox = new Group()
    grenadeBox.w = 32
    grenadeBox.h = 32
    grenadeBox.collider = 'n'
    grenadeBox.layer = 1
    grenadeBox.d = 15
    grenadeBox.image = grenadeBoxImg

    bandage = new Group()
    bandage.w = 32
    bandage.h = 32
    bandage.collider = 'n'
    bandage.layer = 1
    bandage.d = 15
    bandage.image = bandageImg

    grenade = new Group()
    grenade.collider ='d'
    grenade.speed = 10
    grenade.stroke = 'orange'
    grenade.layer = 1
    grenade.radius = 1.4
    grenade.life = 50

    buttons = new Group()
    buttons.collider = 's'
    startButton = new buttons.Sprite(290,400,200,100)
  
    startButton.color = 'white'
    startButton.image = loadImage('Start.png')
    startButton.scale = 0.9

    easyButton = new buttons.Sprite(290,300,200,100)
   
    easyButton.color = 'white'
    easyButton.image = loadImage('easy.png')
    easyButton.scale = 0.9
    easyButton.visible = false

    medButton = new buttons.Sprite(290,480,200,100)

    medButton.color = 'white'
    medButton.image = loadImage('normal.png')
    medButton.scale = 0.9
    medButton.visible = false

   hardButton = new buttons.Sprite(290,660,200,100)
  
   hardButton.color = 'white'
    hardButton.image = loadImage('Hard.png')
    hardButton.scale = 0.9
    hardButton.visible = false
 

     helpButton = new buttons.Sprite(290,600,200,100)
     helpButton.color = 'white'
     helpButton.image = loadImage('help.png')
     helpButton.scale = 0.9
     

    quitButton = new buttons.Sprite(500,500,200,100)
    quitButton.color = 'white'
    quitButton.image = loadImage('Quit.png')
    quitButton.scale = 0.9
    quitButton.visible = false
    quitButton.layer = 15

    backButton = new buttons.Sprite(290,850,200,100)
    backButton.color = 'white'
    backButton.image = loadImage('Back.png')
    backButton.scale = 0.9
    backButton.visible = false

    player.overlaps(bullet)
    player.overlaps(grenade)
    player.overlaps(explosion)
    player.overlaps(ammoBox)
    player.overlaps(grenadeBox)
    player.overlaps(bandage)


    player.d = 25
    enemy1.d = 31
    dog.d = 17
    poison.d = 31
    boss.d = 47
    ammoBox.scale = 0.04
    grenadeBox.scale = 0.08
    bandage.scale = 0.04
    player.scale = 1.7

// 	map= new Tiles(
		
// lvl1
// 		,
// 		8,
// 		6,
//         tileSize,
//         tileSize,
		

	map= new Tiles(
        lvl2,
                8,
                6,
                tileSize,
                tileSize,
                
            );
     enemy1.ani = 'run'

     
}  
function preload(){
    explosion = new Group()
    explosion.radius = 32
    explosion.collider = 'n'
    explosion.scale = 5.5
    explosion.spriteSheet = 'explosionsheet.png'
    explosion.life = 128
    // map1 = loadImage('lvl1.png')
    map2 = loadImage('lvl2.png')
    poisonImg = loadImage('POISONED.png')
    deathImg = loadImage('YOUDIED.png')
    ammoBoxImg = loadImage('ammobox.png')
    grenadeBoxImg = loadImage('grenadebox.png')
    bandageImg = loadImage('bandage.png')
    menuImg = loadImage('finalMenu.png')
    helpImg = loadImage('finalMenuHelp.png')

    cursor = new Sprite(0,0,10,10)
    cursor.d = 4
    cursor.color = 'white'
    cursor.visible = true
    cursor.collider ='n'

    player = new Sprite(0,0,48,48)
    player.d = 32
    player.spriteSheet = 'PLAYER (32) +.png'
	player.anis.offset.x = 0;
	player.anis.frameDelay = 10;
	player.friction = 10;
    player.tile = 'p'
    player.health = 200
    player.layer = 10
    player.ispoisoned = false


    enemies = new Group()
    enemy1 = new enemies.Group()

    enemy1.w = 32
    enemy1.h = 32
    enemy1.spriteSheet = 'BaseZombie.png'
    enemy1.tile = 'e'
    enemy1.anis.frameDelay = 7
    enemy1.health = 50
    enemy1.isTarget = true

    dog = new enemies.Group()
    dog.w = 32
    dog.h = 32
    dog.spriteSheet = 'dogenemy.png'
    dog.tile = 'd'
    dog.anis.frameDelay = 5
    dog.health = 20
    dog.isTarget = true

    poison = new enemies.Group()
    poison.w = 32
    poison.h = 32
    poison.spriteSheet = 'poison.png'
    poison.tile = 'z'
    poison.anis.frameDelay = 6
    poison.health = 40
    poison.isTarget = true
    
    boss = new enemies.Group()
    boss.w = 32
    boss.h = 32
    boss.spriteSheet = 'Bossenemy.png'
    boss.tile = 'b'
    boss.anis.frameDelay = 11
    boss.health = 200
    boss.isTarget = true
    
    player.addAnis({
		run: { row: 0, frames: 4 },
		dead: { row: 1, frames: 4, frameDelay: 30 },
		special: { row: 2, frames: 1,},
        stand: { row:0, frames: 1,}
	});
    player.changeAni('stand');

    enemy1.addAnis({
		run: { row: 0, frames: 4 },
        stand: { row: 0, frames: 1},
		dead: { row: 1, frames: 4, frameDelay: 30 },
	});
   
   
    dog.addAnis({
        run: { row: 0, frames: 4 },
        stand: { row: 0, frames: 1},
		dead: { row: 1, frames: 4, frameDelay: 30 },
    })

    poison.addAnis({
        run: { row: 0, frames: 4 },
        stand: { row: 0, frames: 1},
        dead: { row: 1, frames: 4, frameDelay: 30 },
    });
    
    boss.addAnis({
        run: { row: 0, frames: 4 },
        stand: { row: 0, frames: 1},
		dead: { row: 1, frames: 4, frameDelay: 30 },
    })
    
    explosion.addAnis({
        explode: { row: 0, frames: 16, frameDelay: 8},
    })

    setInterval(tickDmg,50)
    setInterval(timePoison,1000)
    
     dog.scale = 1.6
     enemy1.scale = 1.5
     poison.scale = 1.3
     boss.scale = 3
   

}
function tickDmg(){

    if(player.ispoisoned &&  poisonTimer >0){
        movementSpeed = 1
        player.health -= 0.4
    }
    if(poisonTimer <= 0){
        player.ispoisoned = false;
        movementSpeed = 2
    }
}
function timePoison(){

    poisonTimer -= 1
}
let playingState = 0

function draw() {

background(0,0,0)
if(!gamePlaying){
    wall.collider = 'n'
    for (e of enemies){
e.visible = false
e.collider = 'n'
    }
    if(playingState == 0){
// draw main menu
    
    

    image(menuImg,0,0,1000,1000)

    if (startButton.mouse.pressed()){
        console.log('sup')
        playingState = 1
     }

     if (helpButton.mouse.pressed()){
        playingState = 2
     }
    }

    
     if(playingState == 1){
        startButton.visible = false
        helpButton.visible = false
        easyButton.visible = true
        medButton.visible = true
        hardButton.visible = true
        backButton.visible = true
        //draw level Select
        image(menuImg,0,0,1000,1000)
        //show the buttons
        //

        if(easyButton.mouse.pressed()){
            gamePlaying = true
            ammo = 100
            addedAmmo = 10
            grenadeAmount = 3
            grenadeDamage = 50
            bulletDamage = 10
        }
        else if(medButton.mouse.pressed()){
            gamePlaying = true
            ammo = 100
            addedAmmo = 8
            grenadeAmount = 2
            grenadeDamage = 40
            bulletDamage = 10
        }
        else if(hardButton.mouse.pressed()){
            gamePlaying = true
            ammo = 100
            addedAmmo = 5
            grenadeAmount = 1
            grenadeDamage = 30
            bulletDamage = 8
        }
        if (backButton.mouse.pressed()){
            playingState = 0
            startButton.visible = true
            helpButton.visible = true
            backButton.visible = false
            easyButton.visible = false
        medButton.visible = false
        hardButton.visible = false
        }
    }

    else if (playingState == 2){
        image(helpImg,0,0,1000,1000)
        startButton.visible = false
        helpButton.visible = false
        easyButton.visible = false
        medButton.visible = false
        hardButton.visible = false
        backButton.visible = true
       
       console.log(backButton)

        if (backButton.mouse.pressed()){
        playingState = 0
        startButton.visible = true
        helpButton.visible = true
        backButton.visible = false
        }
    }
}

if(gamePlaying){
    wall.collider = 's'
    for (e of enemies){
e.visible = true
e.collider = 'd'
    }
    buttons.collider = 'n'
    buttons.visible = false
camera.on()
// image(map1,0,0,3000,2000)
image(map2,0,0,3000,2000)

if(player.health > 0){
playerMovement()
if (player.ani.name != 'special'){
playerOffense()
}
enemy1Movement()
dogMovement()
poisonMovement()
poisonMechanic()
BossMovement()
cursor_()
special()
addAmmo()
}
camera.x = player.x
camera.y = player.y
camera.zoom = 1.6;
camera.off()
Health()
ammunition()
Score()
}
}

function poisonMechanic(){
console.log(poisonTimer)
let c = color(73,185,96,100)
if(player.ispoisoned){
    noStroke()
    fill(c)
    rect(player.x-340,player.y-350,700,700)
    image(poisonImg,player.x - 350, player.y - 500, 700, 700)
}
}

function enemy1Movement(){
	// limiter function returns true if the sprite is a wall
	let sprites

	for(let e of enemy1){
		 sprites = world.rayCastAll(player, e, (sprite) => sprite.isWall);
	 	 for (let sprite of sprites) {
	 		if (sprite.isTarget){
                if(e.ani.name != 'dead'){
                    e.changeAni('run')
                    if(dist(player.x,player.y,e.x,e.y)<500){
                        e.direction = e.angleTo(player)
                        e.rotateMinTo(player, 5, 90)
                        e.speed = 1.9
                        e.changeAni('run')
                    }
                  }
                  if(dist(player.x,player.y,e.x,e.y)>1000){
                    e.direction = e.angleTo(player)
                    e.changeAni('run')
                   
                  }
                
                    if(e.overlaps(player)){
                        player.collider = 'd'
                    }
                    else
                    { 
                        player.collider = 'd'
                        if (e.overlapping(player) > 20 && e.ani.name != 'dead') {
                            e.speed = 0
                            e.changeAni('run')
                        player.health -=0.4
                        
                    } 
                }
            }
            else{
                e.speed = 0
            }
        }
    }
}
function dogMovement(){

    let sprites

	for(let d of dog){
		 sprites = world.rayCastAll(player, d, (sprite) => sprite.isWall);
	 	 for (let sprite of sprites) {
	 		if (sprite.isTarget){
                if(d.ani.name != 'dead'){

    if(dist(player.x,player.y,d.x,d.y)<500){
    d.direction = d.angleTo(player)
    d.rotateMinTo(player, 5, 90)
    d.speed = 4}
  }
  if(dist(player.x,player.y,d.x,d.y)>1000){
    d.direction = d.angleTo(player)
   
  }

    if(d.overlaps(player)){
        player.collider = 'd'
    }
    else
    { 
        player.collider = 'd'
        if (d.overlapping(player) > 5 && d.ani.name != 'dead') {
            d.speed = 0
        player.health -=0.3
        
                    } 
                }
            }
        }  
    } 
}

function poisonMovement(){
   
    let sprites

	for(let p of poison){
		 sprites = world.rayCastAll(player, p, (sprite) => sprite.isWall);
	 	 for (let sprite of sprites) {
	 		if (sprite.isTarget){
                if(p.ani.name != 'dead'){
      
          if(dist(player.x,player.y,p.x,p.y)<500){
            p.direction = p.angleTo(player)
            p.rotateMinTo(player, 5, 90)
            p.speed = 2.2 }
        }
        if(dist(player.x,player.y,p.x,p.y)>1000){
            p.direction = p.angleTo(player)
         
        }
          if(p.overlaps(player)){
              player.collider = 'd'
          }
          else
          { 
              player.collider = 'd'
              if (p.overlapping(player) > 15 && p.ani.name != 'dead') {
                p.speed = 0 
            poisonTimer = 4

                 player.ispoisoned = true
                
          } 
          
        }
      }
         }}
}
function BossMovement(){

    let sprites

	for(let v of boss){
		 sprites = world.rayCastAll(player, v, (sprite) => sprite.isWall);
	 	 for (let sprite of sprites) {
	 		if (sprite.isTarget){
                if(v.ani.name != 'dead'){

    if(dist(player.x,player.y,v.x,v.y)<400){
        v.direction = v.angleTo(player)
        v.rotateMinTo(player, 3, 0)
        v.speed = 2}
  }
  if(dist(player.x,player.y,v.x,v.y)>1000){
    v.direction = v.angleTo(player)
   
  }

    if(v.overlaps(player)){
        player.collider = 'd'
    }
    else
    { 
        player.collider = 'd'
        if (v.overlapping(player) > 10 && v.ani.name != 'dead') {
            v.speed = 0
        player.health -=2
        
    } }
}
}}
}
function playerOffense() {
    framecount += 1
    //if (((mouse.pressing()) && (framecount >= 10))||((mouse.pressed())))
    if ((mouse.pressing()) && (framecount >= 7))
    {
        if(ammo > 0){
        framecount = 0
        let b = new bullet.Sprite()
b.x = player.x
b.y = player.y
b.direction = player.rotation - 90
ammo -=1
        }
    }
    

    for( b of bullet){
        if(b.collides(wall)){
            b.remove()
        }
        for( e of enemies){
            if(e.health > 0 ){
            if(b.collides(e)){
                e.health-=bulletDamage
                score += 10
                 b.remove()
            }
        }
        else{
        b.overlaps(e)
        }
    }



    //     for(e of enemy1)
    //         {
    //     if(b.collides(e)){
    //        e.health-=bulletDamage
    //         b.remove()
    //     }
    // }
    //     for(d of dog){
        
    //         if(b.collides(d)){
    //            d.health-=bulletDamage
    //             b.remove()
    //     }
    // }
    //     for(p of poison)
    //             {
    //         if(b.collides(p)){
    //                 p.health-=bulletDamage
    //                 b.remove()
    //     }
    // }
    //     for(v of boss)
    //             {
    //         if(b.collides(v)){
    //                 v.health-=bulletDamage
    //                 b.remove()
    //     }
    // }
}
}


function playerMovement() {
    moving = false
     player.rotateTowards(mouse, 0.5, 90)
    if (kb.pressing('w')) {
        player.y -= movementSpeed
        player.changeAni('run')
        moving = true
    }
     if (kb.pressing('a')) {
        player.x -= movementSpeed
        player.changeAni('run')
        moving = true
    }
     if (kb.pressing('s')) {
        player.y += movementSpeed
        player.changeAni('run')
        moving = true
    }
     if (kb.pressing('d')) {
        player.x += movementSpeed
        player.changeAni('run')
        moving = true
    }

    if (player.collides(wall)) {
        player.rotationLock = true
    }
    

   if(!moving){
    if (kb.pressing('space')){
        player.changeAni('special')
        redLine()
   }
   else{
    player.changeAni('stand')
   }
    
}
}

function Health(){
    fill(255)
    fill(255, 0, 0)
    rect(100, 50, 200, 10)
    fill(0, 255, 0)
    rect(100, 50, player.health, 10);
    if (player.health <= 0) {
        camera.on()
        let r = color(128,11,25,100)
        noStroke()
        fill(r)
        rect(player.x-350,player.y-350,700,700)
        image(deathImg, player.x-350, player.y-370, 700, 700)
player.health = 0
player.speed = 0
player.changeAni('dead')
player.ani.noLoop()
player.opacity -=0.001

if (player.opacity <= 0){
    player.remove()
}
    }

    for(e of explosion){
        for(z of enemies){
            if(e.overlaps(z)){
                z.health -=50
            }
        }
    }
    for(e of enemy1){
        if (e.health <= 0 && e.opacity == 1){
            score += 100
        let B = new ammoBox.Sprite()
        ammoBox.collider = 'n'
        B.x = e.x
        B.y = e.y
        }


        
    if (e.health <= 0) {
        
        e.moving = false
        e.changeAni('dead')
        e.layer = 1
        e.ani.noLoop()
        //e.collider = 'n'
        e.opacity -=0.005
        e.vel.x = 0
        e.vel.y = 0
        e.rotationLock = true
        if( e.opacity <=0){
            e.remove()
        }
        
    }

}
        

    for(d of dog){
        if (d.health <= 0 && d.opacity == 1){
            score += 100
            let G = new ammoBox.Sprite()
        G.x = d.x
        G.y = d.y
        }
        if (d.health <= 0) {
            d.moving = false
            d.changeAni('dead')
            d.layer = 2
            d.ani.noLoop()
            d.opacity -=0.005
            d.vel.x = 0
            d.vel.y = 0
            d.rotationLock = true
            
            if( d.opacity <=0){
                d.remove()
            }
        }
    else{
        d.changeAni('run')
    }
        }

    for(p of poison){
        if (p.health <= 0 && p.opacity == 1){
            score += 100
            let M = new bandage.Sprite()
        M.x = p.x
        M.y = p.y
        }
        if (p.health <= 0) {
           
            p.moving = false
            p.changeAni('dead')
            p.layer = 3
            p.ani.noLoop()
            p.opacity -=0.005
            p.vel.x = 0
            p.vel.y = 0
            p.rotationLock = true
             if( p.opacity <=0){
                 p.remove()
            }
            
        }
    else{
         p.changeAni('run')
    }
        }
        for(v of boss){
            if (v.health <= 0 && v.opacity == 1){
                score += 300
                for(i=0;i<6;i++){
             new grenadeBox.Sprite(v.x,v.y)
         
                }

            }
            if (v.health <= 0) {
                v.moving = false
                v.changeAni('dead')
                v.layer = 1
                v.ani.noLoop()
                v.opacity -=0.01
                v.vel.x = 0
            v.vel.y = 0
            v.rotationLock = true
                 if( v.opacity <=0){
                    v.remove()
                }
                
            }
        else{
             v.changeAni('run')
        }
            }
    }
    


function cursor_(){
            cursor.x = mouse.x
            cursor.y = mouse.y
        }

function redLine(){
            stroke(255,0,0)
            strokeWeight(1)
            extendLength = 300
            let dx = mouse.x - player.x;
               let dy = mouse.y - player.y;
                  let magnitude = sqrt(dx * dx + dy * dy);   
                  let nx = dx / magnitude;   let ny = dy / magnitude;  
                  let extendedX = mouse.x + nx * extendLength;   
                  let extendedY = mouse.y + ny * extendLength; 
      
                  line( player.x, player.y, extendedX, extendedY);
           
        }
function special(){
if (!moving && kb.pressing('space')){
            if (mouse.pressing() < 1000  && mouse.pressing() >1)
                {
                    fill(255,0,0)
                    rect(player.x,player.y - 20,mouse.pressing(), 20)
                }
            else if(mouse.released()){
                if (grenadeAmount > 0){
                let g = new grenade.Sprite()
                g.x = player.x
                g.y = player.y                       
                g.direction = player.rotation - 90
                grenadeAmount -=1
                }
            }
        }
                for( g of grenade){
                    
                    for( e of enemies){
                        if (e.health > 0){
                        if(g.collides(e)){
                            d.health-=grenadeDamage
                            score += 30
                           let l = new explosion.Sprite()
                           l.x = g.x
                           l.y = g.y
                           l.changeAni ('explode')
                           l.ani.noLoop()
                           g.remove()
                            e.health-=grenadeDamage
                        
                        }
                    }
                    else {
                        g.overlaps(e)
                    }
                    }

                    if(g.collides(wall)){
                    let l = new explosion.Sprite()
                    l.x = g.x
                    l.y = g.y
                    l.changeAni ('explode')
                    l.ani.noLoop()
                    }
                
                           
            }
        }
               
            function ammunition(){
                textSize(20)
                text("Ammunition: " + ammo, 59, 900)
                text("Grenades: " + grenadeAmount, 59, 925)
            }

            function Score(){
                text("Score: " + score, 450, 50)
            }

            function addAmmo(){
                for(A of ammoBox){
                if(player.overlapping(A)){
                    ammo += addedAmmo
                    A.remove()
            }
        }
        for (G of grenadeBox){
            if (player.overlapping(G)){
                grenadeAmount += addedGrenade
                G.remove()
            }
        }
        for (B of bandage){
            if (player.overlapping(B) && player.health < 200){
                player.health += healAmount
                B.remove()
            }
        }
            if (player.health > 200){
                player.health = 200
            }
        }
        
    
        function nextlvl2(){
            
        }
        



// lvl1 = 
// ["............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "....WWWWWWWWWWWWWWWWWWWW.............................................................................W..WWWWWWWWWWWWWWWWWWW.................................................................",
// "...W.........W..........W...........................................................................W.WW.............W.....W................................................................",
// "...W.........W..e.......W................................................WWW.......................W..WW............W......W................................................................",
// "...WWWW....WW...........W...............................................W...WWW....................W..WW....e......W.......W................................................................",
// "...WW..W.WW.........e...W....................W.........................W.......W........WWWW......W...WW...........W.......W................................................................",
// "...WW..WW...............WW...............WWWW.WWWWW...................W...e....W.......W....WWWWWW....WW............WW.....W................................................................",
// "...WW........e..........W.WW............W..........WWW...............W......e...W......W..............WW..............W..WWW................................................................",
// "...WW......e............W...W..........WW.............WW............W...e.......W.....W...............WW......W........WW..W................................................................",
// "...WW............W...e..W...W.........WW................W......W....W.....e..e...W.WWWW...............WW.....W.W....e......W................................................................",
// "...WW.e.......WWW.......WW..W....WWWWWW..................WW...W.W...W..e........W.W..........................W.W...........W................................................................",
// "...WW........W..W.......WW..W.WWW..........................WWW..W..W.e...e..WWWW.W............................W.W..........W................................................................",
// "...WW.....WWW....W..........WWW..................................WWW...e...W......W............................W.W.........W................................................................",
// "...WW..e...W....W.........................................................W........W............................WW.........W................................................................",
// "...WW.......W..W...................................................e.e...W.........W..................WW.........WW........W................................................................",
// "...WW........WW..................................................e......W..........W..................WW...e......W........W................................................................",
// "...WW..e......W.........WW.....................e....................e....W.........W..................WW................e..W................................................................",
// "...WW.....e.............WW.............................................e.W.......WW...........e.......WW...................W................................................................",
// "...WW...................WW..........................................e....W.....WW............ee.......WW.......e...........W................................................................",
// "...WW........e..........WW................................................WWWWW.......................WW...................W................................................................",
// "...WW........WW....WW...WW.....................................e......................................WW....W..............W................................................................",
// "....WWWWWWWWWWW....WWWWWWW............................................................................WWWWWWW...WWWWWWWWWWWWW...............................................................",
// "........W....WW....WW...WW............................................................................WWWWWWW...WWWWWWWWWWWWWW..............................................................",
// "........W...e.................................................................................................................W.............................................................",
// "........W.e...................................................................................................................W.............................................................",
// "........W...e........................WWW......................................................W................................W............................................................",
// ".........W..........................WW.W.....................................................W.W...............................W............................................................",
// ".........W.WW.......................W..W.................................................WW.W..W...............................W............................................................",
// "..........W..W......................W.W....WWWWWWWWWW....WWWWWWWWWWWWWWWWWW....WWWWWWWWWWWW.W.WW...............................W............................................................",
// "..............W...............WW.....WW....WWWWWWWWWW....WWWWWWWWWWWWWWWWWW....W.........WW..W..................................W...........................................................",
// "..............W...............W.WWWWWW.....W.......W......W..............W.....W.........W......................................W...........................................................",
// "...............W..............W......W.....W......W........W............W......WW........W......................WWWWWWWWWW......W...........................................................",
// "...............W...............W....W......W.....WW........WW........WWW.........W.......W......................W.........W.....W...........................................................",
// "...............W..............W....W.......W.....W...........WWWWW..W............W.......W......................W..........W..WW............................................................",
// "...............W..............W...W........W....W.................WWW......e......W......W......................W...........WW..............................................................",
// "...............W..............W..W.........WWW.W.........................e.........W.....W......................W...........................................................................",
// "..............W................WW..........W..W.....................................W....W.......................WW.........................................................................",
// "..............W............................W.........................................W...W...............e........WWW.......................................................................",
// "...............W...........................W................................e.........W..W...........................WW.....................................................................",
// "................W..........................W..........................................W..WWW...........................WW...................................................................",
// "...............W...........................W....e...................W.WWW............W...W..W............................W..................................................................",
// ".............WW............................W......e..............WWW.W...W...........WWWWW...WWW........................W...................................................................",
// "............W............e.................W................WWWWW........W...............W.....W.........................W..................................................................",
// "...........W...............................W....e...........W............W.........e.....W......W.........................W.................................................................",
// "...........W...............................W................WW......WWWWW................W......WW........................W.................................................................",
// "...........W...............................W................W.WWWWWW..............e......W........WW.....................W..................................................................",
// "...........W...............................W..........................................e..W......WWWW...................WW...................................................................",
// "............W..............................W.............................................W.....W......................W.....................................................................",
// "............W..............................W.............................................W....W......................W......................................................................",
// "............W..............................W.............................................W....W......................W......................................................................",
// "............W..............................W..................................WW.........W....W......................W......................................................................",
// ".............W.............................W........e....WW................WWWWW.........W....W.....................W.......................................................................",
// ".............W......................e......W............WWWWW.....e........WW..W.........W....W.....................W.......................................................................",
// ".............W.............................W............WW.W................W.WWW........W.....W....................W.......................................................................",
// ".............WW............................W.............WWW.................WWWW........W.....W...................W........................................................................",
// "..............W............................WWWWWWWWW.....................................W.....W..................W.........................................................................",
// ".............W.............................W.......W.....................................W.....W.................W........WWWWW.............................................................",
// "............W..............................W.......W....................................WW.....W................W........W.....W............................................................",
// "...........W...............................W........WWW...........................WW.WWWWW.....W.........e......W........W.....W............................................................",
// "..........W................................W..........W............................WWW...W.....W................W........W..e..W............................................................",
// "..........W................................W...........W...........................WW....WWW...W................W......WW......W............................................................",
// "..........W................................W...........W.........................WWW.....W..W..W...............W......W...e....W............................................................",
// "..........W................................W............W........................WW......W...W.W...............W......W........W............................................................",
// "..........W................................W.............WWWW...............WWW..W.......W...W..W..............W.....W.......e.W............................................................",
// "...........W...............e...............W................W............WWW...WWW.......W....W.WW.............W.....W.........W............................................................",
// "...........W...............................W.................W........WWW................W....WW................WWWWW.....W....W............................................................",
// "............W..........................WW..W.................W........W..................WW.............................WW.WWWW.............................................................",
// "............W..........................WW..WWWWWWWWWWWWWWWWWWW........WWWWWWWWWWWWWWWWWWWWW.............................W...................................................................",
// "............W............................................................................WW.............................W...................................................................",
// "...........W..........................WWW...............................................................................W...................................................................",
// "..........W..........................WW.W...............................................................................W...................................................................",
// "..........W..........................WWW.....................................WW.........................................W...................................................................",
// "..........W.WWW...WWW.................W............WWW......................W..WWW.......................................W..................................................................",
// ".....WWWWWWWWWW...WWWWWWW.........................W...W....................W...WWW...................WWWWWWWW.....WWWWWWWW..................................................................",
// "....W.W.....WWW...WWW...W.........................W...W....................W..W......................WW....WW.....WW......W.................................................................",
// "....W..W................W..............d...........WWW......................WW.......................W..............W.....W.................................................................",
// "....W..W................W............................................................................W..............W.....W.................................................................",
// "....W...W..............WWW...........................................................................WW.............W.....W.................................................................",
// "....W...W..............WWW............d..............................................................WW..............W....W.................................................................",
// "....W...W..............WWW.........................................................................................WW.....W.................................................................",
// "....W...W.............................................................e...........................................WW......W.................................................................",
// "....WWW..W............................................e............................................................W.W....W.................................................................",
// "....W..WWW.........................................................................................................WW.WWWW..................................................................",
// "....W..................WWW....................................................................WWW....WW................W..W.................................................................",
// "....W................W.WWW.........WW........................................................W..W...WW................W..W.................................................................",
// "....W.................W.WW..W..WWWW..WW.............z.......................................W....W..W....................W.................................................................",
// "....W.e.............WW.WW.....W.......WW.....................................................W.....WWW.W...........e......W.................................................................",
// "....W...e..........W....W....W..........W.............................................WWW....W.......W..WWW.............e.W.................................................................",
// "....W..............W....WWWWW...........WW......................................WWWWWW...WWWW........W..W..WWW.......e....W.................................................................",
// "....W...........WWW.....W................W.....................................W.....................W...W....W........e..W.................................................................",
// "....W.e..e.e....W.......W.................W............W......................W......................W....W..WW....e......W.................................................................",
// "....W...........WWWW....W..................WWWWWWWWWWWW.W.....................W......................W....WWWW.........e..W.................................................................",
// "....W...e...........W...W................................W....WWWWW..WWWWWWW.W.......................W......W.............W.................................................................",
// "....WW..............W...W................................W....W...W.pW......W........................W....................W.................................................................",
// ".....WWWWWWWWWWWWWWWWWWW..................................WWWW.....WW.................................WWWWWWWWWWWWWWWWWWWW..................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",
// "............................................................................................................................................................................................",]

lvl2 = ["............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
"............................................................................................................................................................................................",
".......................................................................WWWWWWWWWWWWWWWWWWW..WWWWWWWWWWWWWWWWWWWWWW..........................................................................",
"......................................................................W......W.......W....WW..W...............W...W.........................................................................",
"......................................................................W......W.......W..e.WW..W..d......d....W....W.........................................................................",
"......................................................................W..e..WW..WWWWWW....WW..W...............W...W.........................................................................",
"...........WWWWWWWWWWWWWWWWWWWWW.WWWWWWWWWWWWWWWWWWWWW................W......WWW..........WW..W.d...WWW..d....W...W.........................................................................",
"..........W.....................W.....W.W.............W...............W..e...e......e.....WWWW.......WW....d...W.WW.........................................................................",
"..........W.....................W.....W.W...d....d....W...............W.....e.....e.......WW....................W.W.........................................................................",
"..........W........e............W.....WWW........d....W...............W....e..d..d...e..z.WW........WWWWWW........W.........................................................................",
"..........W.....................W......d.......d......W...............W...e..z....z.......WW........W....W.W......W.........................................................................",
"..........W.....................W..........d....d.....W...............W...................WW......WWW....W.W......W.........................................................................",
"..........W.....................W.....................W...............W..................WWW......W.W....W........W.........................................................................",
"..........W....WW.......WWWW....W..........WWWWWWW.W..W................WWW..............W..W........W....W........W.........................................................................",
"..........W....WWW......W..W....W........WW.......WWWWW...............W...WWW..........WW..W........W....WW.......W.........................................................................",
"..........W....W.W......W...W...W......WW.............W...............W.....W........WW..W.W.....W..W....W.W......W.........................................................................",
"..........W....W.W......W...WW..W.....W...............W...............W...WW.........WW...WW......W.W....W........W.........................................................................",
"..........W....WWW......W..W....W......WWW............W................WWW................WW........W....W........W.........................................................................",
"..........W....W.W......W..W....W.........WW........WWW...............W...................WW........W....W....e...W.........................................................................",
"..........W....WWW......WWW.....W...........W....W.W..W...............W.............................W....W.W......W.........................................................................",
"..........W.....................W...........WW..W.WW..WWWWWWWWWWWWWWWW.WWW........................WWW....W..W.....W.........................................................................",
".WWWWWWWWWW.....................W.............W.W.WW..W...............W..W..........e.............W.WWWWWW........W.........................................................................",
"W.........W.....................W.............WW......W...............W..W..............................W.........W.........................................................................",
"W....z....W.....................W.............WW......W......e........W..W............................WWW.........W.........................................................................",
".W........W.....................W..............W......W...............W..W.....e..........WW..........W.W.........W.........................................................................",
"..WW....z.W.............WW......W.....................W........e......W..W................WW..........WW..........W.........................................................................",
".W........W......e......W.WW....W.....................W...............W...W...............WW......................W.........................................................................",
"W.........W.............W..W....W.....................W....e..........W...W...........WWW.WW......................W.........................................................................",
"WWWWWW....W..............WW.....W.............WWWWWWW.W...............W...W.........WW...WWW........d..e..........W.........................................................................",
"W.........W..............W......W............W.......WW.............e.W..W.........W......WW........e........d....W.........................................................................",
".W...z....W....e................W............W........W...e...........W.WW.........W......WW......e...e..e........W.........................................................................",
"..W....z..W.....................W...........W.........W...............WW............W.....WW....e........e........W.........................................................................",
".W........W.....................W...........W.........W...............WW.............W....WW........e.......e......W.........................................................................",
"W.........W.....................W............W........W...............WW..............W...WW......................W.........................................................................",
".WWW....WWWWWWWWWWW.....WWWWWWWWWWWWWWWW....WWWWWWWWWWWWW.....WWWWWWWWWWWWWW.....WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW..........................................................................",
"W.................................................................................................................W.........................................................................",
"W.................................................................................................................W.........................................................................",
"W....................................................................................z............................W.........................................................................",
"W...........b.....................................................................................................W.........................................................................",
"W......................e................................e.........................................................W.........................................................................",
"W...................................d.............................................................................W.........................................................................",
"W.......................................................................................WWWWWWWWWW................W.........................................................................",
"W...................................................................WWWWWWWWWWWWWWWW....W.........W...............W.........................................................................",
"W...........WWWWWWWWWWW......WWWWWWWWWW......WWWWWWWWWWWWW..........W...............WWWW...........WWWWWW.........W.........................................................................",
"W...........W.........W......W........W......W............WW........W..............................WWWWWW.........W.........................................................................",
"W...........W.........W......W........W......W.............W........W.............................W....WW.........W.........................................................................",
"W...........WWWW......W......WWW......W......WWWW.........WW........W.............................W....WW.........W.........................................................................",
"W...............W.....W....z....W.....W..........W.......W..........W...............WWWWWWWWWWWWWWW....WW.........W.........................................................................",
"W...............W.....W.........W.....W..........W......W...........WWWWWWWWWWWWWWWW...................WW.........W.........................................................................",
"W...............WWWWWWW.........WWWWWWW..........W....WW...............................................WW.........W.........................................................................",
"W................................................WWWWW....................................z...........W..W........W.........................................................................",
"W............................................................................z........z...............W..W........W.........................................................................",
"W..........d..........................e.....................................................z.........W..W........W.........................................................................",
"W................................................................................z....................W..W........W.........................................................................",
"W.....................................................................................................W..W........W.........................................................................",
"W...........WWWWWWWWWWW......WWWWWWWWWW.....WWWWWWWWWWWWWWWWWW.......WWWWWWWWWWWWW....................W..W........W.........................................................................", 
"W...........W.........W......W........W.....W................W.......W...........W.....WWWWWWWWWWW..WW...W........W.........................................................................",
"W...........WWWW......W......WWWW.....W.....W................W.......W............WWWWW...........WW.....W........W.........................................................................",
"W...............W.....W..........W....W.....W..........WWWWWWW.......W...................................W........W.........................................................................",
"W...............W.....W..........W....W.....WWWWWWWWWWW..............W...................................W........W.........................................................................",
"W...............WWWWWWW..........WWWWWW..............................W...................................W........W.........................................................................",
"W..........................................b.........................W............WWWWW............WWWWWWW........W.........................................................................",
"W........e...........................................................W...........W.....WWWWWWWWWWWW...............W.........................................................................",
"W..............................b.....d....d....z.....................WWWWWWWWWWWWW................................W.........................................................................",
"W................................e.d..z..e...e....................................................................W.........................................................................",
"W..............................e.e.e..ee.z.z..e...................................................................W.........................................................................",
"W...............................e...ee..e.e..e....................................................................W.........................................................................",
"W..................d..............e...d..dz.e.....................................................................W.........................................................................",
"W...................................e..e.e.ed..e.e...............................d...............d................W.........................................................................",
"W.....................................e................d..........................................................W.........................................................................",
"W.................................................................................................................W.........................................................................",
".WWWWWWWWWWWWWWWWWWWWWWWW....WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW.................WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW..........................................................................",
"..........Wz.....W...z..W.....W...W.....................W............................................WW...........W.........................................................................",
"..........W...z..W......W.....W...WWWWWWWWWWWWW.........W............................................WW.......W...W.........................................................................",
"..........W...z.....z...W.....W................W.........WW..........................................WW.......W...W.........................................................................",
"..........W.z...z.......W.....W.....e.....e....W...........WWW.................................................W..W.........................................................................",
"..........W...z....z....W...................e..W............WW....................................................W.........................................................................",
"..........W..........................e.........W...........WW........W............................................W.........................................................................",
"..........W............................e.......W..........W...........WWW.........................................W.........................................................................",
"..........W................................e...W..........W........W...W.WW.......................................W.........................................................................",
"..........W...................W................W..........W.........WWW....WWW..............e........WW...........W.........................................................................",
"..........W...e...............W...WWWWWWWWWWWWW...........W...........W......WW......................WW...........W.........................................................................",
"..........W.............W.....W...W.......................W............W.......WW....................WW..e......e.W.........................................................................",
"..........W.............W.....W...W........................W...........WW........W...................WW...........W.........................................................................",
"....WWWWWWW.......W...W.W.....WWWW..........................WW...........WWW.....W...................WW.....e.....W.........................................................................",
"...W......WWWWWWWWW...WWW.....W...W..........................W..............WW..W....................WW..W........W.........................................................................",
"...W......W.......W...W.W.........WWWWWWWWWWWWW..............W................WW.....................W.WW.WWW.....W.........................................................................",
"...W....................W......................W..............WWW....................................W.......WW...W.........................................................................",
"......e.......e.........W......................W.................WW...........................WWW....W.........WWW..........................................................................",
"...............e....e...W............d...d.....W.................WW...........................W..WWWW.......................................................................................",
".......e...e............W.....W................W...............WW..........................W.W..............................................................................................",
"..............e.........W.....W..........d.....W..............W...........................WW.W..............................................................................................",
"...W......W.........e...W.....W................W..............W............................WW...............................................................................................",
"...W..e...W.............W.....W.....d..........W.............W..............................W...............................................................................................",
"...W......W....e........W.....W...WWWWWWWWWWWWW...............W...........................W.W...............................................................................................",
"....WWWWWWW........e....W.....W...W............................WW...W..................WWWWW................................................................................................",
"..........W.............W.....W...W..............................WWW.W...............WW.....................................................................................................",
"..........WWWWWWWWWWWWWW.WWWWWWWWWW..................................W..............W.......................................................................................................",
"......................................................................W.............W.......................................................................................................",
".....................................................................W..............W.......................................................................................................",
"......................................................................W.............W.......................................................................................................",
"...................................................................WWW..............W.......................................................................................................",
"..................................................................W..................W......................................................................................................",
"..................................................................W...........p.......W.....................................................................................................",
"...................................................................WWWWWWWWWWWWWWWWWWW......................................................................................................",]