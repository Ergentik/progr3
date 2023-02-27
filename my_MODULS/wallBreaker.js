var GrassEater = require('./GrassEater') 
module.exports =class WallBreaker extends GrassEater{
    mul () {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
 
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
             matrix1[newY][newX] = 5;
 
            var newWall=  new WallBreaker(newX, newY);
            wallBreaker.arr.push(newWall);
            this.energy = 8;
        }
    }
    eat() {
        var emptyCells = this.chooseCell(1);
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
    
    

    
}


