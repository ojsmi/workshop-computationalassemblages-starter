const socket = io();
let clr;

function setup() {
    createCanvas( 500, 500 );
    background( 255 );
    clr = color( 0, 255, 0 );
}

function draw() {
    stroke( clr );
    strokeWeight( 5 );
    noFill();
    rect( 100, 100, 300, 300 );
}

function mousePressed(){
    clr = color( 255, 0, 0 );
}

function mouseReleased(){
    clr = color( 0, 255, 0 );
}