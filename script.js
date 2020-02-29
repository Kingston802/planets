function generatePlanet() { 
    let planet = document.getElementById("planet")
    
    // calculate max/min sizes
    let bodyWidth = document.body.clientWidth;
    let bodyHeight = document.body.clientHeight;
    let pixels = (bodyWidth + bodyHeight)/2
    let maxSize = 0.5 * pixels;
    let minSize = 0.05 * pixels;


    // calculate new sizes
    let size = Math.random() * maxSize + minSize;

    // apply new size
    planet.style.height = size + "px";
    planet.style.width = size + "px";

    // calculate new colour
    const colours = Array("#cc241d", "#458588", "#98971a", "#b16286");
    let colour = colours[Math.floor(Math.random() * colours.length)];

    // apply new colour
    planet.style.backgroundColor = colour;
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        generatePlanet()
    }
}
