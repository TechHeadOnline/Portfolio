class Enemies {
    constructor(spritesheet) {
        this.spritesheet = spritesheet;
        this.speed = 1;
        this.alive = true;
    }
}

class Enemy1 extends Enemies {
    constructor(spritesheet) {
        super(spritesheet);
        this.spritesheet = spritesheet;
        this.pSpeed = -1
        this.burrowTime = 180

        this.enemy1 = new Group();
        this.enemy1.collider = 'd'
        this.enemy1.rotationLock = true;
        this.enemy1.tile = 'E';
        this.enemy1.w = 17;
        this.enemy1.h = 18;

        this.enemy1.spriteSheet = spritesheet;
        this.enemy1.anis.frameDelay = 8;
        this.enemy1.addAnis({
            move: { row:0, frames:1 },
            move1: { row:0, frames:2  },
            burrow: { row:0, frames:3 }
        })
    }
}

class Enemy2 extends Enemies {
    constructor(spritesheet) {
        super(spritesheet);
        this.spritesheet = spritesheet;
        this.pSpeed = -1
        this.angle = 0
        this.adj = 0
        this.opp = 0
        this.fireAngle = 0

        this.enemy2 = new Group();
        this.enemy2.collider = 'k'
        //this.enemy2.rotationLock = true;
        this.enemy2.tile = '&';
        this.enemy2.w = 17;
        this.enemy2.h = 14;

        this.enemy2.spriteSheet = spritesheet;
        this.enemy2.anis.frameDelay = 15;
        this.enemy2.addAnis({
            idle: { row:0, frames:1},
            fire: { row:0, frames:2 },
        })
    }
}

class Enemy3 extends Enemies {
    constructor(spritesheet) {
        super(spritesheet)
            this.spritesheet = spritesheet;
            this.speed = 1.5;

            this.enemy3 = new Group();
            this.enemy3.collider = 'd';
            this.enemy3.tile = '^';
            this.enemy3.w = 24;
            this.enemy3.h = 23;
            this.enemy3.rotationLock = true

            this.enemy3.spriteSheet = spritesheet;
            this.enemy3.anis.frameDelay = 8;
            this.enemy3.addAnis({
                fly: { row:0, frames: 3}
            })
    }
}
