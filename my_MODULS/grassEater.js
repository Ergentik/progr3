// var Koeficent;
// function weather1(){
//      exanak = require('./exanak.js')
//     if (exanak == 0) {
//      Koeficent = 2
// }
// else if(exanak == 1){
//      Koeficent = 0
// }
// else if(exanak == 2){
//      Koeficent = 0
// }
// else if(exanak == 3){
//      Koeficent = 10
// }

 
// }


module.exports = class GrassEater  {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x <  matrix1[0].length && y >= 0 && y <  matrix1.length) {
                if ( matrix1[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
 

    mul () {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
 
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
             matrix1[newY][newX] = 2;
 
            var newGrass = new GrassEater(newX, newY);
            grassEaterArr.push(newGrass);
            this.energy = 10;
        }
    }

    move() {
        this.energy--;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
        if(newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
             matrix1[newY][newX] =  matrix1[this.y][this.x]
             matrix1[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            
        } else {
            this.die()
                
            

             
        }
    }

    eat() {
        var emptyCells = this.chooseCell(1);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
             matrix1[newY][newX] =  matrix1[this.y][this.x]
             matrix1[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            if(this.energy > 0) {
                this.mul()
            }
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            
        } else {
            this.move()
        }
    }

    die() {
         matrix1[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}
