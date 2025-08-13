//Callback is a function that you pass in another function as an argument
setTimeout(()=>{
    console.log("Hi!"); // this is a callback
},1000)

//Promise is a JavaScript object that represents a value that you will get in the future
//(or an error if something goes wrong).
//.then()       - method that is called if promise is resolved. Returns also a promise, so it allows you to build promise chains
//.catch()      - method that is called if promise catched an error. You can place it at the end to catch everything
//.finally()    - runs no matter what

fetch('https://example.com/userData.json')
    .then(res => {
        console.log('Step 1: Got response');
        return res.json();
    })
    .then(data => {
        console.log('Step 2: Got data', data);
        return data.userId;
    })
    .then(userId => {
        console.log('Step 3: Got userId', userId);
    })
    .catch(err => {
        console.error('Error happened somewhere above:', err);
    })
    .finally(() => {
        console.log('All done!');
    });
//async / await
//Syntactic sugar for promises:
//async → makes function return a Promise
//await → pauses execution until Promise resolves
async function getData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getData();