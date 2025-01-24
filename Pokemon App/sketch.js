let soundFile,pokemonChosen;
let picture;
let initialPokemon;
let score = 0
let playing = true
let inputBox
let stuck = false
let fonts
function preload(){
  fonts = loadFont('Ketchum.otf')
}
function setup(){
    createCanvas(windowWidth, windowHeight);
   inputBox = createInput('')
    inputBox.mousePressed(getVal)
    inputBox.position(15, 100)
  
inputBox.class('css-input')
     submitBox = createButton('Guess')
    submitBox.position(width/3,inputBox.y + 70)
    submitBox.mousePressed(answer)
    submitBox.class('buttonClass')
     submitBox2 = createButton('Listen to Cry')
    submitBox2.position(width/3,submitBox.y + 70)
    submitBox2.mousePressed(playSoundAgain)
    submitBox2.class('buttonClass')
    submitBox3 = createButton('Show Sprite')
    submitBox3.position(width/3,submitBox2.y + 70)
    submitBox3.mousePressed(showImg)
    submitBox3.class('buttonClass')



    resetBox = createButton('Restart')
    resetBox.position(width/3,inputBox.y + 70)
    resetBox.mousePressed(answer)
    resetBox.class('buttonClass')
    resetBox.hide()

    initialPokemon = getRandomPokemon()
    

}
function showImg(){
  stuck = true
}
function answer(){
  
  console.log(initialPokemon)
  if(inputBox.value().toLowerCase() == initialPokemon.toLowerCase()){
    score +=1
   if(picture){
   }
    initialPokemon = getRandomPokemon()
  }
  else{
    //game over
    playing = false
  
  }
  
}
function update(){}
function draw(){
   background(0)
   textAlign(CENTER)
  textFont(fonts)
  textSize(30)
fill(255)
text("Who's that Pokemon?",width/2, 50)
if(picture){
  if(playing){  
    if(stuck)
    image(picture, width / 4, submitBox3.y +50, 200, 200);
    }
}
if(!playing){
 
  text("Game Over " + score,50,50)
  submitBox3.hide()
  submitBox2.hide()
  submitBox.hide()
  resetBox.show()
}else{
  submitBox3.show()
  submitBox2.show()
  submitBox.show()
  resetBox.hide()
 
  text("Score: " + score,width/2,submitBox3.y+ 100)
}
}

async function playSoundAgain(){
    getPokemon(initialPokemon)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
async function getRandomPokemon(){
    fetchJSONData().then((data) => { 
        if (data) { const randomIndex = Math.floor(Math.random() * data.length); 
            //console.log(data[randomIndex].name.english); 
            initialPokemon = data[randomIndex].name.english
            playSoundAgain(initialPokemon)
            }
     });
}
async function soundLoaded() {
  soundFile.play();
  // image(picture, width / 2, height / 2, 100, 100);
}
async function getPokemon(poke){
    console.log(poke)
    poke = poke.toLowerCase()
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + poke;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {

        picture = loadImage(data.sprites.front_shiny);
        soundFile = loadSound(data.cries.latest, soundLoaded);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
}
function getVal(){
    pokemonChosen = inputBox.value()
}

async function fetchJSONData() 
{ try { const res = await fetch("./pokedex.json"); 
    if (!res.ok) { 
    throw new Error(`HTTP error! Status: ${res.status}`); 
} 
const data = await res.json(); 
return data; 
} catch (error) { console.error("Unable to fetch data:", error); 

} }