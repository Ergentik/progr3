// var GrassEater = require('./GrassEater') 
// module.exports = class Grass extends GrassEater {
//     constructor(x, y, index){

//         super(x, y, index);
//         this.multiply = 0;
        
//         }
//     mul(){
//         this.multiply++;
//         var emptyCells = this.chooseCell(0);
//         console.log(emptyCells)
//         var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
 
//         // console.log(emptyCells, newCell);
//         if(newCell && this.multiply >= 4){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix1[newY][newX] = 1;
 
//             var newGrass = new Grass(newX, newY);
//             grassArr.push(newGrass);
//             this.multiply = 0;
//         }
//     }
 
// }
module.exports = class Grass  {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix1[0].length && y >= 0 && y < matrix1.length)
                if (matrix1[y][x] == character) {
                    found.push(this.directions[i]);
                }
        }
        return found;
    }

    mul () {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]
 
        console.log(emptyCells, newCell);
        if(newCell && this.multiply >= 2){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix1[newY][newX] = 1;
 
            var newGrass = new Grass(newX, newY);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
 
}
