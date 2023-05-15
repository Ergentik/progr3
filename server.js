var GrassEater = require('./my_MODULS/grassEater.js');
var Predator = require( './my_MODULS/predator.js');
var Wall = require( './my_MODULS/wall.js');
var WallBreaker = require( './my_MODULS/wallBreaker.js');
var UneatableGrass = require( './my_MODULS/uneatableGrass.js');
var Grass = require( './my_MODULS/grass.js');

// var { Socket } = require( 'socket.io');



var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static("my_MODULS"));
app.get('/', function (req, res) {
res.redirect('index.html');
});
server.listen(3000);


matrix1 = []

// socket.emit('event',ergentik)

io.sockets.on('connection', function(socket){
console.log("hihi")
    socket.on('a', function(data){
    


        console.log(data)
        console.log(data+1)
   
          
            
        KillObj()
        // console.log(grassArr)
        // console.log(grassEaterArr)
        // console.log(wallBreakerArr)
        // console.log(predatorArr)
        // console.log(uneatableGrassArr)
        // console.log(wallarr)
            for (let f = -1; f < 29; f++) {
                
                matrix1[data].shift()
                matrix1[data].push(1)
                
        
        
            }
            for (let f = -1; f < 29; f++) {
                
                matrix1[data+1].shift()
                matrix1[data+1].push(0)
                
        
        
            }
            for (let f = -1; f < 29; f++) {
                
                matrix1[data+2].shift()
                matrix1[data+2].push(2)
                
        
        
            }
            for (let f = -1; f < 29; f++) {
                
                matrix1[data+3].shift()
                matrix1[data+3].push(5)
                
        
        
            }

            // createObj()
            createObj()
            return(matrix1)
            
            
            

    
    });
    
})

    // createObj()


function r(e){
    console.log(e)
}

        function generateMatrix(matLength, gr,gre, pr, wl, wlbr, ug) {
            
            var matrix = []
            for (let i = 0; i < matLength; i++) {
                matrix.push([])
                for (let j = 0; j < matLength; j++) {
                    matrix[i].push(0)
                }
            }
            for (let i = 0; i < gr; i++) {
                let x = Math.floor(Math.random() * matLength);
                let y = Math.floor(Math.random() * matLength);
                if (matrix[y][x] == 0) {
                    matrix[x][y] = 1;
                }
            }
            for (let i = 0; i < gre; i++) {
                let x = Math.floor(Math.random() * matLength);
                let y = Math.floor(Math.random() * matLength);
                if (matrix[y][x] == 0) {
                    matrix[x][y] = 2;
                }
            }
            for (let i = 0; i < pr; i++) {
                let x = Math.floor(Math.random() * matLength);
                let y = Math.floor(Math.random() * matLength);
                if (matrix[y][x] == 0) {
                    matrix[x][y] = 3;
                }
        
            }
            for (let i = 0; i < wl; i++) {
                let x = Math.floor(Math.random() * matLength);
                let y = Math.floor(Math.random() * matLength);
                if (matrix[y][x] == 0) {
                    matrix[x][y] = 4;
                }
            }
            for (let i = 0; i < wlbr; i++) {
                let x = Math.floor(Math.random() * matLength);
                let y = Math.floor(Math.random() * matLength);
                if (matrix[y][x] == 0) {
                    matrix[x][y] = 5;
                }
            }
            for (let i = 0; i < ug; i++) {
                let x = Math.floor(Math.random() * matLength);
                let y = Math.floor(Math.random() * matLength);
                if (matrix[y][x] == 0) {
                    matrix[x][y] = 6;
                }
            }
        
            return matrix;
            
        }
        
grassArr = [];
grassEaterArr = [];
predatorArr = []
wallarr = []
wallBreakerArr = []
uneatableGrassArr = []

function consolelog(){
    console.log(grassArr)
}












matrix1 = generateMatrix(30, 50, 20, 20, 40, 20, 10)
createObj()


function createObj() {
    

    for (let y = 0; y < matrix1.length; y++) {
        for (let x = 0; x < matrix1[y].length; x++) {
            if (matrix1[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix1[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat)
            }
            else if (matrix1[y][x] == 3) {
                let pred = new Predator(x, y);
                predatorArr.push(pred)
            }
            else if (matrix1[y][x] == 4) {
                let wl = new Wall(x, y);
                wallarr.push(wl)
            }
            else if (matrix1[y][x] == 5) {
                let wlbr = new WallBreaker(x, y);
                wallBreakerArr.push(wlbr)
            }
            else if (matrix1[y][x] == 6) {
                let ug = new UneatableGrass(x, y);
                uneatableGrassArr.push(ug)
            }
        }
    }

}
function game (
){
    // console.log(matrix1)
       for (let i in grassArr) {
                grassArr[i].mul()
            }
            for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
            }
            for (let i in predatorArr) {
                predatorArr[i].eat()
            }
            for (let i in wallarr) {
                wallarr[i].stay()
            }
            for (let i in wallBreakerArr) {
                wallBreakerArr[i].eat()
            }
            for (let i in uneatableGrassArr) {
                uneatableGrassArr[i].mul()
            }

            io.sockets.emit("send matrix",matrix1)
            
            
        }
        // io.sockets.emit("send matrix",matrix1)
        function eventik(e){
            
        }





        function KillObj(){
            for (let y = 0; y < Math.pow(matrix1.length+1, 2); y++) {
                grassArr.shift()
            }
            for (let y = 0; y < Math.pow(matrix1.length+1, 2); y++) {
                grassEaterArr.shift() 
            }for (let y = 0; y <Math.pow(matrix1.length+1, 2); y++) {
                predatorArr.shift()
            }for (let y = 0; y < Math.pow(matrix1.length+1, 2); y++) {
                wallBreakerArr.shift()
            }for (let y = 0; y < Math.pow(matrix1.length+1, 2); y++) {
                uneatableGrassArr.shift()
            }
            for (let y = 0; y <Math.pow(matrix1.length+1, 2); y++) {
                wallarr.shift()
            }
            
        }

setInterval(game,200)

// console.log('aaa')

