import GrassEater from "./grassEater.js";
export default class UneatableGrass extends GrassEater{
    

    mul () {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
 
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