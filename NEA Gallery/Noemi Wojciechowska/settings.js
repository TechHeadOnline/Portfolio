let fontsize;
let font;

function preload(){
  bg = loadImage('settings copy.png');
  font = loadFont('Rayman2-bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);

  font_slider = createSlider(30, 60, 350);
  font_slider.position(135, 510);
  font_slider.class("customSlider");   
  
  backButton = createButton('Back');
  backButton.class("Button");
  backButton.position(90, 750);
  backButton.mousePressed(Menu);
  backButton.size(200,110);

  volume = localStorage.getItem("volume");
  if (volume) {
    font_slider.value(volume);
 
 
  let sliderValue = volume.value();
  localStorage.setItem("volume", sliderValue);


  }
}

function draw(){
  textFont(font);
  textSize(40);
  fill(232, 128, 200);
  text("Settings page", 290, 260); 
  
  textSize(30);
  text("Volume", 125, 480);
}

function Menu(){
  window.open("index.html", "_self");
}

