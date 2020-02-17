function generatePlanet() { 
    let planet = document.getElementById("planet")

    let size = Math.random() * 500 + 50;
    planet.style.height = size;
    planet.style.width = size;

    let colours = Array("#ebdbb2", "#cc241d", "#458588", "#98971a", "#b16286");
    let colour = colours[Math.floor(Math.random() * colours.length)];
    planet.style.backgroundColor = colour;
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        generatePlanet()
    }
}
