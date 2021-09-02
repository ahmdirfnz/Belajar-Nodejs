let x = "irfanz"
let y = "irfanz"

// var promise = new Promise(function(resolve, reject) {

//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });

var promise = new Promise((resolve, reject) => {
    if (x === y) {
        resolve();
    } else {
        reject();
    }
})

promise
.then(function() {                                  // use  normal function
    console.log('Succeed, You Are Power');
}).
catch((errorMsg) => {                               // use arrow function
    console.log('Sorry, you got some error here');
});