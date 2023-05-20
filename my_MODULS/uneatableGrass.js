var GrassEater = require('./GrassEater') 
var speedofgrowing;
function weather1(){
    var exanak = require('./exanak.js')
    if (exanak == 0) {
 speedofgrowing = 10

}
else if(exanak == 1){
     speedofgrowing = 15

}
else if(exanak == 2){
 speedofgrowing = 30

}
else if(exanak == 3){
 speedofgrowing = 20

}
}
setInterval(weather1,200);

module.exports =class UneatableGrass extends GrassEater{
    constructor(x, y, index){

        super(x, y, index);
        this.multiply = 1;
        
        }
        
    mul () {
        
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[ Math.round(Math.random()*emptyCells.length)]

        // console.log(emptyCells, newCell);
        if(newCell && this.multiply >= speedofgrowing){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix1[newY][newX] = 6;
 
            var newuneatableGrass = new UneatableGrass(newX, newY);
            uneatableGrassArr.push(newuneatableGrass);
           this.multiply = 0;
        } 
    }
 
}