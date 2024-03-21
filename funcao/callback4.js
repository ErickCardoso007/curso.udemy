let despertador = setInterval(function() {
    console.log("Acorda!!!");
}, 1000);


let pararInterval = setInterval(function(){
    clearInterval(despertador);
}, 6000)