
var socket = io();
kkan = 70
socket.on('send weather', weatherik);
socket.on('send matrix', drawing);
socket.on('sendstat',stat)
socket.on('sendstat1',stat1)
socket.on('sendstat2',stat2)
socket.on('sendstat3',stat3)
socket.on('sendstat4',stat4)
socket.on('sendstat5',stat5)
function stat(a){
    // document.getElementById("pElement").style.fontSize = "30px";
    // document.getElementById("e").style.fontSize = "10px";
    // document.getElementById("e2").style.fontSize = "10px";
    // document.getElementById("e3").style.fontSize = "10px";
    // document.getElementById("e4").style.fontSize = "10px";
    // document.getElementById("e5").style.fontSize = "10px";
    // document.getElementById("e1").style.fontSize = "10px";
    document.getElementById("e").innerHTML = a + " Grass there";
    fill("#FFFFFF")
    rect(420,0,70,1000)
    fill("green")
    rect(420,420-420/900*a,70,1000)
}
function stat1(a){
    
    document.getElementById("e1").innerHTML = a + " GrassEater there";
    fill("#FFFFFF")
    rect(490,0,70,1000)
    fill("yellow")
    rect(490,420-420/900*a,70,1000)
}
function stat2(a){
    
    document.getElementById("e2").innerHTML = a + " Predator there";
    fill("#FFFFFF")
    rect(560,0,70,1000)
    fill("red")
    rect(560,420-420/900*a,70,1000)
}
function stat3(a){
    document.getElementById("e3").innerHTML = a + " Uneatable Grass there";
    fill("#FFFFFF")
    rect(630,0,70,1000)
    fill("brown")
    rect(630,420-420/900*a,70,1000)
}
function stat4(a){
    document.getElementById("e4").innerHTML = a + " Wall there";
    fill("#FFFFFF")
    rect(700,0,70,1000)
    fill("black")
    rect(700,420-420/900*a,70,1000)
}
function stat5(a){
    document.getElementById("e5").innerHTML = a + " Wall Breacker there";
    fill("#FFFFFF")
    rect(770,0,70,1000)
    fill("gray")
    rect(770,420-420/900*a,70,1000)
}
function statvis(){
    
}
 let count = 0

window.addEventListener("click", a)
window.addEventListener("keydown", p)

function p(evt){
    // console.log(evt)
    // if(evt.code =="ArrowDown" ){

    // }
    count++
    let clear1 = 12
    socket.emit("clear", clear1)
    console.log(count)
    
}

function a() {
    let e = Math.floor(Math.random() * 27)
    
    socket.emit("a", e);
    
}
var weather;
var Textik;
function weatherik(exanak) {

    if (exanak == 0) {
        weather = 0

    }
    else if (exanak == 1) {
        weather = 1

    }
    else if (exanak == 2) {
        weather = 2
        
    }
    else if (exanak == 3) {
        weather = 3
        
    }
    if (weather == 0) {
        var Textik = "Summer"
    }
    else if (weather == 1) {
        var Textik = "Autumn"
    }
    else if (weather == 2) {
        var Textik = "Winter"
    }
    else if (weather == 3) {
        var Textik = "Spring"
    }
    document.getElementById("pElement").innerHTML = Textik;
}




function setup() {
    frameRate(1)
    console.log("Mnya")
    createCanvas(14 * 60 , 14 * 30);
    background("#FFFFFE");
    
}


function drawing(matrix) {
    
    var gras = 0 
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {

gras++


                if (weather == 2) { fill("#E0FFFF") }
                else if(weather == 3) {
                    fill("#ADFF2F");
                }
                else if(weather == 0 ){
                    fill("green")
                }
                else if(weather == 1){
                    fill("gold")
                }
            }
            else if (matrix[y][x] == 0) {
                
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("white");
            }
            else if (matrix[y][x] == 6) {
                
                    if (weather == 0) { fill("brown") }
                    else if(weather == 1) {
                        fill("#FFFFE0");
                    }
                    else if(weather == 2 ){
                        fill("#66CDAA")
                    }
                    else if(weather == 3){
                        fill("#006400")
                    }
                
            }


            rect(x * 14, y * 14, 14, 14);


        }
    }
    
    
    grasiqanak = gras
    
    
}
