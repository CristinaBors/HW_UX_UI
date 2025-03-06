const STEP = 36
let robotLeft = 1
let robotRight = 1

function renderL() { 
gameMap.innerHTML = `
    <div class="robot" 
        style="transform:translateX(${robotLeft * STEP}px)">
    </div>`

}

renderL()

function renderR() {
    gameMap.innerHTML = `
    <div class="robot" 
        style="transform:translateX(${robotLeft * STEP - STEP}px)">
    </div>`

}

renderR()