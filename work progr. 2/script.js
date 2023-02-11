// s s s s s s s s s s 


function generateMatrix(matLength, gr,grEa,pr,wl) {
let matrix = [];
for (let i = 0; i < matLength; i++) {
matrix.push([])
for (let j = 0; j < matLength; j++) {
matrix[i].push(0)
}
}
for (let i = 0; i < gr; i++) {
let x = Math.floor(Math.random()*matLength);
let y = Math.floor(Math.random()*matLength);
if(matrix[y][x] == 0) {
matrix[x][y] = 1;
}
}
for (let i = 0; i < grEa; i++) {
let x = Math.floor(Math.random()*matLength);
let y = Math.floor(Math.random()*matLength);
if(matrix[y][x] == 0) {
matrix[x][y] = 2;
}
for (let i = 0; i < pr; i++) {
    let x = Math.floor(Math.random()*matLength);
    let y = Math.floor(Math.random()*matLength);
    if(matrix[y][x] == 0) {
    matrix[x][y] = 3;
    }
    for (let i = 0; i < wl; i++) {
        let x = Math.floor(Math.random()*matLength);
        let y = Math.floor(Math.random()*matLength);
        if(matrix[y][x] == 0) {
        matrix[x][y] = 4;
        }
    }
    
}
}
return matrix;
}
let matrix = generateMatrix(30,10,10,10,2)
 
 var side = 20;
 
 let grassArr = [];
 let grassEaterArr = [];
 let predatorArr = []
 let wallarr = []
 
 function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');  

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) { 
            if (matrix[y][x] == 1) {
                let gr = new Grass(x,y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x,y);
                grassEaterArr.push(grEat)
            }
            else if (matrix[y][x] == 3) {
                let pred = new Predator (x,y);
                predatorArr.push(pred)
            }
            else if (matrix[y][x] == 4) {
                let wl = new Wall (x,y);
                wallarr.push(wl)
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
            }else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
     
         
            rect(x * side, y * side, side, side);
     
	
        }
    }

    for(let i in grassArr){
        grassArr[i].mul()
     }

     for(let i in grassEaterArr){
        grassEaterArr[i].eat()
     }
     for(let i in predatorArr){
        predatorArr[i].eat()
     }
     for(let i in wallarr){
        wallarr[i].stay()
     }
 }