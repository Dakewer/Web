function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), ms);
    });
}
async function printHola(){
    for(let i = 1; i < 6; i++){
        let response = await delay(1000);
        console.log("Hola" + i);
    }
    return Promise.resolve();
}
async function printMundo(){
    for(let i= 1; i < 6; i++){
        let response = await delay(2000);
        console.log("Mundo" + i);
    }
    return Promise.resolve();
}

Promise.all(
    [
    printHola(),
    printMundo()
    ]).then(()=> console.log("fin"));

(async function tareaFin(){
    await Promise.all([printHola(), printMundo()] );
    console.log("FIN");
})();

/*

// Promises
function printHola(value){
    return new Promise(function (resolve,reject){
        setTimeout(() => {
            console.log("Hola " + value);
            resolve(value + 1);
        }, 1000)
    });
}

let pH = printHola(1)
    .then(result => printHola(result))
    .then(result => printHola(result))
    .then(result => printHola(result))
    .then(result => printHola(result))
    .then(() => Promise.resolve());

function printMundo(value){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            console.log("Mundo " + value);
            resolve(value + 1);
        }, 2000)
    });
}

let pM = printMundo(1)
    .then(result => printMundo(result))
    .then(result => printMundo(result))
    .then(result => printMundo(result))
    .then(result => printMundo(result))
    .then(() => Promise.resolve());

pH.then(() => pM)
    .then(() => console.log("FIN"));


// Pyramid DOOM
let flagHola = false;
let flagMundo = false;

function callBackHellHola(){
    setTimeout(function primerHola(){
        console.log("Hola1");
        setTimeout(function segundoHola(){
            console.log("Hola2");
            setTimeout(function tercerHola(){
                console.log("Hola3");
                setTimeout(function cuartoHola(){
                    console.log("Hola4");
                    setTimeout(function quintoHola(){
                        console.log("Hola5");
                        flagHola = true;
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

function callBackHellMundo(){
    setTimeout(function primerMundo(){
        console.log("Mundo1");
        setTimeout(function segundoMundo(){
            console.log("Mundo2");
            setTimeout(function tercerMundo(){
                console.log("Mundo3");
                setTimeout(function cuartoMundo(){
                    console.log("Mundo4");
                    setTimeout(function quintoMundo(){
                        console.log("Mundo5");
                        flagMundo = true;
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}

function ifEnd(){
    if(flagHola && flagMundo){
        console.log("FIN");
    } else{
        setTimeout(ifEnd, 100);
    }
}

callBackHellHola();
callBackHellMundo();
setTimeout(ifEnd, 5000);

*/