
var exanak = Math.floor(Math.random()*4)
function pogoda(){
    
    if (exanak <= 2)
{
    exanak++
    module.exports = exanak
}  
else{
    exanak = 0
    module.exports = exanak
}
  
    
} 
setInterval(pogoda,3000)
// var exanak = Math.floor(Math.random()*4)
//     module.exports = exanak


