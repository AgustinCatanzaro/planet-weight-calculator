function calculateWeight() {
    let mass = document.getElementById("mass").value
    let planet = document.getElementById("planet").value.toLowerCase()
    let planetName = document.getElementById("planet-var")
    let planetWeightDisplay = document.getElementById("weight-display-number")
    let planetImg = document.getElementById("planet-img-div")
    let overlayDiv = document.getElementById("overlay")
    let standByOverlayDiv = document.getElementById("standby-overlay")

    const planets = {
    earth: {
        gravity: 9.807,
        imgUrl: 'url(./images/earth.png)'
    },
    jupiter: {
        gravity: 24.79,
        imgUrl: 'url(./images/jupiter.png)'
    },
    mars: {
        gravity: 3.781,
        imgUrl: 'url(./images/mars.png)'
    },
    saturn: {
        gravity: 10.44,
        imgUrl: 'url(./images/saturn.png)'
    },
    venus: {
        gravity: 8.87,
        imgUrl: 'url(./images/venus.png)'
    },
    uranus: {
        gravity: 8.87,
        imgUrl: 'url(./images/uranus.png)'
    },
    neptune: {
        gravity: 11.15,
        imgUrl: 'url(./images/neptune.png)'
    },
    mercury: {
        gravity: 3.7,
        imgUrl: 'url(./images/mercury.png)'
    },
    pluto: {
        gravity: 0.62,
        imgUrl: 'url(./images/pluto.png)'
    }
    }
    standByOverlayDiv.style.visibility = "hidden"
    overlayDiv.style.visibility = "visible"
    
    //utilizo la variable str que nos llega desde la form de forma de Index para acceder al planeta requerido.
    const weight = (mass * planets[planet]['gravity']).toFixed(2)
    // .toFixed() da cantidad de decimales a mostrar en un float.
    const planetPhoto = planets[planet]['imgUrl']

    planetName.textContent = planet.toUpperCase()
    planetWeightDisplay.textContent = weight + "   KG"
    planetImg.style.backgroundImage = planetPhoto
}