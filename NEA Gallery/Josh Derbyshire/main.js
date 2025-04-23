let player;
let bomb,bombl,bombr,bombu,bombd, bombs;
let bombnum=10;
let allbombs=[]
let title=""
let bombspread=1
let lastkey;
let Border,Grass,breakable;
let TileSize=40;
let pups=["speed","speed","speed","speed","spread","spread","spread","num","num"]
let brickimg,borderimg,Grassimg,Bordersideimg,playerimg,powerimg,bombsimg,explosionvimg,explosionhimg,explosioncimg,explosiondimg;
let playerspeed=2.5;

function preload(){
    brickimg=loadImage("breakable.png")
    borderimg=loadImage("Border.png")
    Grassimg=loadImage("Grass.png")
    Bordersideimg=loadImage("Borderside.png")
    playerimg=loadImage("Bomberman.png")
    bombsimg=loadImage("bomb.png")
    explosionvimg=loadImage("explosionv.png")
    explosionhimg=loadImage("explosionh.png")
    explosioncimg=loadImage("explosionc.png")
    explosiondimg=loadImage("explosiond.png")
    speedimg=loadImage("speed.png")
    bombspreadimg=loadImage("bombspread.png")
    bombnumimg=loadImage("bombnum.png")
    
}

function setup(){
    createCanvas(590,570)
    background(100,100,100)
    nonDest = new Group()
    bombs = new Group()
    powerups=new Group()

    Borderside = new nonDest.Group();
    Borderside.collider="s";
    Borderside.image=Bordersideimg;
    Borderside.tile="/"
    Borderside.w=TileSize;
    Borderside.h=TileSize;
  
    Border = new nonDest.Group();
    Border.collider="s";
    Border.image=borderimg;
    Border.tile="="
    Border.w=TileSize;
    Border.h=TileSize;

    Grass=new Group();
    Grass.collider="s";
    Grass.image=Grassimg;
    Grass.tile="1"
    Grass.w=TileSize;
    Grass.h=TileSize;
    
    breakable=new Group();
    breakable.collider="s";
    breakable.image=brickimg;
    breakable.tile="-"
    breakable.w=TileSize;
    breakable.h=TileSize;

    player=new Sprite(40,40,32,32);
    player.rotationLock=true;
    player.spriteSheet= playerimg;
    player.anis.frameDelay =12;
    player.addAnis({
      runside: {row:5, frames:3},
      stand:{row:5,frames:1},
      runup: {row:1, frames:3},
      rundown: {row:0, frames:3},
      standup:{row:1,frames:1},
      standdown:{row:0,frames:1},
      death:{row:4,frames:2}
    })
    player.scale=1
  player.changeAni('stand')

  new Tiles(
        [
            "===============",
            "/..----.----../",
            "/.=.=-=-=-=.=./",
            "/----.-.--.---/",
            "/.=-=-=-=-=-=-/",
            "/--.-.-.---.--/",
            "/-=-=-=-=-=-=-/",
            "/.---.--.---.-/",
            "/-=-=-=-=-=-=-/",
            "/-.--.-----.--/",
            "/.=-=-=-=.=-=-/",
            "/-------.--.--/",
            "/.=-=.=-=-=-=./",
            "/..---.-.---../",
            "===============",

        ],
        10,
        10,
        TileSize,
        TileSize-1);
    


}

function draw(){
    clear()
    background(Grassimg)
    moveplayer()
    
    for(b of bombs){
        if(player.overlapping(b)> 17.5){
            player.changeAni("death")
            setTimeout(playerremove, 400);
        }
        for(x of breakable)
        {
           
      if(b.overlapping(x)>1)
        {
           
            x.remove()
            let pchance=Math.floor(Math.random() * 11);
            let pchoice=Math.floor(Math.random() * 11);

            if(pchance>=3){
                power=new powerups.Sprite(b.x,b.y,32,32)
                power.rotationLock=true;
                power.scale=0.95
                if (pups[pchoice]=="speed"){
                 power.image=speedimg;
                 title="speed"
                }
                if (pups[pchoice]=="spread"){
                    power.image=bombspreadimg;
                   title="spread"
                  }
                  if (pups[pchoice]=="num"){
                    power.image=bombnumimg;
                    title="num"
                  }
                
    
            }
        }
        for(p of powerups){
            if(b.overlapping(p)>175){
                p.remove()
            }
               
        }
       
    }
    for(y of nonDest)
        {
        
      if(b.overlapping(y)>1)
        {
            b.remove()
            
        }
    }
    }
    for(p of powerups){
        if(player.overlapping(p)>17.5){
           p.remove()
           if (title=="speed"){
              speedpowerup()
            }
            if (title=="spread"){
                bigspread()
              }
              if (title=="num"){
                morebombs()
              }

}
    }
    if(bombnum>0){
        if (kb.presses("b")){
            bombrun()
            bombnum=bombnum-1
        }
    
    
        allSprites.debug=true
    }}



