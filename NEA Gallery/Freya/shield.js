class Shield {
    constructor(xPos, yPos, spritesheet) {
        this.timer = 0;
        this.active = false;
        this.usable = true;
        this.shield = new Sprite(xPos - 15, yPos - 70, 18, 18);
        this.shield.collider = 's';

        this.shield.spriteSheet = spritesheet;
        this.shield.anis.frameDelay = 8;
        this.shield.addAnis({
            use: { row:0, frames:1 },
            cool: { row:0, frames:2 },
        });
    }

    show() {
        // Always set ani to 'use'
        this.shield.ani = 'use';
        // If cooldown is active, ani will switch between 'use' and 'cool' to create flashing effect.
        if(this.usable == false) {
            this.shield.ani = 'cool';
        }
    }

    cooldown() {
        if(this.timer > 0) {
            this.timer -= 1
        }
        if(this.timer == 0) {
            this.usable = true;
        }
        if(this.timer < 300) {
            this.active = false;
        }
    }

    use() {
        if(this.usable == true && kb.presses('s')) {
            this.usable = false;
            this.active = true;
            this.timer = 480;
        }
    }
    
    returnActive() {
        return(this.active)
    }
}
