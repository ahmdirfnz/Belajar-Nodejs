const myFirstPromise = new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
       setTimeout(function() {
           resolve("Promise is resolved");
       }, 300); 
    } else {
        reject("Prmoise is rejected!");
    }
})

const helloPromise = function() {
    return new Promise(function(resolve, reject) {
        const message = `Hello, how are you`;

        resolve(message)
    });
}

const demoPromise = function() {
myFirstPromise
.then(helloPromise)
.then((successMsg) => {
    console.log("Success: " + successMsg);
})
.catch((errorMsg) => {
    console.log("Error: " + errorMsg);
})
}

// async function demoPromise() {
//     try {
//         let message = await myFirstPromise;
//         let message = await helloPromise();
//         console.log(message);
//     } catch((error) => {
//         console.log("Error: " + error.message);
//     })
// }

// (async () => {
//     await demoPromise();
// })

demoPromise();