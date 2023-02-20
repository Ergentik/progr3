function keydown(evt) {
    console.log(evt)

    console.log("You printed " + evt.key);
    
    }
    
    window.onkeydown = keydown;