var GrassEater = require('./GrassEater') 
module.exports = class Predator extends GrassEater{
    mul () {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
 
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
 
            var newGrass = new Predator(newX, newY);
            predatorArr.push(newGrass);
            this.energy = 8;
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
            if(this.energy > 15) {
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
    
}