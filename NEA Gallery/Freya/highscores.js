let LoadButton, NewButton, HighscoreButton, SettingsButton, title;

function preload() {
    bgImg = loadImage('assets/bg.png')
}

function setup() {
    createCanvas(384, 216, 'pixelated x4');
    background(bgImg);
    textSize(32);

    BackButton = createButton('Back');
    BackButton.class("button");
    BackButton.position(width * 2.29, height * 3.5);
    BackButton.mousePressed(back);

}

function draw() {
    text("HIGHSCORES", width*0.28, height*0.15)
}

function back() {
    window.open("index.html", "_self")
}
