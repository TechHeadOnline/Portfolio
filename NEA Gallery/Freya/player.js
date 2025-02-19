class Player {
    constructor(xPos, yPos, spriteSheetImg) {
        this.speed = 2.0;
        this.lives = 3;
        this.score = 0;
        this.checkpoint = 0;
        this.level = 0
        this.dash = true;
        this.invincibleDash = false;
        this.doubleJump = true;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xDir = 1;
        this.timer = 20
        this.inv = false

        this.player = new Sprite(xPos, yPos, 20, 24)
        this.player.rotationLock = true;
        this.player.layer = 3;
        this.player.scale = 1;
        this.player.drag = 5;

        this.player.spriteSheet = spriteSheetImg;
        this.player.anis.frameDelay = 8;
        this.player.addAnis({
            stand: { row:0, frames:1 },
            run: { row:0, frames:2}
        });
    }

    show() {
        camera.x = this.player.x
        camera.y = this.player.y
        if(this.player.x <= 195) {
            camera.x = 195;
        }
        if(this.player.x >= 896) {
            camera.x = 896;
        }
        if(this.player.y >= 505) {
            camera.y = 505;
        }
        if(this.player.y <= 110) {
            camera.y = 110
        }
    }

    move() {
        if(kb.pressing('a')) {
            //This prevents the player from moving past the left border of the map
            if(this.player.x >= 14){
                this.player.vel.x = -this.speed
                this.player.ani = 'run'
                this.player.mirror.x = false;
                this.xDir = -1;
            }
        }
        else if(kb.pressing('d')) {
            //This prevents the player from moving past the right border of the map
            if(this.player.x <= 1100){
                this.player.vel.x = this.speed
                this.player.ani = 'run'
                this.player.mirror.x = true;
                this.xDir = 1;
            }
        }
        else {
            this.player.ani = 'stand'
        }
    }

    //Function to allow the player to dash
    useDash() {
        //Check if dash has already been used and if playeer pressing shift
        if(this.dash && kb.presses('shift')) {
            //Statement to give player invincibility for 20 frames
            if(this.timer <= 0) {
                this.inv = true
                this.timer = 40
                console.log("INV " + this.timer)
            }
            //Statement to move the player and prevent double dashing
            if(kb.pressing(' ') && !(kb.pressing('a') || kb.pressing('d'))) {
                this.player.vel.y = -14
                this.dash = false;
            }
            else if(kb.pressing(' ') && kb.pressing('d')) {
                this.player.vel.y = -12
                this.player.vel.x = 5 * this.xDir;
                this.dash = false;
            }
            else if(kb.pressing(' ') && kb.pressing('a')) {
                this.player.vel.y = -12
                this.player.vel.x = 5 * this.xDir;
                this.dash = false;
            }
            else if((kb.pressing('a') || kb.pressing('d')) && !kb.pressing(' ')){
                this.player.vel.x = 7 * this.xDir;
                this.dash = false;
            }     
        }
        //Decrement invincibility timer
        this.timer -= 1
        if(this.timer == 35) {
            //Check if invincibility has run out
            this.inv = false
        }
    }

    // Hit for if damage is affected by shield or invincibility
    hit(shield, checkX, checkY, sound1, sound2) {
        if(!shield && !this.inv){
            //Call to check if lives are empty
            this.die();
            //Check for checkpoint coordinates
            if(this.checkpoint == 0) {
                this.player.x = this.xPos;
                this.player.y = this.yPos;
                this.lives -= 1
            }
            else {
                this.player.x = checkX
                this.player.y = checkY
                this.lives -= 1
            }
            sound1.play()
        }
        else {
            sound2.play()
        }
    }

    // Hit for if damage ignores shield (e.g., water)
    trueHit(checkX, checkY) {
        this.die();
        if(this.checkpoint == 0) {
            this.player.x = this.xPos;
            this.player.y = this.yPos;
            this.lives -= 1
        }
        else {
            this.player.x = checkX
            this.player.y = checkY
            this.lives -= 1
        }
    }
    
    die() {
        if(this.lives == 0){
            window.open("dead.html", "_self");
        }
    }

    resetSpawn(xPos, yPos) {
        this.xPos = xPos
        this.yPos = yPos
    }
}
