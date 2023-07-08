//Toasters make promises

//Nice, golden brown toast,
//Blackened charred, worthless toast

//Asynchronous operations

//Creating a Promise using the Promise constructor
//OOP - instance of a class
const toastPromise = new Promise((res, rej) => {
    //This is what the promise is attempting
    //This is the part where it tries to toast the bread
    const rand = Math.random();
    if (rand > .5){
        //This is what it does if the toast was successful
        res("Yay, golden-brown toast!");
    } else {
        //This is what it does if it was unsuccessful
        rej("Ugh, burnt toast");
    }
});

//Consuming the promise
//Telling the promise what to do on either result (pass/fail)
//If the toast was good, what should I do?
//If the toast was burnt, what should I do?
toastPromise.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});