function moveplayer(){
    if(kb.pressing("a"))
        {
            lastkey="a"
            player.x -=playerspeed;
            player.ani="runside";
            player.mirror.x=true
            
        }
        else if(kb.pressing("d"))
        {
            lastkey="d"
            player.x +=playerspeed;
            player.ani="runside";
            player.mirror.x=false
        }
        else if(kb.pressing("w"))
            {
                lastkey="w"
                player.y -=playerspeed;
                player.ani="runup";
                
                          
                
            }
            else if(kb.pressing("s"))
            {
                lastkey="s"
                player.y +=playerspeed;
                player.ani="rundown";
               
            }
            else{
                if (lastkey=="w"){
                    player.ani="standup"
                }
                else if (lastkey=="s"){
                    player.ani="standdown"
                }
                else if (lastkey=="a"){
                    player.ani="stand"
                }
                else if (lastkey=="d"){
                    player.ani="stand"
                }
                
            }
            
            
}
function bombrun(){
    calcspawn()
    bombspawn()
    
    function calcspawn(){
        let column=Math.floor(player.x/TileSize)
        let row=Math.floor(player.y/TileSize)
        bx=column*TileSize
        by=row*TileSize
    }
    
    function bombspawn(){
        bomb=new bombs.Sprite((bx+10),(by+10),32,32)
        allbombs[allbombs.length]=bomb
        console.log(allbombs)
        player.x=bx-10
        player.y=by-10
        
        bomb.rotationLock=true;
        bomb.collider="s"
        bomb.image=bombsimg;

        bomb.scale=0.5

        let length=allbombs.length
        
        for(j=0;j<=length;j++){
            
            setTimeout(bombexplode, 3000);
       
        
    }}

    // function bombsplode(){
    //     setTimeout(bombexplode, 3000);
    // }

    function bombexplode(){
       
        console.log("huofvwghu")
        bomb.image=explosioncimg
        bomb.scale=1

   
        
        for(i=1;i<=bombspread;i++){
            
                bombl=new bombs.Sprite(bomb.x-(i*32),bomb.y,30,30)
                bombl.rotationLock=true;
                bombl.collider="d"
                bombl.image=explosionhimg;
                bombl.mirror.x=true
            
                bombr=new bombs.Sprite(bomb.x+(i*32),bomb.y,30,30)
                bombr.rotationLock=true;
                bombr.collider="d"
                bombr.image=explosionhimg;
                bombr.mirror.x=false
        
                bombu=new bombs.Sprite(bomb.x,bomb.y-(i*32),30,30)
                bombu.rotationLock=true;
                bombu.collider="d"
                bombu.image=explosionvimg;
        
                bombd=new bombs.Sprite(bomb.x,bomb.y+(i*32),30,30)
                bombd.rotationLock=true;
                bombd.collider="d"
                bombd.image=explosiondimg;
                bombd.mirror.x=true
                allbombs.shift()
          }  
         


          setTimeout(bombremove, 3000);
      
       
        
    }


    
}


function bombremove(){
    for(i=0;i<=bombspread;i++){
       bombs.remove()}
    bombnum=bombnum+1
}

function playerremove(){
    player.remove()
}
function powerupsremove(){
    console.log(skibidi)
    powerups.remove()
}

function speedpowerup(){
    playerspeed=playerspeed+2.5
    setTimeout(slowdown, 5000);
}
function slowdown(){
    playerspeed=playerspeed-2.5
    
}





function morebombs(){
    bombnum=bombnum+1
    
}

function bigspread(){
    bombspread=bombspread+1
    
}