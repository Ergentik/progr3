var GrassEater = require('./GrassEater') 
module.exports =class UneatableGrass extends GrassEater{
    

    mul () {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
 
        console.log(emptyCells, newCell);
        if(newCell && this.multiply >= 10){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;
 
            var newuneatableGrass = new UneatableGrass(newX, newY);
            uneatableGrassArr.push(newuneatableGrass);
            this.multiply = 0;
        }
    }
 
}