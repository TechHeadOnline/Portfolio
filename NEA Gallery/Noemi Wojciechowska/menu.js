let font;
let Menu;
let playSound;
let settingsSound;

function preload(){
  Menu = loadImage('menuNew.jpg');
  font = loadFont('Rayman2-bold.ttf');
  playSound = loadSound('sound.mp3', soundLoaded, soundLoadError);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(Menu);

  playButton = createButton('Play');
  playButton.class("Button");
  playButton.position(windowWidth/2.9, windowHeight/1.6);
  playButton.mousePressed(Play);
  playButton.size(300, 100);

  settingsButton = createButton('Settings');
  settingsButton.class("Button");
  settingsButton.position(windowWidth/2.9, windowHeight/1.2);
  settingsButton.mousePressed(Settings);
  settingsButton.size(300, 100);
}

function draw() {
}

function Play(){
  if (playSound.isLoaded()) {
    playSound.setVolume(1.0); 
    playSound.play();
  } else {
    console.log("Play sound not loaded");
  }
  window.open("level2.html", "_self");
}

function Settings(){
  window.open("settings.html", "_self");
}

function soundLoaded() {
  console.log("Sound loaded successfully");
}

function soundLoadError(err) {
  console.log("Error loading sound: ", err);
}