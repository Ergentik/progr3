var GrassEater = require('./GrassEater') 

// var Koeficent;
// function weather1(){
//      exanak = require('./exanak.js')
//     if (exanak == 0) {
//      Koeficent = 15
// }
// else if(exanak == 1){
//      Koeficent = 3
// }
// else if(exanak == 2){
//      Koeficent = 0
// }
// else if(exanak == 3){
//      Koeficent = 3
// }

 
// }
// setInterval(weather1,2000) 

module.exports = class Predator extends GrassEater{
    mul () {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
 
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix1[newY][newX] = 3;
 
            var newGrass = new Predator(newX, newY);
            predatorArr.push(newGrass);
            this.energy = 30;
        }
    }
    eat() {
        var emptyCells = this.chooseCell(2);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix1[newY][newX] = matrix1[this.y][this.x]
            matrix1[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            if(this.energy > 3) {
                this.mul()
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            
        } else {
            this.move()
        }
    }
    move() {
        this.energy--;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
        if( newCell && this.energy >= 3) {
            var newX = newCell[0];
            var newY = newCell[1];
             matrix1[newY][newX] =  matrix1[this.y][this.x]
             matrix1[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
        } else {
            
                this.die()}
        
    }
    die() {
        matrix1[this.y][this.x] = 0;
       for (var i in predatorArr) {
           if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
            predatorArr.splice(i, 1);
               break;
           }
       }
   }
    
}
