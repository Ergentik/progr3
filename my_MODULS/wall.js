var GrassEater = require('./GrassEater') 
module.exports = class Wall extends GrassEater{
    mul () {
        this.multiply++;
        var emptyCells = this.chooseCell(10);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
 
        console.log(emptyCells, newCell);
        if(newCell && this.multiply >= 2){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix1[newY][newX] = 4;
 
            var newWall = new Grass(newX, newY);
            wallarr.push(newWall);
            this.multiply = 0;
        }
    }
    stay(){
        
    }
}