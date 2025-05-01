// map data
//LEGEND
//0 empty
//1 pac
//2 coin


let mapData = [
    [2,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,3,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,3,0,0],
    [0,0,0,4,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],

]

let pr = 5
let pc = 4


let coins = 20


function render() {

    // clear the divs
    map.innerHTML = ``

    for (let row= 0; row<10; row++) { 
    
    for (let col=0; col<10; col++) {
        if (mapData[row][col] == 0) {
            map.innerHTML += `<div></div>`
        }
        else if (mapData[row][col] == 2) {
            map.innerHTML += `<div class="coin"></div>`
         }
        else if (mapData[row][col] == 1) {
            map.innerHTML += `<div class="pac"></div>`
        }

        else if (mapData[row][col] == 3) {
            map.innerHTML += `<div class="bomb"></div>`
        }
        else if (mapData[row][col] == 4) {
            map.innerHTML += `<div class="heart"></div>`
        }
    }
}

    stats.innerHTML =  `Coins: ${coins}`
}

function move () {

    mapData[pr][pc] = 0
    switch (event.code) {
        case "ArrowRight":
            if (pc < 9) pc++ ; 
            break;
        case "ArrowLeft": pc > 0 ? pc = 0:1 ; break;
        case "ArrowDown": pr < 9 ? pr++:0 ; break;
        case "ArrowUp":   pr > 0 ? pr--:0 ; break;
    }
    if (mapData[pr][pc] == 2) {
            coins += 5
    }
    if (mapData[pr][pc] == 3) {
        coins -= 20
    }
    if (mapData[pr][pc] == 4) {
        coins += 10
    }

    mapData[pr][pc] = 1
    render()
    if (coins < 0) {
        stats.innerHTML = `Game over!`
    }
}

