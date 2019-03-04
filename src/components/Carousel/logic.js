import agileflow from "../../assets/images/projects/agile_flow.jpg"
import chronos from "../../assets/images/projects/chronos.jpg"
import cortex from "../../assets/images/projects/cortex.jpg"
import gameroster from "../../assets/images/projects/game_roster.jpg"
import garyvee from "../../assets/images/projects/garyvee.jpg"
import gbay from "../../assets/images/projects/gbay.jpg"
import giphy from "../../assets/images/projects/giphy.jpg"
import lardac from "../../assets/images/projects/lardac.jpg"
import mobile from "../../assets/images/projects/mobile.jpg"
import nyt from "../../assets/images/projects/nyt.jpg"
import opine from "../../assets/images/projects/opine.jpg"
import rpg_game from "../../assets/images/projects/rpg_game.jpg"
import team_finder from "../../assets/images/projects/team_finder.jpg"
import tilt from "../../assets/images/projects/tilt.jpg"
import toon from "../../assets/images/projects/toon.jpg"
import train from "../../assets/images/projects/train.jpg"

window.onload = function() {

// Background Color Options
const colors = ["#2D287F","#A29CFF","#5A4FFF","#514E7F","#483FCC", "#53217F", "#CA8FFF", "#A642FF", "#65477F", "#8535CC"];


// Our Images - Nature
const images=[agileflow, cortex, chronos, gameroster, garyvee, gbay, giphy, lardac, mobile, nyt, opine, rpg_game, team_finder, tilt, toon, train]

// Randomized Array Of Images
let randomImages = images.sort(function(a, b){return 0.5 - Math.random()})

// Ser Variables for DOM Elements
const grid=document.getElementById("grid");
const box1=document.getElementById("box-1");
const box2=document.getElementById("box-2");
const box3=document.getElementById("box-3");
const box4=document.getElementById("box-4");
const box5=document.getElementById("box-5");
const box6=document.getElementById("box-6");

// Image Array (For Loops)
const boxArray = [box1, box2, box3, box4, box5, box6];

// Track Our Index For Images
let count = 0;

// Store Our Interval (So We Can Have Access)
let carousel;

// Store Grid & Play State
let shuffleState = "mixed";
let playState = "paused";

// ============================================================================================================
// There is a DRY way to do this code with a loop but it does not achieve the stagered effect I was looking for
// ============================================================================================================

// Set Initial Images
const loadStartImages = () =>{
    for( let i=0; i<boxArray.length; i++){
        boxArray[i].style.backgroundImage = `url(${randomImages[count + i]})`;
        // console.log(count);
        count++
    }
}

// Fade Out Current Images
const fadeOut = (box) => {
    box.setAttribute("class", "box fadeOut");
}

// Change Image Source While Hidden
const updateImages = (box) => {
    box.style.visibility = "hidden";
    box.style.backgroundImage = `url(${randomImages[count]})`;
    // console.log(`Image Number: ${count}`);
    count++;
    // console.log(`Updated Count: ${count}`);

}

// Add Class For Animation
const updateClass = (box) => {
    box.setAttribute("class", "box scaleIn");
    box.style.visibility = "visible";
}

// Change Background Color
const changeBackground = () => {
    let colorPick = Math.floor(Math.random() * colors.length);
    // console.log(`Color Picked: ${colors[colorPick]}`);
    grid.style.background = colors[colorPick];
}

// Set Timers To Replace Images
const fullCycle = (box) => {
    setTimeout(()=>fadeOut(box), 0);
    setTimeout(()=>updateImages(box), 3000);
    setTimeout(()=>updateClass(box), 4000);
}

// Update Images On A Staggered Basis
function cycleImages() {

    // Check If All Images Are Used & Reshuffle
    if(count>=randomImages.length-6){
        randomImages = images.sort(function(a, b){return 0.5 - Math.random()})
        count=0;
        setTimeout(()=>fullCycle(box1), 500);
        setTimeout(()=>fullCycle(box2), 1000);
        setTimeout(()=>fullCycle(box3), 1500);
        setTimeout(()=>fullCycle(box4), 2000);
        setTimeout(()=>fullCycle(box5), 2500);
        setTimeout(()=>fullCycle(box6), 3000);
        changeBackground();
    } else {
        setTimeout(()=>fullCycle(box1), 500);
        setTimeout(()=>fullCycle(box2), 1000);
        setTimeout(()=>fullCycle(box3), 1500);
        setTimeout(()=>fullCycle(box4), 2000);
        setTimeout(()=>fullCycle(box5), 2500);
        setTimeout(()=>fullCycle(box6), 3000);
        changeBackground();
    }
}

// Start Carousel
const start = () => {
    carousel = setInterval(cycleImages, 10000);
}

// Stop Carousel
const stop = () => {
    clearInterval(carousel);
}

// Convert Grid To Columns
const makeColumns = () =>{
    grid.style.gridTemplateColumns="repeat(6, 1fr)";
    box1.style.gridColumn="1/2";
    box1.style.gridRow="1/3";
    box2.style.gridColumn="2/3";
    box2.style.gridRow="1/3";
    box3.style.gridColumn="3/4";
    box3.style.gridRow="1/3";
    box4.style.gridColumn="4/5";
    box4.style.gridRow="1/3";
    box5.style.gridColumn="5/6";
    box5.style.gridRow="1/3";
    box6.style.gridColumn="6/7";
    box6.style.gridRow="1/3";
    box6.style.display="block";
}

// Convert Grid To Boxes
const makeBoxes = () => {
    grid.style.gridTemplateColumns="repeat(6, 1fr)";
    box1.style.gridColumn="1/3";
    box1.style.gridRow="1/2";
    box2.style.gridColumn="3/5";
    box2.style.gridRow="1/2";
    box3.style.gridColumn="5/7";
    box3.style.gridRow="1/2";
    box4.style.gridColumn="1/3";
    box4.style.gridRow="2/3";
    box5.style.gridColumn="3/5";
    box5.style.gridRow="2/3";
    box6.style.gridColumn="5/7";
    box6.style.gridRow="2/3";
    box6.style.display="block";
}

// Convert Grid To Boxes
const makeMixed = () => {
    grid.style.gridTemplateColumns="repeat(5, 1fr)";
    box1.style.gridColumn="1/2";
    box1.style.gridRow="1/2";
    box2.style.gridColumn="1/3";
    box2.style.gridRow="1/3";
    box3.style.gridColumn="3/4";
    box3.style.gridRow="1/3";
    box4.style.gridColumn="4/6";
    box4.style.gridRow="1/3";
    box5.style.gridColumn="5/6";
    box5.style.gridRow="2/3";
    box6.style.display="none";
}

// Shuffle Grid Based On Current State
const shuffle = ()=>{
    // console.log("clicked");
    stop();

    switch(shuffleState) {
        case "mixed": 
            makeColumns();
            shuffleState="columns";
            break;
        case "columns":
            makeBoxes();
            shuffleState="boxes";
            break;
        case "boxes":
            makeMixed();
            shuffleState="mixed";
            break;
        default:
            makeMixed();
            shuffleState="mixed";
    }

    cycleImages();
    start();
}

// Start Event Listener
document.getElementById("play").addEventListener("click", function(){
    console.log("clicked");
    if(playState=="paused"){
        cycleImages();
        start();
        document.getElementById("pause-modal").style.display="none";
        playState="playing"
    }

});

// Pause Event Listener
document.getElementById("pause").addEventListener("click", function(){
    // console.log("clicked");
    playState="paused";
    stop();
    document.getElementById("pause-modal").style.display="block";
});

// Shuffle Event Listener
document.getElementById("shuffle").addEventListener("click", function(){
    // console.log("clicked");
    document.getElementById("pause-modal").style.display="none";
    shuffle();
});

// Load Images On Page Load
makeColumns();
loadStartImages();
cycleImages();
start();
playState="playing"
}