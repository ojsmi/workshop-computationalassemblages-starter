const socket = io();
let clr;

function setup() {
    createCanvas( 500, 500 );
    background( 255 );
    clr = color( 0, 255, 0 );

    socket.on('pulse', () => {
        fill( 0 );
        circle( random( width ), random( height ), random( 5, 20 ) );
    });
}

function draw() {
    stroke( clr );
    strokeWeight( 5 );
    noFill();
    rect( 100, 100, 300, 300 );
}

function mousePressed(){
    socket.emit('mousepressed');
    clr = color( 255, 0, 0 );
}

function mouseReleased(){
    socket.emit('mousereleased');
    clr = color( 0, 255, 0 );
}