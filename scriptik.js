




var fs = require('fs');

const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);

function main(){

    var file = "obj.txt";
    
    fs.appendFileSync(file, myJSON);
    
    }
    
    main();

    






