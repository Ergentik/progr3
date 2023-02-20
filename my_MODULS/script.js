import GrassEater from './grassEater.js';
import Predator from './predator.js';
import Wall from './wall.js';
import WallBreaker from './wallBreaker.js';
import UneatableGrass from './uneatableGrass.js';
import Grass from './grass.js';

function generateMatrix(matLength, gr,gre, pr, wl, wlbr, ug) {
    let matrix = [];
    for (let i = 0; i < matLength; i++) {
        matrix.push([])
        for (let j = 0; j < matLength; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < gre; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 3;
        }

    }
    for (let i = 0; i < wl; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < wlbr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < ug; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 6;
        }
    }

    return matrix;
}
let matrix = generateMatrix(30, 20, 20, 20, 160, 5, 2)

var side = 20;

let grassArr = [];
let grassEaterArr = [];
let predatorArr = []
let wallarr = []
let wallBreakerArr = []
let uneatableGrassArr = []

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat)
            }
            else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y);
                predatorArr.push(pred)
            }
            else if (matrix[y][x] == 4) {
                let wl = new Wall(x, y);
                wallarr.push(wl)
            }
            else if (matrix[y][x] == 5) {
                let wlbr = new WallBreaker(x, y);
                wallBreakerArr.push(wlbr)
            }
            else if (matrix[y][x] == 6) {
                let ug = new UneatableGrass(x, y);
                uneatableGrassArr.push(ug)
            }
        }
    }

}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("white");
            }
            else if (matrix[y][x] == 6) {
                fill("brown");
            }


            rect(x * side, y * side, side, side);


        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in wallarr) {
        wallarr[i].stay()
    }
    for (let i in wallBreakerArr) {
        wallBreakerArr[i].eat()
    }
    for (let i in uneatableGrassArr) {
        uneatableGrassArr[i].mul()
    }
}