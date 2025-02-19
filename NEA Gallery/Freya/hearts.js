class Hearts {
    constructor(xPos, yPos, spritesheet) {
        this.hearts = new Sprite(xPos - 15, yPos - 70, 54, 18)
        this.hearts.collider = 'n'
        this.hearts.layer = 2

        this.hearts.spriteSheet = spritesheet;
        this.hearts.anis.frameDelay = 2000;
        this.hearts.addAnis({
            full3: { row:0, frames:1 },
            full2: { row:1, frames:1 },
            full1: { row:2, frames:1 },
            empty: { row:3, frames:1 },
        });
    }

    show(lives) {
        if(lives == 3) {
            this.hearts.ani = 'full3';
        }
        else if(lives == 2) {
            this.hearts.ani = 'full2'
        }
        else if(lives == 1) {
            this.hearts.ani = 'full1'
        }
        else {
            this.hearts.ani = 'empty'
        }

    }
}
