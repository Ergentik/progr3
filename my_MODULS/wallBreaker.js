var GrassEater = require('./GrassEater'); 
var exanak = require('./exanak.js')
const Predator = require('./predator');

module.exports =class WallBreaker extends GrassEater{
    mul () {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
 
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
             matrix1[newY][newX] = 5;
 
            var newWall=  new WallBreaker(newX, newY);
            wallBreakerArr.push(newWall);
            this.energy = 8;
        }
    }
    move() {
        this.energy--;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
        if(exanak == 2){
            if(newCell && this.energy >= 0) {
                var newX = newCell[0];
                var newY = newCell[1];
                 matrix1[newY][newX] =  matrix1[this.y][this.x]
                 matrix1[this.y][this.x] = 0;
                this.x = newX
                this.y = newY
                
            } 
                
        }
        else{
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
    }

    eat() {
        var emptyCells = this.chooseCell(4);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix1[newY][newX] = matrix1[this.y][this.x]
            matrix1[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            if(this.energy > 8) {
                this.mul()
            }
            for (var i in wallarr) {
                if (newX == wallarr[i].x && newY == wallarr[i].y) {
                    wallarr.splice(i, 1);
                    break;
                }
            }
            
        } else {
            this.move()
        }
    }
    die() {
        matrix1[this.y][this.x] = 0;
       for (var i in wallBreakerArr) {
           if (this.x == wallBreakerArr[i].x && this.y == wallBreakerArr[i].y) {
            wallBreakerArr.splice(i, 1);
               break;
           }
       }
   }
    

    
}